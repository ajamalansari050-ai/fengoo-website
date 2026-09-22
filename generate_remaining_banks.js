import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';

const moreBanks = [
  {
    filePath: 'banks/public-sector/punjab-national-bank/punjab-national-bank.html',
    rootRel: '../../..',
    id: 'punjab-national-bank',
    name: 'Punjab National Bank (PNB)',
    tagline: 'Second Largest Public Sector Bank in India | Since 1894',
    bankType: 'Public Sector Bank',
    colors: { primary: '#a20034', secondary: '#ffb612', accent: '#059669' },
    founded: '1894 in Lahore',
    headquarters: 'New Delhi',
    rbiStatus: 'Nationalized Scheduled Commercial Bank (Amalgamated with Oriental Bank of Commerce & United Bank of India)',
    dicgcCoverage: 'Yes (Statutory ₹5,00,000 per depositor insurance)',
    officialUrl: 'https://www.pnbindia.in/',
    tollFree: '1800 1800 / 1800 2021',
    lastUpdated: '2025-02-15',
    about: 'Punjab National Bank (PNB) is the second largest public sector bank in India, established in 1894 by leaders of the Swadeshi movement including Lala Lajpat Rai. PNB serves over 180 million customers across 10,000+ branches. Its PNB ONE app is a secure digital platform for retail and MSME banking.',
    products: [
      { name: 'PNB ONE Digital Banking', desc: 'Unified mobile banking with biometric login, UPI scan, and virtual debit card.' },
      { name: 'PNB Max Saver Account', desc: 'Premium savings account with high daily ATM withdrawal limit and complimentary accidental insurance.' },
      { name: 'PNB Housing Loan (Pride)', desc: 'Affordable residential home loan scheme for public and government employees.' },
      { name: 'PNB Kisan Tatkal Rin', desc: 'Instant agricultural credit for farmers during cropping cycles.' }
    ],
    eligibility: ['Indian citizens 18+ years; joint and minor accounts with guardians permitted.'],
    documents: ['Aadhaar Card, PAN Card, Form 60 if PAN not available.'],
    charges: [
      { item: 'Quarterly Average Balance (QAB)', fee: '₹2,000 (Metro/Urban), ₹1,000 (Semi-Urban), ₹500 (Rural)' },
      { item: 'Internet / Mobile NEFT', fee: 'Nil' }
    ],
    partnerLink: null
  },
  {
    filePath: 'banks/public-sector/canara-bank/canara-bank.html',
    rootRel: '../../..',
    id: 'canara-bank',
    name: 'Canara Bank',
    tagline: 'Major Public Sector Commercial Bank | Together We Can',
    bankType: 'Public Sector Bank',
    colors: { primary: '#007cc3', secondary: '#ed1c24', accent: '#10b981' },
    founded: '1906 (by Ammembal Subba Rao Pai)',
    headquarters: 'Bengaluru, Karnataka',
    rbiStatus: 'Nationalized Scheduled Commercial Bank (Amalgamated with Syndicate Bank)',
    dicgcCoverage: 'Yes (DICGC ₹5,00,000 insured)',
    officialUrl: 'https://canarabank.com/',
    tollFree: '1800 425 0018',
    lastUpdated: '2025-02-15',
    about: 'Canara Bank is one of the oldest and largest public sector banks in India, established in 1906. Post its mega-merger with Syndicate Bank, Canara Bank boasts an extensive network spanning over 9,500 domestic branches, delivering extensive agricultural lending, retail advances, and MSME support.',
    products: [
      { name: 'Canara ai1 Super App', desc: 'Omni-channel banking app with 250+ features including bill pay, fixed deposits, and mutual funds.' },
      { name: 'Canara SB Power Plus', desc: 'Premier savings account for affluent professionals with zero processing fees on select retail loans.' },
      { name: 'Canara Housing Loan', desc: 'Transparent floating rate home loans linked to Canara Bank Repo Linked Lending Rate (RLLR).' }
    ],
    eligibility: ['Individual residents, joint applicants, trusts and associations.'],
    documents: ['Valid OVD (Aadhaar, Passport, Voter ID) + PAN.'],
    charges: [
      { item: 'Average Monthly Balance', fee: '₹1,000 (Metro), ₹500 (Semi-Urban), ₹250 (Rural)' },
      { item: 'Online Fund Transfers', fee: 'Free on digital channels' }
    ],
    partnerLink: null
  },
  {
    filePath: 'banks/foreign/hsbc/hsbc.html',
    rootRel: '../../..',
    id: 'hsbc',
    name: 'HSBC India',
    tagline: 'The Hongkong and Shanghai Banking Corporation Limited (India)',
    bankType: 'Foreign Scheduled Commercial Bank',
    colors: { primary: '#db0011', secondary: '#000000', accent: '#0284c7' },
    founded: '1853 (Mercantile Bank predecessor in Mumbai)',
    headquarters: 'Mumbai, Maharashtra',
    rbiStatus: 'Licensed Foreign Bank operating through branches in India',
    dicgcCoverage: 'Yes (Covered under DICGC ₹5,00,000 protection for Indian deposits)',
    officialUrl: 'https://www.hsbc.co.in/',
    tollFree: '1800 266 3456',
    lastUpdated: '2025-02-15',
    about: 'HSBC India is a full-service banking franchise providing wealth management, personal banking, commercial banking, and global trade solutions. HSBC offers premier cross-border banking advantages for global Indians and international travelers.',
    products: [
      { name: 'HSBC Premier Banking', desc: 'Global account linking, relationship manager, and international ATM access with zero foreign conversion markups on premier tiers.' },
      { name: 'HSBC Cashback Credit Card', desc: '10% cashback on dining, food delivery, and grocery spends with worldwide concierge benefits.' }
    ],
    eligibility: ['Resident Indians, Expats, and NRIs meeting relationship criteria.'],
    documents: ['Passport, PAN Card, Indian residential proof, foreign employment contract if NRI.'],
    charges: [
      { item: 'HSBC Premier Minimum Relationship Balance', fee: '₹40,00,000 TRV across deposits/investments' }
    ],
    partnerLink: null
  },
  {
    filePath: 'banks/regional-rural/aryavart-bank/aryavart-bank.html',
    rootRel: '../../..',
    id: 'aryavart-bank',
    name: 'Aryavart Bank',
    tagline: 'Regional Rural Bank Sponsored by Bank of India | Serving Rural Uttar Pradesh',
    bankType: 'Regional Rural Bank (RRB)',
    colors: { primary: '#005b96', secondary: '#f39c12', accent: '#27ae60' },
    founded: '2019 (Amalgamation of Gramin Bank of Aryavart and Allahabad UP Gramin Bank)',
    headquarters: 'Lucknow, Uttar Pradesh',
    rbiStatus: 'Regional Rural Bank under RRB Act, 1976 (Regulated by RBI, supervised by NABARD)',
    dicgcCoverage: 'Yes (DICGC ₹5 Lakh statutory deposit insurance applies)',
    officialUrl: 'https://aryavart-rrb.com/',
    tollFree: '1800 1020 304',
    lastUpdated: '2025-02-15',
    about: 'Aryavart Bank is a major Regional Rural Bank (RRB) operating in Uttar Pradesh, jointly owned by the Government of India, Government of Uttar Pradesh, and sponsored by Bank of India. It provides rural credit, Kisan Credit Cards, micro-finance, and SHG financing across 26 districts.',
    products: [
      { name: 'Kisan Credit Card (KCC)', desc: 'Subsidized crop production loans for small and marginal agricultural farmers.' },
      { name: 'Rural Micro-Savings Account', desc: 'Low-cost savings account with RuPay debit card and micro-ATM access.' },
      { name: 'Self Help Group (SHG) Bank Linkage', desc: 'Concessional credit lines for women-led village livelihood collectives.' }
    ],
    eligibility: ['Farmers, rural artisans, small agricultural traders, and rural households.'],
    documents: ['Aadhaar Card, Land Revenue Records (Khatauni) for farmer loans.'],
    charges: [
      { item: 'Rural Minimum Balance', fee: '₹100 to ₹500 depending on cheque-book facility' }
    ],
    partnerLink: null
  },
  {
    filePath: 'banks/regional-rural/baroda-up-bank/baroda-up-bank.html',
    rootRel: '../../..',
    id: 'baroda-up-bank',
    name: 'Baroda UP Bank',
    tagline: 'Leading Regional Rural Bank Sponsored by Bank of Baroda',
    bankType: 'Regional Rural Bank (RRB)',
    colors: { primary: '#f26522', secondary: '#002147', accent: '#16a34a' },
    founded: '2020 (Amalgamation of Baroda UP Gramin Bank, Kashi Gomti Samyut Gramin Bank & Purvanchal Bank)',
    headquarters: 'Gorakhpur, Uttar Pradesh',
    rbiStatus: 'Scheduled Regional Rural Bank under RRB Act, 1976 (NABARD Supervised)',
    dicgcCoverage: 'Yes (100% covered under DICGC ₹5,00,000 statutory deposit insurance)',
    officialUrl: 'https://www.barodaupbank.in/',
    tollFree: '1800 180 0225',
    lastUpdated: '2025-02-15',
    about: 'Baroda UP Bank is India\'s largest Regional Rural Bank in terms of branch network, operating over 2,050 branches across eastern and central Uttar Pradesh. Sponsored by Bank of Baroda, the bank empowers rural farm and non-farm enterprises with modern core banking (CBS) technology.',
    products: [
      { name: 'Baroda UP Kisan Credit Card', desc: 'Short term crop loans with interest subvention benefit from central government.' },
      { name: 'Rural Housing Loan', desc: 'Finance for constructing pacca houses in rural gram panchayat areas.' },
      { name: 'Baroda UP Mobile Banking App', desc: 'Check balance, transfer funds via IMPS, and recharge utilities from smartphones.' }
    ],
    eligibility: ['Rural residents, farmers, rural business owners.'],
    documents: ['Aadhaar, Voter ID, Land ownership documents for agricultural advances.'],
    charges: [
      { item: 'Savings Minimum Balance', fee: '₹100 (Rural without chequebook)' }
    ],
    partnerLink: null
  },
  {
    filePath: 'banks/small-finance/ujjivan-small-finance/ujjivan-small-finance.html',
    rootRel: '../../..',
    id: 'ujjivan-small-finance',
    name: 'Ujjivan Small Finance Bank',
    tagline: 'Scheduled Small Finance Bank | Building Financial Inclusion',
    bankType: 'Small Finance Bank (SFB)',
    colors: { primary: '#003366', secondary: '#ff9900', accent: '#059669' },
    founded: '2005 (as Ujjivan Financial Services) / SFB 2017',
    headquarters: 'Bengaluru, Karnataka',
    rbiStatus: 'Scheduled Small Finance Bank (RBI Act, 1934)',
    dicgcCoverage: 'Yes (DICGC ₹5 Lakh insurance applicable)',
    officialUrl: 'https://www.ujjivansfb.in/',
    tollFree: '1800 208 2121',
    lastUpdated: '2025-02-15',
    about: 'Ujjivan Small Finance Bank is a mass-market focused scheduled commercial bank providing micro-loans, affordable housing finance, MSME loans, and high-interest retail deposits for underserved communities.',
    products: [
      { name: 'Garima Savings Account', desc: 'Specialized savings scheme for women with higher daily ATM limits and health insurance benefits.' },
      { name: 'Platina Fixed Deposit', desc: 'High yield term deposits offering attractive interest rates for senior citizens.' }
    ],
    eligibility: ['Resident Indian individuals and micro-entrepreneurs.'],
    documents: ['Aadhaar Card, PAN card.'],
    charges: [{ item: 'Zero Balance Options', fee: 'Available under basic savings tiers' }],
    partnerLink: null
  },
  {
    filePath: 'banks/cooperative/cosmos-bank/cosmos-bank.html',
    rootRel: '../../..',
    id: 'cosmos-bank',
    name: 'Cosmos Co-operative Bank',
    tagline: 'Multi-State Scheduled Urban Co-operative Bank | 118+ Years of Trust',
    bankType: 'Scheduled Urban Co-operative Bank',
    colors: { primary: '#781d42', secondary: '#2e3192', accent: '#0d9488' },
    founded: '1906',
    headquarters: 'Pune, Maharashtra',
    rbiStatus: 'Multi-State Scheduled Urban Co-operative Bank (RBI & MSCS Act)',
    dicgcCoverage: 'Yes (DICGC ₹5,00,000 statutory deposit cover)',
    officialUrl: 'https://www.cosmosbank.com/',
    tollFree: '1800 233 0234',
    lastUpdated: '2025-02-15',
    about: 'Cosmos Co-operative Bank is one of the oldest multi-state scheduled urban co-operative banks in India, founded in 1906 in Pune. It operates across 7 states, providing full modern digital banking, corporate and retail lending.',
    products: [
      { name: 'Cosmos CosmoNet & Mobile Banking', desc: 'Modern internet and mobile banking with IMPS, NEFT, and bill pay facilities.' },
      { name: 'Cosmos Home & Education Loans', desc: 'Competitive loans for higher studies and home purchases.' }
    ],
    eligibility: ['Residents and businesses in operating states.'],
    documents: ['Aadhaar, PAN, residential proof.'],
    charges: [{ item: 'Minimum Balance', fee: 'As per branch location category' }],
    partnerLink: null
  }
];

