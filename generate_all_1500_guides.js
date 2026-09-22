import fs from 'fs';
import path from 'path';
import { getHeader, getFooter, getScripts, getStyles, writeFile } from './build_helpers.js';
import { creditCardGuides, loanGuides, bankGuides, govtGuides } from './comprehensive_guides_data.js';

// Helper to wrap guide content in a full standalone page
export function buildStandaloneGuidePage({
  category,
  title,
  subtitle,
  authority,
  authorityUrl,
  wordCount,
  readTime,
  contentHTML,
  rootRel = '../..'
}) {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} - 1500+ शब्द विस्तृत समीक्षा व संपूर्ण गाइड | Fengoo</title>
  <meta name="description" content="${title} के बारे में 1500 से 2000 शब्दों की आधिकारिक मार्गदर्शिका: नियम, शुल्क, रिवॉर्ड्स, बिलिंग चक्र, ब्याज दरें, योग्यता व ऑनलाइन आवेदन प्रक्रिया।" />
  ${getStyles(rootRel)}
  <style>
    .guide-article-wrap {
      max-width: 920px;
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
      max-width: 920px;
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
  ${getHeader(rootRel)}

  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="${rootRel}/index.html">Home</a></li>
      <li><span>${category}</span></li>
      <li><span>${title}</span></li>
    </ul>
  </div>

  <section class="guide-hero">
    <div class="container guide-hero-inner">
      <div class="guide-top-badges">
        <span class="badge-guide-tag">🏛️ ${category}</span>
        <span class="badge-guide-words">📖 ${wordCount} शब्द • ${readTime}</span>
        <span style="font-size:0.8rem; color:var(--text-muted); display:inline-flex; align-items:center;">
          ✓ विनियामक नियमों द्वारा सत्यापित
        </span>
      </div>
      <h1>${title}</h1>
      <p>${subtitle || 'संपूर्ण, निष्पक्ष व आधिकारिक 1500+ शब्दों का विस्तृत विश्लेषण'}</p>
      
      <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <a href="${authorityUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          🏛️ अधिकृत पोर्टल पर जाएं (Apply on Official Portal) ↗
        </a>
        <button onclick="window.print()" class="btn btn-outline">🖨️ प्रिंट / पीडीएफ सेव करें</button>
      </div>
    </div>
  </section>

  <main class="container">
    <article class="guide-article-wrap">
      ${contentHTML}

      <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <a href="${authorityUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          आधिकारिक पोर्टल पर सीधे आवेदन करें ↗
        </a>
        <a href="javascript:history.back()" class="btn btn-secondary">
          ← वापस सूची पर जाएं
        </a>
      </div>
    </article>
  </main>

  ${getFooter(rootRel)}
  ${getScripts(rootRel)}
</body>
</html>`;
}

// Ensure folders exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Generate all standalone pages
export function generateAllGuides() {
  console.log('Generating standalone 1500+ word guide pages...');

  // 1. Credit Cards
  ensureDir('credit-cards/hdfc');
  ensureDir('credit-cards/sbi');
  ensureDir('credit-cards/icici');
  ensureDir('credit-cards/axis');

  for (const [key, item] of Object.entries(creditCardGuides)) {
    const pageHTML = buildStandaloneGuidePage({
      category: 'Credit Cards',
      title: item.title,
      subtitle: `${item.bank} • ${item.tag}`,
      authority: item.bank,
      authorityUrl: item.applyUrl,
      wordCount: item.wordCount,
      readTime: item.readTime,
      contentHTML: item.contentHTML,
      rootRel: '../..'
    });
    writeFile(`credit-cards/${item.pageUrl}`, pageHTML);
    console.log(`Generated credit-cards/${item.pageUrl} (${item.wordCount} words)`);
  }

  // 2. Loans
  ensureDir('loans/home-loan');
  ensureDir('loans/personal-loan');
  ensureDir('loans/business-loan');

  for (const [key, item] of Object.entries(loanGuides)) {
    const pageHTML = buildStandaloneGuidePage({
      category: 'Loans & Mortgages',
      title: item.title,
      subtitle: `${item.bank} • ${item.category}`,
      authority: item.bank,
      authorityUrl: item.applyUrl,
      wordCount: item.wordCount,
      readTime: item.readTime,
      contentHTML: item.contentHTML,
      rootRel: '../..'
    });
    writeFile(`loans/${item.pageUrl}`, pageHTML);
    console.log(`Generated loans/${item.pageUrl} (${item.wordCount} words)`);
  }

  // 3. Government
  ensureDir('government/schemes');

  for (const [key, item] of Object.entries(govtGuides)) {
    const pageHTML = buildStandaloneGuidePage({
      category: 'Government Schemes',
      title: item.title,
      subtitle: item.category,
      authority: 'Government of India',
      authorityUrl: item.applyUrl,
      wordCount: item.wordCount,
      readTime: item.readTime,
      contentHTML: item.contentHTML,
      rootRel: '../..'
    });
    writeFile(`government/${item.pageUrl}`, pageHTML);
    console.log(`Generated government/${item.pageUrl} (${item.wordCount} words)`);
  }

  console.log('All standalone 1500+ word guides generated successfully!');
}

generateAllGuides();
