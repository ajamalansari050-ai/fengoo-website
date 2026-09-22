import fs from 'fs';
import path from 'path';
import { getAllLoansList } from './data_loader.js';
import { getHeader, getFooter, getScripts, getStyles, writeFile } from './build_helpers.js';

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function generateAllLoanPages() {
  const loans = getAllLoansList();
  console.log(`Generating ${loans.length} loan standalone 1500+ word guide pages...`);

  for (const loan of loans) {
    const fullFilePath = `loans/${loan.pageUrl}`;
    const dir = path.dirname(fullFilePath);
    ensureDir(dir);

    const html = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${loan.title} - 1500+ शब्द विस्तृत समीक्षा व संपूर्ण गाइड | Fengoo</title>
  <meta name="description" content="${loan.title} के बारे में 1500 से 2000 शब्दों की आधिकारिक मार्गदर्शिका: ब्याज दरें, ईएमआई गणित, पात्रता, आवश्यक दस्तावेज़, आवेदन प्रक्रिया व आरबीआई नियम।" />
  <link rel="canonical" href="https://fengoo.in/${fullFilePath}" />
  ${getStyles('../..')}
  <style>
    .guide-article-wrap {
      max-width: 900px;
      margin: 2rem auto 4rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 2.5rem 3rem;
      box-shadow: var(--shadow-sm);
    }
    @media (max-width: 768px) {
      .guide-article-wrap {
        padding: 1.5rem 1.25rem;
        margin: 1rem auto 2rem;
      }
    }
    .guide-hero {
      background: radial-gradient(circle at 50% 0%, var(--surface-2) 0%, var(--surface) 100%);
      border-bottom: 1px solid var(--border);
      padding: 3rem 0 2rem;
    }
    .guide-hero-inner {
      max-width: 900px;
      margin: 0 auto;
    }
    .guide-top-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    .badge-guide-tag {
      background: rgba(2, 132, 199, 0.1);
      border: 1px solid var(--primary);
      color: var(--primary);
      font-size: 0.8rem;
      font-weight: 700;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
    }
    .badge-guide-words {
      background: #059669;
      color: #ffffff;
      font-size: 0.8rem;
      font-weight: 700;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
    }
    .guide-hero h1 {
      font-size: 2.25rem;
      font-weight: 800;
      color: var(--text);
      line-height: 1.25;
      margin-bottom: 0.75rem;
    }
    .guide-hero p {
      font-size: 1.1rem;
      color: var(--text-muted);
      line-height: 1.5;
    }
  </style>
</head>
<body>
  ${getHeader('../..')}

  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="../../index.html">Home</a></li>
      <li><a href="../../loans/index.html">Loans</a></li>
      <li><span>${loan.name}</span></li>
    </ul>
  </div>

  <section class="guide-hero">
    <div class="container guide-hero-inner">
      <div class="guide-top-badges">
        <span class="badge-guide-tag">🏛️ ऋण उत्पाद</span>
        <span class="badge-guide-words">📖 ${loan.wordCount} शब्द • ${loan.readTime}</span>
        <span style="font-size:0.8rem; color:var(--text-muted); display:inline-flex; align-items:center;">
          ✓ RBI विनियामक मानकों व बैंकिंग कोड्स द्वारा सत्यापित
        </span>
      </div>
      <h1>${loan.title}</h1>
      <p>ब्याज दर: <strong>${loan.rates}</strong> • अधिकतम अवधि: <strong>${loan.tenure}</strong> • प्रोसेसिंग शुल्क: <strong>${loan.processingFee}</strong></p>
      
      <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <a href="${loan.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          🏛️ अधिकृत पोर्टल पर आवेदन करें ↗
        </a>
        <a href="../../calculators/index.html" class="btn btn-secondary">
          🧮 EMI कैलकुलेटर खोलें
        </a>
        <button onclick="window.print()" class="btn btn-outline">🖨️ प्रिंट / पीडीएफ सेव करें</button>
      </div>
    </div>
  </section>

  <main class="container">
    <article class="guide-article-wrap">
      ${loan.contentHTML}

      <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <a href="${loan.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          आधिकारिक पोर्टल पर सीधे आवेदन करें ↗
        </a>
        <a href="../index.html" class="btn btn-secondary">
          ← वापस सभी ऋण श्रेणियां देखें
        </a>
      </div>
    </article>
  </main>

  ${getFooter('../..')}
  ${getScripts('../..')}
</body>
</html>`;

    writeFile(fullFilePath, html);
    console.log(`Saved: ${fullFilePath} (${loan.wordCount} words)`);
  }

  console.log('All loan guide pages successfully generated!');
}