function generateMoreBankHTML(b) {
  const customColors = `
    :root {
      --bank-primary: ${b.colors.primary};
      --bank-secondary: ${b.colors.secondary};
      --bank-accent: ${b.colors.accent};
    }
  `;

  const productsHTML = b.products.map(p => `
    <div class="product-item-card">
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
    </div>
  `).join('');

  const eligibilityHTML = b.eligibility.map(e => `
    <li><span class="check-icon">✓</span> <span>${e}</span></li>
  `).join('');

  const documentsHTML = b.documents.map(d => `
    <li><span class="check-icon">✓</span> <span>${d}</span></li>
  `).join('');

  const chargesHTML = b.charges.map(c => `
    <tr>
      <td><strong>${c.item}</strong></td>
      <td>${c.fee}</td>
    </tr>
  `).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${b.name} - Products, Rates, Eligibility, Customer Care | Fengoo</title>
  <meta name="description" content="Verified details of ${b.name}: savings accounts, loan eligibility, customer care, DICGC coverage, and official portal link." />
  <link rel="canonical" href="https://fengoo.in/${b.filePath}" />
  ${getStyles(b.rootRel)}
  <style>
    ${customColors}
  </style>
</head>
<body>
  ${getHeader(b.rootRel)}

  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="${b.rootRel}/index.html">Home</a></li>
      <li><a href="${b.rootRel}/banks/private-sector/kotak/kotak.html">Banks</a></li>
      <li><span>${b.bankType}</span></li>
      <li><span>${b.name}</span></li>
    </ul>
  </div>

  <section class="entity-hero" style="border-top: 4px solid var(--bank-primary);">
    <div class="container entity-hero-inner">
      <div class="entity-hero-main">
        <div class="entity-hero-badge-row">
          <span class="badge-official">🏛️ ${b.bankType}</span>
          <span class="badge-cat">RBI Regulated</span>
          <span class="badge-status active">Verified Active</span>
        </div>
        <h1 class="entity-hero-title">${b.name}</h1>
        <p class="entity-hero-tagline">${b.tagline}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; margin-top: 1rem;">
          <a href="${b.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: var(--bank-primary); border-color: var(--bank-primary);">
            🌐 आधिकारिक ${b.name} वेबसाइट खोलें ↗
          </a>
          <a href="#products" class="btn btn-secondary">उत्पाद व सेवाएं</a>
          <a href="#customer-service" class="btn btn-outline">कस्टमर केयर</a>
        </div>
      </div>

      <div class="entity-hero-sidebar">
        <div class="quick-spec-item">
          <span class="quick-spec-label">स्थापना वर्ष:</span>
          <span class="quick-spec-val">${b.founded}</span>
        </div>
        <div class="quick-spec-item">
          <span class="quick-spec-label">मुख्यालय:</span>
          <span class="quick-spec-val">${b.headquarters}</span>
        </div>
        <div class="quick-spec-item">
          <span class="quick-spec-label">DICGC ₹5L सुरक्षा:</span>
          <span class="quick-spec-val" style="color: var(--accent);">सुरक्षित (Insured)</span>
        </div>
        <div class="quick-spec-item">
          <span class="quick-spec-label">हेल्पलाइन:</span>
          <span class="quick-spec-val">${b.tollFree}</span>
        </div>
      </div>
    </div>
  </section>

  <main class="container">
    <div class="page-layout">
      <aside class="page-sidebar-nav">
        <a href="#about" class="page-sidebar-link active">बैंक परिचय</a>
        <a href="#products" class="page-sidebar-link">उत्पाद व सेवाएं</a>
        <a href="#eligibility" class="page-sidebar-link">पात्रता व डाक्यूमेंट्स</a>
        <a href="#charges" class="page-sidebar-link">शुल्क व न्यूनतम बैलेंस</a>
        <a href="#dicgc-security" class="page-sidebar-link">जमा सुरक्षा (DICGC)</a>
        <a href="#customer-service" class="page-sidebar-link">ग्राहक सेवा व निवारण</a>
      </aside>

      <div class="page-content-area">
        <article class="content-block" id="about">
          <h2>बैंक के बारे में (About ${b.name})</h2>
          <p>${b.about}</p>
          <div class="banner-notice">
            <strong>नियामक स्थिति (Regulatory Status):</strong> ${b.rbiStatus}
          </div>
        </article>

        <article class="content-block" id="products">
          <h2>प्रमुख उत्पाद व सेवाएं (Products & Services)</h2>
          <div class="product-cards-grid">
            ${productsHTML}
          </div>
        </article>

        <article class="content-block" id="eligibility">
          <h2>पात्रता और दस्तावेज (Eligibility & Documents)</h2>
          <h3>पात्रता:</h3>
          <ul class="checklist-styled">
            ${eligibilityHTML}
          </ul>
          <h3 style="margin-top: 1.5rem;">आवश्यक दस्तावेज:</h3>
          <ul class="checklist-styled">
            ${documentsHTML}
          </ul>
        </article>

        <article class="content-block" id="charges">
          <h2>शुल्क व विवरण (Verified Charges)</h2>
          <div class="data-table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>मद (Service Head)</th>
                  <th>लागू शुल्क (Applicable Charge)</th>
                </tr>
              </thead>
              <tbody>
                ${chargesHTML}
              </tbody>
            </table>
          </div>
        </article>

        <article class="content-block" id="dicgc-security" style="border-left: 4px solid var(--accent);">
          <h2 style="color: var(--accent);">🛡️ DICGC ₹5,00,000 जमा सुरक्षा गारंटी</h2>
          <p>${b.dicgcCoverage}</p>
          <p>जमाकर्ता के बचत खाते, चालू खाते और एफडी की कुल जमा राशि पर प्रति बैंक अधिकतम ₹5,00,000 तक की वैधानिक सुरक्षा प्राप्त है।</p>
        </article>

        <article class="content-block" id="customer-service">
          <h2>ग्राहक सेवा व निवारण (Customer Support)</h2>
          <div class="support-box">
            <div class="support-item">
              <span class="support-label">टोल फ्री नंबर</span>
              <span class="support-val">${b.tollFree}</span>
            </div>
            <div class="support-item">
              <span class="support-label">आधिकारिक वेबसाइट</span>
              <span class="support-val"><a href="${b.officialUrl}" target="_blank" rel="noopener" style="color:var(--primary); font-size:0.9rem;">वेबसाइट लिंक ↗</a></span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>

  ${getFooter(b.rootRel)}
  ${getScripts(b.rootRel)}
</body>
</html>`;
}

for (const bank of moreBanks) {
  const html = generateMoreBankHTML(bank);
  writeFile(bank.filePath, html);
}

console.log(`Generated ${moreBanks.length} additional bank pages.`);
