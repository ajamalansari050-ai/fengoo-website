import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';
import { getAllBanksList } from './data_loader.js';

export function buildBanksHubHTML() {
  const allBanksData = getAllBanksList();

  const banksCardsHTML = allBanksData.map(bank => {
    return `
    <article class="bank-card-item" data-bank-id="${bank.id}" data-category="${bank.category}" data-search="${bank.name.toLowerCase()} ${bank.legalName.toLowerCase()} ${bank.tag.toLowerCase()} ${bank.type.toLowerCase()}">
      <div class="bank-card-header">
        <div class="bank-header-left">
          <span class="bank-badge-type">${bank.type}</span>
          <h3 class="bank-title">${bank.name}</h3>
          <span class="bank-legal-name">${bank.legalName} • <em>${bank.tag}</em></span>
        </div>
        <div class="bank-header-right">
          ${bank.dicgc ? '<span class="dicgc-pill" title="DICGC द्वारा ₹5,00,000 तक की जमा राशि सुरक्षित">🛡️ DICGC ₹5L Insured</span>' : '<span class="dicgc-pill warning">🏛️ Institutional Apex</span>'}
        </div>
      </div>

      <div class="bank-card-body">
        <!-- Zero Balance Account Section -->
        <div class="bank-feature-box zero-balance-box">
          <div class="feature-label-row">
            <span class="feature-icon">🟢</span>
            <strong>जीरो बैलेंस खाता (Zero Balance Account):</strong>
            <span class="status-pill ${bank.zeroBalance.available ? 'success' : 'neutral'}">${bank.zeroBalance.available ? 'उपलब्ध (Available)' : 'नियम लागू'}</span>
          </div>
          <p class="feature-desc"><strong>${bank.zeroBalance.type}:</strong> ${bank.zeroBalance.details}</p>
          <div class="feature-action-row">
            <a href="${bank.zeroBalance.openUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-green">
              खाता खोलें / Open Account ↗
            </a>
          </div>
        </div>

        <!-- Credit Cards & Offers Section -->
        <div class="bank-feature-box credit-card-box">
          <div class="feature-label-row">
            <span class="feature-icon">💳</span>
            <strong>क्रेडिट कार्ड व ऑफर्स (Credit Cards & Offers):</strong>
          </div>
          <p class="feature-desc"><strong>लोकप्रिय कार्ड:</strong> ${bank.creditCards.topCards}</p>
          <p class="feature-desc-offer">🎁 <strong>मुख्य ऑफर:</strong> ${bank.creditCards.topOffer}</p>
          <div class="feature-action-row">
            <a href="${bank.creditCards.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-blue">
              क्रेडिट कार्ड अप्लाई करें (Apply Card) ↗
            </a>
          </div>
        </div>

        <!-- Interest Rates & Key Details Grid -->
        <div class="bank-stats-grid">
          <div class="bank-stat-col">
            <span class="stat-lbl">बचत खाता ब्याज:</span>
            <strong class="stat-val">${bank.rates.savings}</strong>
          </div>
          <div class="bank-stat-col">
            <span class="stat-lbl">फिक्स्ड डिपॉजिट (FD):</span>
            <strong class="stat-val">${bank.rates.fd}</strong>
          </div>
          <div class="bank-stat-col">
            <span class="stat-lbl">हेल्पलाइन:</span>
            <strong class="stat-val phone">${bank.helpline}</strong>
          </div>
        </div>
      </div>

      <div class="bank-card-footer">
        <a href="${bank.detailPage}" class="btn btn-outline btn-block">
          📄 विस्तृत समीक्षा व पूर्ण नियम (Full Bank Details) →
        </a>
      </div>
    </article>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>भारत के सभी बैंक डायरेक्टरी (All Banks in India) - Zero Balance, Offers & Cards | Fengoo</title>
  <meta name="description" content="भारत के सभी सार्वजनिक, निजी, स्मॉल फाइनेंस व पेमेंट्स बैंकों की संपूर्ण डायरेक्टरी। जीरो बैलेंस खाता खोलने का लिंक, क्रेडिट कार्ड ऑफर्स, ब्याज दरें और विस्तृत बैंक समीक्षा।" />
  <link rel="canonical" href="https://fengoo.in/banks/index.html" />
  ${getStyles('..')}
  <style>
    .banks-hero {
      background: radial-gradient(circle at 50% 0%, var(--surface-2) 0%, var(--surface) 100%);
      border-bottom: 1px solid var(--border);
      padding: 3rem 0 2rem;
      text-align: center;
    }
    .banks-hero h1 {
      font-size: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
      color: var(--text);
    }
    .banks-hero p {
      font-size: 1.05rem;
      color: var(--text-muted);
      max-width: 760px;
      margin: 0 auto 1.5rem;
      line-height: 1.5;
    }
    .search-filter-section {
      max-width: 720px;
      margin: 0 auto;
    }
    .filter-tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1.25rem;
    }
    .filter-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 0.4rem 0.9rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .filter-btn:hover, .filter-btn.active {
      background: var(--primary);
      color: #fff;
      border-color: var(--primary);
    }
    .banks-list-container {
      padding: 2.5rem 0 4rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .bank-card-item {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow-sm);
      padding: 1.5rem;
      transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
    }
    .bank-card-item:hover {
      border-color: var(--primary);
      box-shadow: var(--shadow-md);
    }
    .bank-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid var(--border);
      padding-bottom: 1rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    .bank-badge-type {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--primary);
      background: var(--primary-light);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      margin-bottom: 0.25rem;
    }
    .bank-title {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--text);
      margin-bottom: 0.2rem;
    }
    .bank-legal-name {
      font-size: 0.825rem;
      color: var(--text-muted);
    }
    .dicgc-pill {
      font-size: 0.775rem;
      font-weight: 600;
      padding: 0.35rem 0.65rem;
      border-radius: 9999px;
      background: #ecfdf5;
      color: #065f46;
      border: 1px solid #a7f3d0;
    }
    .dicgc-pill.warning {
      background: #eff6ff;
      color: #1e40af;
      border-color: #bfdbfe;
    }
    .bank-card-body {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.25rem;
    }
    .bank-feature-box {
      border-radius: var(--radius-sm);
      padding: 0.9rem 1.1rem;
      background: var(--surface-subtle);
      border: 1px solid var(--border);
    }
    .zero-balance-box {
      border-left: 4px solid #10b981;
    }
    .credit-card-box {
      border-left: 4px solid var(--primary);
    }
    .feature-label-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.35rem;
      font-size: 0.925rem;
    }
    .status-pill {
      font-size: 0.725rem;
      font-weight: 700;
      padding: 0.15rem 0.45rem;
      border-radius: 4px;
    }
    .status-pill.success {
      background: #d1fae5;
      color: #065f46;
    }
    .status-pill.neutral {
      background: #e2e8f0;
      color: #475569;
    }
    .feature-desc {
      font-size: 0.875rem;
      color: var(--text);
      line-height: 1.45;
      margin-bottom: 0.4rem;
    }
    .feature-desc-offer {
      font-size: 0.85rem;
      color: #b45309;
      background: #fffbeb;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      margin-bottom: 0.5rem;
      display: inline-block;
    }
    .feature-action-row {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.35rem;
    }
    .btn-action {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.35rem 0.75rem;
      font-size: 0.825rem;
      font-weight: 700;
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.15s ease;
    }
    .btn-green {
      background: #059669;
      color: #fff;
    }
    .btn-green:hover {
      background: #047857;
      color: #fff;
    }
    .btn-blue {
      background: var(--primary);
      color: #fff;
    }
    .btn-blue:hover {
      background: var(--primary-hover);
      color: #fff;
    }
    .bank-stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0.75rem;
      background: var(--surface);
      border: 1px dashed var(--border);
      border-radius: var(--radius-sm);
      padding: 0.75rem 1rem;
    }
    .bank-stat-col {
      display: flex;
      flex-direction: column;
    }
    .stat-lbl {
      font-size: 0.75rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }
    .stat-val {
      font-size: 0.95rem;
      color: var(--text);
      font-weight: 700;
    }
    .stat-val.phone {
      color: var(--primary);
      font-size: 0.875rem;
    }
    .bank-card-footer {
      border-top: 1px solid var(--border);
      padding-top: 0.9rem;
    }
    .btn-block {
      display: block;
      width: 100%;
      text-align: center;
      padding: 0.5rem;
      font-weight: 600;
    }
  </style>
</head>
<body>
  ${getHeader('..')}

  <!-- Breadcrumb -->
  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="../index.html">होम (Home)</a></li>
      <li><span>बैंक डायरेक्टरी (All Banks)</span></li>
    </ul>
  </div>

  <!-- Hero Header -->
  <section class="banks-hero">
    <div class="container">
      <span class="badge-official">🇮🇳 सम्पूर्ण भारतीय बैंकिंग डायरेक्टरी</span>
      <h1>भारत के सभी बैंक (All Banks in India)</h1>
      <p>
        सार्वजनिक (PSU), निजी (Private), स्मॉल फाइनेंस, पेमेंट्स और क्षेत्रीय ग्रामीण बैंकों की आधिकारिक सूची। जीरो बैलेंस खाता खोलने का सीधा लिंक, क्रेडिट कार्ड ऑफर्स, ब्याज दरें व विस्तृत समीक्षा।
      </p>

      <!-- Live Search & Filter Box -->
      <div class="search-filter-section">
        <div class="search-input-box" style="margin: 0 auto;">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input 
            type="text" 
            id="banks-search-input" 
            placeholder="किसी भी बैंक का नाम खोजें (उदा. HDFC, SBI, Kotak, ICICI, AU, IPPB)..." 
            aria-label="Search Banks"
            autocomplete="off"
          />
        </div>

        <div class="filter-tabs">
          <button class="filter-btn active" data-filter="all">सभी बैंक (All Banks)</button>
          <button class="filter-btn" data-filter="psu">सार्वजनिक क्षेत्र (PSU Banks)</button>
          <button class="filter-btn" data-filter="private">निजी क्षेत्र (Private Banks)</button>
          <button class="filter-btn" data-filter="sfb">स्मॉल फाइनेंस (Small Finance)</button>
          <button class="filter-btn" data-filter="payments">पेमेंट्स बैंक (Payments Banks)</button>
          <button class="filter-btn" data-filter="rrb">ग्रामीण व सहकारी (RRB & Co-op)</button>
          <button class="filter-btn" data-filter="foreign">विदेशी बैंक (Foreign Banks)</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Banks Listing -->
  <main class="container">
    <div class="banks-list-container" id="banks-list">
      ${banksCardsHTML}
    </div>
  </main>

  <script>
    // Client-side instant filter and search logic
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('banks-search-input');
      const filterBtns = document.querySelectorAll('.filter-btn');
      const bankItems = document.querySelectorAll('.bank-card-item');

      let currentFilter = 'all';
      let currentQuery = '';

      function applyFilter() {
        let visibleCount = 0;
        bankItems.forEach(item => {
          const category = item.getAttribute('data-category');
          const searchData = item.getAttribute('data-search') || '';
          const matchesFilter = (currentFilter === 'all' || category === currentFilter);
          const matchesQuery = (!currentQuery || searchData.includes(currentQuery));

          if (matchesFilter && matchesQuery) {
            item.style.display = 'block';
            visibleCount++;
          } else {
            item.style.display = 'none';
          }
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentQuery = e.target.value.trim().toLowerCase();
          applyFilter();
        });
      }

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentFilter = btn.getAttribute('data-filter');
          applyFilter();
        });
      });
    });
  </script>

  ${getFooter('..')}
  ${getScripts('..')}
</body>
</html>`;
}

// Generate the banks/index.html file
const html = buildBanksHubHTML();
writeFile('banks/index.html', html);
console.log('Successfully generated banks/index.html');
