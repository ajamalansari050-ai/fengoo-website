import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';
import { getAllLoansList, getAllLoans } from './data_loader.js';

export function buildLoansHubHTML() {
  const loanTypes = getAllLoansList();
  const loanGuides = getAllLoans();

  const loansCardsHTML = loanTypes.map(l => `
    <article class="loan-card-item" data-category="${l.category}" data-search="${l.name.toLowerCase()} ${l.topLenders.toLowerCase()} ${l.desc.toLowerCase()}">
      <div class="loan-card-top">
        <div>
          <span class="loan-cat-pill">${l.category.toUpperCase()}</span>
          <h3 class="loan-title">${l.name}</h3>
          <p class="loan-brief">${l.desc}</p>
        </div>
        <div class="loan-rate-box">
          <span class="rate-lbl">ब्याज दर (Interest Rate):</span>
          <strong class="rate-val">${l.rates}</strong>
        </div>
      </div>

      <div class="loan-stats-grid">
        <div class="loan-stat-col">
          <span class="lstat-lbl">अधिकतम लोन राशि:</span>
          <strong class="lstat-val">${l.maxAmount}</strong>
        </div>
        <div class="loan-stat-col">
          <span class="lstat-lbl">पुनर्भुगतान अवधि:</span>
          <strong class="lstat-val">${l.tenure}</strong>
        </div>
        <div class="loan-stat-col">
          <span class="lstat-lbl">प्रोसेसिंग शुल्क:</span>
          <strong class="lstat-val">${l.processingFee}</strong>
        </div>
        <div class="loan-stat-col">
          <span class="lstat-lbl">शीर्ष ऋणदाता बैंक:</span>
          <strong class="lstat-val" style="color:var(--primary);">${l.topLenders}</strong>
        </div>
      </div>

      <div class="loan-details-section">
        <div class="loan-spec-row">
          <strong>पात्रता (Eligibility):</strong> <span>${l.eligibility}</span>
        </div>
        <div class="loan-spec-row">
          <strong>आवश्यक दस्तावेज:</strong> <span>${l.documents}</span>
        </div>
      </div>

      <div class="loan-card-actions">
        <a href="${l.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-loan-apply">
          🏛️ ऑनलाइन आवेदन करें (Apply Online) ↗
        </a>
        <a href="${l.calcLink}" class="btn-loan-calc">
          🧮 ईएमआई कैलकुलेट करें (Calculate EMI) →
        </a>
      </div>

      <div class="loan-read-row" style="margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px dashed var(--border); display: flex; gap: 0.75rem; align-items: center; justify-content: space-between; flex-wrap: wrap;">
        <button type="button" class="btn-read-guide" onclick="openLoanGuide('${l.id}')" aria-label="1500+ शब्द गाइड पढ़ें: ${l.name}">
          📖 ${l.name} के बारे में विस्तार से पढ़ें (1,500+ शब्द संपूर्ण विश्लेषण व गाइड) →
        </button>
        <span class="guide-word-badge">📖 1,500 - 2,000 शब्द गाइड</span>
      </div>
    </article>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ऋण व लोन डायरेक्टरी (All Loans in India) - Home, Personal, Education & Mudra | Fengoo</title>
  <meta name="description" content="भारत के सभी प्रमुख ऋणों की विस्तृत डायरेक्टरी। होम लोन, पर्सनल लोन, विद्या लक्ष्मी एजुकेशन लोन, कार लोन, गोल्ड लोन, मुद्रा लोन व किसान क्रेडिट कार्ड की ब्याज दरें व ऑनलाइन अप्लाई लिंक।" />
  <link rel="canonical" href="https://fengoo.in/loans/index.html" />
  ${getStyles('..')}
  <style>
    .loans-hero {
      background: radial-gradient(circle at 50% 0%, var(--surface-2) 0%, var(--surface) 100%);
      border-bottom: 1px solid var(--border);
      padding: 3rem 0 2rem;
      text-align: center;
    }
    .loans-hero h1 {
      font-size: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
      color: var(--text);
    }
    .loans-hero p {
      font-size: 1.05rem;
      color: var(--text-muted);
      max-width: 760px;
      margin: 0 auto 1.5rem;
      line-height: 1.5;
    }
    .loan-filters-wrap {
      max-width: 800px;
      margin: 0 auto;
    }
    .loan-type-tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1.25rem;
    }
    .loan-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.825rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .loan-btn:hover, .loan-btn.active {
      background: #0d9488;
      color: #fff;
      border-color: #0d9488;
    }
    .loans-list-container {
      padding: 2.5rem 0 4rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .loan-card-item {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow-sm);
      padding: 1.5rem;
      transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
    }
    .loan-card-item:hover {
      border-color: #0d9488;
      box-shadow: var(--shadow-md);
    }
    .loan-card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid var(--border);
      padding-bottom: 1rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .loan-cat-pill {
      font-size: 0.725rem;
      font-weight: 700;
      background: #ccfbf1;
      color: #0f766e;
      padding: 0.15rem 0.5rem;
      border-radius: 4px;
    }
    .loan-title {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--text);
      margin: 0.3rem 0 0.25rem;
    }
    .loan-brief {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin: 0;
      line-height: 1.45;
    }
    .loan-rate-box {
      background: #f0fdfa;
      border: 1px solid #99f6e4;
      border-radius: 8px;
      padding: 0.6rem 1rem;
      text-align: right;
    }
    .rate-lbl {
      font-size: 0.725rem;
      color: #0f766e;
      text-transform: uppercase;
      font-weight: 700;
      display: block;
    }
    .rate-val {
      font-size: 1.2rem;
      font-weight: 900;
      color: #115e59;
    }
    .loan-stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0.75rem;
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 1rem;
      margin-bottom: 1rem;
    }
    .loan-stat-col {
      display: flex;
      flex-direction: column;
    }
    .lstat-lbl {
      font-size: 0.75rem;
      color: var(--text-muted);
      text-transform: uppercase;
      font-weight: 600;
    }
    .lstat-val {
      font-size: 0.925rem;
      color: var(--text);
      font-weight: 700;
    }
    .loan-details-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: var(--text);
      line-height: 1.45;
      margin-bottom: 1.25rem;
    }
    .loan-card-actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      border-top: 1px solid var(--border);
      padding-top: 1rem;
    }
    .btn-loan-apply {
      flex: 1;
      min-width: 220px;
      background: #0d9488;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 700;
      padding: 0.6rem 1rem;
      border-radius: 6px;
      text-align: center;
      text-decoration: none;
      transition: background 0.15s ease;
    }
    .btn-loan-apply:hover {
      background: #0f766e;
      color: #fff;
    }
    .btn-loan-calc {
      flex: 1;
      min-width: 200px;
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text);
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0.6rem 1rem;
      border-radius: 6px;
      text-align: center;
      text-decoration: none;
      transition: all 0.15s ease;
    }
    .btn-loan-calc:hover {
      border-color: #0d9488;
      color: #0d9488;
      background: var(--surface-subtle);
    }
  </style>
</head>
<body>
  ${getHeader('..')}

  <!-- Breadcrumb -->
  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="../index.html">होम (Home)</a></li>
      <li><span>ऋण व लोन डायरेक्टरी</span></li>
    </ul>
  </div>

  <!-- Hero Header -->
  <section class="loans-hero">
    <div class="container">
      <span class="badge-official">💰 भारत में ऋण व लोन की संपूर्ण मार्गदर्शिका</span>
      <h1>ऋण व लोन डायरेक्टरी (All Loans in India)</h1>
      <p>
        होम लोन, पर्सनल लोन, विद्या लक्ष्मी एजुकेशन लोन, कार लोन, गोल्ड लोन, पीएम मुद्रा व किसान क्रेडिट कार्ड। ब्याज दरें, लोन अवधि, पात्रता व मूल बैंक पोर्टल पर सीधा ऑनलाइन आवेदन लिंक।
      </p>

      <!-- Search & Filters -->
      <div class="loan-filters-wrap">
        <div class="search-input-box" style="margin: 0 auto;">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input 
            type="text" 
            id="loan-search-input" 
            placeholder="लोन का प्रकार या बैंक खोजें (उदा. Home Loan, Mudra, Gold Loan, Vidya Lakshmi)..." 
            aria-label="Search Loans"
            autocomplete="off"
          />
        </div>

        <div class="loan-type-tabs">
          <button class="loan-btn active" data-cat="all">सभी प्रकार के लोन (All Loans)</button>
          <button class="loan-btn" data-cat="housing">होम लोन (Home)</button>
          <button class="loan-btn" data-cat="unsecured">पर्सनल लोन (Personal)</button>
          <button class="loan-btn" data-cat="education">शिक्षा लोन (Education)</button>
          <button class="loan-btn" data-cat="vehicle">कार व वाहन (Vehicle)</button>
          <button class="loan-btn" data-cat="secured">गोल्ड व संपत्ति (Secured)</button>
          <button class="loan-btn" data-cat="business">मुद्रा व व्यापार (MSME)</button>
          <button class="loan-btn" data-cat="agri">किसान व कृषि (Agri KCC)</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Loans Listing -->
  <main class="container">
    <div class="loans-list-container" id="loans-list">
      ${loansCardsHTML}
    </div>
  </main>

  <!-- 1500-2000 Words Comprehensive Guide Reader Modal -->
  <div class="guide-reader-overlay" id="guide-reader-overlay" aria-hidden="true" role="dialog">
    <div class="guide-reader-modal" id="guide-reader-modal">
      <div class="guide-reader-header">
        <div class="guide-reader-title-area">
          <h2 class="guide-reader-title" id="reader-title">ऋण का नाम</h2>
          <span class="guide-reader-subtitle" id="reader-subtitle">संस्था व सत्यापन</span>
        </div>
        <div class="guide-reader-actions">
          <a href="#" target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="reader-apply-btn" style="padding: 0.45rem 0.9rem; font-size: 0.85rem;">
            🏛️ आधिकारिक पोर्टल पर जाएं ↗
          </a>
          <button type="button" class="guide-reader-close-btn" id="reader-close-btn" title="बंद करें (Close)">&times;</button>
        </div>
      </div>
      <div class="guide-reader-body" id="reader-body">
        <!-- 1500-2000 words injected dynamically -->
      </div>
      <div class="guide-reader-footer">
        <span style="font-size:0.85rem; color:var(--text-muted);">
          🏛️ Fengoo.in Statutory & Regulatory Knowledge Engine • 100% निष्पक्ष उपभोक्ता वित्तीय गाइड
        </span>
        <button type="button" class="btn btn-secondary" onclick="closeLoanGuide()" style="padding: 0.45rem 0.85rem; font-size: 0.85rem;">
          बंद करें (Close)
        </button>
      </div>
    </div>
  </div>

  <script>
    const loanGuidesData = \${JSON.stringify(loanGuides)};

    window.openLoanGuide = function(id) {
      let guide = loanGuidesData[id];
      if (!guide && id === 'kisan-credit-card') guide = loanGuidesData['kcc-loan'];
      if (!guide) {
        alert('गाइड लोड हो रही है...');
        return;
      }
      document.getElementById('reader-title').textContent = guide.title;
      document.getElementById('reader-subtitle').innerHTML = '<span>🏛️ ' + guide.name + '</span> • <span class="guide-word-badge">📖 ' + guide.wordCount + ' शब्द (' + guide.readTime + ')</span>';
      document.getElementById('reader-apply-btn').href = guide.applyUrl;
      document.getElementById('reader-body').innerHTML = guide.contentHTML;
      const overlay = document.getElementById('guide-reader-overlay');
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    window.closeLoanGuide = function() {
      const overlay = document.getElementById('guide-reader-overlay');
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    document.getElementById('reader-close-btn').addEventListener('click', closeLoanGuide);
    document.getElementById('guide-reader-overlay').addEventListener('click', (e) => {
      if (e.target.id === 'guide-reader-overlay') {
        closeLoanGuide();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLoanGuide();
    });

    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('loan-search-input');
      const filterBtns = document.querySelectorAll('.loan-btn');
      const loanItems = document.querySelectorAll('.loan-card-item');

      let currentCat = 'all';
      let currentQuery = '';

      function filterLoans() {
        loanItems.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          const searchData = item.getAttribute('data-search') || '';

          const catMatch = (currentCat === 'all' || itemCat === currentCat);
          const queryMatch = (!currentQuery || searchData.includes(currentQuery));

          if (catMatch && queryMatch) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentQuery = e.target.value.trim().toLowerCase();
          filterLoans();
        });
      }

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentCat = btn.getAttribute('data-cat');
          filterLoans();
        });
      });
    });
  </script>

  ${getFooter('..')}
  ${getScripts('..')}
</body>
</html>`;
}

// Generate the loans/index.html file
const html = buildLoansHubHTML();
writeFile('loans/index.html', html);
console.log('Successfully generated loans/index.html');
