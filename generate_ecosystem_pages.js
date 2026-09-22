import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';

// General generator for topic/scheme/product pages
function generateTopicPage({
  filePath,
  rootRel,
  category,
  title,
  subtitle,
  officialAuthority,
  authorityUrl,
  overview,
  highlights = [],
  keyFeatures = [],
  eligibilityCriteria = [],
  rulesOrSteps = [],
  tableHeaders = [],
  tableRows = [],
  partnerOffer = null
}) {
  const highlightsHTML = highlights.map(h => `
    <div class="stat-box">
      <span class="stat-num">${h.val}</span>
      <span class="stat-label">${h.label}</span>
    </div>
  `).join('');

  const featuresHTML = keyFeatures.map(f => `
    <div class="product-item-card">
      <h4>${f.title}</h4>
      <p>${f.desc}</p>
    </div>
  `).join('');

  const eligibilityHTML = eligibilityCriteria.map(e => `
    <li><span class="check-icon">✓</span> <span>${e}</span></li>
  `).join('');

  const rulesHTML = rulesOrSteps.map(r => `
    <li><span class="check-icon">✓</span> <span>${r}</span></li>
  `).join('');

  let tableHTML = '';
  if (tableHeaders.length > 0 && tableRows.length > 0) {
    const ths = tableHeaders.map(h => `<th>${h}</th>`).join('');
    const trs = tableRows.map(row => `
      <tr>
        ${row.map((cell, idx) => `<td>${idx === 0 ? `<strong>${cell}</strong>` : cell}</td>`).join('')}
      </tr>
    `).join('');

    tableHTML = `
      <article class="content-block">
        <h2>तुलनात्मक विश्लेषण व डेटा (Comparative Breakdown)</h2>
        <div class="data-table-wrap">
          <table class="data-table">
            <thead><tr>${ths}</tr></thead>
            <tbody>${trs}</tbody>
          </table>
        </div>
      </article>
    `;
  }

  const partnerOfferHTML = partnerOffer ? `
    <div class="banner-notice" style="border-left-color: var(--warning); background: var(--warning-light); margin-bottom: 1.5rem;">
      <h4 style="color: #92400e; margin-bottom: 0.35rem;">🤝 पार्टनर विकल्प (Commercial Partner Offer)</h4>
      <p style="font-size: 0.875rem; color: #78350f; margin-bottom: 0.75rem;">${partnerOffer.disclosure}</p>
      <a href="${partnerOffer.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: #d97706; border-color: #d97706;">
        ${partnerOffer.label} ↗
      </a>
    </div>
  ` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} - Official Rules, Guidelines & Information | Fengoo</title>
  <meta name="description" content="Verified details and official guidelines for ${title}: eligibility, key benefits, official regulatory rules, and application procedures." />
  <link rel="canonical" href="https://fengoo.in/${filePath}" />
  ${getStyles(rootRel)}
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

  <section class="entity-hero">
    <div class="container entity-hero-inner">
      <div class="entity-hero-main">
        <div class="entity-hero-badge-row">
          <span class="badge-official">🏛️ ${category}</span>
          <span class="badge-cat">Statutory Verified</span>
          <span class="badge-status active">Active & Verified</span>
        </div>
        <h1 class="entity-hero-title">${title}</h1>
        <p class="entity-hero-tagline">${subtitle}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; margin-top: 1.25rem;">
          <a href="${authorityUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            🌐 आधिकारिक पोर्टल पर जाएं (${officialAuthority}) ↗
          </a>
          <a href="#features" class="btn btn-secondary">प्रमुख विशेषताएं</a>
          <a href="#rules" class="btn btn-outline">नियम व पात्रता</a>
        </div>
      </div>

      <div class="entity-hero-sidebar">
        <div class="quick-spec-item">
          <span class="quick-spec-label">नियामक / अधिकृत संस्था:</span>
          <span class="quick-spec-val">${officialAuthority}</span>
        </div>
        <div class="quick-spec-item">
          <span class="quick-spec-label">सत्यापन स्थिति:</span>
          <span class="quick-spec-val" style="color:var(--accent);">आधिकारिक स्रोत द्वारा पुष्ट</span>
        </div>
        <div class="quick-spec-item">
          <span class="quick-spec-label">अपडेट दिनांक:</span>
          <span class="quick-spec-val">फरवरी 2025</span>
        </div>
      </div>
    </div>
  </section>

  <main class="container">
    <div class="page-layout">
      <aside class="page-sidebar-nav">
        <a href="#overview" class="page-sidebar-link active">योजना / विषय परिचय</a>
        <a href="#features" class="page-sidebar-link">प्रमुख विशेषताएं</a>
        <a href="#rules" class="page-sidebar-link">पात्रता व नियम</a>
        <a href="#authority" class="page-sidebar-link">आधिकारिक संपर्क</a>
      </aside>

      <div class="page-content-area">
        ${partnerOfferHTML}

        ${highlights.length > 0 ? `
        <div class="stats-card-grid" style="margin-bottom: 2rem;">
          ${highlightsHTML}
        </div>
        ` : ''}

        <article class="content-block" id="overview">
          <h2>परिचय व उद्देश्य (Overview)</h2>
          <p>${overview}</p>
        </article>

        <article class="content-block" id="features">
          <h2>प्रमुख लाभ व मुख्य बिंदु (Key Features)</h2>
          <div class="product-cards-grid">
            ${featuresHTML}
          </div>
        </article>

        <article class="content-block" id="rules">
          <h2>पात्रता व आवेदन नियम (Eligibility & Operational Rules)</h2>
          <h3>पात्रता मानदंड:</h3>
          <ul class="checklist-styled">
            ${eligibilityHTML}
          </ul>

          <h3 style="margin-top: 1.5rem;">मुख्य नियम व शर्तें:</h3>
          <ul class="checklist-styled">
            ${rulesHTML}
          </ul>
        </article>

        ${tableHTML}

        <article class="content-block" id="authority" style="border-left: 4px solid var(--primary);">
          <h2>आधिकारिक स्रोत व नियामक जानकारी (Official Authority)</h2>
          <p>यह जानकारी भारत सरकार / विनियामक संस्था (<strong>${officialAuthority}</strong>) के नवीनतम सार्वजनिक प्रलेखों से संकलित की गई है।</p>
          <div style="margin-top: 1rem;">
            <a href="${authorityUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              आधिकारिक वेबसाइट देखें: ${authorityUrl} ↗
            </a>
          </div>
        </article>
      </div>
    </div>
  </main>

  ${getFooter(rootRel)}
  ${getScripts(rootRel)}
</body>
</html>`;
}

// Generate Hub Index Pages
function generateHubPage({
  filePath,
  rootRel,
  title,
  subtitle,
  category,
  intro,
  gridItems = [],
  disclaimer
}) {
  const cardsHTML = gridItems.map(item => `
    <div class="card card-hoverable">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
        <span class="badge-cat">${item.badge}</span>
        <span class="badge-status active">Verified</span>
      </div>
      <h3 style="margin-bottom:0.5rem; font-size:1.15rem;"><a href="${item.link}" style="color:inherit; text-decoration:none;">${item.title}</a></h3>
      <p style="font-size:0.875rem; color:var(--text-muted); line-height:1.5; margin-bottom:1.25rem;">${item.desc}</p>
      <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; color:var(--primary); font-weight:600;">${item.meta || ''}</span>
        <a href="${item.link}" class="btn btn-sm btn-outline">विस्तार से पढ़ें →</a>
      </div>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Fengoo Financial Information Platform</title>
  <meta name="description" content="${subtitle}" />
  <link rel="canonical" href="https://fengoo.in/${filePath}" />
  ${getStyles(rootRel)}
</head>
<body>
  ${getHeader(rootRel)}

  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="${rootRel}/index.html">Home</a></li>
      <li><span>${title}</span></li>
    </ul>
  </div>

  <section class="container" style="padding-top: 1.5rem; padding-bottom: 1.5rem;">
    <div style="max-width: 800px;">
      <span class="badge-official" style="margin-bottom: 0.5rem; display:inline-block;">🏛️ ${category} Directory</span>
      <h1 style="font-size: 2.25rem; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 0.75rem;">${title}</h1>
      <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6;">${intro}</p>
    </div>
  </section>

  <main class="container" style="padding-bottom: 4rem;">
    <div class="grid grid-3" style="gap: 1.5rem;">
      ${cardsHTML}
    </div>

    ${disclaimer ? `
    <div class="banner-notice" style="margin-top: 2.5rem;">
      <strong>महत्वपूर्ण सूचना:</strong> ${disclaimer}
    </div>
    ` : ''}
  </main>

  ${getFooter(rootRel)}
  ${getScripts(rootRel)}
