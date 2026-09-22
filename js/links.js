/**
 * FENGOO LINK & AFFILIATE MANAGEMENT SYSTEM (js/links.js)
 * Strict separation of Official Government/Regulatory Links and Commercial Partner Offers.
 * Includes complete statutory disclosures and developer inspection tools.
 */

const FENGOO_LINKS = [
  // ==========================================
  // OFFICIAL LINKS (Non-commercial, verified)
  // ==========================================
  {
    id: "off-rbi",
    title: "Reserve Bank of India (RBI)",
    provider: "Reserve Bank of India",
    category: "Banking & Economy",
    type: "official",
    url: "https://rbi.org.in/",
    description: "India's central bank and monetary authority. Official master directions, notifications, and scheduled bank lists.",
    buttonText: "आधिकारिक RBI पोर्टल खोलें",
    status: "active",
    source: "Reserve Bank of India Act, 1934",
    lastUpdated: "2025-02-15",
    featured: true,
    openInNewTab: true
  },
  {
    id: "off-incometax",
    title: "Income Tax e-Filing Portal",
    provider: "Income Tax Department, MoF",
    category: "Tax & Compliance",
    type: "official",
    url: "https://www.incometax.gov.in/",
    description: "Government portal for e-filing ITR-1 to ITR-7, PAN-Aadhaar linking, 26AS viewing, and annual AIS/TIS checking.",
    buttonText: "आधिकारिक Income Tax पोर्टल खोलें",
    status: "active",
    source: "Income Tax Act, 1961",
    lastUpdated: "2025-02-15",
    featured: true,
    openInNewTab: true
  },
  {
    id: "off-gst",
    title: "GST (Goods and Services Tax) Portal",
    provider: "GST Council & CBIC",
    category: "Tax & Compliance",
    type: "official",
    url: "https://www.gst.gov.in/",
    description: "Official portal for GST registration, GSTR-1, GSTR-3B return filing, and challan payments.",
    buttonText: "आधिकारिक GST पोर्टल खोलें",
    status: "active",
    source: "Central Goods and Services Tax Act, 2017",
    lastUpdated: "2025-02-15",
    featured: false,
    openInNewTab: true
  },
  {
    id: "off-sebi",
    title: "SEBI (Securities & Exchange Board of India)",
    provider: "SEBI",
    category: "Investments & Securities",
    type: "official",
    url: "https://www.sebi.gov.in/",
    description: "Statutory regulator for Indian securities markets, mutual funds, stock brokers, and investor education.",
    buttonText: "आधिकारिक SEBI पोर्टल खोलें",
    status: "active",
    source: "SEBI Act, 1992",
    lastUpdated: "2025-02-15",
    featured: true,
    openInNewTab: true
  },
  {
    id: "off-irdai",
    title: "IRDAI (Insurance Regulatory & Development Authority)",
    provider: "IRDAI",
    category: "Insurance",
    type: "official",
    url: "https://irdai.gov.in/",
    description: "Statutory body regulating and developing the life, health, and general insurance industries in India.",
    buttonText: "आधिकारिक IRDAI पोर्टल खोलें",
    status: "active",
    source: "Insurance Regulatory and Development Authority Act, 1999",
    lastUpdated: "2025-02-15",
    featured: true,
    openInNewTab: true
  },
  {
    id: "off-pfrda",
    title: "PFRDA (Pension Fund Regulatory Authority)",
    provider: "PFRDA",
    category: "Pension & Retirement",
    type: "official",
    url: "https://www.pfrda.org.in/",
    description: "Statutory authority regulating the National Pension System (NPS) and Atal Pension Yojana (APY).",
    buttonText: "आधिकारिक PFRDA पोर्टल खोलें",
    status: "active",
    source: "PFRDA Act, 2013",
    lastUpdated: "2025-02-15",
    featured: false,
    openInNewTab: true
  },
  {
    id: "off-epfo",
    title: "EPFO (Employees' Provident Fund Organisation)",
    provider: "Ministry of Labour & Employment",
    category: "Pension & Retirement",
    type: "official",
    url: "https://www.epfindia.gov.in/",
    description: "Unified Member Portal for UAN activation, EPF passbook checking, online PF advance, and transfer claims.",
    buttonText: "आधिकारिक EPFO पोर्टल खोलें",
    status: "active",
    source: "Employees' Provident Funds Act, 1952",
    lastUpdated: "2025-02-15",
    featured: true,
    openInNewTab: true
  },
  {
    id: "off-dicgc",
    title: "DICGC (Deposit Insurance Corporation)",
    provider: "Reserve Bank of India Subsidiary",
    category: "Banking & Consumer Safety",
    type: "official",
    url: "https://www.dicgc.org.in/",
    description: "Provides statutory insurance up to ₹5,00,000 per depositor for bank deposits (savings, current, FD, RD).",
    buttonText: "आधिकारिक DICGC पोर्टल खोलें",
    status: "active",
    source: "Deposit Insurance and Credit Guarantee Corporation Act, 1961",
    lastUpdated: "2025-02-15",
    featured: true,
    openInNewTab: true
  },
  {
    id: "off-cybercrime",
    title: "National Cyber Crime Reporting Portal",
    provider: "Ministry of Home Affairs (MHA)",
    category: "Consumer Protection",
    type: "official",
    url: "https://cybercrime.gov.in/",
    description: "Official portal and National Cyber Fraud Helpline (1930) to report financial cyber crimes and frozen illicit transfers.",
    buttonText: "Cyber Crime पोर्टल खोलें (हेल्पलाइन 1930)",
    status: "active",
    source: "Ministry of Home Affairs, GoI",
    lastUpdated: "2025-02-15",
    featured: true,
    openInNewTab: true
  },

  // ==========================================
  // PARTNER & AFFILIATE OFFERS (Commercial)
  // ==========================================
  {
    id: "part-kotak811",
    title: "Kotak 811 Zero Balance Savings Account",
    provider: "Kotak Mahindra Bank",
    category: "Banking Products",
    type: "partner",
    url: "https://www.kotak.com/en/personal-banking/accounts/savings-account/811-savings-account.html",
    description: "Instant zero balance digital savings account with virtual debit card and Video KYC opening.",
    buttonText: "Kotak 811 पर अकाउंट खोलें (Partner Link)",
    status: "active",
    disclosure: "Disclosure: यह Partner Link है। यदि आप यहाँ से अकाउंट खोलते हैं तो Fengoo को commission मिल सकता है बिना आपके किसी अतिरिक्त शुल्क के।",
    source: "Commercial Referral Program",
    lastUpdated: "2025-02-15",
    featured: true,
    openInNewTab: true
  },
  {
    id: "part-aubank",
    title: "AU Small Finance Bank High Interest Savings",
    provider: "AU Small Finance Bank",
    category: "Banking Products",
    type: "partner",
    url: "https://www.aubank.in/personal-banking/savings-account",
    description: "Competitive high interest rates up to 7.25% p.a. on eligible savings account tiers with monthly interest payouts.",
    buttonText: "AU Savings Account देखें (Partner Link)",
    status: "active",
    disclosure: "Disclosure: यह Partner Link है। पात्रता पूरी होने पर Fengoo को referral commission मिल सकता है।",
    source: "Direct Bank Referral Partnership",
    lastUpdated: "2025-02-15",
    featured: true,
    openInNewTab: true
  },
  {
    id: "part-card-sbi",
    title: "SBI SimplyCLICK Shopping Card",
    provider: "SBI Card",
    category: "Credit Cards",
    type: "partner",
    url: "https://www.sbicard.com/en/personal/credit-cards/shopping/simplyclick-sbi-card.page",
    description: "Online shopping card with Amazon e-voucher gift on joining and 10X reward points on partner platforms.",
    buttonText: "SBI Card अप्लाई करें (Partner Link)",
    status: "active",
    disclosure: "Disclosure: यह Partner Link है। कार्ड स्वीकृत होने पर Fengoo को affiliate commission मिल सकता है।",
    source: "Bank Co-Marketing Program",
    lastUpdated: "2025-02-15",
    featured: true,
    openInNewTab: true
  },
  {
    id: "part-demat-placeholder",
    title: "SEBI Registered Stock Broker Demat Account",
    provider: "Approved Depository Partner",
    category: "Demat & Trading",
    type: "affiliate",
    url: "#",
    description: "Zero maintenance cost Demat account slot for retail investors under review for active onboarding.",
    buttonText: "Approved Partner Link जोड़ें (In Review)",
    status: "placeholder",
    disclosure: "Note: यह स्लॉट केवल SEBI-registered, regulatory-compliant ब्रोकर्स के लिए आरक्षित है। वर्तमान में सत्यापन प्रक्रियाधीन है।",
    source: "Commercial Partnership Pipeline",
    lastUpdated: "2025-02-15",
    featured: false,
    openInNewTab: false
  }
];

if (typeof window !== "undefined") {
  window.FENGOO_LINKS = FENGOO_LINKS;

  window.handleLinkClick = function(id) {
    const link = FENGOO_LINKS.find(l => l.id === id);
    if (!link) return;

    if (link.status !== 'active') {
      if (typeof window.showToast === 'function') {
        window.showToast('यह लिंक वर्तमान में सत्यापन या समीक्षा प्रक्रियाधीन है।');
      }
      return;
    }

    if (link.type === 'partner' || link.type === 'affiliate') {
      console.log(`[Fengoo Analytics] Partner Link Clicked: ${link.provider} - ${link.title}`);
    }

    if (link.openInNewTab) {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = link.url;
    }
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { FENGOO_LINKS };
}
