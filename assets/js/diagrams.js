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
    flowchart: { htmlLabels: true, useMaxWidth: true, padding: 14, nodeSpacing: 34, rankSpacing: 46 },
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
