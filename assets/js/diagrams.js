/* Mermaid diagrams, themed from the site's brand tokens.
 *
 * Documents stay plain Markdown: a diagram is written as a ```mermaid fence,
 * which github.com renders natively. GitHub Pages' Jekyll does not, so this
 * module finds the fenced blocks Rouge produced, swaps each for a <figure>
 * Mermaid can draw into, and themes the result from the --ra-* tokens in
 * assets/css/style.css so diagrams follow the site's light and dark planes.
 *
 * Pinned rather than floating: a silent major bump upstream would change how
 * every diagram in the knowledge base looks. Vendoring this file's import into
 * assets/ is a one-line change if the third-party request is unwanted.
 */
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11.16.1/dist/mermaid.esm.min.mjs';

const FENCE = 'div.language-mermaid pre code, pre > code.language-mermaid';

/* Custom properties read back as their unsubstituted value ("var(--ra-ink)"),
   so resolve them through a probe element and let the browser do the work. */
const probe = document.createElement('span');
probe.setAttribute('aria-hidden', 'true');
probe.style.cssText = 'position:absolute;left:-9999px;top:0';
document.body.appendChild(probe);

function color(token) {
  probe.style.color = '';
  probe.style.color = `var(${token})`;
  return getComputedStyle(probe).color;
}

function font() {
  probe.style.fontFamily = 'var(--ra-font-sans)';
  return getComputedStyle(probe).fontFamily;
}

function theme() {
  return {
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    background: color('--bg'),
    primaryColor: color('--bg-soft'),
    primaryTextColor: color('--text'),
    primaryBorderColor: color('--rule'),
    secondaryColor: color('--bg-sink'),
    tertiaryColor: color('--bg-soft'),
    lineColor: color('--text-faint'),
    textColor: color('--text'),
    nodeTextColor: color('--text'),
    edgeLabelBackground: color('--bg'),
    fontFamily: font(),
    fontSize: '14px',

    /* Gantt (docs/04's worked timeline). Bars carry the same funding-source
       encoding as the flowchart's classDefs: default/untagged bars are "both
       wallets" (--ra-series-3, gold); ":active"-tagged bars are the
       customer-funded MVP phase (--ra-series-2, blue). Milestones — the five
       gates — use critBkgColor (--ra-series-1, red) so a decision point never
       reads as funded work. */
    sectionBkgColor: color('--bg-soft'),
    sectionBkgColor2: color('--bg'),
    altSectionBkgColor: color('--bg'),
    gridColor: color('--rule-soft'),
    todayLineColor: 'transparent',
    taskBkgColor: color('--ra-series-3'),
    taskBorderColor: color('--ra-series-3'),
    taskTextColor: color('--bg'),
    taskTextOutsideColor: color('--text'),
    taskTextLightColor: color('--bg'),
    activeTaskBkgColor: color('--ra-series-2'),
    activeTaskBorderColor: color('--ra-series-2'),
    doneTaskBkgColor: color('--bg-sink'),
    doneTaskBorderColor: color('--rule'),
    critBkgColor: color('--ra-series-1'),
    critBorderColor: color('--ra-series-1'),
  };
}

/* Each fence becomes <figure class="diagram"><pre class="mermaid">…, with the
   definition kept in a data attribute so a theme change can redraw it. */
function adopt() {
  const targets = [];
  document.querySelectorAll(FENCE).forEach((code) => {
    const host = code.closest('div.language-mermaid') || code.closest('pre');
    if (!host) return;
    const figure = document.createElement('figure');
    figure.className = 'diagram';
    const pre = document.createElement('pre');
    pre.className = 'mermaid';
    pre.textContent = code.textContent;
    pre.dataset.definition = code.textContent;
    figure.appendChild(pre);
    host.replaceWith(figure);
    targets.push(pre);
  });
  return targets;
}

async function draw(nodes) {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: theme(),
    /* wrappingWidth defaults to 200px, which re-wraps every label and ignores
       the <br/> breaks the diagram author chose. Widen it so the source
       controls the line breaks. */
    flowchart: { htmlLabels: true, useMaxWidth: true, wrappingWidth: 520, padding: 16, nodeSpacing: 30, rankSpacing: 44 },
    /* The gantt's dates are a fictional anchor (see docs/04): every task is
       written as "after <priorTaskId>", so only the diagram's first date is
       real, and axisFormat here shows a week count rather than a calendar
       date. Mermaid's gantt renderer fits its own day-to-pixel scale to the
       CURRENT container width regardless of useMaxWidth — harmless at
       --measure's 672px, but on a phone-width container it squeezes every
       bar and label into a couple hundred pixels at the same font-size,
       producing an unreadable pile-up rather than a scroll. useWidth pins
       the render to --measure's own pixel width so it fits the reading
       column exactly on desktop and genuinely overflows into .diagram's
       overflow-x on anything narrower, instead of shrinking. If --measure
       ever changes, this constant should move with it. */
    gantt: {
      useWidth: 672,
      useMaxWidth: false,
      barHeight: 26,
      barGap: 6,
      topPadding: 40,
      rightPadding: 30,
      fontSize: 13,
      sectionFontSize: 13,
      numberSectionStyles: 2,
    },
  });
  await mermaid.run({ nodes });
}

const nodes = adopt();
if (nodes.length) {
  await draw(nodes);

  /* Redraw on a system theme change: the rendered SVG bakes in its colors. */
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', async () => {
    nodes.forEach((pre) => {
      pre.textContent = pre.dataset.definition;
      pre.removeAttribute('data-processed');
    });
    await draw(nodes);
  });
}