</body>
</html>`;
}

// ==========================================
// 1. CREDIT CARDS HUB & CARDS
// ==========================================
const creditCardsHub = {
  filePath: 'credit-cards/index.html',
  rootRel: '..',
  title: 'Credit Cards in India (क्रेडिट कार्ड डायरेक्टरी)',
  subtitle: 'Verified specifications, annual charges, reward mechanisms, and RuPay on UPI integration.',
  category: 'Credit Cards',
  intro: 'भारतीय रिज़र्व बैंक (RBI) के Master Direction on Credit and Debit Card Issuance के अंतर्गत जारी किए जाने वाले प्रमुख क्रेडिट कार्ड्स की निष्पक्ष समीक्षा। यहाँ रिवॉर्ड पॉइंट्स, कैशबैक नियम और शुल्कों की पारदर्शी जानकारी दी गई है।',
  gridItems: [
    {
      title: 'HDFC Regalia Gold Credit Card',
      desc: 'प्रीमियम लाउंज एक्सेस, क्लब विस्तारा और माइलस्टोन रिवॉर्ड्स के साथ प्रमुख ट्रैवल व लाइफस्टाइल कार्ड।',
      badge: 'Travel & Lifestyle',
      meta: 'Annual Fee: ₹2,500',
      link: 'hdfc/regalia-gold.html'
    },
    {
      title: 'SBI SimplyCLICK Credit Card',
      desc: 'Amazon, BookMyShow, Cleartrip पर 10X रिवॉर्ड पॉइंट्स देने वाला ऑनलाइन शॉपिंग कार्ड।',
      badge: 'Online Shopping',
      meta: 'Annual Fee: ₹499',
      link: 'sbi/simplyclick.html'
    },
    {
      title: 'Amazon Pay ICICI Credit Card',
      desc: 'लाइफटाइम फ्री (Lifetime Free) क्रेडिट कार्ड, जिसमें अमेज़न प्राइम सदस्यों के लिए 5% असीमित कैशबैक मिलता है।',
      badge: 'Lifetime Free / Cashback',
      meta: 'Annual Fee: ₹0 (Nil)',
      link: 'icici/amazon-pay.html'
    },
    {
      title: 'Flipkart Axis Bank Credit Card',
      desc: 'फ्लिपकार्ट और क्लियरट्रिप पर 5% फ्लैट कैशबैक और पार्टनर मर्चेंट्स पर 4% कैशबैक प्रदान करने वाला कार्ड।',
      badge: 'Cashback & Retail',
      meta: 'Annual Fee: ₹500',
      link: 'axis/flipkart-axis.html'
    }
  ],
  disclaimer: 'क्रेडिट कार्ड पर मिलने वाला ब्याज मुक्त समय (Grace period) आमतौर पर 20 से 50 दिन का होता है। नियत तिथि (Due Date) तक बिल न भरने पर 3.5% से 3.75% प्रति माह (42% से 45% वार्षिक) तक का उच्च ब्याज लग सकता है।'
};

const hdfcRegalia = {
  filePath: 'credit-cards/hdfc/regalia-gold.html',
  rootRel: '../..',
  category: 'Credit Cards',
  title: 'HDFC Regalia Gold Credit Card',
  subtitle: 'Premium Travel, Dining & Milestone Rewards with Domestic and International Lounge Privileges',
  officialAuthority: 'HDFC Bank Ltd',
  authorityUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/regalia-gold-credit-card',
  overview: 'HDFC Bank Regalia Gold क्रेडिट कार्ड भारत में प्रीमियम ट्रैवल और लाइफस्टाइल सेगमेंट का एक प्रतिष्ठित कार्ड है। यह कार्ड हवाई अड्डे के लाउंज उपयोग, डाइनिंग प्रिविलेजेस और क्लब विस्तारा सिल्वर सदस्यता जैसी विशेष सुविधाओं के साथ आता है।',
  highlights: [
    { val: '12', label: 'Complimentary Airport Lounge Visits' },
    { val: '4 Pts', label: 'Reward Points per ₹150 Spent' },
    { val: '₹2,500', label: 'Annual Membership Fee (Waivable on ₹4L Spends)' }
  ],
  keyFeatures: [
    { title: 'Airport Lounge Access', desc: 'Complimentary 12 domestic lounge accesses per calendar year across India and Priority Pass membership for overseas travel.' },
    { title: 'SmartBuy Points Redemption', desc: 'Redeem reward points at 1 Point = ₹0.50 for flight and hotel bookings via the HDFC SmartBuy portal.' },
    { title: 'Milestone Flight Vouchers', desc: 'Receive ₹1,500 flight vouchers on quarterly spends of ₹1.5 Lakhs and Marriott vouchers on annual milestones.' }
  ],
  eligibilityCriteria: [
    'Salaried Individuals: Indian residents aged 21 to 60 years with net monthly salary > ₹1,00,000.',
    'Self-Employed: Annual Income Tax Return (ITR) > ₹12 Lakhs per annum.',
    'Strong credit profile with CIBIL score of 750 or above.'
  ],
  rulesOrSteps: [
    'Joining & Renewal Fee: ₹2,500 + applicable GST.',
    'Annual Fee Waiver: Spend ₹4,00,000 in an anniversary year to get renewal fee reversed.',
    'Finance Charge: 3.6% per month (43.2% annually) on unpaid revolving balances.'
  ],
  tableHeaders: ['फीचर / शुल्क मद', 'नियम व शर्तें'],
  tableRows: [
    ['जॉइनिंग शुल्क (Joining Fee)', '₹2,500 + 18% GST'],
    ['रिन्यूअल शुल्क छूट सीमा', 'वार्षिक ₹4,00,000 के कुल खर्च पर छूट'],
    ['रिवॉर्ड पॉइंट वैधता', 'प्राप्ति की तिथि से 2 वर्ष तक वैध']
  ]
};

const sbiSimplyClick = {
  filePath: 'credit-cards/sbi/simplyclick.html',
  rootRel: '../..',
  category: 'Credit Cards',
  title: 'SBI SimplyCLICK Credit Card',
  subtitle: 'Entry-Level Online Shopping Card with Instant Vouchers and 10X Reward Multipliers',
  officialAuthority: 'SBI Cards and Payment Services Ltd',
  authorityUrl: 'https://www.sbicard.com/en/personal/credit-cards/shopping/simplyclick-sbi-card.page',
  overview: 'SBI SimplyCLICK क्रेडिट कार्ड भारत में ऑनलाइन शॉपिंग के शौकीनों के लिए सबसे लोकप्रिय बजट कार्ड्स में से एक है। यह Amazon, Apollo 24|7, BookMyShow, Cleartrip, Domino\'s, Myntra, Netmeds और Yatra जैसे प्रमुख ऑनलाइन मर्चेंट्स पर 10X रिवॉर्ड पॉइंट्स प्रदान करता है।',
  highlights: [
    { val: '₹500', label: 'Amazon Gift Voucher on Joining' },
    { val: '10X', label: 'Reward Points on Partner Online Portals' },
    { val: '1% Fuel', label: 'Surcharge Waiver across India' }
  ],
  keyFeatures: [
    { title: '10X Online Rewards', desc: 'Earn 10 reward points per ₹100 spent on designated e-commerce and delivery partners.' },
    { title: '5X on All Other Online Spends', desc: '5 reward points per ₹100 on every other online merchant transaction.' },
    { title: 'Milestone E-vouchers', desc: 'Cleartrip / Yatra voucher worth ₹2,000 on reaching ₹1 Lakh and ₹2 Lakh annual spends.' }
  ],
  eligibilityCriteria: [
    'Age between 18 and 60 years.',
    'Regular monthly income for salaried / stable ITR for self-employed.',
    'Minimum CIBIL score 720+.'
  ],
  rulesOrSteps: [
    'Annual Membership Fee: ₹499 + GST.',
    'Renewal Fee Reversal: Reversible on reaching ₹1,00,000 annual retail spend.',
    'Interest on unpaid balances: 3.5% per month (42% annualized).'
  ],
  partnerOffer: {
    url: 'https://www.sbicard.com/en/personal/credit-cards/shopping/simplyclick-sbi-card.page',
    label: 'SBI SimplyCLICK कार्ड देखें (Partner Offer)',
    disclosure: 'Disclosure: यह SBI Card का Commercial Partner Offer लिंक है। कार्ड स्वीकृत होने पर Fengoo को referral incentive प्राप्त हो सकता है।'
  }
};

const iciciAmazonPay = {
  filePath: 'credit-cards/icici/amazon-pay.html',
  rootRel: '../..',
  category: 'Credit Cards',
  title: 'Amazon Pay ICICI Bank Credit Card',
  subtitle: 'India\'s Most Popular Co-Branded Lifetime Free Card with Direct Cashback into Amazon Pay Balance',
  officialAuthority: 'ICICI Bank Ltd & Amazon Pay',
  authorityUrl: 'https://www.icicibank.com/personal-banking/cards/credit-cards/amazon-pay-credit-card',
  overview: 'Amazon Pay ICICI Bank क्रेडिट कार्ड भारत का सर्वाधिक लोकप्रिय लाइफटाइम फ्री कार्ड है। इसमें किसी भी प्रकार का जॉइनिंग अथवा वार्षिक शुल्क नहीं है। सारा कैशबैक सीधे आपके Amazon Pay बैलेंस में हर महीने स्वतः क्रेडिट हो जाता है।',
  highlights: [
    { val: '₹0 (Free)', label: 'Lifetime Zero Annual & Joining Fee' },
    { val: '5% Flat', label: 'Unlimited Cashback on Amazon for Prime' },
    { val: '2% Flat', label: 'Cashback on 100+ Partner Merchants' }
  ],
  keyFeatures: [
    { title: 'Zero Maintenance Cost', desc: 'No annual fee, no minimum spend condition for waiver — truly lifetime free.' },
    { title: 'No Reward Points Expiry', desc: 'Cashback is credited directly as Amazon Pay balance every billing cycle, ready for utility bills or shopping.' },
    { title: '1% Fuel Surcharge Waiver', desc: 'Available at all fuel stations across India on transactions between ₹400 and ₹4,000.' }
  ],
  eligibilityCriteria: [
    'Age 18 to 65 years.',
    'Active Amazon India account with prime or regular status.',
    'KYC documents and verifiable residential address in serviced PIN codes.'
  ],
  rulesOrSteps: [
    '5% Cashback on Amazon for Prime members (3% for non-Prime members).',
    '2% Cashback on flight bookings, bill payments, and recharges on Amazon.',
    '1% Cashback on all other retail transactions (excluding fuel, gold, and rent payments).'
  ]
};

const axisFlipkart = {
  filePath: 'credit-cards/axis/flipkart-axis.html',
  rootRel: '../..',
  category: 'Credit Cards',
  title: 'Flipkart Axis Bank Credit Card',
  subtitle: 'Direct Statement Credit Cashback for Flipkart and Cleartrip Shoppers',
  officialAuthority: 'Axis Bank Ltd & Flipkart',
  authorityUrl: 'https://www.axisbank.com/retail/cards/credit-card/flipkart-axis-bank-credit-card',
  overview: 'Flipkart Axis Bank क्रेडिट कार्ड ई-कॉमर्स उपयोगकर्ताओं के लिए एक अग्रणी कैशबैक कार्ड है। इसमें रिवॉर्ड पॉइंट्स को भुनाने का झंझट नहीं होता; सारा कैशबैक सीधे आपके क्रेडिट कार्ड स्टेटमेंट में क्रेडिट हो जाता है।',
  highlights: [
    { val: '5% Flat', label: 'Unlimited Cashback on Flipkart & Cleartrip' },
    { val: '4% Flat', label: 'Cashback on Swiggy, PVR, Uber, Tata 1mg' },
    { val: '1.5% Flat', label: 'Cashback on All Other Domestic Spends' }
  ],
  keyFeatures: [
    { title: 'Direct Statement Cashback', desc: 'Monthly earned cashback is deducted automatically from your credit card statement bill.' },
    { title: '4 Complimentary Lounge Visits', desc: 'Domestic airport lounge visits per calendar year on meeting quarterly spend criteria.' }
  ],
  eligibilityCriteria: ['Age 18 to 70 years, Indian resident with salaried or self-employed income proof.'],
  rulesOrSteps: [
    'Joining & Annual Fee: ₹500 + GST.',
    'Fee Waiver: Spend ₹3,50,000 in an anniversary year to get the annual fee waived.'
  ]
};

// ==========================================
// 2. UPI & PAYMENTS
// ==========================================
const upiHub = {
  filePath: 'upi/index.html',
  rootRel: '..',
  title: 'Unified Payments Interface (UPI)',
  subtitle: 'National Payments Corporation of India (NPCI) Real-Time Payment Architecture',
  category: 'UPI & Digital Payments',
  intro: 'UPI भारत की विश्व-प्रसिद्ध रीयल-टाइम भुगतान प्रणाली है, जिसका विकास भारतीय राष्ट्रीय भुगतान निगम (NPCI) और भारतीय रिज़र्व बैंक (RBI) द्वारा किया गया है। यहाँ जानिए विभिन्न UPI ऐप्स, सुरक्षा नियमों और शिकायत निवारण की प्रक्रिया।',
  gridItems: [
    {
      title: 'BHIM UPI (NPCI)',
      desc: 'भारत सरकार और NPCI का आधिकारिक, डेटा-सुरक्षित और स्वदेशी मोबाइल भुगतान ऐप्लिकेशन।',
      badge: 'Official NPCI App',
      link: 'bhim/bhim.html'
    },
    {
      title: 'PhonePe',
      desc: 'भारत का सबसे बड़ा थर्ड-पार्टी UPI ऐप, जो रिचार्ज, बीमा, FASTag और मर्चेंट QR को सपोर्ट करता है।',
      badge: 'Third-Party App (TPAP)',
      link: 'phonepe/phonepe.html'
    },
    {
      title: 'Google Pay',
      desc: 'गूगल की सुरक्षित टोकनाइजेशन तकनीक और बैंक-ग्रेड सुरक्षा वाला लोकप्रिय UPI प्लेटफॉर्म।',
      badge: 'Third-Party App (TPAP)',
      link: 'google-pay/google-pay.html'
    },
    {
      title: 'Paytm UPI',
      desc: 'मर्चेंट साउंडबॉक्स, RuPay क्रेडिट कार्ड लिंकेज और त्वरित वॉलेट-टू-बैंक ट्रांसफर प्रणाली।',
      badge: 'Third-Party App (TPAP)',
      link: 'paytm/paytm.html'
    },
    {
      title: 'UPI Fraud Protection & Security',
      desc: 'UPI PIN सुरक्षा, साइबर हेल्पलाइन 1930 और गलत खाते में ट्रांसफर हुए पैसे वापस पाने की मानक प्रक्रिया।',
      badge: 'Safety & Awareness',
      link: 'upi-safety/upi-safety.html'
    }
  ],
  disclaimer: 'याद रखें: UPI पर पैसे प्राप्त करने (Receive Money) के लिए कभी भी UPI PIN दर्ज करने की आवश्यकता नहीं होती। केवल पैसे भेजने (Send Money) या बैलेंस जांचने पर ही PIN डालें।'
};

const bhimPage = {
  filePath: 'upi/bhim/bhim.html',
  rootRel: '../..',
  category: 'UPI & Payments',
  title: 'BHIM (Bharat Interface for Money)',
  subtitle: 'Official National Payments Corporation of India (NPCI) UPI Application',
  officialAuthority: 'NPCI & Ministry of Electronics and IT (MeitY)',
  authorityUrl: 'https://www.bhimupi.org.in/',
  overview: 'BHIM (भारत इंटरफेस फॉर मनी) भारतीय राष्ट्रीय भुगतान निगम (NPCI) द्वारा विकसित किया गया भारत का आधिकारिक डिजिटल भुगतान ऐप्लिकेशन है। 30 दिसंबर 2016 को लॉन्च किए गए इस ऐप का उद्देश्य सरल, त्वरित और सुरक्षित वित्तीय लेनदेन को संभव बनाना है।',
  highlights: [
    { val: 'Zero Ads', label: '100% Ad-Free & Data Sovereign' },
    { val: '20+ Languages', label: 'Available in 20 Indian Regional Languages' },
    { val: '₹1,00,000', label: 'Standard Daily Transaction Limit per RBI' }
  ],
  keyFeatures: [
    { title: 'Direct Bank-to-Bank Transfer', desc: 'No wallet intermediary; funds move instantly from sender bank account to receiver bank account 24x7.' },
    { title: 'RuPay Credit Card on UPI', desc: 'Link your RuPay credit card and pay merchant QR codes with a 50-day interest-free credit cycle.' },
    { title: 'Offline UPI (*99#)', desc: 'Works on basic feature phones without internet using USSD code *99# on all telecom networks.' }
  ],
  eligibilityCriteria: [
    'Bank account in any UPI-enabled Indian bank.',
    'Mobile number registered with the bank account inserted in the smartphone.'
  ],
  rulesOrSteps: [
    'Download BHIM from official Google Play Store or Apple App Store.',
    'Verify SIM card via automated SMS.',
    'Select bank name and set 4 or 6 digit UPI PIN using debit card or Aadhaar OTP.'
  ]
};

const upiSafetyPage = {
  filePath: 'upi/upi-safety/upi-safety.html',
  rootRel: '../..',
  category: 'UPI & Consumer Security',
  title: 'UPI Security & Fraud Prevention Guide',
  subtitle: 'Official NPCI & RBI Consumer Guidelines: What to do if funds are debited or transferred mistakenly',
  officialAuthority: 'NPCI & National Cyber Crime Reporting Portal (MHA)',
  authorityUrl: 'https://cybercrime.gov.in/',
  overview: 'डिजिटल भुगतान की गति के साथ धोखाधड़ी के नए तरीके भी सामने आए हैं। यह मार्गदर्शिका आपको UPI पर सुरक्षित रहने, फिशिंग से बचने और गलत खाते में राशि अंतरित होने पर तत्काल वैधानिक कदम उठाने की विस्तृत जानकारी देती है।',
  highlights: [
    { val: '1930', label: 'National Cyber Financial Fraud Helpline' },
    { val: 'Golden Hour', label: 'Report within 2-3 hours to freeze stolen funds' },
    { val: 'CMS RBI', label: 'Integrated Ombudsman for Unresolved Disputes' }
  ],
  keyFeatures: [
    { title: 'The Golden Rule of UPI', desc: 'PIN is entered ONLY to deduct money from your account. NEVER enter UPI PIN to receive cashback, lottery, or buyer payments.' },
    { title: 'Wrong Account Transfer Reversal', desc: 'Under RBI circulars, notify your bank branch manager immediately with UTR number. The bank coordinates with recipient bank for reversal.' },
    { title: 'Auto-Debit Verification', desc: 'Periodically check active UPI Autopay / e-Mandates in your app settings and cancel unused recurring subscriptions.' }
  ],
  eligibilityCriteria: ['All digital banking consumers using UPI.'],
  rulesOrSteps: [
    'Never share OTP, debit card CVV, expiry date, or UPI PIN with anyone claiming to be bank manager.',
    'In case of unauthorized debit, dial 1930 immediately or lodge complaint at cybercrime.gov.in.',
    'Lodge dispute on NPCI portal under UPI Complaint Section.'
  ]
};

// ==========================================
// 3. GOVERNMENT SCHEMES
// ==========================================
const govtHub = {
  filePath: 'government/index.html',
  rootRel: '..',
  title: 'Government Financial Schemes (सरकारी वित्तीय योजनाएं)',
  subtitle: 'Direct Benefit Transfer (DBT), Micro-Credit, Social Security and Women Welfare Schemes',
  category: 'Government Schemes',
  intro: 'भारत सरकार द्वारा आम नागरिकों, किसानों, महिलाओं और सूक्ष्म उद्यमियों के आर्थिक सशक्तिकरण के लिए संचालित प्रमुख योजनाओं की विस्तृत मार्गदर्शिका। यहाँ पात्रता, लाभ और आवेदन की आधिकारिक प्रक्रिया की जानकारी दी गई है।',
  gridItems: [
    {
      title: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
      desc: 'शून्य बैलेंस बचत खाता, ₹2 लाख का मुफ्त दुर्घटना बीमा और ₹10,000 की ओवरड्राफ्ट सुविधा।',
      badge: 'Financial Inclusion',
      link: 'schemes/pm-jan-dhan-yojana.html'
    },
    {
      title: 'PM Kisan Samman Nidhi',
      desc: 'पात्र किसान परिवारों को प्रतिवर्ष ₹6,000 की प्रत्यक्ष आय सहायता, तीन समान किश्तों में DBT द्वारा।',
      badge: 'Direct Income Support',
      link: 'schemes/pm-kisan-samman.html'
    },
    {
      title: 'Pradhan Mantri MUDRA Yojana',
      desc: 'गैर-कॉर्पोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों के लिए ₹10 लाख तक का संपार्श्विक-मुक्त (Collateral-Free) ऋण।',
      badge: 'MSME & Self-Employment',
      link: 'schemes/pm-mudra-yojana.html'
    },
    {
      title: 'Sukanya Samriddhi Yojana (SSY)',
      desc: 'बालिकाओं के भविष्य और शिक्षा के लिए 8.2% उच्चतम कर-मुक्त (EEE) ब्याज दर वाली सरकारी बचत योजना।',
      badge: 'Girl Child Savings',
      link: 'schemes/sukanya-samriddhi-yojana.html'
    },
    {
      title: 'Stand-Up India Scheme',
      desc: 'अनुसूचित जाति/जनजाति और महिला उद्यमियों के लिए ₹10 लाख से ₹1 करोड़ तक का बैंक ऋण समर्थन।',
      badge: 'Women & SC/ST Enterprise',
      link: 'schemes/stand-up-india.html'
    }
  ],
  disclaimer: 'सरकारी योजनाओं में आवेदन के लिए किसी भी अनधिकृत एजेंट या बिचौलिए को नकद भुगतान न करें। योजनाओं के लिए बैंक शाखा, डाकघर या आधिकारिक सरकारी पोर्टल ही वैध माध्यम हैं।'
};

const pmjdyPage = {
  filePath: 'government/schemes/pm-jan-dhan-yojana.html',
  rootRel: '../..',
  category: 'Government Schemes',
  title: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
  subtitle: 'National Mission for Financial Inclusion: Zero Balance Savings, RuPay Debit Card & Accident Insurance',
  officialAuthority: 'Department of Financial Services (DFS), Ministry of Finance',
  authorityUrl: 'https://pmjdy.gov.in/',
  overview: 'प्रधानमंत्री जन धन योजना (PMJDY) भारत में वित्तीय समावेशन के लिए एक ऐतिहासिक राष्ट्रीय मिशन है, जिसकी शुरुआत 28 अगस्त 2014 को हुई थी। इसका उद्देश्य देश के प्रत्येक असंगठित और बैंकिंग-रहित नागरिक को बैंकिंग सेवाओं, ऋण, बीमा और पेंशन से जोड़ना है।',
  highlights: [
    { val: '₹0', label: 'Zero Minimum Balance Requirement' },
    { val: '₹2 Lakh', label: 'Free Accidental Insurance on RuPay Card' },
    { val: '₹10,000', label: 'Overdraft (OD) Facility for Eligible Accounts' }
  ],
  keyFeatures: [
    { title: 'Zero Balance Savings Account', desc: 'No balance maintenance charges or minimum deposit fines across all public and private bank branches.' },
    { title: 'RuPay Debit Card with Insurance', desc: 'Complimentary RuPay debit card with inbuilt ₹2,00,000 accidental insurance cover for cards issued after Aug 2018.' },
    { title: 'Direct Benefit Transfer (DBT)', desc: 'Direct receipt of subsidies under PM-KISAN, MGNREGA, LPG Pahal, and state welfare schemes without leakages.' }
  ],
  eligibilityCriteria: [
    'Any Indian citizen aged 10 years and above who does not hold another bank account.',
    'Accounts can be opened at any bank branch or Bank Mitra (Business Correspondent) outlet.'
  ],
  rulesOrSteps: [
    'Submit simplified KYC documents (Aadhaar or Voter ID or MGNREGA card).',
    'Keep RuPay card active: At least one financial transaction every 90 days is required to maintain accidental insurance validity.'
  ]
};

const ssyPage = {
  filePath: 'government/schemes/sukanya-samriddhi-yojana.html',
  rootRel: '../..',
  category: 'Government Schemes',
  title: 'Sukanya Samriddhi Yojana (SSY)',
  subtitle: 'Beti Bachao Beti Padhao Campaign: High Interest EEE Tax-Free Sovereign Savings Scheme',
  officialAuthority: 'Ministry of Finance & Department of Posts',
  authorityUrl: 'https://www.indiapost.gov.in/',
  overview: 'सुकन्या समृद्धि योजना (SSY) बालिकाओं के उज्ज्वल भविष्य, उच्च शिक्षा और विवाह के खर्चों को पूरा करने के लिए भारत सरकार द्वारा शुरू की गई एक अत्यंत सुरक्षित और उच्च ब्याज वाली लघु बचत योजना है। इस योजना को पूर्ण रूप से EEE (छूट-छूट-छूट) टैक्स लाभ प्राप्त है।',
  highlights: [
    { val: '8.2% p.a.', label: 'Current Sovereign Interest Rate (Compounded Annually)' },
    { val: 'EEE Tax', label: '100% Tax-Free Investment, Interest & Maturity' },
    { val: '₹250 - ₹1.5L', label: 'Flexible Annual Deposit Range' }
  ],
  keyFeatures: [
    { title: 'High Compounded Returns', desc: 'Offers the highest sovereign interest among government small savings instruments, reviewed quarterly by Ministry of Finance.' },
    { title: 'Section 80C Tax Deduction', desc: 'Deposits up to ₹1,50,000 per financial year qualify for deduction under Section 80C of the Income Tax Act.' },
    { title: 'Maturity Duration', desc: 'Matures 21 years from account opening date or at the time of the girl\'s marriage after reaching age 18.' }
  ],
  eligibilityCriteria: [
    'Girl child must be a resident Indian citizen.',
    'Account can be opened by parents/legal guardians from girl\'s birth until she reaches 10 years of age.',
    'Maximum 2 accounts per family (allowed for triplets/twins with medical certification).'
  ],
  rulesOrSteps: [
    'Minimum deposit ₹250 and maximum deposit ₹1,50,000 per financial year.',
    'Deposits required for first 15 years from account opening date; account earns interest for remaining 6 years without fresh deposits.',
    'Partial withdrawal up to 50% allowed for girl\'s higher education after she turns 18 or completes 10th standard.'
  ]
};

// ==========================================
// 4. PENSION & RETIREMENT
// ==========================================
const pensionHub = {
  filePath: 'pension/index.html',
  rootRel: '..',
  title: 'Pension & Retirement Planning (पेंशन व सेवानिवृत्ति)',
  subtitle: 'Statutory Pension Regulators, National Pension System (NPS), Atal Pension Yojana (APY) & EPFO',
  category: 'Pension & Retirement',
  intro: 'पेंशन निधि विनियामक और विकास प्राधिकरण (PFRDA) और कर्मचारी भविष्य निधि संगठन (EPFO) के अंतर्गत भारत में संचालित सामाजिक सुरक्षा और पेंशन योजनाओं की आधिकारिक जानकारी।',
  gridItems: [
    {
      title: 'National Pension System (NPS)',
      desc: 'कम लागत वाली बाज़ार-आधारित पेंशन प्रणाली, जिसमें इक्विटी और डेट निवेश के साथ अतिरिक्त ₹50,000 का टैक्स लाभ मिलता है।',
      badge: 'PFRDA Regulated',
      link: 'nps/nps.html'
    },
    {
      title: 'Atal Pension Yojana (APY)',
      desc: 'असंगठित क्षेत्र के कामगारों के लिए 60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 प्रतिमाह की गारंटीड सरकारी पेंशन।',
      badge: 'Guaranteed Pension',
      link: 'atal-pension-yojana/atal-pension-yojana.html'
    },
    {
      title: 'EPFO Employee Provident Fund (EPF)',
      desc: 'संगठित क्षेत्र के वेतनभोगी कर्मचारियों के लिए अनिवार्य 12% अंशदान और 8.25% वार्षिक ब्याज वाली भविष्य निधि।',
      badge: 'Ministry of Labour',
      link: 'epfo/epf-scheme.html'
    }
  ],
  disclaimer: 'अटल पेंशन योजना में 1 अक्टूबर 2022 से आयकर दाता (Income Tax Payers) नए खाते नहीं खोल सकते। यदि वे खाता खोलते हैं तो उसे बंद कर दिया जाएगा।'
};

const npsPage = {
  filePath: 'pension/nps/nps.html',
  rootRel: '../..',
  category: 'Pension & Retirement',
  title: 'National Pension System (NPS)',
  subtitle: 'Voluntary Market-Linked Retirement Vehicle Regulated by PFRDA with Exclusive Section 80CCD(1B) Tax Relief',
  officialAuthority: 'Pension Fund Regulatory and Development Authority (PFRDA)',
  authorityUrl: 'https://enps.nsdl.com/',
  overview: 'राष्ट्रीय पेंशन प्रणाली (NPS) भारत सरकार द्वारा नागरिकों को वृद्धावस्था आय सुरक्षा प्रदान करने के उद्देश्य से शुरू की गई एक स्वैच्छिक, परिभाषित-अंशदान सेवानिवृत्ति बचत योजना है। यह विश्व की सबसे कम लागत वाली निवेश योजनाओं में से एक है जिसका प्रबंधन PFRDA द्वारा अधिकृत पेशेवर फंड मैनेजरों द्वारा किया जाता है।',
  highlights: [
    { val: '₹50,000 Extra', label: 'Additional Tax Deduction under Sec 80CCD(1B)' },
    { val: '60% Lump Sum', label: 'Completely Tax-Free Withdrawal at Age 60' },
    { val: '40% Annuity', label: 'Minimum Annuity Purchase for Monthly Pension' }
  ],
  keyFeatures: [
    { title: 'Tier I & Tier II Accounts', desc: 'Tier I is the core locked-in tax-saving retirement account; Tier II is a voluntary liquid investment account with no exit restrictions.' },
    { title: 'Choice of Asset Allocation', desc: 'Choose between Active Choice (invest up to 75% in Equity E) or Auto Choice (Life Cycle fund with automated de-risking based on age).' },
    { title: 'Lowest Fund Management Cost', desc: 'Fund management fee is capped around 0.09% p.a., ensuring compounding wealth is not eroded by high expense ratios.' }
  ],
  eligibilityCriteria: [
    'Any citizen of India (Resident or NRI) aged between 18 and 70 years.',
    'KYC compliance via Aadhaar / PAN on eNPS or Point of Presence (POP).'
  ],
  rulesOrSteps: [
    'Minimum annual contribution of ₹1,000 in Tier I account.',
    'At age 60, up to 60% of corpus can be withdrawn lump sum tax-free; remaining 40% must purchase an annuity from an approved life insurer.',
    'Early exit before age 60 requires 80% of accumulated corpus to be converted into an annuity.'
  ]
};

const apyPage = {
  filePath: 'pension/atal-pension-yojana/atal-pension-yojana.html',
  rootRel: '../..',
  category: 'Pension & Retirement',
  title: 'Atal Pension Yojana (APY)',
  subtitle: 'Government Guaranteed Minimum Monthly Pension for Workers in the Unorganized Sector',
  officialAuthority: 'PFRDA & Ministry of Finance',
  authorityUrl: 'https://www.npscra.nsdl.co.in/scheme-details.php',
  overview: 'अटल पेंशन योजना (APY) भारत के असंगठित क्षेत्र के कामगारों और छोटे व्यवसायियों को सामाजिक सुरक्षा देने के लिए शुरू की गई एक ऐतिहासिक पेंशन योजना है। इसमें 60 वर्ष की आयु पूर्ण होने पर ₹1,000, ₹2,000, ₹3,000, ₹4,000 या ₹5,000 प्रतिमाह की गारंटीड पेंशन जीवनभर मिलती है।',
  highlights: [
    { val: '₹1,000 - ₹5,000', label: 'Guaranteed Monthly Pension after Age 60' },
    { val: '18 - 40 Yrs', label: 'Entry Age Eligibility Window' },
    { val: 'Govt Guarantee', label: 'Corpus Deficit Covered by Central Government' }
  ],
  keyFeatures: [
    { title: 'Sovereign Pension Guarantee', desc: 'If actual investment returns on pension contributions are lower than expected, the shortfall is funded by the Government of India.' },
    { title: 'Spouse & Nominee Protection', desc: 'On subscriber\'s death, same monthly pension continues to spouse; on spouse\'s death, accumulated corpus is returned to nominee.' },
    { title: 'Automated Bank Debit', desc: 'Monthly contributions are debited automatically from subscriber\'s savings bank account.' }
  ],
  eligibilityCriteria: [
    'Indian citizen aged 18 to 40 years with an active savings bank account.',
    'Subscriber must NOT be an income tax payer (as per rules effective 1 Oct 2022).'
  ],
  rulesOrSteps: [
    'Higher the entry age, higher the monthly contribution required (e.g. ₹210/month at age 18 for ₹5,000 pension vs ₹1,454/month at age 40).'
  ]
};

// ==========================================
// 5. TAX & COMPLIANCE
// ==========================================
const taxHub = {
  filePath: 'tax/index.html',
  rootRel: '..',
  title: 'Income Tax & GST Guide (टैक्स व विनियामक नियम)',
  subtitle: 'Updated Income Tax Slabs (Budget 2024-25), New vs Old Regime Analysis & GST Slabs',
  category: 'Tax & Compliance',
  intro: 'केंद्रीय प्रत्यक्ष कर बोर्ड (CBDT) और GST परिषद के नवीनतम दिशा-निर्देशों के अनुसार आयकर स्लैब, मानक कटौती (Standard Deduction) और वस्तु एवं सेवा कर की दरों का सटीक विवरण।',
  gridItems: [
    {
      title: 'Income Tax Slabs (FY 2024-25 / AY 2025-26)',
      desc: 'नई और पुरानी कर व्यवस्था के अनुसार लागू आयकर दरें, ₹75,000 की नई मानक कटौती और शून्य कर देयता सीमा।',
      badge: 'CBDT Income Tax',
      link: 'income-tax-slabs/income-tax-slabs.html'
    },
    {
      title: 'New vs Old Tax Regime Comparison',
      desc: 'किन करदाताओं को नई व्यवस्था चुननी चाहिए और किन्हें 80C, 80D, HRA कटौती के साथ पुरानी व्यवस्था में लाभ होगा।',
      badge: 'Comparative Guide',
      link: 'new-vs-old-regime/new-vs-old-regime.html'
    },
    {
      title: 'GST Slabs & Rates (0%, 5%, 12%, 18%, 28%)',
      desc: 'भारत में वस्तुओं और सेवाओं पर लगने वाले जीएसटी स्लैब, आवश्यक खाद्य वस्तुओं की छूट और इनपुट टैक्स क्रेडिट (ITC)।',
      badge: 'CBIC / GST Council',
      link: 'gst-slabs/gst-slabs.html'
    }
  ],
  disclaimer: 'वित्तीय वर्ष 2023-24 से "नई कर व्यवस्था" (New Tax Regime) को डिफॉल्ट रिजीम बनाया गया है। यदि आप पुरानी कर व्यवस्था चुनना चाहते हैं तो ITR फाइल करते समय फॉर्म 10-IEA अथवा उपयुक्त विकल्प चुनना अनिवार्य है।'
};

const incomeTaxSlabs = {
  filePath: 'tax/income-tax-slabs/income-tax-slabs.html',
  rootRel: '../..',
  category: 'Tax & Compliance',
  title: 'Income Tax Slabs for FY 2024-25 (AY 2025-26)',
  subtitle: 'Statutory Slabs under Section 115BAC (New Tax Regime) and Traditional Old Regime',
  officialAuthority: 'Income Tax Department, Ministry of Finance',
  authorityUrl: 'https://www.incometax.gov.in/',
  overview: 'केंद्रीय बजट 2024 में वित्त मंत्री द्वारा नई कर व्यवस्था (New Tax Regime) के तहत स्लैब दरों को और अधिक युक्तिसंगत बनाया गया है तथा वेतनभोगियों के लिए मानक कटौती (Standard Deduction) को ₹50,000 से बढ़ाकर ₹75,000 कर दिया गया है।',
  highlights: [
    { val: '₹75,000', label: 'Standard Deduction for Salaried under New Regime' },
    { val: '₹7.75 Lakh', label: 'Zero Tax Liability for Salaried Employees (Rebate 87A)' },
    { val: 'Default', label: 'New Tax Regime is the Default Tax Regime' }
  ],
  keyFeatures: [
    { title: 'New Regime Slabs (Budget 2024)', desc: 'Up to ₹3L: Nil | ₹3L - ₹7L: 5% | ₹7L - ₹10L: 10% | ₹10L - ₹12L: 15% | ₹12L - ₹15L: 20% | Above ₹15L: 30%.' },
    { title: 'Rebate under Section 87A', desc: 'Resident individuals with taxable income up to ₹7,00,000 under new regime get full rebate, resulting in zero tax.' },
    { title: 'Health & Education Cess', desc: 'Flat 4% health and education cess applies on the aggregate income tax amount.' }
  ],
  eligibilityCriteria: ['All resident and non-resident individual taxpayers with taxable income.'],
  rulesOrSteps: [
    'Salaried taxpayers get ₹75,000 standard deduction under New Regime and ₹50,000 under Old Regime.',
    'Pensioners get ₹25,000 deduction for family pension under New Regime.'
  ],
  tableHeaders: ['आय स्लैब (Income Range)', 'नई कर व्यवस्था दर (New Regime)', 'पुरानी कर व्यवस्था दर (Old Regime)'],
  tableRows: [
    ['₹0 से ₹2,50,000 तक', 'शून्य (Nil)', 'शून्य (Nil)'],
    ['₹2,50,001 से ₹3,00,000', 'शून्य (Nil)', '5% (Rebate up to ₹5L)'],
    ['₹3,00,001 से ₹5,00,000', '5%', '5%'],
    ['₹5,00,001 से ₹7,00,000', '5%', '20%'],
    ['₹7,00,001 से ₹10,00,000', '10%', '20%'],
    ['₹10,00,001 से ₹12,00,000', '15%', '30%'],
    ['₹12,00,001 से ₹15,00,000', '20%', '30%'],
    ['₹15,00,000 से अधिक', '30%', '30%']
  ]
};

// ==========================================
// 6. SAVINGS & DEPOSITS
// ==========================================
const savingsHub = {
  filePath: 'savings/index.html',
  rootRel: '..',
  title: 'Savings & Deposit Systems in India (बचत व जमा)',
  subtitle: 'Savings Accounts, DICGC Guarantee, Sweep-in FDs, Public Provident Fund (PPF) and Emergency Funds',
  category: 'Savings & Deposits',
  intro: 'भारतीय रिज़र्व बैंक (RBI) द्वारा नियंत्रित बैंकों और भारतीय डाक विभाग के अंतर्गत उपलब्ध विभिन्न बचत माध्यमों, सुरक्षा नियमों और ब्याज दरों का संपूर्ण विश्लेषण।',
  gridItems: [
    {
      title: 'Savings Account Fundamentals & DICGC Rules',
      desc: 'बचत खाते के प्रकार, न्यूनतम शेष नियम, ब्याज गणना पद्धति और ₹5 लाख तक का DICGC बीमा सुरक्षा कवच।',
      badge: 'Banking Essentials',
      link: 'savings-account/savings-account.html'
    },
    {
      title: 'Auto Sweep-in Fixed Deposit Facility',
      desc: 'बचत खाते की तरलता और सावधि जमा (FD) का उच्च ब्याज एक साथ पाने की बैंक सुविधा।',
      badge: 'Smart Liquidity',
      link: 'sweep-in-fd/sweep-in.html'
    },
    {
      title: 'Public Provident Fund (PPF)',
      desc: '15 वर्ष की सावधि सरकारी योजना, 7.1% कर-मुक्त चक्रवृद्धि ब्याज और संपूर्ण संप्रभु (Sovereign) गारंटी।',
      badge: 'Post Office / Bank Scheme',
      link: 'public-provident-fund/ppf.html'
    },
    {
      title: 'Emergency Fund Architecture',
      desc: 'आपातकालीन कोष का निर्माण कैसे करें: 6 महीने के अनिवार्य खर्चों को सुरक्षित और सुलभ रखने की रणनीति।',
      badge: 'Financial Resilience',
      link: 'emergency-fund/emergency-fund.html'
    }
  ],
  disclaimer: 'बचत खाते से एक वित्तीय वर्ष में प्राप्त ₹10,000 तक का ब्याज आयकर की धारा 80TTA के अंतर्गत कर-मुक्त है (वरिष्ठ नागरिकों के लिए धारा 80TTB के तहत ₹50,000)।'
};

const ppfPage = {
  filePath: 'savings/public-provident-fund/ppf.html',
  rootRel: '../..',
  category: 'Savings & Deposits',
  title: 'Public Provident Fund (PPF)',
  subtitle: '15-Year Sovereign Backed Long-Term Savings Scheme with Complete EEE Tax Exemption',
  officialAuthority: 'Ministry of Finance & Reserve Bank of India',
  authorityUrl: 'https://www.indiapost.gov.in/',
  overview: 'पब्लिक प्रॉविडेंट फंड (PPF) भारत में सर्वाधिक लोकप्रिय और सुरक्षित दीर्घकालिक बचत माध्यमों में से एक है। 1968 में शुरू की गई इस योजना का उद्देश्य नागरिकों में छोटी बचत की आदत डालना और सेवानिवृत्ति कोष तैयार करना है। इसका संचालन बैंकों और डाकघरों द्वारा किया जाता है और यह पूर्ण संप्रभु गारंटी से सुरक्षित है।',
  highlights: [
    { val: '7.1% p.a.', label: 'Current Sovereign Interest Rate (Compounded Annually)' },
    { val: 'EEE Tax', label: 'Tax-free Investment, Accrued Interest & Maturity' },
    { val: '15 Years', label: 'Lock-in Maturity with 5-year Block Extensions' }
  ],
  keyFeatures: [
    { title: 'Sovereign Guarantee', desc: '100% principal and interest guaranteed by the Central Government; deposits cannot be attached by any court decree.' },
    { title: 'Tax Benefits under 80C', desc: 'Annual deposits up to ₹1,50,000 qualify for deduction under Section 80C.' },
    { title: 'Loan & Partial Withdrawal', desc: 'Loan facility available from 3rd to 6th financial year; partial withdrawal allowed from 7th year onwards.' }
  ],
  eligibilityCriteria: [
    'Resident Indian individuals in their own name or on behalf of minors.',
    'Only one PPF account per individual is legally permitted across India (NRIs cannot open new PPF accounts).'
  ],
  rulesOrSteps: [
    'Minimum deposit ₹500 and maximum deposit ₹1,50,000 per financial year.',
    'Deposits made on or before the 5th of any month earn interest for that entire calendar month.'
  ]
};

// ==========================================
// 7. LOANS & BORROWING
// ==========================================
const loansHub = {
  filePath: 'loans/index.html',
  rootRel: '..',
  title: 'Loans & Credit in India (ऋण व कर्ज़ डायरेक्टरी)',
  subtitle: 'Repo-Linked Lending Rates, Processing Fees, CIBIL Requirements and RBI Lending Guidelines',
  category: 'Loans & Credit',
  intro: 'भारतीय रिज़र्व बैंक (RBI) के डिजिटल लेंडिंग दिशा-निर्देशों और पारदर्शिता मानकों के अनुसार होम लोन, पर्सनल लोन, ऑटो लोन और गोल्ड लोन की आधिकारिक जानकारी।',
  gridItems: [
    {
      title: 'Home Loan (आवास ऋण)',
      desc: 'रेपो लिंक्ड लेंडिंग रेट (RLLR), प्रधानमंत्री आवास योजना सब्सिडी और 30 वर्ष तक की अवधि के आवास ऋण।',
      badge: 'Secured Mortgage',
      link: 'home-loan/home-loan.html'
    },
    {
      title: 'Personal Loan (व्यक्तिगत ऋण)',
      desc: 'असुरक्षित व्यक्तिगत ऋण, ब्याज दर संरचना, प्री-पेमेंट पेनल्टी नियम और आवश्यक सिबिल स्कोर।',
      badge: 'Unsecured Credit',
      link: 'personal-loan/personal-loan.html'
    },
    {
      title: 'Gold Loan (स्वर्ण ऋण)',
      desc: 'सोने के आभूषणों के बदले त्वरित ऋण: RBI का 75% LTV अनुपात नियम, मूल्यांकन और पुनर्भुगतान विकल्प।',
      badge: 'Secured Asset',
      link: 'gold-loan/gold-loan.html'
    },
    {
      title: 'Education Loan (शिक्षा ऋण)',
      desc: 'भारत व विदेश में उच्च शिक्षा के लिए ऋण: मोरेटोरियम अवधि, बिना गारंटी वाले ₹7.5 लाख तक के ऋण।',
      badge: 'Student Finance',
      link: 'education-loan/education-loan.html'
    }
  ],
  disclaimer: 'RBI के नियमों के अनुसार बैंकों द्वारा फ्लोटिंग रेट होम लोन या पर्सनल लोन पर किसी भी प्रकार का फोरक्लोज़र शुल्क (Prepayment Penalty) लेना प्रतिबंधित है।'
};

const homeLoanPage = {
  filePath: 'loans/home-loan/home-loan.html',
  rootRel: '../..',
  category: 'Loans & Credit',
  title: 'Home Loan Guide (आवास ऋण)',
  subtitle: 'External Benchmark Lending Rate (EBLR), Loan to Value (LTV) Limits and Tax Exemptions under 80C & 24(b)',
  officialAuthority: 'Reserve Bank of India & National Housing Bank (NHB)',
  authorityUrl: 'https://www.rbi.org.in/',
  overview: 'आवास ऋण (Home Loan) एक लंबी अवधि का सुरक्षित ऋण है जिसे रिहायशी मकान या फ्लैट खरीदने, निर्माण करने अथवा नवीनीकरण के लिए लिया जाता है। अक्टूबर 2019 से RBI के निर्देशानुसार सभी खुदरा फ्लोटिंग दर आवास ऋण बाहरी बेंचमार्क (जैसे RBI रेपो दर) से अनिवार्य रूप से जुड़े हुए हैं।',
  highlights: [
    { val: 'Repo Linked', label: 'Transparent External Benchmark (EBLR) Rates' },
    { val: 'Up to 30 Yrs', label: 'Maximum Flexible Repayment Tenor' },
    { val: '₹2 Lakh', label: 'Annual Interest Tax Exemption under Sec 24(b)' }
  ],
  keyFeatures: [
    { title: 'RBI LTV Guidelines', desc: 'RBI restricts banks to lend up to 90% for loans ≤ ₹30L; 80% for loans between ₹30L and ₹75L; and 75% for loans > ₹75L.' },
    { title: 'Zero Foreclosure Penalty', desc: 'No prepayment or foreclosure penalty allowed on individual floating-rate home loans as mandated by RBI.' },
    { title: 'Tax Benefits', desc: 'Deduction up to ₹1.5L on principal repayment under Sec 80C, and up to ₹2L on interest paid under Sec 24(b) (under Old Tax Regime).' }
  ],
  eligibilityCriteria: [
    'Salaried or self-employed Indian residents aged 21 to 65 years.',
    'Stable income profile with CIBIL score ideally 750 or above.'
  ],
  rulesOrSteps: [
    'Check credit score and clear existing high-cost liabilities.',
    'Property legal and technical title verification by bank-approved lawyers/valuers.'
  ]
};

// ==========================================
// 8. INSURANCE
// ==========================================
const insuranceHub = {
  filePath: 'insurance/index.html',
  rootRel: '..',
  title: 'Insurance in India (बीमा डायरेक्टरी)',
  subtitle: 'IRDAI Guidelines, Term Life Insurance, Claim Settlement Ratio (CSR), and Health Floaters',
  category: 'Insurance',
  intro: 'भारतीय बीमा विनियामक और विकास प्राधिकरण (IRDAI) के दिशा-निर्देशों के अनुसार जीवन बीमा, स्वास्थ्य बीमा और मोटर वाहन बीमा के वैधानिक नियम और क्लेम सेटलमेंट प्रक्रिया।',
  gridItems: [
    {
      title: 'Term Life Insurance (टर्म इंश्योरेंस)',
      desc: 'किफायती प्रीमियम पर उच्च जीवन सुरक्षा कवर, क्लेम सेटलमेंट रेशियो (CSR) और धारा 45 के अविवाद्यता नियम।',
      badge: 'Pure Protection',
      link: 'life/term-insurance.html'
    },
    {
      title: 'Health Insurance & Family Floaters',
      desc: 'कैशलेस हॉस्पिटलाइजेशन, नो क्लेम बोनस (NCB), प्री-एग्जिस्टिंग डिजीज वेटिंग पीरियड और सह-भुगतान नियम।',
      badge: 'Medical Cover',
      link: 'health/individual-family-floater.html'
    },
    {
      title: 'Motor Insurance (मोटर वाहन बीमा)',
      desc: 'मोटर वाहन अधिनियम 1988 के तहत अनिवार्य थर्ड-पार्टी लायबिलिटी और व्यापक (Comprehensive) सुरक्षा।',
      badge: 'Motor Vehicles Act',
      link: 'vehicle/motor-comprehensive.html'
    }
  ],
  disclaimer: 'बीमा अधिनियम 1938 की धारा 45 के अनुसार, पॉलिसी जारी होने के 3 वर्ष पूर्ण होने के बाद बीमा कंपनी धोखाधड़ी के आधार पर भी क्लेम को अस्वीकार नहीं कर सकती।'
};

const termInsurancePage = {
  filePath: 'insurance/life/term-insurance.html',
  rootRel: '../..',
  category: 'Insurance',
  title: 'Term Life Insurance Guide',
  subtitle: 'Pure Risk Protection, High Sum Assured, Claim Settlement Ratios and Section 45 Incontestability',
  officialAuthority: 'Insurance Regulatory and Development Authority of India (IRDAI)',
  authorityUrl: 'https://irdai.gov.in/',
  overview: 'टर्म इंश्योरेंस सबसे शुद्ध और सबसे किफायती जीवन बीमा उत्पाद है। इसमें पॉलिसीधारक की असामयिक मृत्यु की स्थिति में उसके नामांकित व्यक्ति (Nominee) को एकमुश्त बीमा राशि (Sum Assured) दी जाती है, जिससे परिवार की वित्तीय स्थिरता सुरक्षित रहती है।',
  highlights: [
    { val: 'Section 45', label: 'Claims cannot be rejected after 3 continuous policy years' },
    { val: '10-20X Income', label: 'Recommended Minimum Sum Assured Multiple' },
    { val: '100% Tax Free', label: 'Death Benefit Exempt under Sec 10(10D)' }
  ],
  keyFeatures: [
    { title: 'High Cover at Low Cost', desc: 'A 25-year-old non-smoker can secure ₹1 Crore life cover for as low as ₹600 to ₹800 per month.' },
    { title: 'Claim Settlement Ratio (CSR)', desc: 'Always examine the insurer\'s 3-year consistent CSR (>98%) as published in IRDAI\'s Annual Report.' },
    { title: 'Full Medical Disclosure', desc: 'Accurately disclose existing medical conditions, smoking/tobacco usage, and family history to prevent claim disputes.' }
  ],
  eligibilityCriteria: ['Resident Indians aged 18 to 65 years with verifiable income documents.'],
  rulesOrSteps: [
    'Choose policy term up to expected retirement age (60 to 65 years).',
    'Avail critical illness or accidental disability riders if required.'
  ]
};

// ==========================================
// 9. INVESTMENTS
// ==========================================
const investmentsHub = {
  filePath: 'investments/index.html',
  rootRel: '..',
  title: 'Investments & Wealth Creation in India (निवेश डायरेक्टरी)',
  subtitle: 'SEBI Regulated Mutual Funds, SIP, Demat Accounts, Sovereign Gold Bonds & RBI Retail Direct',
  category: 'Investments & Securities',
  intro: 'भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI) और भारतीय रिज़र्व बैंक (RBI) द्वारा विनियमित वित्तीय परिसंपत्तियों, म्यूचुअल फंड, सॉवरेन गोल्ड बॉन्ड और सरकारी प्रतिभूतियों की आधिकारिक जानकारी।',
  gridItems: [
    {
      title: 'Mutual Funds & Systematic Investment Plan (SIP)',
      desc: 'इक्विटी और डेट म्यूचुअल फंड, डायरेक्ट बनाम रेगुलर प्लान, एक्सपेंस रेशियो और चक्रवृद्धि का लाभ।',
      badge: 'AMFI / SEBI Regulated',
      link: 'mutual-funds/sip-equity-debt.html'
    },
    {
      title: 'Sovereign Gold Bonds (SGB)',
      desc: 'भारत सरकार की ओर से RBI द्वारा जारी स्वर्ण बॉन्ड: 2.5% वार्षिक निश्चित ब्याज और परिपक्वता पर कर-मुक्त पूंजीगत लाभ।',
      badge: 'RBI Sovereign Instrument',
      link: 'bonds/sovereign-gold-bonds.html'
    },
    {
      title: 'RBI Retail Direct Portal',
      desc: 'खुदरा निवेशकों के लिए सरकारी बॉन्ड (G-Secs), ट्रेजरी बिल्स (T-Bills) और राज्य विकास ऋण (SDL) में सीधा निवेश।',
      badge: 'Government Securities',
      link: 'government-securities/rbi-retail-direct.html'
    }
  ],
  disclaimer: 'म्यूचुअल फंड और शेयर बाज़ार में निवेश बाज़ार जोखिमों के अधीन हैं। निवेश करने से पूर्व योजना संबंधी सभी दस्तावेज़ सावधानीपूर्वक पढ़ें।'
};

const sipPage = {
  filePath: 'investments/mutual-funds/sip-equity-debt.html',
  rootRel: '../..',
  category: 'Investments & Securities',
  title: 'Mutual Funds & Systematic Investment Plan (SIP)',
  subtitle: 'Disciplined Rupee-Cost Averaging Regulated by SEBI & AMFI',
  officialAuthority: 'Securities and Exchange Board of India (SEBI) & AMFI',
  authorityUrl: 'https://www.sebi.gov.in/',
  overview: 'सिस्टमैटिक इन्वेस्टमेंट प्लान (SIP) म्यूचुअल फंड में नियमित रूप से (साप्ताहिक, मासिक या त्रैमासिक) एक निश्चित राशि निवेश करने का एक अनुशासित माध्यम है। यह रुपये की लागत के औसत (Rupee Cost Averaging) और चक्रवृद्धि ब्याज (Power of Compounding) के सिद्धांत पर काम करता है।',
  highlights: [
    { val: '₹500', label: 'Minimum Starting Monthly Investment' },
    { val: 'Direct Plans', label: 'Save 0.5% - 1.5% commission by choosing Direct Plan' },
    { val: 'Rupee Averaging', label: 'More units bought when markets fall, fewer when high' }
  ],
  keyFeatures: [
    { title: 'Direct vs Regular Plans', desc: 'Direct plans have zero broker commission, resulting in a lower expense ratio and higher accumulated returns over 10-20 years.' },
    { title: 'Capital Gains Tax (LTCG / STCG)', desc: 'Equity mutual fund LTCG above ₹1.25 Lakh per year is taxed at 12.5%; STCG (held < 1 year) is taxed at 20%.' },
    { title: 'Diversified Portfolio', desc: 'Spreads risk across 40-70 companies, managed by SEBI-registered professional fund managers.' }
  ],
  eligibilityCriteria: ['Any individual with a PAN card and completed KYC via an approved KRA.'],
  rulesOrSteps: [
    'Complete KYC with Aadhaar, PAN, and bank account verification.',
    'Set up automated bank mandate (NACH) for monthly SIP debit.'
  ]
};

// ==========================================
// 10. FINANCIAL EDUCATION
// ==========================================
const educationHub = {
  filePath: 'financial-education/index.html',
  rootRel: '..',
  title: 'Financial Education & Literacy (वित्तीय साक्षरता)',
  subtitle: 'Understanding CIBIL Credit Scores, 50-30-20 Budgeting Rule, Compound Interest & Fraud Safeguards',
  category: 'Financial Education',
  intro: 'भारतीय रिज़र्व बैंक (RBI) के राष्ट्रीय वित्तीय शिक्षा रणनीति (NSFE) के अनुरूप तैयार की गई सरल व व्यावहारिक साक्षरता मार्गदर्शिकाएं।',
  gridItems: [
    {
      title: 'CIBIL Credit Score Architecture',
      desc: 'सिबिल स्कोर 300 से 900 तक कैसे निर्धारित होता है, इसे 750+ कैसे बनाएं और गलत प्रविष्टियों को कैसे सुधारें।',
      badge: 'Credit Literacy',
      link: 'cibil-credit-score/cibil-credit-score.html'
    },
    {
      title: 'The 50/30/20 Budgeting Rule',
      desc: 'आय का सही आवंटन: 50% अनिवार्य जरूरतें, 30% जीवनशैली की इच्छाएं और 20% भविष्य की बचत व निवेश।',
      badge: 'Personal Budgeting',
      link: 'budgeting-50-30-20/budgeting-rule.html'
    },
    {
      title: 'Power of Compounding & Rule of 72',
      desc: 'अल्बर्ट आइंस्टीन द्वारा आठवां अजूबा कहा गया चक्रवृद्धि ब्याज: निवेश को दोगुना करने का समय कैसे ज्ञात करें।',
      badge: 'Wealth Mathematics',
      link: 'compound-interest-rule/compound-interest.html'
    },
    {
      title: 'Financial Fraud Awareness',
      desc: 'डिजिटल अरेस्ट, लोन ऐप ब्लैकमेल, फिशिंग और पोंजी स्कीमों से स्वयं और अपने परिवार को बचाने के व्यावहारिक उपाय।',
      badge: 'Cyber Awareness',
      link: 'financial-fraud-awareness/fraud-awareness.html'
    }
  ],
  disclaimer: 'वित्तीय ज्ञान ही सबसे बड़ी सुरक्षा है। किसी भी अवास्तविक उच्च रिटर्न (जैसे 1 महीने में पैसा डबल) के दावों में न आएं।'
};

const cibilPage = {
  filePath: 'financial-education/cibil-credit-score/cibil-credit-score.html',
  rootRel: '../..',
  category: 'Financial Education',
  title: 'CIBIL Credit Score Guide',
  subtitle: 'RBI Regulated Credit Information Companies: Score Factors, Maintenance and Dispute Resolution',
  officialAuthority: 'TransUnion CIBIL, Experian, Equifax, CRIF High Mark (RBI Licensed)',
  authorityUrl: 'https://www.cibil.com/',
  overview: 'क्रेडिट स्कोर 300 से 900 के बीच का 3 अंकों का एक संख्यात्मक सूचकांक है जो किसी व्यक्ति की साख और ऋण चुकाने के इतिहास को दर्शाता है। भारत में रिज़र्व बैंक द्वारा लाइसेंस प्राप्त 4 क्रेडिट ब्यूरो हैं: TransUnion CIBIL, Experian, Equifax, और CRIF High Mark। 750 या उससे अधिक का स्कोर उत्कृष्ट माना जाता है।',
  highlights: [
    { val: '750+', label: 'Ideal Credit Score for Lowest Loan Interest Rates' },
    { val: '1 Free Report', label: 'Every Indian entitled to 1 Free Credit Report per year' },
    { val: '30%', label: 'Credit Utilization Ratio (CUR) should stay below 30%' }
  ],
  keyFeatures: [
    { title: 'Payment History (35% Weight)', desc: 'Paying loan EMIs and credit card bills on time without default has the highest impact on your score.' },
    { title: 'Credit Utilization Ratio (30% Weight)', desc: 'Using more than 30% of your total credit card limit signals credit-hunger and lowers your score.' },
    { title: 'Credit Age & Mix (25% Weight)', desc: 'A healthy mix of secured (home loan) and unsecured (credit card) loans held over many years boosts credit reputation.' }
  ],
  eligibilityCriteria: ['Any individual with an active PAN and credit history in India.'],
  rulesOrSteps: [
    'Never miss an EMI due date — set up automated bank standing instructions.',
    'Check credit report annually for fraudulent loans or clerical errors and raise formal dispute on bureau portals.'
  ]
};

// ==========================================
// 11. OFFICIAL REGULATORY LINKS PAGE
// ==========================================
function generateOfficialLinksPage() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Official Financial & Regulatory Links Directory | Fengoo.in</title>
  <meta name="description" content="Centralized verified directory of official Indian financial regulators, government tax portals, cyber fraud helplines, and statutory institutions." />
  <link rel="canonical" href="https://fengoo.in/official-links/official-links.html" />
  ${getStyles('..')}
</head>
<body>
  ${getHeader('..')}

  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="../index.html">Home</a></li>
      <li><span>Official Regulatory Links</span></li>
    </ul>
  </div>

  <section class="container" style="padding-top: 1.5rem; padding-bottom: 1.5rem;">
    <div style="max-width: 800px;">
      <span class="badge-official" style="margin-bottom: 0.5rem; display:inline-block;">🏛️ Statutory & Regulatory Portals</span>
      <h1 style="font-size: 2.25rem; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 0.75rem;">Verified Official Links Directory</h1>
      <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6;">
        भारतीय वित्तीय व्यवस्था के सभी प्रमुख विनियामकों (Regulators), सरकारी मंत्रालयों और वैधानिक सुरक्षा पोर्टल्स के आधिकारिक और सत्यापित लिंक्स की संपूर्ण सूची। ये सभी लिंक्स 100% गैर-व्यावसायिक हैं।
      </p>
    </div>
  </section>

  <main class="container" style="padding-bottom: 4rem;">
    <div class="grid grid-2" style="gap: 1.5rem;" id="official-links-container">
      <!-- Generated via JS from window.FENGOO_LINKS -->
    </div>

    <div class="banner-notice" style="margin-top: 2.5rem;">
      <strong>सत्यापन नीति (Verification Policy):</strong> Fengoo केवल .gov.in, .org.in अथवा संबंधित विनियामक द्वारा अधिसूचित आधिकारिक डोमेन को ही यहाँ सूचीबद्ध करता है। किसी भी संदिग्ध पोर्टल की रिपोर्ट करने के लिए हमारे संपर्क माध्यम का उपयोग करें।
    </div>
  </main>

  ${getFooter('..')}
  ${getScripts('..')}

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('official-links-container');
      const links = window.FENGOO_LINKS ? window.FENGOO_LINKS.filter(l => l.type === 'official') : [];

      if (!container || !links.length) return;

      container.innerHTML = links.map(l => \`
        <div class="card card-hoverable" style="display:flex; flex-direction:column;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
            <span class="badge-official">🏛️ \${l.category}</span>
            <span class="badge-status active">Official Govt/Regulator</span>
          </div>
          <h3 style="font-size:1.2rem; margin-bottom:0.35rem;">\${l.title}</h3>
          <p style="font-size:0.85rem; color:var(--primary); font-weight:600; margin-bottom:0.5rem;">\${l.provider}</p>
          <p style="font-size:0.875rem; color:var(--text-muted); line-height:1.5; margin-bottom:1.25rem;">\${l.description}</p>
          <div style="margin-top:auto; padding-top:0.75rem; border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.75rem; color:var(--text-muted);">\${l.source}</span>
            <a href="\${l.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
              \${l.buttonText || 'आधिकारिक पोर्टल खोलें ↗'}
            </a>
          </div>
        </div>
      \`).join('');
    });
  </script>
</body>
</html>`;
}

