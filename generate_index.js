import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';

export function buildIndexHTML() {
  const folders = [
    {
      id: "folder-banks",
      title: "बैंक डायरेक्टरी (Banks Directory)",
      icon: "🏦",
      badge: "India के सभी 40+ बैंक • PSU, Private, SFB",
      desc: "भारत के सभी सार्वजनिक, निजी, स्मॉल फाइनेंस व पेमेंट्स बैंक। HDFC, SBI, ICICI, Kotak 811, Axis, PNB आदि। जीरो बैलेंस खाता खोलने का लिंक, क्रेडिट कार्ड ऑफर्स, ब्याज दरें, DICGC ₹5 लाख सुरक्षा व कस्टमर केयर।",
      tags: ["HDFC Bank", "SBI YONO", "Kotak 811 Zero Balance", "ICICI Bank", "BoB", "AU SFB"],
      link: "banks/index.html",
      btnText: "बैंक डायरेक्टरी फोल्डर खोलें (Open Banks) →",
      accent: "#1e3a8a"
    },
    {
      id: "folder-govt",
      title: "सरकारी योजनाएं (Govt Schemes Directory)",
      icon: "📜",
      badge: "50+ योजनाएं • केंद्र व भारत के सभी 28 राज्य",
      desc: "प्रधानमंत्री जन धन, पीएम किसान, आयुष्मान भारत, सुकन्या समृद्धि, मुद्रा योजना सहित उत्तर प्रदेश, बिहार, मध्य प्रदेश, महाराष्ट्र, राजस्थान, पश्चिम बंगाल व सभी राज्यों की योजनाओं की जानकारी व ओरिजिनल पोर्टल पर आवेदन लिंक।",
      tags: ["PM Jan Dhan", "PM Kisan ₹6000", "Ayushman Bharat ₹5L", "State Schemes", "SSY", "Mudra"],
      link: "government/index.html",
      btnText: "सरकारी योजनाएं फोल्डर खोलें (Open Govt Schemes) →",
      accent: "#b45309"
    },
    {
      id: "folder-calc",
      title: "100+ ईएमआई व वित्तीय कैलकुलेटर (Calculators)",
      icon: "🧮",
      badge: "105 प्रकार के कैलकुलेटर • सटीक व त्वरित गणित",
      desc: "होम लोन EMI, कार लोन, पर्सनल लोन, बाइक लोन, गोल्ड लोन, मुद्रा लोन, एसआईपी (SIP), पीपीएफ (PPF), एफडी (FD), आरडी (RD), रिटायरमेंट कॉर्पस, सुकन्या समृद्धि व जीएसटी कैलकुलेटर।",
      tags: ["Home Loan EMI", "Car Loan EMI", "Personal Loan EMI", "SIP Calculator", "PPF", "FD/RD"],
      link: "calculators/index.html",
      btnText: "100+ कैलकुलेटर फोल्डर खोलें (Open 105 Calculators) →",
      accent: "#4338ca"
    },
    {
      id: "folder-cc",
      title: "क्रेडिट कार्ड डायरेक्टरी (Credit Cards in India)",
      icon: "💳",
      badge: "कैशबैक, LTF, RuPay on UPI, लाउंज एक्सेस",
      desc: "HDFC Millennia, SBI Cashback (5%), Amazon Pay ICICI (Lifetime Free), Flipkart Axis, RuPay UPI क्रेडिट कार्ड, एयरपोर्ट लाउंज, वार्षिक शुल्क माफी व सीधे बैंक पोर्टल पर ऑनलाइन अप्लाई करने का लिंक।",
      tags: ["Amazon Pay ICICI", "SBI Cashback 5%", "HDFC Millennia", "RuPay UPI Cards", "AU LIT", "Scapia"],
      link: "credit-cards/index.html",
      btnText: "क्रेडिट कार्ड फोल्डर खोलें (Open Credit Cards) →",
      accent: "#6d28d9"
    },
    {
      id: "folder-loans",
      title: "ऋण व लोन डायरेक्टरी (All Loans in India)",
      icon: "💰",
      badge: "होम लोन, पर्सनल, एजुकेशन, गोल्ड व मुद्रा लोन",
      desc: "होम लोन (8.40%), पर्सनल लोन, विद्या लक्ष्मी पोर्टल शिक्षा लोन, कार लोन, गोल्ड लोन (8.75%), पीएम मुद्रा लोन (₹10 लाख तक) व किसान क्रेडिट कार्ड (4%)। पात्रता, दस्तावेज व सीधा आवेदन लिंक।",
      tags: ["Home Loan 8.40%", "Personal Loan", "Vidya Lakshmi Education", "Mudra Loan", "Gold Loan 8.75%", "KCC 4%"],
      link: "loans/index.html",
      btnText: "लोन डायरेक्टरी फोल्डर खोलें (Open Loans) →",
      accent: "#0f766e"
    },
    {
      id: "folder-upi",
      title: "यूपीआई व डिजिटल पेमेंट्स (UPI & Payments)",
      icon: "📱",
      badge: "NPCI गाइडलइन्स • UPI Lite • RuPay on UPI",
      desc: "PhonePe, Google Pay, Paytm, BHIM UPI। प्रति दिन ₹1 लाख से ₹5 लाख लिमिट, UPI Lite बिना पिन पेमेंट, RuPay क्रेडिट कार्ड लिंकेज और साइबर फ्रॉड हेल्पलाइन 1930 पर शिकायत समाधान।",
      tags: ["BHIM UPI", "PhonePe", "Google Pay", "Paytm", "UPI Lite", "Cyber Fraud 1930"],
      link: "upi/index.html",
      btnText: "UPI फोल्डर खोलें (Open UPI Directory) →",
      accent: "#0369a1"
    },
    {
      id: "folder-insurance",
      title: "बीमा व सुरक्षा (Insurance Directory)",
      icon: "🛡️",
      badge: "IRDAI अधिकृत • Claim Settlement Ratio (CSR)",
      desc: "टर्म लाइफ इंश्योरेंस, फैमिली फ्लोटर हेल्थ इंश्योरेंस, मोटर व्हीकल इंश्योरेंस, पीएम जीवन ज्योति बीमा (PMJJBY ₹436) व पीएम सुरक्षा बीमा (PMSBY ₹20)। क्लेम रेशियो व सही पॉलिसी चुनने की गाइड।",
      tags: ["Term Life Insurance", "Health Insurance", "PMJJBY ₹2L", "PMSBY ₹20", "Motor Insurance", "CSR Data"],
      link: "insurance/index.html",
      btnText: "बीमा फोल्डर खोलें (Open Insurance Hub) →",
      accent: "#be185d"
    },
    {
      id: "folder-investments",
      title: "निवेश व शेयर बाजार (Investments Hub)",
      icon: "📈",
      badge: "SEBI पंजीकृत • Mutual Funds, SIP, SGB, Stocks",
      desc: "म्यूचुअल फंड एसआईपी (SIP), लार्ज/मिड/स्मॉल कैप फंड्स, सॉवरेन गोल्ड बॉन्ड (SGB), डायरेक्ट स्टॉक्स, आरबीआई रिटेल डायरेक्ट (सरकारी बॉन्ड 7.15%) और इंडेक्स फंड्स में निवेश का तरीका।",
      tags: ["Mutual Funds SIP", "Index Funds", "Sovereign Gold Bond", "RBI Retail Direct", "Stocks", "FD vs MF"],
      link: "investments/index.html",
      btnText: "निवेश फोल्डर खोलें (Open Investments) →",
      accent: "#15803d"
    },
    {
      id: "folder-tax",
      title: "टैक्स व इनकम टैक्स स्लैब (Income Tax & GST)",
      icon: "⚖️",
      badge: "बजट 2024-25 • New vs Old Tax Regime",
      desc: "नई टैक्स व्यवस्था (New Tax Regime) बनाम पुरानी टैक्स व्यवस्था (Old Regime), सेक्शन 80C व 80D कटौतियां, वेतनभोगियों को ₹75,000 स्टैंडर्ड डिडक्शन, कैपिटल गेन्स टैक्स व आयकर ई-फाइलिंग पोर्टल।",
      tags: ["New Tax Regime", "Old Tax Regime", "Standard Deduction ₹75K", "Section 80C", "ITR Filing", "GST Slabs"],
      link: "tax/index.html",
      btnText: "टैक्स फोल्डर खोलें (Open Tax Hub) →",
      accent: "#c2410c"
    },
    {
      id: "folder-pension",
      title: "पेंशन व सेवानिवृत्ति (Pension & Retirement)",
      icon: "👴",
      badge: "PFRDA व EPFO अधिकृत • NPS, APY, EPS",
      desc: "नेशनल पेंशन सिस्टम (NPS Tier-1 व Tier-2), अटल पेंशन योजना (APY ₹1,000 से ₹5,000 मासिक पेंशन), ईपीएफओ (EPFO) पासबुक, यूएएन (UAN) व ईपीएस-95 (EPS-95) पेंशन नियम।",
      tags: ["National Pension System (NPS)", "Atal Pension Yojana (APY)", "EPFO EPF Passbook", "EPS-95 Pension"],
      link: "pension/index.html",
      btnText: "पेंशन फोल्डर खोलें (Open Pension Hub) →",
      accent: "#4b5563"
    },
    {
      id: "folder-savings",
      title: "बचत व डाकघर योजनाएं (Savings & Post Office)",
      icon: "🪙",
      badge: "भारत सरकार की 100% सॉवरेन गारंटी",
      desc: "पब्लिक प्रॉविडेंट फंड (PPF 7.1%), सुकन्या समृद्धि योजना (SSY 8.2%), महिला सम्मान बचत पत्र, डाकघर मासिक आय योजना (MIS 7.4%), राष्ट्रीय बचत पत्र (NSC 7.7%) व वरिष्ठ नागरिक बचत योजना (SCSS 8.2%)।",
      tags: ["Sukanya Samriddhi 8.2%", "PPF 7.1%", "Mahila Samman", "Post Office MIS", "NSC 7.7%", "SCSS 8.2%"],
      link: "savings/index.html",
      btnText: "बचत योजनाएं फोल्डर खोलें (Open Savings) →",
      accent: "#ca8a04"
    },
    {
      id: "folder-official",
      title: "आधिकारिक विनियामक लिंक्स (Official Portals)",
      icon: "🌐",
      badge: "100% सत्यापित सरकारी व विनियामक पोर्टल्स",
      desc: "भारतीय रिज़र्व बैंक (RBI), सेबी (SEBI), आईआरडीएआई (IRDAI), एनपीसीआई (NPCI), आयकर विभाग, यूआईडीएआई (आधार), डिजिपिन, उमंग और राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल 1930।",
      tags: ["RBI Official", "SEBI Portal", "Income Tax e-Filing", "Cybercrime 1930", "NPCI UPI", "UIDAI Aadhaar"],
      link: "official-links/official-links.html",
      btnText: "आधिकारिक पोर्टल्स खोलें (Open Portals) →",
      accent: "#2563eb"
    }
  ];

  const foldersHTML = folders.map(f => `
    <article class="folder-card" id="${f.id}" data-search="${f.title.toLowerCase()} ${f.desc.toLowerCase()} ${f.tags.join(' ').toLowerCase()}">
      <div class="folder-header">
        <div class="folder-icon-box" style="background-color: ${f.accent}15; color: ${f.accent}; border-color: ${f.accent}30;">
          <span>${f.icon}</span>
        </div>
        <div class="folder-title-box">
          <span class="folder-badge">${f.badge}</span>
          <h2 class="folder-name">${f.title}</h2>
        </div>
      </div>

      <p class="folder-desc">${f.desc}</p>

      <div class="folder-tags-wrap">
        ${f.tags.map(t => `<span class="folder-tag">${t}</span>`).join('')}
      </div>

      <div class="folder-footer">
        <a href="${f.link}" class="btn-open-folder" style="background: ${f.accent};">
          ${f.btnText}
        </a>
      </div>
    </article>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fengoo.in - भारत का संपूर्ण वित्तीय सूचना पोर्टल (Complete India Financial Information Platform)</title>
  <meta name="description" content="भारत का स्वतंत्र वित्तीय सूचना मंच: बैंक, सरकारी योजनाएं, 100+ ईएमआई कैलकुलेटर, क्रेडिट कार्ड, ऋण, बीमा, टैक्स स्लैब व सत्यापित आधिकारिक लिंक्स।" />
  <link rel="canonical" href="https://fengoo.in/index.html" />
  ${getStyles('')}
  <style>
    /* Hero section */
    .home-hero {
      background: radial-gradient(circle at 50% 0%, var(--surface-2) 0%, var(--surface) 100%);
      border-bottom: 1px solid var(--border);
      padding: clamp(2rem, 5vw, 3.5rem) 0 clamp(1.5rem, 4vw, 2.5rem);
      text-align: center;
      width: 100%;
      overflow-x: hidden;
    }
    .home-hero-pill {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.4rem 0.6rem;
      padding: 0.4rem 0.9rem;
      border-radius: 9999px;
      background: var(--surface);
      border: 1px solid var(--border);
      font-size: clamp(0.75rem, 2vw, 0.825rem);
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 1rem;
      box-shadow: var(--shadow-sm);
      max-width: 100%;
      line-height: 1.4;
    }
    .home-hero h1 {
      font-size: clamp(1.5rem, 4.5vw, 2.5rem);
      font-weight: 900;
      letter-spacing: -0.025em;
      line-height: 1.25;
      color: var(--text);
      margin-bottom: 0.75rem;
      overflow-wrap: break-word;
    }
    .home-hero h1 span {
      color: var(--primary);
    }
    .home-hero p {
      font-size: clamp(0.925rem, 2.2vw, 1.1rem);
      color: var(--text-muted);
      max-width: 760px;
      margin: 0 auto 1.5rem;
      line-height: 1.55;
      padding: 0 0.5rem;
      overflow-wrap: break-word;
    }
    .home-search-wrap {
      max-width: 700px;
      width: 100%;
      margin: 0 auto;
      position: relative;
    }

    /* Key Trust Stats */
    .stats-strip {
      background: var(--surface-2);
      border-bottom: 1px solid var(--border);
      padding: clamp(1rem, 2.5vw, 1.25rem) 0;
      width: 100%;
    }
    .stats-strip-inner {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
      gap: 1rem;
      text-align: center;
    }
    .stat-pill-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 0.35rem 0.5rem;
    }
    .stat-pill-icon {
      font-size: 1.6rem;
      flex-shrink: 0;
    }
    .stat-pill-text {
      text-align: left;
    }
    .stat-pill-text strong {
      display: block;
      font-size: 0.92rem;
      color: var(--text);
      font-weight: 800;
      line-height: 1.3;
    }
    .stat-pill-text span {
      font-size: 0.775rem;
      color: var(--text-muted);
    }

    /* Folder Directory Grid */
    .directory-section {
      padding: clamp(2rem, 5vw, 3.5rem) 0 clamp(2.5rem, 6vw, 5rem);
      width: 100%;
      max-width: 1200px;
      box-sizing: border-box;
    }
    .section-head-box {
      text-align: center;
      max-width: 700px;
      margin: 0 auto clamp(1.5rem, 4vw, 2.5rem);
      padding: 0 0.5rem;
    }
    .section-head-badge {
      font-size: 0.78rem;
      font-weight: 800;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: inline-block;
      margin-bottom: 0.4rem;
    }
    .section-head-title {
      font-size: clamp(1.4rem, 4vw, 2rem);
      font-weight: 900;
      color: var(--text);
      margin-bottom: 0.5rem;
      line-height: 1.3;
      overflow-wrap: break-word;
    }
    .section-head-desc {
      font-size: clamp(0.875rem, 2vw, 0.95rem);
      color: var(--text-muted);
      line-height: 1.55;
    }

    .folders-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 330px), 1fr));
      gap: 1.5rem;
      width: 100%;
      box-sizing: border-box;
    }

    @media (min-width: 641px) and (max-width: 1024px) {
      .folders-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem;
      }
    }

    @media (max-width: 640px) {
      .folders-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .stat-pill-item {
        justify-content: flex-start;
      }
    }

    .folder-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow-sm);
      padding: clamp(1.15rem, 3vw, 1.5rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      position: relative;
      width: 100%;
      box-sizing: border-box;
      min-width: 0;
    }
    .folder-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
      border-color: var(--primary);
    }
    .folder-header {
      display: flex;
      align-items: flex-start;
      gap: 0.85rem;
      min-width: 0;
    }
    .folder-icon-box {
      width: 48px;
      height: 48px;
      min-width: 48px;
      border-radius: 12px;
      border: 1px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      flex-shrink: 0;
    }
    .folder-title-box {
      flex: 1;
      min-width: 0;
    }
    .folder-badge {
      display: inline-block;
      font-size: 0.725rem;
      font-weight: 800;
      color: var(--text-muted);
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      padding: 0.15rem 0.5rem;
      border-radius: 4px;
      margin-bottom: 0.35rem;
      max-width: 100%;
      overflow-wrap: break-word;
    }
    .folder-name {
      font-size: clamp(1.05rem, 2.5vw, 1.25rem);
      font-weight: 800;
      color: var(--text);
      line-height: 1.35;
      margin: 0;
      overflow-wrap: break-word;
    }
    .folder-desc {
      font-size: 0.875rem;
      color: var(--text-muted);
      line-height: 1.5;
      margin: 0;
      overflow-wrap: break-word;
    }
    .folder-tags-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
    }
    .folder-tag {
      font-size: 0.725rem;
      font-weight: 600;
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 0.2rem 0.5rem;
      border-radius: 9999px;
      max-width: 100%;
      overflow-wrap: break-word;
    }
    .folder-footer {
      margin-top: 0.5rem;
      border-top: 1px solid var(--border);
      padding-top: 0.85rem;
    }
    .btn-open-folder {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 700;
      padding: 0.7rem 1rem;
      border-radius: 8px;
      text-decoration: none;
      transition: opacity 0.15s ease, transform 0.15s ease;
      min-height: 44px;
      text-align: center;
      box-sizing: border-box;
      line-height: 1.35;
    }
    .btn-open-folder:hover {
      opacity: 0.92;
      transform: translateY(-1px);
      color: #fff;
    }
  </style>
</head>
<body>
  ${getHeader('')}

  <!-- Hero Section -->
  <section class="home-hero">
    <div class="container">
      <div class="home-hero-pill">
        <span>🇮🇳 स्वतंत्र, निष्पक्ष भारतीय वित्तीय सूचना मंच</span>
        <span style="opacity:0.4;">•</span>
        <span>RBI, SEBI & IRDAI Verified</span>
      </div>
      <h1>भारत की संपूर्ण वित्तीय व्यवस्था, <span>अब श्रेणियों में व्यवस्थित</span></h1>
      <p>
        जिस श्रेणी की जानकारी चाहिए, सीधे उसके फोल्डर पर क्लिक करें। अंदर सभी बैंकों के नाम, क्रेडिट कार्ड ऑफर, जीरो बैलेंस खाता लिंक, सरकारी योजनाओं के ऑफिशियल फॉर्म व 100+ ईएमआई कैलकुलेटर उपलब्ध हैं।
      </p>

      <!-- Global Live Search -->
      <div class="home-search-wrap">
        <div class="search-input-box">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input 
            type="text" 
            id="home-category-search" 
            placeholder="खोजें: HDFC, SBI, सरकारी योजना, 100 EMI कैलकुलेटर, क्रेडिट कार्ड, लोन, सुकन्या..." 
            aria-label="Search Categories and Entities"
            autocomplete="off"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Key Guarantees Strip -->
  <section class="stats-strip">
    <div class="container stats-strip-inner">
      <div class="stat-pill-item">
        <span class="stat-pill-icon">🛡️</span>
        <div class="stat-pill-text">
          <strong>DICGC ₹5 लाख सुरक्षा</strong>
          <span>सभी बैंकों पर सुरक्षित जमा विवरण</span>
        </div>
      </div>
      <div class="stat-pill-item">
        <span class="stat-pill-icon">⚖️</span>
        <div class="stat-pill-text">
          <strong>100% पारदर्शी लिंक्स</strong>
          <span>Official व Partner Links अलग-अलग</span>
        </div>
      </div>
      <div class="stat-pill-item">
        <span class="stat-pill-icon">📂</span>
        <div class="stat-pill-text">
          <strong>मॉड्यूलर फोल्डर स्ट्रक्चर</strong>
          <span>हर बैंक व योजना का स्वतंत्र संपूर्ण पृष्ठ</span>
        </div>
      </div>
      <div class="stat-pill-item">
        <span class="stat-pill-icon">📞</span>
        <div class="stat-pill-text">
          <strong>साइबर फ्रॉड हेल्पलाइन 1930</strong>
          <span>वित्तीय धोखाधड़ी रिपोर्टिंग सहायता</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Folder Directory -->
  <main class="container directory-section">
    <div class="section-head-box">
      <span class="section-head-badge">श्रेणी अनुसार सम्पूर्ण डायरेक्टरी</span>
      <h2 class="section-head-title">वित्तीय फोल्डर डायरेक्टरी (Category Portals)</h2>
      <p class="section-head-desc">
        नीचे दिए गए किसी भी फोल्डर पर क्लिक करें। प्रत्येक फोल्डर के अंदर संपूर्ण सूची, बैंक स्पेसिफिकेशंस, अप्लाई लिंक व ऑफिशियल फॉर्म्स उपलब्ध हैं।
      </p>
    </div>

    <div class="folders-grid" id="folders-container">
      ${foldersHTML}
    </div>
  </main>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('home-category-search');
      const folderCards = document.querySelectorAll('.folder-card');

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          const query = e.target.value.trim().toLowerCase();
          folderCards.forEach(card => {
            const searchData = card.getAttribute('data-search') || '';
            if (!query || searchData.includes(query)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      }
    });
  </script>

  ${getFooter('')}
  ${getScripts('')}
</body>
</html>`;
}

// Generate the root index.html
const indexHTML = buildIndexHTML();
writeFile('index.html', indexHTML);
console.log('Successfully generated clean folder-styled index.html');
