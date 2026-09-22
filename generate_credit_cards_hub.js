import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';
import { getAllCreditCardsList, getAllCreditCards } from './data_loader.js';

export function buildCreditCardsHubHTML() {
  const cards = getAllCreditCardsList();
  const creditCardGuides = getAllCreditCards();

  const cardsHTML = cards.map(c => `
    <article class="cc-card-item" id="card-${c.id}" data-id="${c.id}" data-type="${c.type}" data-search="${c.name.toLowerCase()} ${c.bank.toLowerCase()} ${c.network.toLowerCase()} ${c.tag.toLowerCase()}">
      <div class="cc-card-top">
        <div>
          <span class="cc-tag-badge">${c.tag}</span>
          <h3 class="cc-name">${c.name}</h3>
          <span class="cc-bank">जारीकर्ता: <strong>${c.bank}</strong> • नेटवर्क: <em>${c.network}</em></span>
        </div>
        <div class="cc-badges-row">
          <span class="badge-tag">आरबीआई रजिस्टर्ड</span>
          ${c.type.includes('ltf') ? '<span class="badge-tag" style="background:#ecfdf5; color:#047857; border-color:#a7f3d0;">लाइफटाइम फ्री</span>' : ''}
          ${c.type.includes('rupay') ? '<span class="badge-tag" style="background:#eff6ff; color:#1d4ed8; border-color:#bfdbfe;">RuPay UPI</span>' : ''}
          ${c.type.includes('fd-backed') ? '<span class="badge-tag" style="background:#fef3c7; color:#92400e; border-color:#fde68a;">नो CIBIL / FD सिक्योर्ड</span>' : ''}
        </div>
      </div>

      <div class="cc-specs-grid">
        <div class="cc-spec-box">
          <span class="cc-spec-lbl">जॉइनिंग / वार्षिक शुल्क</span>
          <span class="cc-spec-val">${c.fee}</span>
        </div>
        <div class="cc-spec-box">
          <span class="cc-spec-lbl">शुल्क माफी की शर्त</span>
          <span class="cc-spec-val" style="font-size:0.825rem;">${c.waiver}</span>
        </div>
        <div class="cc-spec-box">
          <span class="cc-spec-lbl">प्राथमिक रिवॉर्ड / कैशबैक</span>
          <span class="cc-spec-val" style="font-size:0.825rem; font-weight:500;">${c.rewards}</span>
        </div>
        <div class="cc-spec-box">
          <span class="cc-spec-lbl">एयरपोर्ट लाउंज एक्सेस</span>
          <span class="cc-spec-val" style="font-size:0.825rem;">${c.lounge}</span>
        </div>
      </div>

      <div class="cc-top-perk">
        <span style="font-size:1.1rem;">⚡</span>
        <div>
          <strong>सर्वश्रेष्ठ लाभ (Top Highlight):</strong> ${c.topPerk}
        </div>
      </div>

      <div class="cc-card-bottom">
        <a href="${c.applyUrl}" target="_blank" rel="noopener noreferrer sponsored nofollow" class="btn-cc-apply">
          🏛️ क्रेडिट कार्ड ऑनलाइन अप्लाई करें (Apply on Bank Portal) ↗
        </a>
      </div>

      <div class="cc-read-row">
        <button type="button" class="btn-read-guide" onclick="openProductGuide('${c.id}')" aria-label="1500+ शब्द गाइड पढ़ें: ${c.name}">
          📖 ${c.name} के बारे में विस्तार से पढ़ें (1,500+ शब्द संपूर्ण विश्लेषण व गाइड) →
        </button>
        <a href="${c.pageUrl}" class="link-open-page" title="अलग पेज पर पूरा 1500+ शब्द विवरण खोलें">नया पेज ↗</a>
      </div>
    </article>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>क्रेडिट कार्ड डायरेक्टरी व 1500+ शब्द संपूर्ण गाइड (Credit Cards in India 2025) | Fengoo</title>
  <meta name="description" content="भारत के शीर्ष 25+ सर्वश्रेष्ठ क्रेडिट कार्ड्स की तुलना, आधिकारिक बैंक साथी अप्लाई लिंक व प्रत्येक कार्ड की 1500 से 2000 शब्दों की निष्पक्ष व गहन समीक्षा।" />
  <link rel="canonical" href="https://fengoo.in/credit-cards/index.html" />
  ${getStyles('..')}
  <style>
    .cc-hero {
      background: radial-gradient(circle at 50% 0%, var(--surface-2) 0%, var(--surface) 100%);
      border-bottom: 1px solid var(--border);
      padding: 3.5rem 0 2.5rem;
      text-align: center;
    }
    .cc-hero h1 {
      font-size: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
      color: var(--text);
    }
    .cc-hero p {
      font-size: 1.05rem;
      color: var(--text-muted);
      max-width: 760px;
      margin: 0 auto 1.5rem;
      line-height: 1.5;
    }
    .cc-filters-wrap {
      max-width: 860px;
      margin: 0 auto;
    }
    .cc-type-tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1.25rem;
    }
    .cc-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 0.4rem 0.95rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .cc-btn:hover, .cc-btn.active {
      background: #4f46e5;
      color: #fff;
      border-color: #4f46e5;
    }
    .cc-cards-container {
      padding: 2.5rem 0 4rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .cc-card-item {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow-sm);
      padding: 1.5rem;
      transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
    }
    .cc-card-item:hover {
      border-color: #4f46e5;
      box-shadow: var(--shadow-md);
    }
    .cc-card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 1.25rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border);
    }
    .cc-tag-badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      color: #4f46e5;
      background: rgba(79, 70, 229, 0.08);
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      margin-bottom: 0.35rem;
    }
    .cc-name {
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--text);
      margin: 0 0 0.25rem 0;
    }
    .cc-bank {
      font-size: 0.875rem;
      color: var(--text-muted);
    }
    .cc-badges-row {
      display: flex;
      gap: 0.4rem;
      flex-wrap: wrap;
    }
    .badge-tag {
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.2rem 0.55rem;
      border-radius: 4px;
      background: var(--surface-2);
      border: 1px solid var(--border);
      color: var(--text);
    }
    .cc-specs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 1.25rem;
      background: var(--surface-2);
      padding: 1rem;
      border-radius: var(--radius-sm);
    }
    .cc-spec-box {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .cc-spec-lbl {
      display: block;
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    .cc-spec-val {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text);
    }
    .cc-top-perk {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: var(--text);
      background: rgba(16, 185, 129, 0.08);
      border-left: 3px solid #10b981;
      padding: 0.5rem 0.75rem;
      border-radius: 0 4px 4px 0;
      margin-bottom: 1.25rem;
    }
    .btn-cc-apply {
      display: block;
      width: 100%;
      text-align: center;
      background: #4f46e5;
      color: #fff;
      font-weight: 700;
      font-size: 0.95rem;
      padding: 0.85rem 1.25rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: background 0.15s ease, transform 0.15s ease;
    }
    .btn-cc-apply:hover {
      background: #4338ca;
      transform: translateY(-1px);
    }
    .cc-read-row {
      margin-top: 0.85rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .btn-read-guide {
      background: none;
      border: none;
      color: #4f46e5;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      padding: 0;
      text-decoration: underline;
    }
    .btn-read-guide:hover {
      color: #3730a3;
    }
    .link-open-page {
      font-size: 0.8rem;
      color: var(--text-muted);
      text-decoration: none;
    }
    .link-open-page:hover {
      color: var(--text);
      text-decoration: underline;
    }
    .guide-reader-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(4px);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }
    .guide-reader-overlay.active {
      display: flex;
    }
    .guide-reader-modal {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      width: 100%;
      max-width: 900px;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    .guide-reader-header {
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
    .guide-reader-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text);
      margin: 0;
    }
    .guide-reader-close-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      color: var(--text-muted);
      cursor: pointer;
    }
    .guide-reader-body {
      padding: 1.5rem;
      overflow-y: auto;
      line-height: 1.6;
    }
    .guide-reader-footer {
      padding: 1rem 1.5rem;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--surface-2);
    }
  </style>
</head>
<body>
  ${getHeader('..')}

  <section class="cc-hero">
    <div class="container">
      <span class="badge-official" style="margin-bottom:0.75rem; display:inline-block;">🏛️ क्रेडिट कार्ड डायरेक्टरी व 1500+ शब्द संपूर्ण विश्लेषण</span>
      <h1>भारत के सर्वश्रेष्ठ क्रेडिट कार्ड्स (Verified 2025)</h1>
      <p>लाइफटाइम फ्री, 5% कैशबैक, RuPay UPI, ट्रैवल व एफडी सिक्योर्ड कार्ड्स। BankSathi पार्टनर नेटवर्क के माध्यम से आधिकारिक पोर्टल से अप्लाई करें और प्रत्येक कार्ड पर 1,500 से 2,000 शब्दों की संपूर्ण मार्गदर्शिका पढ़ें।</p>

      <div class="cc-filters-wrap">
        <div class="search-input-wrap">
          <input 
            type="text" 
            id="cc-search-input" 
            placeholder="कार्ड का नाम या बैंक खोजें (उदा. HDFC Millennia, SBI Cashback, Flipkart Axis, Scapia, RuPay UPI, FD)..." 
            aria-label="Search Credit Cards"
            autocomplete="off"
          />
        </div>

        <div class="cc-type-tabs">
          <button class="cc-btn active" data-type="all">सभी कार्ड्स (All Cards - 25)</button>
          <button class="cc-btn" data-type="ltf">लाइफटाइम फ्री (Lifetime Free)</button>
          <button class="cc-btn" data-type="cashback">असीमित कैशबैक (Cashback)</button>
          <button class="cc-btn" data-type="rupay">RuPay UPI क्रेडिट (UPI Linked)</button>
          <button class="cc-btn" data-type="travel">ट्रैवल व लाउंज (Travel & Lounge)</button>
          <button class="cc-btn" data-type="fd-backed">एफडी सिक्योर्ड / नो सिबिल (FD-Backed)</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Cards Listing -->
  <main class="container">
    <div class="cc-cards-container" id="cc-list">
      ${cardsHTML}
    </div>
  </main>

  <!-- 1500-2000 Words Comprehensive Guide Reader Modal -->
  <div class="guide-reader-overlay" id="guide-reader-overlay" aria-hidden="true" role="dialog">
    <div class="guide-reader-modal" id="guide-reader-modal">
      <div class="guide-reader-header">
        <div class="guide-reader-title-area">
          <h2 class="guide-reader-title" id="reader-title">कार्ड का नाम</h2>
          <span class="guide-reader-subtitle" id="reader-subtitle">संस्था व सत्यापन</span>
        </div>
        <div class="guide-reader-actions" style="display:flex; gap:0.5rem; align-items:center;">
          <a href="#" target="_blank" rel="noopener noreferrer sponsored nofollow" class="btn btn-primary" id="reader-apply-btn" style="padding: 0.45rem 0.9rem; font-size: 0.85rem;">
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
        <div style="display:flex; gap:0.5rem;">
          <a href="#" class="btn btn-outline" id="reader-direct-page-link" style="padding: 0.45rem 0.85rem; font-size: 0.85rem;">
            अलग पृष्ठ पर खोलें (Full Page) ↗
          </a>
          <button type="button" class="btn btn-secondary" onclick="closeProductGuide()" style="padding: 0.45rem 0.85rem; font-size: 0.85rem;">
            बंद करें (Close)
          </button>
        </div>
      </div>
    </div>
  </div>

  <script>
    const guidesData = ${JSON.stringify(creditCardGuides)};

    window.openProductGuide = function(id) {
      const guide = guidesData[id];
      if (!guide) {
        window.location.href = id + '.html';
        return;
      }
      document.getElementById('reader-title').textContent = guide.title;
      document.getElementById('reader-subtitle').innerHTML = '<span>🏛️ ' + guide.bank + '</span> • <span class="guide-word-badge">📖 ' + guide.wordCount + ' शब्द</span>';
      document.getElementById('reader-apply-btn').href = guide.applyUrl;
      document.getElementById('reader-direct-page-link').href = guide.pageUrl;
      document.getElementById('reader-body').innerHTML = guide.contentHTML;
      const overlay = document.getElementById('guide-reader-overlay');
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    window.closeProductGuide = function() {
      const overlay = document.getElementById('guide-reader-overlay');
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    document.getElementById('reader-close-btn').addEventListener('click', closeProductGuide);
    document.getElementById('guide-reader-overlay').addEventListener('click', (e) => {
      if (e.target.id === 'guide-reader-overlay') {
        closeProductGuide();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProductGuide();
    });

    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('cc-search-input');
      const filterBtns = document.querySelectorAll('.cc-btn');
      const cardItems = document.querySelectorAll('.cc-card-item');

      let currentType = 'all';
      let currentQuery = '';

      function filterCards() {
        cardItems.forEach(item => {
          const itemType = item.getAttribute('data-type') || '';
          const searchData = item.getAttribute('data-search') || '';

          const typeMatch = (currentType === 'all' || itemType.includes(currentType));
          const queryMatch = (!currentQuery || searchData.includes(currentQuery));

          if (typeMatch && queryMatch) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentQuery = e.target.value.trim().toLowerCase();
          filterCards();
        });
      }

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentType = btn.getAttribute('data-type');
          filterCards();
        });
      });
    });
  </script>

  ${getFooter('..')}
  ${getScripts('..')}
</body>
</html>`;
}

// Generate the credit-cards/index.html file
const html = buildCreditCardsHubHTML();
writeFile('credit-cards/index.html', html);
console.log('Successfully generated credit-cards/index.html with interactive 1500+ word reader!');