// Compile list of pages to generate
const pagesToBuild = [
  // Hubs
  () => writeFile(creditCardsHub.filePath, generateHubPage(creditCardsHub)),
  () => writeFile(upiHub.filePath, generateHubPage(upiHub)),
  () => writeFile(govtHub.filePath, generateHubPage(govtHub)),
  () => writeFile(pensionHub.filePath, generateHubPage(pensionHub)),
  () => writeFile(taxHub.filePath, generateHubPage(taxHub)),
  () => writeFile(savingsHub.filePath, generateHubPage(savingsHub)),
  () => writeFile(loansHub.filePath, generateHubPage(loansHub)),
  () => writeFile(insuranceHub.filePath, generateHubPage(insuranceHub)),
  () => writeFile(investmentsHub.filePath, generateHubPage(investmentsHub)),
  () => writeFile(educationHub.filePath, generateHubPage(educationHub)),

  // Detail Pages
  () => writeFile(hdfcRegalia.filePath, generateTopicPage(hdfcRegalia)),
  () => writeFile(sbiSimplyClick.filePath, generateTopicPage(sbiSimplyClick)),
  () => writeFile(iciciAmazonPay.filePath, generateTopicPage(iciciAmazonPay)),
  () => writeFile(axisFlipkart.filePath, generateTopicPage(axisFlipkart)),
  () => writeFile(bhimPage.filePath, generateTopicPage(bhimPage)),
  () => writeFile(upiSafetyPage.filePath, generateTopicPage(upiSafetyPage)),
  () => writeFile(pmjdyPage.filePath, generateTopicPage(pmjdyPage)),
  () => writeFile(ssyPage.filePath, generateTopicPage(ssyPage)),
  () => writeFile(npsPage.filePath, generateTopicPage(npsPage)),
  () => writeFile(apyPage.filePath, generateTopicPage(apyPage)),
  () => writeFile(incomeTaxSlabs.filePath, generateTopicPage(incomeTaxSlabs)),
  () => writeFile(ppfPage.filePath, generateTopicPage(ppfPage)),
  () => writeFile(homeLoanPage.filePath, generateTopicPage(homeLoanPage)),
  () => writeFile(termInsurancePage.filePath, generateTopicPage(termInsurancePage)),
  () => writeFile(sipPage.filePath, generateTopicPage(sipPage)),
  () => writeFile(cibilPage.filePath, generateTopicPage(cibilPage)),

  // Official Links Directory
  () => writeFile('official-links/official-links.html', generateOfficialLinksPage())
];

for (const buildFn of pagesToBuild) {
  buildFn();
}

console.log('Finished building Hubs, Detail pages, and Official links.');
