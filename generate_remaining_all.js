import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';

function makeSimpleTopicPage(filePath, rootRel, cat, title, subtitle, authority, authUrl, overview, highlights, features, rules) {
  const highlightsHTML = (highlights || []).map(h => `
    <div class="stat-box">
      <span class="stat-num">${h.val}</span>
      <span class="stat-label">${h.label}</span>
    </div>
  `).join('');

  const featuresHTML = (features || []).map(f => `
    <div class="product-item-card">
      <h4>${f.name}</h4>
      <p>${f.desc}</p>
    </div>
  `).join('');

  const rulesHTML = (rules || []).map(r => `
    <li><span class="check-icon">✓</span> <span>${r}</span></li>
  `).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Fengoo Platform</title>
  <meta name="description" content="${subtitle}" />
  <link rel="canonical" href="https://fengoo.in/${filePath}" />
  ${getStyles(rootRel)}
</head>
<body>
  ${getHeader(rootRel)}

  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="${rootRel}/index.html">Home</a></li>
      <li><span>${cat}</span></li>
      <li><span>${title}</span></li>
    </ul>
  </div>

  <section class="entity-hero">
    <div class="container entity-hero-inner">
      <div class="entity-hero-main">
        <div class="entity-hero-badge-row">
          <span class="badge-official">🏛️ ${cat}</span>
          <span class="badge-status active">Verified & Active</span>
        </div>
        <h1 class="entity-hero-title">${title}</h1>
        <p class="entity-hero-tagline">${subtitle}</p>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:1.25rem;">
          <a href="${authUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">🌐 आधिकारिक पोर्टल खोलें ↗</a>
          <a href="#features" class="btn btn-secondary">प्रमुख बिंदु</a>
        </div>
      </div>
      <div class="entity-hero-sidebar">
        <div class="quick-spec-item">
          <span class="quick-spec-label">अधिकृत संस्था:</span>
          <span class="quick-spec-val">${authority}</span>
        </div>
        <div class="quick-spec-item">
          <span class="quick-spec-label">सत्यापन:</span>
          <span class="quick-spec-val" style="color:var(--accent);">आधिकारिक स्रोत</span>
        </div>
      </div>
    </div>
  </section>

  <main class="container">
    <div class="page-layout">
      <aside class="page-sidebar-nav">
        <a href="#overview" class="page-sidebar-link active">परिचय</a>
        <a href="#features" class="page-sidebar-link">विशेषताएं</a>
        <a href="#rules" class="page-sidebar-link">नियम व पात्रता</a>
      </aside>

      <div class="page-content-area">
        ${highlights && highlights.length ? `<div class="stats-card-grid" style="margin-bottom:2rem;">${highlightsHTML}</div>` : ''}

        <article class="content-block" id="overview">
          <h2>विषय विवरण (Overview)</h2>
          <p>${overview}</p>
        </article>

        <article class="content-block" id="features">
          <h2>मुख्य विशेषताएं (Key Features)</h2>
          <div class="product-cards-grid">
            ${featuresHTML}
          </div>
        </article>

        <article class="content-block" id="rules">
          <h2>वैधानिक नियम व पात्रता (Rules & Eligibility)</h2>
          <ul class="checklist-styled">
            ${rulesHTML}
          </ul>
        </article>
      </div>
    </div>
  </main>

  ${getFooter(rootRel)}
  ${getScripts(rootRel)}
</body>
</html>`;
}

// Data array for all remaining pages
const items = [
  // Payments Hub & files
  {
    path: 'payments/index.html',
    root: '..',
    cat: 'Payments',
    title: 'Indian Payment Systems (NEFT, RTGS, IMPS & RuPay)',
    sub: 'Real-time retail and wholesale payment systems operated by RBI and NPCI.',
    auth: 'Reserve Bank of India & NPCI',
    url: 'https://www.rbi.org.in/',
    overview: 'भारत की भुगतान और निपटान प्रणाली (Payment & Settlement Systems) विश्व की सबसे उन्नत डिजिटल प्रणालियों में से एक है। इसमें NEFT, RTGS, IMPS, RuPay और NACH शामिल हैं।',
    highlights: [{ val: '24x7x365', label: 'NEFT & RTGS Availability' }, { val: '₹0 Charges', label: 'Online NEFT/RTGS for Savings' }],
    features: [
      { name: 'NEFT (National Electronic Funds Transfer)', desc: 'Batch-based settlement system operating half-hourly intervals round the clock.' },
      { name: 'RTGS (Real Time Gross Settlement)', desc: 'High-value continuous gross fund transfer for transactions ≥ ₹2,00,000.' },
      { name: 'IMPS (Immediate Payment Service)', desc: 'Instant 24x7 interbank fund transfer via mobile and internet banking managed by NPCI.' }
    ],
    rules: ['Online NEFT and RTGS are free of customer charges for savings bank account holders as per RBI mandate.']
  },
  {
    path: 'payments/neft-rtgs/neft-rtgs.html',
    root: '../..',
    cat: 'Payments',
    title: 'NEFT vs RTGS Transfer Architecture',
    sub: 'Operating limits, batch processing timelines, and RBI customer rights.',
    auth: 'RBI Payment Systems',
    url: 'https://www.rbi.org.in/',
    overview: 'NEFT और RTGS भारतीय रिज़र्व बैंक द्वारा संचालित दो प्रमुख राष्ट्रीय भुगतान प्रणालियाँ हैं। दोनों प्रणालियाँ वर्ष के 365 दिन 24 घंटे उपलब्ध रहती हैं।',
    highlights: [{ val: '₹2 Lakh+', label: 'Minimum RTGS Amount' }, { val: 'No Min/Max', label: 'NEFT Limit' }],
    features: [
      { name: 'NEFT Batches', desc: 'Settles every 30 minutes; ideal for routine transfers, salaries, and vendor bills.' },
      { name: 'RTGS Real-Time', desc: 'Instantaneous individual transaction settlement for urgent high-value business transfers.' }
    ],
    rules: ['Inward remittances are completely free for all recipients across all banks.']
  },
  {
    path: 'payments/imps/imps.html',
    root: '../..',
    cat: 'Payments',
    title: 'IMPS (Immediate Payment Service)',
    sub: '24x7 instantaneous interbank electronic fund transfer powered by NPCI.',
    auth: 'NPCI',
    url: 'https://www.npci.org.in/',
    overview: 'IMPS भारतीय राष्ट्रीय भुगतान निगम (NPCI) द्वारा प्रदान की जाने वाली एक त्वरित अंतर-बैंक इलेक्ट्रॉनिक निधि अंतरण सेवा है, जो मोबाइल नंबर, MMID या खाता संख्या और IFSC के माध्यम से तुरंत पैसा भेजती है।',
    highlights: [{ val: 'Instant', label: 'Transfer Speed' }, { val: '₹5 Lakh', label: 'Per Transaction Limit' }],
    features: [{ name: 'P2P & P2A Transfer', desc: 'Send money using Mobile Number + MMID or Account Number + IFSC code.' }],
    rules: ['Operates 24x7 including bank holidays and Sundays.']
  },
  {
    path: 'payments/rupay/rupay.html',
    root: '../..',
    cat: 'Payments',
    title: 'RuPay Card Network (NPCI)',
    sub: 'India\'s indigenous card payment network with global acceptance and UPI credit integration.',
    auth: 'NPCI',
    url: 'https://www.rupay.co.in/',
    overview: 'RuPay भारत का स्वदेशी कार्ड भुगतान नेटवर्क है जिसे NPCI द्वारा 2012 में लॉन्च किया गया था। यह भारतीय बैंकों के लिए प्रसंस्करण लागत घटाने और वित्तीय संप्रभुता सुनिश्चित करने के उद्देश्य से बनाया गया है।',
    highlights: [{ val: 'Lowest MDR', label: 'Cost to Merchants' }, { val: 'UPI Linkage', label: 'Credit Card on UPI support' }],
    features: [{ name: 'RuPay Credit on UPI', desc: 'Link RuPay credit cards directly to UPI apps like BHIM, PhonePe, Google Pay.' }],
    rules: ['Accepted at all domestic ATMs, POS terminals, and e-commerce websites across India.']
  },
  {
    path: 'payments/wallets/wallets.html',
    root: '../..',
    cat: 'Payments',
    title: 'Prepaid Payment Instruments (PPI Wallets)',
    sub: 'RBI Master Directions on PPIs: Full-KYC vs Small PPI wallets, interoperability and safety.',
    auth: 'RBI Master Directions on PPIs',
    url: 'https://www.rbi.org.in/',
    overview: 'प्रीपेड पेमेंट इंस्ट्रूमेंट्स (PPI) वे साधन हैं जो उनमें रखी गई राशि के मूल्य के आधार पर वस्तुओं और सेवाओं की खरीद, वित्तीय सेवाओं के संचालन और धन प्रेषण की सुविधा देते हैं।',
    highlights: [{ val: '₹2 Lakh', label: 'Full KYC PPI Limit' }, { val: '₹10,000', label: 'Small PPI Monthly Limit' }],
    features: [{ name: 'Interoperability', desc: 'Full-KYC wallets can send and receive money via UPI QR codes.' }],
    rules: ['Full KYC is mandatory for wallet interoperability and funds withdrawal.']
  },
  {
    path: 'payments/naach-e-mandate/naach.html',
    root: '../..',
    cat: 'Payments',
    title: 'NACH & e-Mandate Systems',
    sub: 'National Automated Clearing House for high-volume recurring debits like SIP, EMI and utility bills.',
    auth: 'NPCI & RBI',
    url: 'https://www.npci.org.in/',
    overview: 'NACH (नेशनल ऑटोमेटेड क्लियरिंग हाउस) NPCI द्वारा संचालित एक वेब-आधारित समाधान है जो बैंकों, वित्तीय संस्थानों और कॉरपोरेट्स को बड़े पैमाने पर आवर्ती इलेक्ट्रॉनिक लेनदेन (जैसे वेतन, लाभांश, ईएमआई, एसआईपी) की सुविधा देता है।',
    highlights: [{ val: 'E-Sign', label: 'Instant e-Mandate via Netbanking/Debit Card' }, { val: 'Zero Bounces', label: 'Automated Scheduling' }],
    features: [{ name: 'e-Mandate', desc: 'Paperless electronic mandate setup within 2 minutes using Aadhaar OTP or Debit card.' }],
    rules: ['Customers can cancel or modify active NACH mandates through their net banking portal.']
  },

  // UPI Apps
  {
    path: 'upi/phonepe/phonepe.html',
    root: '../..',
    cat: 'UPI',
    title: 'PhonePe UPI Guide',
    sub: 'Third-Party Application Provider (TPAP) operating on YES Bank, ICICI Bank, and Axis Bank PSP gateways.',
    auth: 'NPCI & RBI TPAP Guidelines',
    url: 'https://www.phonepe.com/',
    overview: 'PhonePe भारत का अग्रणी डिजिटल भुगतान प्लेटफॉर्म है जो NPCI के UPI नेटवर्क पर थर्ड-पार्टी ऐप्लिकेशन प्रोवाइडर (TPAP) के रूप में कार्य करता है। यह UPI, यूटिलिटी बिल, रिचार्ज, सोना और बीमा सेवाएं प्रदान करता है।',
    highlights: [{ val: 'Multi-Bank', label: 'Multi-PSP Architecture' }, { val: 'Zero Charges', label: 'Standard UPI Payments' }],
    features: [{ name: 'UPI Lite', desc: 'Pin-less micro-payments up to ₹500 from dedicated on-device wallet.' }],
    rules: ['Never share PhonePe password, OTP, or UPI PIN with anyone.']
  },
  {
    path: 'upi/google-pay/google-pay.html',
    root: '../..',
    cat: 'UPI',
    title: 'Google Pay (GPay) India',
    sub: 'Tokenized UPI & RuPay credit card payment platform backed by Google security.',
    auth: 'NPCI TPAP Framework',
    url: 'https://pay.google.com/intl/en_in/about/',
    overview: 'Google Pay भारत में NPCI के UPI ढांचे पर निर्मित एक डिजिटल भुगतान ऐप है। यह सीधे आपके बैंक खाते से जुड़ा होता है और सुरक्षा के लिए गूगल की मल्टी-लेयर एन्क्रिप्शन और फ्रॉड डिटेक्शन तकनीक का उपयोग करता है।',
    highlights: [{ val: 'Tokenized', label: 'Card Security' }, { val: 'Multi-Bank PSP', label: 'HDFC, ICICI, SBI, Axis' }],
    features: [{ name: 'Spot Platform', desc: 'Integrated micro-apps for booking train tickets, ordering food, and paying utilities.' }],
    rules: ['PIN is required only when transferring money, not for receiving rewards.']
  },
  {
    path: 'upi/paytm/paytm.html',
    root: '../..',
    cat: 'UPI',
    title: 'Paytm UPI System',
    sub: 'Third-party UPI application operating via partner scheduled commercial banks.',
    auth: 'NPCI & RBI Multi-Bank TPAP',
    url: 'https://paytm.com/',
    overview: 'Paytm UPI ऐप NPCI के बहु-बैंक (Multi-Bank TPAP) मॉडल पर कार्य करता है, जिसमें Axis Bank, HDFC Bank, SBI और Yes Bank इसके अधिकृत PSP बैंक के रूप में कार्य करते हैं।',
    highlights: [{ val: 'Soundbox', label: 'Instant Audio Payment Confirmation' }, { val: 'RuPay on UPI', label: 'Linked Credit Payments' }],
    features: [{ name: 'UPI Money Transfer', desc: 'Send money instantly to any phone number, UPI ID, or bank account.' }],
    rules: ['All consumer funds reside securely in users\' own scheduled commercial bank accounts.']
  },

  // Remaining Loans
  {
    path: 'loans/personal-loan/personal-loan.html',
    root: '../..',
    cat: 'Loans',
    title: 'Personal Loan Guide (व्यक्तिगत ऋण)',
    sub: 'Unsecured retail lending: Interest rate benchmarks, processing charges, and CIBIL impact.',
    auth: 'RBI Digital Lending Directions',
    url: 'https://www.rbi.org.in/',
    overview: 'पर्सनल लोन एक असुरक्षित (Unsecured) ऋण है जिसे किसी भी व्यक्तिगत वित्तीय आवश्यकता (जैसे चिकित्सा आपातकाल, गृह नवीनीकरण, शादी) के लिए बिना किसी संपत्ति को गिरवी रखे लिया जा सकता है।',
    highlights: [{ val: '10.5% - 24%', label: 'Typical Interest Rate Range' }, { val: '12 - 60 Mos', label: 'Repayment Tenors' }],
    features: [{ name: 'Zero Collateral', desc: 'No physical asset or property mortgage required.' }],
    rules: ['Always check the Annual Percentage Rate (APR) and Key Fact Statement (KFS) before signing.']
  },
  {
    path: 'loans/education-loan/education-loan.html',
    root: '../..',
    cat: 'Loans',
    title: 'Education Loan & Vidya Lakshmi Portal',
    sub: 'Government subsidized student loans, moratorium period rules, and tax deductions under Section 80E.',
    auth: 'Ministry of Education & IBA Guidelines',
    url: 'https://www.vidyalakshmi.co.in/',
    overview: 'शिक्षा ऋण भारत व विदेश में उच्च शिक्षा प्राप्त करने वाले छात्रों के लिए उपलब्ध कराया जाता है। भारत सरकार के विद्या लक्ष्मी पोर्टल के माध्यम से छात्र विभिन्न बैंकों के शिक्षा ऋण के लिए एक ही फॉर्म से आवेदन कर सकते हैं।',
    highlights: [{ val: 'Moratorium', label: 'Course Duration + 1 Year Repayment Holiday' }, { val: 'Sec 80E', label: '100% Tax Deduction on Interest Paid' }],
    features: [{ name: 'Collateral-free up to ₹7.5L', desc: 'Under CGFSEL guarantee scheme, loans up to ₹7.5 Lakhs do not require third-party collateral.' }],
    rules: ['Repayment holiday (moratorium) applies during course duration plus 6 to 12 months.']
  },
  {
    path: 'loans/vehicle-loan/vehicle-loan.html',
    root: '../..',
    cat: 'Loans',
    title: 'Vehicle & Car Loan Guide',
    sub: 'New and used car loans: Hypothecation rules, on-road vs ex-showroom financing.',
    auth: 'RBI Retail Lending Guidelines',
    url: 'https://www.rbi.org.in/',
    overview: 'वाहन ऋण नए अथवा प्रयुक्त दोपहिया और चारपहिया वाहनों की खरीद के लिए प्रदान किया जाता है। जब तक ऋण चुकता नहीं होता, वाहन के आरसी (RC) पर बैंक का दृष्टिबंधन (Hypothecation) रहता है।',
    highlights: [{ val: 'Up to 90%', label: 'Financing on On-Road Price' }, { val: '1 - 7 Years', label: 'Flexible Tenors' }],
    features: [{ name: 'Hypothecation Removal', desc: 'Form 35 and NOC issued by bank upon full loan clearance to remove hypothecation from RTO.' }],
    rules: ['Comprehensive motor insurance is mandatory throughout the vehicle loan tenure.']
  },
  {
    path: 'loans/gold-loan/gold-loan.html',
    root: '../..',
    cat: 'Loans',
    title: 'Gold Loan (स्वर्ण ऋण)',
    sub: 'RBI statutory 75% Loan-to-Value (LTV) cap, gold purity assaying, and bullet repayment schemes.',
    auth: 'RBI Master Directions on Gold Loans',
    url: 'https://www.rbi.org.in/',
    overview: 'गोल्ड लोन सोने के आभूषणों को बैंक अथवा विनियमित NBFC के पास सुरक्षित रखकर लिया जाने वाला त्वरित ऋण है। RBI के नियमों के अनुसार बैंक सोने के बाजार मूल्य का अधिकतम 75% तक ऋण (LTV) दे सकते हैं।',
    highlights: [{ val: 'Max 75%', label: 'RBI Statutory LTV Ratio' }, { val: 'Bullet Option', label: 'Pay interest and principal together at end of tenure' }],
    features: [{ name: 'Secure Vault Storage', desc: 'Pledged ornaments are stored in high-security bank vaults insured against theft.' }],
    rules: ['Only 18 to 22 karat gold ornaments eligible; gold bullion/bars have restricted lending norms.']
  },
  {
    path: 'loans/business-loan/business-loan.html',
    root: '../..',
    cat: 'Loans',
    title: 'MSME & Business Loans in India',
    sub: 'Working capital, Cash Credit (CC), Overdraft (OD), and CGTMSE collateral-free credit.',
    auth: 'Ministry of MSME & SIDBI',
    url: 'https://www.cgtmse.in/',
    overview: 'सूक्ष्म, लघु और मध्यम उद्यमों (MSME) के लिए कार्यशील पूंजी, मशीनरी खरीद और व्यापार विस्तार हेतु बैंक ऋण। CGTMSE योजना के तहत ₹5 करोड़ तक के पात्र ऋण बिना किसी संपार्श्विक (Collateral) के दिए जाते हैं।',
    highlights: [{ val: '₹5 Crore', label: 'CGTMSE Collateral-Free Ceiling' }, { val: 'Udyam Portal', label: 'Mandatory MSME Registration' }],
    features: [{ name: 'Cash Credit / Overdraft', desc: 'Pay interest only on the utilized amount from the sanctioned limit.' }],
    rules: ['Udyam Registration Certificate is required to avail priority sector lending benefits.']
  },
  {
    path: 'loans/loan-against-property/loan-against-property.html',
    root: '../..',
    cat: 'Loans',
    title: 'Loan Against Property (LAP)',
    sub: 'Mortgaging commercial or residential real estate for high-value funding at lower interest rates.',
    auth: 'RBI Mortgage Lending Guidelines',
    url: 'https://www.rbi.org.in/',
    overview: 'लोन अगेंस्ट प्रॉपर्टी (LAP) एक सुरक्षित ऋण है जिसमें उधारकर्ता अपने पूर्ण स्वामित्व वाले आवासीय या व्यावसायिक भूखंड/भवन को बैंक के पास गिरवी रखकर कम ब्याज दर पर लंबी अवधि के लिए बड़ी राशि प्राप्त करता है।',
    highlights: [{ val: 'Up to 15 Yrs', label: 'Extended Repayment Period' }, { val: '50% - 65%', label: 'Typical LTV on Property Valuation' }],
    features: [{ name: 'Lower Interest than Personal Loan', desc: 'Being secured by tangible real estate, interest rates are substantially lower.' }],
    rules: ['Clear legal title, approved building plan, and encumbrance certificate (EC) are required.']
  },

  // Remaining Insurance
  {
    path: 'insurance/life/lic-tech-term.html',
    root: '../..',
    cat: 'Insurance',
    title: 'LIC Tech Term (Plan 854)',
    sub: 'Life Insurance Corporation of India\'s online pure risk non-participating term insurance policy.',
    auth: 'Life Insurance Corporation of India (LIC)',
    url: 'https://licindia.in/',
    overview: 'LIC Tech Term (प्लान 854) भारतीय जीवन बीमा निगम द्वारा ऑनलाइन उपलब्ध कराया जाने वाला एक शुद्ध टर्म एश्योरेंस प्लान है। यह केवल ऑनलाइन खरीदा जा सकता है जिससे मध्यस्थ कमीशन नहीं लगता और प्रीमियम दरें प्रतिस्पर्धी होती हैं।',
    highlights: [{ val: 'Sovereign Backing', label: 'Government of India Sovereign Guarantee under Sec 37 of LIC Act' }, { val: 'Online Only', label: 'Lower Premium Rates' }],
    features: [{ name: 'Flexible Payout Options', desc: 'Option for nominees to receive death benefit in lump sum or in monthly installments over 5, 10, or 15 years.' }],
    rules: ['Available only through LIC\'s official web portal.']
  },
  {
    path: 'insurance/health/individual-family-floater.html',
    root: '../..',
    cat: 'Insurance',
    title: 'Health Insurance & Family Floater Guide',
    sub: 'IRDAI Health Regulations: Cashless networks, pre-existing disease waiting periods, and No Claim Bonus (NCB).',
    auth: 'IRDAI',
    url: 'https://irdai.gov.in/',
    overview: 'स्वास्थ्य बीमा अस्पताल में भर्ती होने, सर्जरी और गंभीर बीमारियों के भारी चिकित्सकीय खर्चों से परिवार को सुरक्षा प्रदान करता है। फैमिली फ्लोटर पॉलिसी में पूरे परिवार के लिए एक साझा बीमा राशि (Sum Insured) होती है।',
    highlights: [{ val: '100% Cashless', label: 'Network Hospital Coverage' }, { val: 'Sec 80D', label: 'Tax Deductions up to ₹25,000 / ₹50,000 for Seniors' }],
    features: [{ name: 'Pre & Post Hospitalization', desc: 'Covers medical bills incurred 30-60 days before admission and 90-180 days after discharge.' }],
    rules: ['Check pre-existing disease (PED) waiting period (mandated maximum 3 years by IRDAI).']
  },
  {
    path: 'insurance/vehicle/motor-comprehensive.html',
    root: '../..',
    cat: 'Insurance',
    title: 'Motor Insurance (Third-Party & Comprehensive)',
    sub: 'Motor Vehicles Act 1988 statutory mandates, zero-depreciation riders, and No Claim Bonus (NCB).',
    auth: 'Ministry of Road Transport and Highways (MoRTH) & IRDAI',
    url: 'https://morth.nic.in/',
    overview: 'मोटर वाहन अधिनियम के अनुसार भारत की सार्वजनिक सड़कों पर चलने वाले प्रत्येक वाहन के लिए कम से कम थर्ड-पार्टी बीमा अनिवार्य है। कॉम्प्रिहेंसिव पॉलिसी वाहन स्वामी के स्वयं के नुकसान (Own Damage) को भी कवर करती है।',
    highlights: [{ val: 'Mandatory', label: 'Third Party Liability by Law' }, { val: 'Up to 50%', label: 'No Claim Bonus (NCB) Discount on Renewal' }],
    features: [{ name: 'Zero Depreciation Add-on', desc: 'Ensures 100% claim on fiber, glass, rubber, and metal parts without depreciation deduction.' }],
    rules: ['Driving without valid insurance attracts heavy fines under Section 196 of the Motor Vehicles Act.']
  },
  {
    path: 'insurance/general/travel-insurance.html',
    root: '../..',
    cat: 'Insurance',
    title: 'Travel Insurance Guide (Domestic & International)',
    sub: 'Overseas emergency medical expenses, baggage loss, flight cancellation, and Schengen visa requirements.',
    auth: 'IRDAI',
    url: 'https://irdai.gov.in/',
    overview: 'यात्रा बीमा यात्रा के दौरान होने वाले अप्रत्याशित वित्तीय नुकसानों जैसे मेडिकल इमरजेंसी, उड़ान रद्दीकरण, पासपोर्ट गुम होना और बैगेज चोरी से सुरक्षा प्रदान करता है। कई देशों (जैसे शेंगेन क्षेत्र) के वीजा के लिए यह अनिवार्य है।',
    highlights: [{ val: '€30,000', label: 'Minimum Medical Cover for Schengen Visa' }, { val: '24x7 Assistance', label: 'Worldwide Emergency Support' }],
    features: [{ name: 'Overseas Medical Cover', desc: 'Protects against exorbitant overseas healthcare bills and medical evacuation.' }],
    rules: ['Purchase policy prior to departure from India to ensure continuous cover.']
  },

  // Remaining Investments
  {
    path: 'investments/stocks/equity-demat.html',
    root: '../..',
    cat: 'Investments',
    title: 'Equity & Demat Account Infrastructure',
    sub: 'SEBI, NSDL & CDSL architecture: Stock trading fundamentals, depository participants, and STT charges.',
    auth: 'SEBI, NSDL & CDSL',
    url: 'https://www.sebi.gov.in/',
    overview: 'भारत में शेयरों और प्रतिभूतियों में निवेश करने के लिए डीमैट (Demat) और ट्रेडिंग खाता अनिवार्य है। भारत में दो केंद्रीय डिपॉजिटरी हैं: NSDL और CDSL, जो निवेशकों के शेयरों को इलेक्ट्रॉनिक रूप में सुरक्षित रखती हैं।',
    highlights: [{ val: 'SEBI Regulated', label: 'Strict Market Oversight' }, { val: 'T+1 Settlement', label: 'Fastest Global Trade Settlement Cycle' }],
    features: [{ name: 'Demat + Trading + Bank 3-in-1', desc: 'Seamless movement of funds and securities between savings bank and stock exchanges (NSE/BSE).' }],
    rules: ['Always ensure two-factor authentication (2FA) is enabled on your stock broking app.']
  },
  {
    path: 'investments/bonds/sovereign-gold-bonds.html',
    root: '../..',
    cat: 'Investments',
    title: 'Sovereign Gold Bonds (SGB)',
    sub: 'RBI government securities denominated in grams of gold: 2.5% annual coupon and tax-free maturity.',
    auth: 'Reserve Bank of India & Ministry of Finance',
    url: 'https://rbi.org.in/',
    overview: 'सॉवरेन गोल्ड बॉन्ड (SGB) भारत सरकार की ओर से रिज़र्व बैंक द्वारा जारी किए जाने वाले सरकारी प्रतिभूति बॉन्ड हैं। ये भौतिक सोने को घर पर रखने के जोखिमों और मेकिंग चार्ज के नुकसान से मुक्त होकर सोने में निवेश का सबसे सुरक्षित साधन हैं।',
    highlights: [{ val: '2.50% p.a.', label: 'Fixed Annual Interest (Credited Half-Yearly)' }, { val: '100% Tax-Free', label: 'Capital Gains Tax Exempt on 8-Year Maturity' }],
    features: [{ name: 'Zero Making Charges', desc: 'Invest at 999 purity gold price without storage or purity anxiety.' }],
    rules: ['Matures in 8 years; early exit allowed after 5th year on coupon payment dates.']
  },
  {
    path: 'investments/government-securities/rbi-retail-direct.html',
    root: '../..',
    cat: 'Investments',
    title: 'RBI Retail Direct Portal',
    sub: 'Direct individual access to Government Securities (G-Secs), Treasury Bills (T-Bills) and State Development Loans (SDLs).',
    auth: 'Reserve Bank of India',
    url: 'https://rbiretaildirect.org.in/',
    overview: 'RBI रिटेल डायरेक्ट योजना खुदरा व्यक्तिगत निवेशकों को सीधे सरकारी प्रतिभूतियों के प्राथमिक और द्वितीयक बाजार में निवेश करने की सुविधा देती है। इसमें खाता खोलना और उसका रखरखाव पूरी तरह से मुफ़्त है।',
    highlights: [{ val: '₹0 Account Fee', label: 'Zero Maintenance or Intermediary Fee' }, { val: 'Sovereign Safety', label: 'Zero Default Risk backed by Govt of India' }],
    features: [{ name: 'T-Bills & G-Secs', desc: 'Invest in 91-day, 182-day, 364-day Treasury Bills and long term 10-40 year sovereign bonds.' }],
    rules: ['Requires an Indian bank account, PAN, and active mobile/email for OTP verification.']
  },
  {
    path: 'investments/other/etf-index-funds.html',
    root: '../..',
    cat: 'Investments',
    title: 'Index Funds & Exchange Traded Funds (ETFs)',
    sub: 'Passive low-cost investing tracking Nifty 50 and BSE Sensex benchmarks.',
    auth: 'SEBI & AMFI',
    url: 'https://www.amfiindia.com/',
    overview: 'इंडेक्स फंड और ईटीएफ (ETF) निष्क्रिय निवेश (Passive Investing) उपकरण हैं जो किसी निश्चित सूचकांक (जैसे निफ्टी 50 या सेंसेक्स) की कंपनियों में उसी अनुपात में निवेश करते हैं। इनका व्यय अनुपात (Expense Ratio) सक्रिय फंड्स की तुलना में बहुत कम होता है।',
    highlights: [{ val: 'Low Cost', label: 'Expense ratios as low as 0.05% - 0.20%' }, { val: 'Zero Fund Manager Bias', label: 'Exact Index Replication' }],
    features: [{ name: 'ETFs Real-Time Trading', desc: 'ETFs trade on stock exchanges throughout market hours like ordinary shares.' }],
    rules: ['ETFs require a Demat and trading account, while Index Funds can be bought without a Demat account via regular mutual fund portals.']
  },

  // Remaining Govt Schemes
  {
    path: 'government/schemes/pm-kisan-samman.html',
    root: '../..',
    cat: 'Government',
    title: 'PM Kisan Samman Nidhi',
    sub: 'Direct income support of ₹6,000 per year in three four-monthly installments to farmer families.',
    auth: 'Ministry of Agriculture and Farmers Welfare',
    url: 'https://pmkisan.gov.in/',
    overview: 'प्रधानमंत्री किसान सम्मान निधि (PM-KISAN) भारत सरकार द्वारा छोटे और सीमांत किसानों को वित्तीय सहायता प्रदान करने के लिए शुरू की गई एक केंद्रीय क्षेत्र की योजना है। इसके तहत ₹6,000 प्रति वर्ष की राशि तीन बराबर किस्तों (₹2,000 प्रत्येक) में सीधे किसानों के आधार-सीडेड बैंक खातों में अंतरित की जाती है।',
    highlights: [{ val: '₹6,000', label: 'Annual Direct Benefit Transfer' }, { val: '100% Central', label: 'Funded entirely by Government of India' }],
    features: [{ name: 'e-KYC Mandatory', desc: 'Farmers must complete OTP-based or biometric e-KYC on the portal.' }],
    rules: ['Institutional landholders and income tax-paying farmer families are excluded from benefits.']
  },
  {
    path: 'government/schemes/pm-mudra-yojana.html',
    root: '../..',
    cat: 'Government',
    title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    sub: 'Collateral-free micro finance up to ₹10 Lakh for small manufacturing, trading and service units.',
    auth: 'MUDRA & Department of Financial Services',
    url: 'https://www.mudra.org.in/',
    overview: 'प्रधानमंत्री मुद्रा योजना (PMMY) गैर-कॉर्पोरेट, गैर-कृषि लघु और सूक्ष्म उद्यमों को ₹10 लाख तक का ऋण प्रदान करने के लिए शुरू की गई है। ये ऋण वाणिज्यिक बैंकों, क्षेत्रीय ग्रामीण बैंकों, लघु वित्त बैंकों और एनबीएफसी द्वारा दिए जाते हैं।',
    highlights: [{ val: 'Shishu (₹50K)', label: 'Kishore (₹5L) | Tarun (₹10L)' }, { val: 'Zero Collateral', label: 'No Third-Party Guarantee Required' }],
    features: [{ name: 'MUDRA Card', desc: 'Pre-approved RuPay debit card allowing flexible withdrawals of working capital as needed.' }],
    rules: ['Loans are designated under Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 Lakh), and Tarun (₹5 Lakh to ₹10 Lakh).']
  },
  {
    path: 'government/schemes/stand-up-india.html',
    root: '../..',
    cat: 'Government',
    title: 'Stand-Up India Scheme',
    sub: 'Bank loans between ₹10 Lakh and ₹1 Crore to at least one SC/ST and one Woman borrower per bank branch.',
    auth: 'SIDBI & Department of Financial Services',
    url: 'https://www.standupmitra.in/',
    overview: 'स्टैंड-अप इंडिया योजना का उद्देश्य अनुसूचित वाणिज्यिक बैंकों की प्रत्येक बैंक शाखा से कम से कम एक अनुसूचित जाति (SC) या अनुसूचित जनजाति (ST) उधारकर्ता और कम से कम एक महिला उधारकर्ता को ग्रीनफील्ड उद्यम स्थापित करने के लिए ₹10 लाख से ₹1 करोड़ के बीच ऋण की सुविधा प्रदान करना है।',
    highlights: [{ val: '₹10L - ₹1Cr', label: 'Composite Loan Range' }, { val: 'Greenfield', label: 'First-time venture in manufacturing, services, or agri-allied' }],
    features: [{ name: 'Handholding Support', desc: 'SIDBI portal connects applicants with training institutions, DPR preparers, and tax consultants.' }],
    rules: ['In non-individual enterprises, at least 51% of the shareholding and controlling stake must be held by SC/ST or woman entrepreneur.']
  },
  {
    path: 'government/financial-assistance/dbts.html',
    root: '../..',
    cat: 'Government',
    title: 'Direct Benefit Transfer (DBT) & Aadhaar Seeding',
    sub: 'National Social Assistance, scholarship portals, and Aadhaar-Payment Bridge (APB) architecture.',
    auth: 'DBT Mission, Cabinet Secretariat',
    url: 'https://dbtbharat.gov.in/',
    overview: 'प्रत्यक्ष लाभ अंतरण (DBT) भारत सरकार द्वारा सरकारी योजनाओं के लाभ और सब्सिडी को सीधे नागरिकों के बैंक खातों में स्थानांतरित करने की क्रांतिकारी व्यवस्था है। यह बिचौलियों और फर्जी लाभार्थियों को समाप्त कर शत-प्रतिशत पारदर्शिता सुनिश्चित करता है।',
    highlights: [{ val: 'Zero Leakage', label: 'Direct Account Credit' }, { val: 'NPCI Mapper', label: 'Aadhaar Seeding Gateway' }],
    features: [{ name: 'Aadhaar Payment Bridge (APB)', desc: 'Subsidies are routed using only the 12-digit Aadhaar number to the user\'s active seeded bank account.' }],
    rules: ['Check Aadhaar bank seeding status via UIDAI portal or your bank branch to ensure subsidy credits.']
  },

  // Remaining Pension
  {
    path: 'pension/epfo/epf-scheme.html',
    root: '../..',
    cat: 'Pension',
    title: 'Employees\' Provident Fund (EPF) Scheme',
    sub: 'Statutory 12% employee + 12% employer contributions, EPS pension rules, and UAN member portal.',
    auth: 'Employees\' Provident Fund Organisation (EPFO)',
    url: 'https://www.epfindia.gov.in/',
    overview: 'कर्मचारी भविष्य निधि (EPF) भारत के संगठित क्षेत्र के कर्मचारियों के लिए अनिवार्य सेवानिवृत्ति बचत योजना है। कर्मचारी और नियोक्ता दोनों मूल वेतन व महंगाई भत्ते का 12% अंशदान करते हैं। नियोक्ता के 12% में से 8.33% कर्मचारी पेंशन योजना (EPS) में जाता है।',
    highlights: [{ val: '8.25% p.a.', label: 'Current Sovereign EPF Interest Rate' }, { val: 'UAN', label: 'Universal Account Number portability' }],
    features: [{ name: 'Online PF Advance', desc: 'Withdraw PF advance for illness, marriage, housing, or unemployment via Member e-Sewa portal.' }],
    rules: ['Interest earned is exempt from tax for annual employee contributions up to ₹2,50,000.']
  },

  // Remaining Savings
  {
    path: 'savings/savings-account/savings-account.html',
    root: '../..',
    cat: 'Savings',
    title: 'Savings Account Architecture & Consumer Rights',
    sub: 'Daily balance interest calculation, minimum balance penalty rules, and DICGC ₹5 Lakh statutory deposit insurance.',
    auth: 'Reserve Bank of India & DICGC',
    url: 'https://www.rbi.org.in/',
    overview: 'बचत बैंक खाता आम नागरिकों के लिए धन सुरक्षित रखने और दैनिक वित्तीय लेनदेन का सबसे बुनियादी साधन है। RBI के नियमों के अनुसार बैंकों द्वारा ब्याज की गणना दैनिक क्लोजिंग बैलेंस (Daily Product Basis) पर की जाती है।',
    highlights: [{ val: '₹5,00,000', label: 'DICGC Statutory Insurance Cover' }, { val: 'Sec 80TTA', label: '₹10,000 Annual Interest Tax Deduction' }],
    features: [{ name: 'BSBDA Zero Balance', desc: 'Every bank must offer a Basic Savings Bank Deposit Account with zero minimum balance requirement.' }],
    rules: ['Banks cannot turn an account balance negative due to non-maintenance penalty charges as mandated by RBI.']
  },
  {
    path: 'savings/emergency-fund/emergency-fund.html',
    root: '../..',
    cat: 'Savings',
    title: 'Emergency Fund Construction Guide',
    sub: 'How to calculate, accumulate and allocate 3-6 months of mandatory living expenses for financial safety.',
    auth: 'Fengoo Financial Education Framework',
    url: 'https://fengoo.in/',
    overview: 'आपातकालीन कोष (Emergency Fund) अप्रत्याशित वित्तीय संकटों (जैसे नौकरी छूटना, गंभीर बीमारी, पारिवारिक आपातकाल) के समय आपकी सामान्य वित्तीय स्थिति को डगमगाने से बचाने वाला एक सुरक्षा घेरा है।',
    highlights: [{ val: '3 - 6 Months', label: 'Recommended Minimum Expense Buffer' }, { val: 'High Liquidity', label: 'Allocate in Savings + Sweep-in FD + Liquid Mutual Funds' }],
    features: [{ name: 'Zero Market Risk', desc: 'Never invest emergency fund in volatile stocks or locked real estate.' }],
    rules: ['Use this fund strictly for genuine emergencies, not for lifestyle wants or discretionary shopping.']
  },
  {
    path: 'savings/sweep-in-fd/sweep-in.html',
    root: '../..',
    cat: 'Savings',
    title: 'Auto Sweep-in Fixed Deposit Guide',
    sub: 'Combining savings account liquidity with term deposit interest rates without premature withdrawal penalty.',
    auth: 'Indian Banking System Standard Feature',
    url: 'https://rbi.org.in/',
    overview: 'ऑटो स्वीप-इन (Auto Sweep) बैंक बचत खाते की एक विशेष सुविधा है जिसमें एक पूर्व-निर्धारित सीमा (Threshold) से अधिक बची अतिरिक्त धनराशि स्वतः सावधि जमा (FD) में परिवर्तित हो जाती है, जिससे उस पर बचत खाते से अधिक ब्याज मिलता है।',
    highlights: [{ val: 'Higher Interest', label: 'Earn Fixed Deposit interest on idle cash' }, { val: 'Zero Penalty', label: 'Automatic reverse sweep when issuing cheques or making transfers' }],
    features: [{ name: 'Reverse Sweep Mechanism', desc: 'When you make a payment exceeding your savings balance, the required difference is pulled from the sweep FD seamlessly.' }],
    rules: ['Activate this facility through net banking or by submitting an instruction form at your bank branch.']
  },
  {
    path: 'savings/recurring-deposit/rd.html',
    root: '../..',
    cat: 'Savings',
    title: 'Recurring Deposit (RD) Scheme',
    sub: 'Monthly systematic savings in banks and post offices with guaranteed fixed returns.',
    auth: 'Post Office & Scheduled Commercial Banks',
    url: 'https://www.indiapost.gov.in/',
    overview: 'आवर्ती जमा (Recurring Deposit) एक ऐसा बचत माध्यम है जिसमें जमाकर्ता को एक निश्चित अवधि तक हर महीने एक निश्चित राशि जमा करनी होती है। परिपक्वता पर मूलधन और संचित चक्रवृद्धि ब्याज का भुगतान किया जाता है।',
    highlights: [{ val: 'Guaranteed Return', label: 'Fixed interest rate locked for full tenure' }, { val: 'From ₹100/mo', label: 'Accessible entry point for small savers' }],
    features: [{ name: 'Disciplined Habit', desc: 'Builds regular saving discipline without exposing capital to market fluctuations.' }],
    rules: ['TDS is deducted if total interest across all FDs and RDs in a bank exceeds ₹40,000 (₹50,000 for senior citizens).']
  },

  // Remaining Tax
  {
    path: 'tax/new-vs-old-regime/new-vs-old-regime.html',
    root: '../..',
    cat: 'Tax',
    title: 'New vs Old Tax Regime: Complete Decision Guide',
    sub: 'Mathematical break-even analysis: Deductions under 80C, 80D, HRA vs lower tax slabs of New Regime.',
    auth: 'CBDT & Income Tax Act, 1961',
    url: 'https://www.incometax.gov.in/',
    overview: 'आयकर रिटर्न भरते समय करदाताओं के पास दो विकल्प होते हैं: नई कर व्यवस्था (New Tax Regime) और पुरानी कर व्यवस्था (Old Tax Regime)। इस गाइड में जानिए कि आपकी आय और कटौतियों के अनुसार कौन सी व्यवस्था आपके लिए सबसे अधिक फायदेमंद है।',
    highlights: [{ val: '₹3.75 Lakh', label: 'Typical Breakeven Deduction Amount' }, { val: '₹75,000', label: 'Higher Standard Deduction in New Regime (Budget 2024)' }],
    features: [{ name: 'New Regime Simplicity', desc: 'Lower tax rates with zero need to submit investment receipts, life insurance policies, or rent agreements.' }],
    rules: ['Salaried taxpayers can switch between regimes every financial year at the time of filing ITR.']
  },
  {
    path: 'tax/gst-slabs/gst-slabs.html',
    root: '../..',
    cat: 'Tax',
    title: 'GST Slabs & Rate Structure in India',
    sub: '0%, 5%, 12%, 18%, 28% Goods & Services Tax classifications and input tax credit (ITC) mechanics.',
    auth: 'GST Council & CBIC',
    url: 'https://www.gst.gov.in/',
    overview: 'वस्तु एवं सेवा कर (GST) भारत में 1 जुलाई 2017 से लागू एकल, गंतव्य-आधारित अप्रत्यक्ष कर है। यह विनिर्माण से लेकर उपभोग तक वस्तुओं और सेवाओं की आपूर्ति पर एक व्यापक कर के रूप में कार्य करता है।',
    highlights: [{ val: '0%, 5%, 12%, 18%, 28%', label: 'Standard Rate Slabs' }, { val: 'Nil Tax', label: 'Essential unbranded food grains & milk' }],
    features: [{ name: 'Input Tax Credit (ITC)', desc: 'Businesses can deduct tax paid on inputs from tax payable on final sales, preventing tax-on-tax cascading.' }],
    rules: ['Small businesses with annual turnover up to ₹40 Lakh (goods) or ₹20 Lakh (services) are exempt from mandatory GST registration.']
  },

  // Remaining Financial Education
  {
    path: 'financial-education/banking-basics/banking-basics.html',
    root: '../..',
    cat: 'Education',
    title: 'Banking Fundamentals for Beginners',
    sub: 'Understanding KYC, IFSC, MICR, Cheque clearing, CTS-2010, and types of bank accounts.',
    auth: 'RBI Financial Literacy Week Initiative',
    url: 'https://rbi.org.in/',
    overview: 'बैंकिंग के मूलभूत सिद्धांतों की सरल समझ: बैंक खाता कैसे काम करता है, चेक क्लीयरिंग के नियम क्या हैं, IFSC कोड क्या दर्शाता है और वित्तीय लेनदेन में सावधानी कैसे बरती जाए।',
    highlights: [{ val: 'IFSC Code', label: '11-character alpha-numeric branch identifier' }, { val: 'KYC Mandate', label: 'Periodic customer verification for financial safety' }],
    features: [{ name: 'Account Types', desc: 'Clear differences between Savings, Current, Term Deposit, and Demat accounts.' }],
    rules: ['Never sign blank cheques or hand over signed withdrawal slips to third parties.']
  },
  {
    path: 'financial-education/compound-interest-rule/compound-interest.html',
    root: '../..',
    cat: 'Education',
    title: 'Compound Interest & The Rule of 72',
    sub: 'The mathematical marvel of earning interest on interest and projecting wealth doubling periods.',
    auth: 'Financial Mathematics Standards',
    url: 'https://fengoo.in/',
    overview: 'चक्रवृद्धि ब्याज (Compound Interest) में आपके मूलधन के साथ-साथ पहले से अर्जित ब्याज पर भी नया ब्याज मिलता है। यह समय के साथ संपत्ति के घातीय (Exponential) विकास का सबसे बड़ा कारण है।',
    highlights: [{ val: 'Rule of 72', label: 'Years to Double Money = 72 / Annual Return Rate %' }, { val: 'Early Start', label: 'Starting 10 years earlier creates 3X to 5X larger wealth' }],
    features: [{ name: 'Rule of 72 in Action', desc: 'At 12% annual return, your money doubles in approximately 72 / 12 = 6 years.' }],
    rules: ['Patience and long uninterrupted holding periods are the two critical prerequisites for compounding.']
  },
  {
    path: 'financial-education/budgeting-50-30-20/budgeting-rule.html',
    root: '../..',
    cat: 'Education',
    title: 'The 50/30/20 Personal Budgeting Rule',
    sub: 'Proven proportional framework to divide net take-home income into Needs, Wants, and Savings.',
    auth: 'Personal Financial Planning Standard',
    url: 'https://fengoo.in/',
    overview: '50/30/20 का नियम व्यक्तिगत बजट बनाने की एक अत्यंत सरल और प्रभावी पद्धति है। यह आपकी शुद्ध मासिक आय (Take-Home Income) को तीन स्पष्ट श्रेणियों में विभाजित करता है: जरूरतें (50%), इच्छाएं (30%) और बचत (20%)।',
    highlights: [{ val: '50% Needs', label: 'Rent, groceries, utilities, loan EMIs' }, { val: '30% Wants', label: 'Dining out, vacations, hobbies, gadgets' }, { val: '20% Savings', label: 'Emergency fund, SIP, PPF, retirement' }],
    features: [{ name: 'Guaranteed Financial Balance', desc: 'Ensures you enjoy today without sacrificing your retirement and debt safety.' }],
    rules: ['If your debts or mandatory EMIs exceed 50%, immediately cut down the 30% wants category until balance is restored.']
  },
  {
    path: 'financial-education/financial-fraud-awareness/fraud-awareness.html',
    root: '../..',
    cat: 'Education',
    title: 'Financial Cyber Fraud Awareness & Protection',
    sub: 'Modus operandi of digital arrest, illegal loan apps, OTP phishing, and official remedial action on helpline 1930.',
    auth: 'Indian Cyber Crime Coordination Centre (I4C), MHA',
    url: 'https://cybercrime.gov.in/',
    overview: 'डिजिटल वित्तीय अपराधों से बचाव की संपूर्ण नागरिक मार्गदर्शिका। जानिए कि पुलिस, सीबीआई या कस्टम कभी वीडियो कॉल पर "डिजिटल अरेस्ट" नहीं करते, और किसी भी वित्तीय साइबर फ्रॉड की स्थिति में पहले 2 घंटों (Golden Hour) के भीतर क्या कदम उठाने चाहिए।',
    highlights: [{ val: '1930', label: 'Toll-Free National Cyber Financial Fraud Helpline' }, { val: 'Zero Digital Arrest', label: 'No law allows police or courts to arrest citizens over Skype/WhatsApp' }],
    features: [{ name: 'SIM Swap & APK Scams', desc: 'Never install unknown APK files sent via WhatsApp for electricity bills or courier delivery.' }],
    rules: ['Dial 1930 immediately if money is fraudulently deducted from your bank account to facilitate fund freezing.']
  }
];

for (const item of items) {
  const html = makeSimpleTopicPage(
    item.path,
    item.root,
    item.cat,
    item.title,
    item.sub,
    item.auth,
    item.url,
    item.overview,
    item.highlights,
    item.features,
    item.rules
  );
  writeFile(item.path, html);
}

console.log(`Generated ${items.length} additional platform pages.`);
