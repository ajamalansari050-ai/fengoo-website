/**
 * FENGOO CENTRAL REGISTRY (js/registry.js)
 * Master index of verified Indian Financial Ecosystem Entities
 * Sources: Reserve Bank of India (RBI), SEBI, IRDAI, PFRDA, NPCI, Ministry of Finance (MoF), DICGC
 * Note: Never makes unverified "All India" claims. Every entry tracks its official source, regulatory status, and last verification date.
 */

const FENGOO_REGISTRY = [
  // ==========================================
  // 1. PUBLIC SECTOR BANKS
  // ==========================================
  {
    id: "sbi",
    name: "State Bank of India (SBI)",
    category: "banks",
    subcategory: "public-sector",
    path: "/banks/public-sector/sbi/sbi.html",
    status: "active",
    source: "State Bank of India Act, 1955 / RBI",
    officialUrl: "https://sbi.co.in/",
    lastUpdated: "2025-02-15",
    description: "India's largest public sector commercial bank. Offers YONO digital banking, personal loans, home loans, and savings deposits with DICGC cover.",
    featured: true
  },
  {
    id: "bank-of-baroda",
    name: "Bank of Baroda",
    category: "banks",
    subcategory: "public-sector",
    path: "/banks/public-sector/bank-of-baroda/bank-of-baroda.html",
    status: "active",
    source: "Banking Companies Act, 1970 / RBI",
    officialUrl: "https://www.bankofbaroda.in/",
    lastUpdated: "2025-02-15",
    description: "Major Indian public sector bank offering bob World digital banking, retail deposits, MSME loans, and agricultural credit.",
    featured: true
  },
  {
    id: "punjab-national-bank",
    name: "Punjab National Bank (PNB)",
    category: "banks",
    subcategory: "public-sector",
    path: "/banks/public-sector/punjab-national-bank/punjab-national-bank.html",
    status: "active",
    source: "Banking Companies Act, 1970 / RBI",
    officialUrl: "https://www.pnbindia.in/",
    lastUpdated: "2025-02-15",
    description: "Premier public sector bank offering PNB ONE mobile banking, housing loans, and specialized government scheme accounts.",
    featured: false
  },
  {
    id: "canara-bank",
    name: "Canara Bank",
    category: "banks",
    subcategory: "public-sector",
    path: "/banks/public-sector/canara-bank/canara-bank.html",
    status: "active",
    source: "Banking Companies Act, 1970 / RBI",
    officialUrl: "https://canarabank.com/",
    lastUpdated: "2025-02-15",
    description: "Leading nationalized public sector commercial bank known for Canara ai1 digital app, retail loans, and export credit.",
    featured: false
  },

  // ==========================================
  // 2. PRIVATE SECTOR BANKS
  // ==========================================
  {
    id: "hdfc",
    name: "HDFC Bank",
    category: "banks",
    subcategory: "private-sector",
    path: "/banks/private-sector/hdfc/hdfc.html",
    status: "active",
    source: "Banking Regulation Act, 1949 / RBI",
    officialUrl: "https://www.hdfcbank.com/",
    lastUpdated: "2025-02-15",
    description: "India's largest private sector bank by assets. Leader in credit cards, retail mortgages, automobile financing, and digital services.",
    featured: true
  },
  {
    id: "icici",
    name: "ICICI Bank",
    category: "banks",
    subcategory: "private-sector",
    path: "/banks/private-sector/icici/icici.html",
    status: "active",
    source: "Banking Regulation Act, 1949 / RBI",
    officialUrl: "https://www.icicibank.com/",
    lastUpdated: "2025-02-15",
    description: "Major private sector bank offering iMobile Pay, instant personal loans, InstaBIZ for MSMEs, and wealth management services.",
    featured: true
  },
  {
    id: "kotak",
    name: "Kotak Mahindra Bank",
    category: "banks",
    subcategory: "private-sector",
    path: "/banks/private-sector/kotak/kotak.html",
    status: "active",
    source: "Banking Regulation Act, 1949 / RBI",
    officialUrl: "https://www.kotak.com/",
    lastUpdated: "2025-02-15",
    description: "Prominent private bank pioneer of Kotak 811 zero balance savings account, consumer loans, and commercial banking.",
    featured: true
  },
  {
    id: "axis",
    name: "Axis Bank",
    category: "banks",
    subcategory: "private-sector",
    path: "/banks/private-sector/axis/axis.html",
    status: "active",
    source: "Banking Regulation Act, 1949 / RBI",
    officialUrl: "https://www.axisbank.com/",
    lastUpdated: "2025-02-15",
    description: "Third largest private sector bank offering Burgundy wealth solutions, co-branded cards, retail deposits, and corporate banking.",
    featured: true
  },

  // ==========================================
  // 3. FOREIGN BANKS OPERATING IN INDIA
  // ==========================================
  {
    id: "standard-chartered",
    name: "Standard Chartered Bank (India)",
    category: "banks",
    subcategory: "foreign",
    path: "/banks/foreign/standard-chartered/standard-chartered.html",
    status: "active",
    source: "RBI List of Foreign Banks in India",
    officialUrl: "https://www.sc.com/in/",
    lastUpdated: "2025-02-15",
    description: "Oldest foreign bank in India providing priority banking, global trade services, foreign currency accounts, and premium cards.",
    featured: false
  },
  {
    id: "hsbc",
    name: "HSBC India",
    category: "banks",
    subcategory: "foreign",
    path: "/banks/foreign/hsbc/hsbc.html",
    status: "active",
    source: "RBI List of Foreign Banks in India",
    officialUrl: "https://www.hsbc.co.in/",
    lastUpdated: "2025-02-15",
    description: "Global international bank offering HSBC Premier cross-border banking, wealth management, and corporate trade finance in India.",
    featured: false
  },

  // ==========================================
  // 4. REGIONAL RURAL BANKS (RRBs)
  // ==========================================
  {
    id: "aryavart-bank",
    name: "Aryavart Bank",
    category: "banks",
    subcategory: "regional-rural",
    path: "/banks/regional-rural/aryavart-bank/aryavart-bank.html",
    status: "active",
    source: "Regional Rural Banks Act, 1976 / NABARD",
    officialUrl: "https://aryavart-rrb.com/",
    lastUpdated: "2025-02-15",
    description: "One of India's largest Regional Rural Banks (sponsored by Bank of India), serving rural and semi-urban Uttar Pradesh.",
    featured: false
  },
  {
    id: "baroda-up-bank",
    name: "Baroda UP Bank",
    category: "banks",
    subcategory: "regional-rural",
    path: "/banks/regional-rural/baroda-up-bank/baroda-up-bank.html",
    status: "active",
    source: "Regional Rural Banks Act, 1976 / NABARD",
    officialUrl: "https://www.barodaupbank.in/",
    lastUpdated: "2025-02-15",
    description: "Major RRB sponsored by Bank of Baroda delivering agricultural credit, Kisan Credit Cards (KCC), and rural branch networks.",
    featured: false
  },

  // ==========================================
  // 5. SMALL FINANCE BANKS (SFBs)
  // ==========================================
  {
    id: "au-small-finance",
    name: "AU Small Finance Bank",
    category: "banks",
    subcategory: "small-finance",
    path: "/banks/small-finance/au-small-finance/au-small-finance.html",
    status: "active",
    source: "RBI Small Finance Bank Guidelines",
    officialUrl: "https://www.aubank.in/",
    lastUpdated: "2025-02-15",
    description: "India's largest Small Finance Bank offering high interest savings accounts, video banking, MSME loans, and credit cards.",
    featured: true
  },
  {
    id: "ujjivan-small-finance",
    name: "Ujjivan Small Finance Bank",
    category: "banks",
    subcategory: "small-finance",
    path: "/banks/small-finance/ujjivan-small-finance/ujjivan-small-finance.html",
    status: "active",
    source: "RBI Small Finance Bank Guidelines",
    officialUrl: "https://www.ujjivansfb.in/",
    lastUpdated: "2025-02-15",
    description: "Leading SFB dedicated to financial inclusion, affordable housing loans, micro-banking, and attractive term deposits.",
    featured: false
  },

  // ==========================================
  // 6. PAYMENTS BANKS
  // ==========================================
  {
    id: "airtel-payments-bank",
    name: "Airtel Payments Bank",
    category: "banks",
    subcategory: "payments-banks",
    path: "/banks/payments-banks/airtel-payments-bank/airtel-payments-bank.html",
    status: "active",
    source: "RBI Payments Bank Guidelines",
    officialUrl: "https://www.airtel.in/bank/",
    lastUpdated: "2025-02-15",
    description: "First payments bank of India offering digital zero balance accounts (up to ₹2 Lakh balance), FASTag, and UPI payments.",
    featured: true
  },
  {
    id: "india-post-payments-bank",
    name: "India Post Payments Bank (IPPB)",
    category: "banks",
    subcategory: "payments-banks",
    path: "/banks/payments-banks/india-post-payments-bank/india-post-payments-bank.html",
    status: "active",
    source: "Department of Posts, GoI / RBI",
    officialUrl: "https://www.ippbonline.com/",
    lastUpdated: "2025-02-15",
    description: "Government-owned payments bank leveraging 1.55 lakh post offices for doorstep digital banking, DBT transfers, and Aadhaar Pay.",
    featured: true
  },

  // ==========================================
  // 7. URBAN CO-OPERATIVE BANKS (UCBs)
  // ==========================================
  {
    id: "saraswat-bank",
    name: "Saraswat Co-operative Bank",
    category: "banks",
    subcategory: "cooperative",
    path: "/banks/cooperative/saraswat-bank/saraswat-bank.html",
    status: "active",
    source: "Multi-State Co-operative Societies Act / RBI",
    officialUrl: "https://www.saraswatbank.com/",
    lastUpdated: "2025-02-15",
    description: "India's largest scheduled urban co-operative bank with century-old legacy, covered under DICGC ₹5 Lakh insurance.",
    featured: false
  },
  {
    id: "cosmos-bank",
    name: "Cosmos Co-operative Bank",
    category: "banks",
    subcategory: "cooperative",
    path: "/banks/cooperative/cosmos-bank/cosmos-bank.html",
    status: "active",
    source: "Multi-State Co-operative Societies Act / RBI",
    officialUrl: "https://www.cosmosbank.com/",
    lastUpdated: "2025-02-15",
    description: "Prominent multi-state scheduled urban co-operative bank offering full modern retail and commercial banking.",
    featured: false
  },

  // ==========================================
  // 8. OTHER RBI REGULATED INSTITUTIONS (AIFI)
  // ==========================================
  {
    id: "exim-bank",
    name: "Export-Import Bank of India (EXIM Bank)",
    category: "banks",
    subcategory: "other-rbi-regulated",
    path: "/banks/other-rbi-regulated/exim-bank/exim-bank.html",
    status: "active",
    source: "Export-Import Bank of India Act, 1981",
    officialUrl: "https://www.eximbankindia.in/",
    lastUpdated: "2025-02-15",
    description: "Apex All India Financial Institution (AIFI) under RBI regulation for financing, facilitating, and promoting Indian foreign trade.",
    featured: false
  },

  // ==========================================
  // 9. CREDIT CARDS
  // ==========================================
  {
    id: "card-hdfc-regalia",
    name: "HDFC Regalia Gold Credit Card",
    category: "credit-cards",
    subcategory: "hdfc",
    path: "/credit-cards/hdfc/regalia-gold.html",
    status: "active",
    source: "HDFC Bank Official Card Portal",
    officialUrl: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/regalia-gold-credit-card",
    lastUpdated: "2025-02-15",
    description: "Premium travel and lifestyle credit card with domestic and international airport lounge access and Club Vistara privileges.",
    featured: true
  },
  {
    id: "card-sbi-simplyclick",
    name: "SBI SimplyCLICK Credit Card",
    category: "credit-cards",
    subcategory: "sbi",
    path: "/credit-cards/sbi/simplyclick.html",
    status: "active",
    source: "SBI Card Official Portal",
    officialUrl: "https://www.sbicard.com/en/personal/credit-cards/shopping/simplyclick-sbi-card.page",
    lastUpdated: "2025-02-15",
    description: "Popular shopping card with 10X reward points on partner online merchants (Amazon, BookMyShow, Cleartrip, Netmeds).",
    featured: true
  },
  {
    id: "card-icici-amazon-pay",
    name: "Amazon Pay ICICI Bank Credit Card",
    category: "credit-cards",
    subcategory: "icici",
    path: "/credit-cards/icici/amazon-pay.html",
    status: "active",
    source: "ICICI Bank & Amazon India",
    officialUrl: "https://www.icicibank.com/personal-banking/cards/credit-cards/amazon-pay-credit-card",
    lastUpdated: "2025-02-15",
    description: "Lifetime free (no annual fee) credit card offering 5% unlimited cashback for Amazon Prime members directly in Amazon Pay balance.",
    featured: true
  },
  {
    id: "card-axis-flipkart",
    name: "Flipkart Axis Bank Credit Card",
    category: "credit-cards",
    subcategory: "axis",
    path: "/credit-cards/axis/flipkart-axis.html",
    status: "active",
    source: "Axis Bank Official Card Portal",
    officialUrl: "https://www.axisbank.com/retail/cards/credit-card/flipkart-axis-bank-credit-card",
    lastUpdated: "2025-02-15",
    description: "Leading co-branded shopping card offering 5% unlimited cashback on Flipkart & Cleartrip and 4% on selected partners.",
    featured: true
  },

  // ==========================================
  // 10. UPI (Unified Payments Interface)
  // ==========================================
  {
    id: "upi-bhim",
    name: "BHIM UPI (NPCI)",
    category: "upi",
    subcategory: "official-apps",
    path: "/upi/bhim/bhim.html",
    status: "active",
    source: "National Payments Corporation of India (NPCI)",
    officialUrl: "https://www.bhimupi.org.in/",
    lastUpdated: "2025-02-15",
    description: "Government-backed interoperable UPI application developed by NPCI supporting 20+ Indian regional languages and UPI 123PAY.",
    featured: true
  },
  {
    id: "upi-phonepe",
    name: "PhonePe",
    category: "upi",
    subcategory: "third-party-apps",
    path: "/upi/phonepe/phonepe.html",
    status: "active",
    source: "NPCI Approved TPAP List",
    officialUrl: "https://www.phonepe.com/",
    lastUpdated: "2025-02-15",
    description: "Leading Third Party Application Provider (TPAP) on UPI network for merchant payments, utility recharges, and mutual funds.",
    featured: true
  },
  {
    id: "upi-google-pay",
    name: "Google Pay (GPay)",
    category: "upi",
    subcategory: "third-party-apps",
    path: "/upi/google-pay/google-pay.html",
    status: "active",
    source: "NPCI Approved TPAP List",
    officialUrl: "https://pay.google.com/intl/en_in/about/",
    lastUpdated: "2025-02-15",
    description: "Major TPAP partner with multiple PSP banks offering peer-to-peer transfers, bill splits, and secure merchant checkouts.",
    featured: true
  },
  {
    id: "upi-paytm",
    name: "Paytm UPI",
    category: "upi",
    subcategory: "third-party-apps",
    path: "/upi/paytm/paytm.html",
    status: "active",
    source: "NPCI Approved TPAP Multi-Bank Model",
    officialUrl: "https://paytm.com/",
    lastUpdated: "2025-02-15",
    description: "TPAP UPI app operating via multi-bank model (SBI, HDFC, Axis, Yes Bank) for retail and offline soundbox payments.",
    featured: false
  },
  {
    id: "upi-safety-guide",
    name: "UPI Safety & Fraud Protection Guide",
    category: "upi",
    subcategory: "education",
    path: "/upi/upi-safety/upi-safety.html",
    status: "active",
    source: "RBI Kehta Hai & NPCI UPI Safety Guidelines",
    officialUrl: "https://www.npci.org.in/what-we-do/upi/upi-safety-tips",
    lastUpdated: "2025-02-15",
    description: "Crucial guidelines on UPI PIN rule (never enter PIN to receive money), collect requests safety, and reporting 1930 cyber fraud.",
    featured: true
  },

  // ==========================================
  // 11. PAYMENTS SYSTEMS
  // ==========================================
  {
    id: "pay-neft-rtgs",
    name: "NEFT & RTGS Systems",
    category: "payments",
    subcategory: "clearing-systems",
    path: "/payments/neft-rtgs/neft-rtgs.html",
    status: "active",
    source: "Reserve Bank of India (Payment and Settlement Systems Act, 2007)",
    officialUrl: "https://www.rbi.org.in/scripts/FS_Overview.aspx?fn=9",
    lastUpdated: "2025-02-15",
    description: "Round-the-clock (24x7x365) electronic fund transfer systems operated directly by the Reserve Bank of India with zero member charges.",
    featured: true
  },
  {
    id: "pay-imps",
    name: "IMPS (Immediate Payment Service)",
    category: "payments",
    subcategory: "instant-payments",
    path: "/payments/imps/imps.html",
    status: "active",
    source: "NPCI IMPS Operating Rules",
    officialUrl: "https://www.npci.org.in/what-we-do/imps/product-overview",
    lastUpdated: "2025-02-15",
    description: "Instant interbank fund transfer system via account + IFSC or mobile + MMID up to ₹5 Lakh limit per transaction.",
    featured: false
  },
  {
    id: "pay-rupay",
    name: "RuPay Card Scheme",
    category: "payments",
    subcategory: "card-network",
    path: "/payments/rupay/rupay.html",
    status: "active",
    source: "NPCI National Card Scheme",
    officialUrl: "https://www.rupay.co.in/",
    lastUpdated: "2025-02-15",
    description: "Indigenous domestic debit and credit card network with UPI-linking capability and global acceptance via Discover and JCB.",
    featured: true
  },
  {
    id: "pay-wallets",
    name: "Prepaid Payment Instruments (PPI Wallets)",
    category: "payments",
    subcategory: "wallets",
    path: "/payments/wallets/wallets.html",
    status: "active",
    source: "RBI Master Directions on PPIs",
    officialUrl: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12156",
    lastUpdated: "2025-02-15",
    description: "Regulatory guide on Full KYC vs Small PPI digital wallets, interoperability mandates, and user balance safety guidelines.",
    featured: false
  },
  {
    id: "pay-naach",
    name: "NACH & e-Mandate Automated Payments",
    category: "payments",
    subcategory: "mandates",
    path: "/payments/naach-e-mandate/naach.html",
    status: "active",
    source: "NPCI National Automated Clearing House",
    officialUrl: "https://www.npci.org.in/what-we-do/nach/product-overview",
    lastUpdated: "2025-02-15",
    description: "Centralized web-based clearing system for bulk recurring debit transactions like loan EMIs, mutual fund SIPs, and insurance premiums.",
    featured: false
  },

  // ==========================================
  // 12. LOANS
  // ==========================================
  {
    id: "loan-personal",
    name: "Personal Loan Guide & Interest Comparison",
    category: "loans",
    subcategory: "personal-loan",
    path: "/loans/personal-loan/personal-loan.html",
    status: "active",
    source: "RBI Digital Lending Guidelines & Scheduled Bank Disclosures",
    officialUrl: "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=54181",
    lastUpdated: "2025-02-15",
    description: "Unsecured multi-purpose financing guide: interest rates (fixed vs floating), processing fees, Key Fact Statement (KFS), and APR calculation.",
    featured: true
  },
  {
    id: "loan-home",
    name: "Home Loan & Housing Finance Guide",
    category: "loans",
    subcategory: "home-loan",
    path: "/loans/home-loan/home-loan.html",
    status: "active",
    source: "National Housing Bank (NHB) & RBI Mortgage Rules",
    officialUrl: "https://nhb.org.in/",
    lastUpdated: "2025-02-15",
    description: "Comprehensive home loan guide: Repo-linked External Benchmark Lending Rate (EBLR), LTV ratios, foreclosure charges rules, and tax deductions.",
    featured: true
  },
  {
    id: "loan-education",
    name: "Education Loan & Vidya Lakshmi Portal",
    category: "loans",
    subcategory: "education-loan",
    path: "/loans/education-loan/education-loan.html",
    status: "active",
    source: "Ministry of Education & IBA Model Scheme",
    officialUrl: "https://www.vidyalakshmi.co.in/",
    lastUpdated: "2025-02-15",
    description: "Higher education finance for domestic and overseas studies, moratorium periods, collateral requirements up to ₹7.5 Lakh, and Section 80E benefits.",
    featured: true
  },
  {
    id: "loan-vehicle",
    name: "Vehicle / Auto Loan Guide",
    category: "loans",
    subcategory: "vehicle-loan",
    path: "/loans/vehicle-loan/vehicle-loan.html",
    status: "active",
    source: "RBI Guidelines on Consumer Credit",
    officialUrl: "https://rbi.org.in/",
    lastUpdated: "2025-02-15",
    description: "Car, two-wheeler, and Electric Vehicle (EV) financing guide with on-road vs ex-showroom funding, hypothecation rules, and repayment tenor.",
    featured: false
  },
  {
    id: "loan-gold",
    name: "Gold Loan Guide & LTV Norms",
    category: "loans",
    subcategory: "gold-loan",
    path: "/loans/gold-loan/gold-loan.html",
    status: "active",
    source: "RBI Master Directions on Loans Against Gold Jewellery",
    officialUrl: "https://rbi.org.in/",
    lastUpdated: "2025-02-15",
    description: "Secured instant liquidity against gold ornaments: RBI 75% LTV cap, bullet repayment schemes, hallmarking evaluation, and valuation charges.",
    featured: false
  },
  {
    id: "loan-business",
    name: "MSME & Business Loan Guide",
    category: "loans",
    subcategory: "business-loan",
    path: "/loans/business-loan/business-loan.html",
    status: "active",
    source: "Ministry of MSME & SIDBI CGTMSE Scheme",
    officialUrl: "https://www.cgtmse.in/",
    lastUpdated: "2025-02-15",
    description: "Working capital, machinery loans, and CGTMSE collateral-free credit guarantee for micro, small, and medium enterprises.",
    featured: false
  },
  {
    id: "loan-lap",
    name: "Loan Against Property (LAP)",
    category: "loans",
    subcategory: "loan-against-property",
    path: "/loans/loan-against-property/loan-against-property.html",
    status: "active",
    source: "Scheduled Commercial Banks Credit Policy",
    officialUrl: "https://rbi.org.in/",
    lastUpdated: "2025-02-15",
    description: "Mortgage loan against self-occupied residential or commercial real estate for long tenures (up to 15-20 years) at lower interest than personal loans.",
    featured: false
  },

  // ==========================================
  // 13. INSURANCE
  // ==========================================
  {
    id: "ins-term-life",
    name: "Term Life Insurance Fundamentals",
    category: "insurance",
    subcategory: "life",
    path: "/insurance/life/term-insurance.html",
    status: "active",
    source: "Insurance Regulatory and Development Authority of India (IRDAI)",
    officialUrl: "https://irdai.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Pure protection life insurance guide: Claim Settlement Ratio (CSR), sum assured calculation (10x-15x annual income), and critical illness riders.",
    featured: true
  },
  {
    id: "ins-lic-tech-term",
    name: "LIC Tech Term & Life Insurance Products",
    category: "insurance",
    subcategory: "life",
    path: "/insurance/life/lic-tech-term.html",
    status: "active",
    source: "Life Insurance Corporation Act, 1956",
    officialUrl: "https://licindia.in/",
    lastUpdated: "2025-02-15",
    description: "Official portal information for Life Insurance Corporation of India (LIC) online pure risk term plans and sovereign government guarantee.",
    featured: false
  },
  {
    id: "ins-health-floater",
    name: "Health Insurance & Family Floater Guide",
    category: "insurance",
    subcategory: "health",
    path: "/insurance/health/individual-family-floater.html",
    status: "active",
    source: "IRDAI Health Insurance Regulations",
    officialUrl: "https://irdai.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Mediclaim policy guide: room rent capping, pre-existing disease (PED) waiting periods, cashless network hospitals, and Section 80D tax deductions.",
    featured: true
  },
  {
    id: "ins-motor",
    name: "Motor Vehicle Insurance (Third Party vs Comprehensive)",
    category: "insurance",
    subcategory: "vehicle",
    path: "/insurance/vehicle/motor-comprehensive.html",
    status: "active",
    source: "Motor Vehicles (Amendment) Act, 2019 / IRDAI",
    officialUrl: "https://morth.nic.in/",
    lastUpdated: "2025-02-15",
    description: "Statutory mandatory Third-Party liability insurance vs Own Damage (OD) comprehensive protection, No Claim Bonus (NCB), and zero depreciation cover.",
    featured: false
  },
  {
    id: "ins-travel",
    name: "Travel Insurance Guide (Domestic & Overseas)",
    category: "insurance",
    subcategory: "general",
    path: "/insurance/general/travel-insurance.html",
    status: "active",
    source: "IRDAI General Insurance Guidelines",
    officialUrl: "https://irdai.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Emergency medical expense coverage abroad, passport loss assistance, trip cancellation reimbursement, and flight delay indemnities.",
    featured: false
  },

  // ==========================================
  // 14. INVESTMENTS
  // ==========================================
  {
    id: "inv-mutual-funds",
    name: "Mutual Funds & SIP Investing Guide",
    category: "investments",
    subcategory: "mutual-funds",
    path: "/investments/mutual-funds/sip-equity-debt.html",
    status: "active",
    source: "Securities and Exchange Board of India (SEBI) / AMFI",
    officialUrl: "https://www.amfiindia.com/",
    lastUpdated: "2025-02-15",
    description: "Equity, debt, hybrid, and index mutual funds guide. Direct vs Regular plans, Expense Ratio impact, and Systematic Investment Plan (SIP) compounding.",
    featured: true
  },
  {
    id: "inv-stocks-demat",
    name: "Stocks & Demat Account Essentials",
    category: "investments",
    subcategory: "stocks",
    path: "/investments/stocks/equity-demat.html",
    status: "active",
    source: "SEBI / NSE / BSE / NSDL / CDSL",
    officialUrl: "https://www.sebi.gov.in/",
    lastUpdated: "2025-02-15",
    description: "How secondary stock market operations work in India: Demat vs Trading accounts, depository participants (CDSL/NSDL), and basic equity risk concepts.",
    featured: true
  },
  {
    id: "inv-sgb",
    name: "Sovereign Gold Bonds (SGB)",
    category: "investments",
    subcategory: "bonds",
    path: "/investments/bonds/sovereign-gold-bonds.html",
    status: "active",
    source: "Reserve Bank of India on behalf of Government of India",
    officialUrl: "https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=56930",
    lastUpdated: "2025-02-15",
    description: "Government securities denominated in grams of gold: 2.50% annual fixed coupon interest and 100% tax exemption on capital gains at 8-year maturity.",
    featured: true
  },
  {
    id: "inv-rbi-retail-direct",
    name: "RBI Retail Direct (Government Securities)",
    category: "investments",
    subcategory: "government-securities",
    path: "/investments/government-securities/rbi-retail-direct.html",
    status: "active",
    source: "Reserve Bank of India Retail Direct Scheme",
    officialUrl: "https://rbiretaildirect.org.in/",
    lastUpdated: "2025-02-15",
    description: "Direct investment portal for retail investors to buy Treasury Bills (T-Bills), Central Government Dated Securities, and State Development Loans (SDLs).",
    featured: true
  },
  {
    id: "inv-etf",
    name: "Exchange Traded Funds (ETFs) & Index Funds",
    category: "investments",
    subcategory: "other",
    path: "/investments/other/etf-index-funds.html",
    status: "active",
    source: "SEBI Regulations on Passive Investment Schemes",
    officialUrl: "https://www.sebi.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Low-cost passive investing tracking Nifty 50, Sensex, Gold ETFs, and Liquid ETFs traded live on stock exchanges during market hours.",
    featured: false
  },

  // ==========================================
  // 15. GOVERNMENT SCHEMES & FINANCIAL PROGRAMS
  // ==========================================
  {
    id: "gov-pmjdy",
    name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    category: "government",
    subcategory: "schemes",
    path: "/government/schemes/pm-jan-dhan-yojana.html",
    status: "active",
    source: "Department of Financial Services, Ministry of Finance, GoI",
    officialUrl: "https://pmjdy.gov.in/",
    lastUpdated: "2025-02-15",
    description: "National mission for financial inclusion offering zero balance savings accounts, RuPay debit cards with ₹2 Lakh accident cover, and ₹10,000 overdraft facility.",
    featured: true
  },
  {
    id: "gov-pm-kisan",
    name: "PM Kisan Samman Nidhi Yojana",
    category: "government",
    subcategory: "schemes",
    path: "/government/schemes/pm-kisan-samman.html",
    status: "active",
    source: "Ministry of Agriculture and Farmers Welfare, GoI",
    officialUrl: "https://pmkisan.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Direct income support scheme providing ₹6,000 per year in three equal installments of ₹2,000 to eligible landholder farmer families via DBT.",
    featured: true
  },
  {
    id: "gov-pm-mudra",
    name: "Pradhan Mantri MUDRA Yojana (PMMY)",
    category: "government",
    subcategory: "schemes",
    path: "/government/schemes/pm-mudra-yojana.html",
    status: "active",
    source: "Mudra Bank / Department of Financial Services",
    officialUrl: "https://www.mudra.org.in/",
    lastUpdated: "2025-02-15",
    description: "Collateral-free enterprise microloans up to ₹10 Lakh (extended to ₹20 Lakh under revised guidelines) under Shishu, Kishore, and Tarun categories.",
    featured: true
  },
  {
    id: "gov-ssy",
    name: "Sukanya Samriddhi Yojana (SSY)",
    category: "government",
    subcategory: "schemes",
    path: "/government/schemes/sukanya-samriddhi-yojana.html",
    status: "active",
    source: "National Savings Institute / Ministry of Finance",
    officialUrl: "https://www.nsiindia.gov.in/",
    lastUpdated: "2025-02-15",
    description: "High-interest government small savings scheme for girl children (up to age 10) with complete EEE (Exempt-Exempt-Exempt) tax benefit.",
    featured: true
  },
  {
    id: "gov-stand-up-india",
    name: "Stand-Up India Scheme",
    category: "government",
    subcategory: "schemes",
    path: "/government/schemes/stand-up-india.html",
    status: "active",
    source: "Department of Financial Services & SIDBI",
    officialUrl: "https://www.standupmitra.in/",
    lastUpdated: "2025-02-15",
    description: "Bank loans between ₹10 Lakh and ₹1 Crore to at least one SC/ST borrower and at least one woman borrower per bank branch for greenfield enterprises.",
    featured: false
  },
  {
    id: "gov-dbt",
    name: "Direct Benefit Transfer (DBT) Bharat Portal",
    category: "government",
    subcategory: "financial-assistance",
    path: "/government/financial-assistance/dbts.html",
    status: "active",
    source: "Cabinet Secretariat, Government of India",
    officialUrl: "https://dbtbharat.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Central portal coordinating welfare subsidies and scholarship transfers directly to Aadhaar-seeded bank accounts without middlemen leakages.",
    featured: false
  },

  // ==========================================
  // 16. PENSION
  // ==========================================
  {
    id: "pension-nps",
    name: "National Pension System (NPS)",
    category: "pension",
    subcategory: "nps",
    path: "/pension/nps/nps.html",
    status: "active",
    source: "Pension Fund Regulatory and Development Authority (PFRDA)",
    officialUrl: "https://www.pfrda.org.in/",
    lastUpdated: "2025-02-15",
    description: "Voluntary low-cost retirement savings vehicle regulated by PFRDA offering Tier-I (tax-deductible under 80CCD) and Tier-II withdrawable accounts.",
    featured: true
  },
  {
    id: "pension-apy",
    name: "Atal Pension Yojana (APY)",
    category: "pension",
    subcategory: "atal-pension-yojana",
    path: "/pension/atal-pension-yojana/atal-pension-yojana.html",
    status: "active",
    source: "PFRDA / Ministry of Finance, GoI",
    officialUrl: "https://www.npscra.nsdl.co.in/nsdl/scheme-details/Atal-Pension-Yojana.php",
    lastUpdated: "2025-02-15",
    description: "Government-guaranteed pension scheme for unorganized sector workers aged 18-40 offering monthly pension of ₹1,000 to ₹5,000 from age 60.",
    featured: true
  },
  {
    id: "pension-epfo",
    name: "Employees' Provident Fund & Pension (EPFO / EPS)",
    category: "pension",
    subcategory: "epfo",
    path: "/pension/epfo/epf-scheme.html",
    status: "active",
    source: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
    officialUrl: "https://www.epfindia.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Mandatory statutory social security fund for salaried employees with monthly 12% employee + 12% employer contributions (EPF + EPS).",
    featured: true
  },

  // ==========================================
  // 17. SAVINGS
  // ==========================================
  {
    id: "sav-account",
    name: "Savings Account Features & DICGC Insurance",
    category: "savings",
    subcategory: "savings-account",
    path: "/savings/savings-account/savings-account.html",
    status: "active",
    source: "Reserve Bank of India & DICGC Act, 1961",
    officialUrl: "https://www.dicgc.org.in/",
    lastUpdated: "2025-02-15",
    description: "Core retail banking deposit guide: daily balance interest calculation, MAB charges, UPI limits, and statutory ₹5 Lakh insurance per depositor per bank.",
    featured: true
  },
  {
    id: "sav-emergency-fund",
    name: "Emergency Fund Planning Guide",
    category: "savings",
    subcategory: "emergency-fund",
    path: "/savings/emergency-fund/emergency-fund.html",
    status: "active",
    source: "Financial Planning Standards Board Guidelines",
    officialUrl: "https://fengoo.in/",
    lastUpdated: "2025-02-15",
    description: "How to structure 3-6 months of mandatory living expenses across high-liquidity sweep-in deposits, liquid mutual funds, and cash reserves.",
    featured: true
  },
  {
    id: "sav-sweep-in",
    name: "Auto Sweep-In Fixed Deposits",
    category: "savings",
    subcategory: "sweep-in-fd",
    path: "/savings/sweep-in-fd/sweep-in.html",
    status: "active",
    source: "RBI Master Direction on Interest Rates on Deposits",
    officialUrl: "https://rbi.org.in/",
    lastUpdated: "2025-02-15",
    description: "Dual benefit banking feature combining high FD interest rates on idle surplus funds with instant liquidity during account debits.",
    featured: false
  },
  {
    id: "sav-rd",
    name: "Recurring Deposit (RD) Guide",
    category: "savings",
    subcategory: "recurring-deposit",
    path: "/savings/recurring-deposit/rd.html",
    status: "active",
    source: "Indian Banks' Association (IBA)",
    officialUrl: "https://www.iba.org.in/",
    lastUpdated: "2025-02-15",
    description: "Disciplined monthly term savings with quarterly compounding interest, premature withdrawal rules, and TDS implications under Section 194A.",
    featured: false
  },
  {
    id: "sav-ppf",
    name: "Public Provident Fund (PPF)",
    category: "savings",
    subcategory: "public-provident-fund",
    path: "/savings/public-provident-fund/ppf.html",
    status: "active",
    source: "National Savings Institute / Ministry of Finance",
    officialUrl: "https://www.nsiindia.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Sovereign 15-year government savings scheme with zero risk, complete EEE tax exemptions, loan facilities, and annual investment limit of ₹1.5 Lakh.",
    featured: true
  },

  // ==========================================
  // 18. TAX
  // ==========================================
  {
    id: "tax-slabs",
    name: "Income Tax Slabs & Rate Structure",
    category: "tax",
    subcategory: "income-tax-slabs",
    path: "/tax/income-tax-slabs/income-tax-slabs.html",
    status: "active",
    source: "Income Tax Department, Ministry of Finance, GoI",
    officialUrl: "https://www.incometax.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Complete slab rates, Section 87A rebate limits (tax-free income up to ₹7 Lakh in New Regime), standard deduction, and surcharge rules.",
    featured: true
  },
  {
    id: "tax-regime-comparison",
    name: "New vs Old Tax Regime Comparison",
    category: "tax",
    subcategory: "new-vs-old-regime",
    path: "/tax/new-vs-old-regime/new-vs-old-regime.html",
    status: "active",
    source: "Finance Act / Central Board of Direct Taxes (CBDT)",
    officialUrl: "https://www.incometax.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Detailed breakdown comparing Section 115BAC default new concessional regime vs old regime deductions (80C, 80D, HRA, home loan interest).",
    featured: true
  },
  {
    id: "tax-gst-slabs",
    name: "GST Slabs & Indirect Tax Rates",
    category: "tax",
    subcategory: "gst-slabs",
    path: "/tax/gst-slabs/gst-slabs.html",
    status: "active",
    source: "GST Council of India / CBIC",
    officialUrl: "https://www.gst.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Goods and Services Tax structure: 0% exempt essentials, 5% standard mass items, 12% standard goods, 18% services & manufacturing, and 28% luxury/demerit goods.",
    featured: false
  },

  // ==========================================
  // 19. FINANCIAL EDUCATION
  // ==========================================
  {
    id: "edu-banking-basics",
    name: "Banking Basics: KYC, Accounts & Digital Safety",
    category: "financial-education",
    subcategory: "banking-basics",
    path: "/financial-education/banking-basics/banking-basics.html",
    status: "active",
    source: "Reserve Bank of India Consumer Education",
    officialUrl: "https://rbi.org.in/",
    lastUpdated: "2025-02-15",
    description: "Essential primer on Savings vs Current accounts, KYC document compliance, net banking safety, OTP security, and banking ombudsman complaints.",
    featured: true
  },
  {
    id: "edu-cibil-score",
    name: "Credit Score & CIBIL Demystified",
    category: "financial-education",
    subcategory: "cibil-credit-score",
    path: "/financial-education/cibil-credit-score/cibil-credit-score.html",
    status: "active",
    source: "Credit Information Companies (Regulation) Act, 2005",
    officialUrl: "https://www.cibil.com/",
    lastUpdated: "2025-02-15",
    description: "How 300-900 credit scoring works: payment history (35%), credit utilization ratio below 30%, hard inquiries, and disputing bureau errors.",
    featured: true
  },
  {
    id: "edu-compound-interest",
    name: "The Power of Compounding & Rule of 72",
    category: "financial-education",
    subcategory: "compound-interest-rule",
    path: "/financial-education/compound-interest-rule/compound-interest.html",
    status: "active",
    source: "Financial Literacy Core Concepts",
    officialUrl: "https://fengoo.in/",
    lastUpdated: "2025-02-15",
    description: "Mathematical explanations of exponential compounding, time horizon advantages, inflation erosion, and calculating money doubling time via 72/r.",
    featured: true
  },
  {
    id: "edu-budgeting-50-30-20",
    name: "50-30-20 Budgeting Rule for Beginners",
    category: "financial-education",
    subcategory: "budgeting-50-30-20",
    path: "/financial-education/budgeting-50-30-20/budgeting-rule.html",
    status: "active",
    source: "Personal Finance Standards",
    officialUrl: "https://fengoo.in/",
    lastUpdated: "2025-02-15",
    description: "Practical monthly budgeting framework: 50% for Needs (rent, food, bills), 30% for Wants (leisure, hobbies), and 20% for Savings & Debt repayment.",
    featured: false
  },
  {
    id: "edu-fraud-awareness",
    name: "Financial Fraud Awareness & Cyber Security",
    category: "financial-education",
    subcategory: "financial-fraud-awareness",
    path: "/financial-education/financial-fraud-awareness/fraud-awareness.html",
    status: "active",
    source: "National Cyber Crime Reporting Portal (MHA) & RBI",
    officialUrl: "https://cybercrime.gov.in/",
    lastUpdated: "2025-02-15",
    description: "Warning signs of digital arrest scams, fake investment WhatsApp groups, APK screen sharing malwares, and immediate action on helpline 1930.",
    featured: true
  },

  // ==========================================
  // 20. WORKING FINANCIAL CALCULATORS
  // ==========================================
  {
    id: "calc-emi",
    name: "EMI Calculator",
    category: "calculators",
    subcategory: "loans",
    path: "/calculators/emi.html",
    status: "active",
    source: "Standard Financial Mathematics",
    officialUrl: "https://fengoo.in/calculators/emi.html",
    lastUpdated: "2025-02-15",
    description: "Calculate monthly Equated Monthly Installment, total interest payable, and principal breakdown for personal, car, and home loans.",
    featured: true
  },
  {
    id: "calc-loan",
    name: "General Loan Calculator",
    category: "calculators",
    subcategory: "loans",
    path: "/calculators/loan.html",
    status: "active",
    source: "Standard Financial Mathematics",
    officialUrl: "https://fengoo.in/calculators/loan.html",
    lastUpdated: "2025-02-15",
    description: "Interactive loan calculation tool with repayment tenures, interest payment schedules, and principal amortizations.",
    featured: false
  },
  {
    id: "calc-sip",
    name: "SIP (Systematic Investment Plan) Calculator",
    category: "calculators",
    subcategory: "investments",
    path: "/calculators/sip.html",
    status: "active",
    source: "Compound Interest Compounding Formula",
    officialUrl: "https://fengoo.in/calculators/sip.html",
    lastUpdated: "2025-02-15",
    description: "Forecast expected wealth accumulation from monthly mutual fund SIP contributions based on projected annual return rates.",
    featured: true
  },
  {
    id: "calc-fd",
    name: "Fixed Deposit (FD) Calculator",
    category: "calculators",
    subcategory: "deposits",
    path: "/calculators/fd.html",
    status: "active",
    source: "Quarterly Compounding Bank Formula",
    officialUrl: "https://fengoo.in/calculators/fd.html",
    lastUpdated: "2025-02-15",
    description: "Calculate maturity amount and total accrued interest on bank term deposits with quarterly or annual compounding cycles.",
    featured: true
  },
  {
    id: "calc-rd",
    name: "Recurring Deposit (RD) Calculator",
    category: "calculators",
    subcategory: "deposits",
    path: "/calculators/rd.html",
    status: "active",
    source: "Quarterly Compounding IBA Formula",
    officialUrl: "https://fengoo.in/calculators/rd.html",
    lastUpdated: "2025-02-15",
    description: "Compute maturity value of monthly recurring deposits in banks or post offices with quarterly interest compounding.",
    featured: false
  },
  {
    id: "calc-simple-interest",
    name: "Simple Interest Calculator",
    category: "calculators",
    subcategory: "math",
    path: "/calculators/simple-interest.html",
    status: "active",
    source: "Standard SI Formula (P × R × T / 100)",
    officialUrl: "https://fengoo.in/calculators/simple-interest.html",
    lastUpdated: "2025-02-15",
    description: "Quick simple interest calculator for short-term lending, promissory notes, and non-compounding debt securities.",
    featured: false
  },
  {
    id: "calc-compound-interest",
    name: "Compound Interest Calculator",
    category: "calculators",
    subcategory: "math",
    path: "/calculators/compound-interest.html",
    status: "active",
    source: "Standard Compound Interest Formula",
    officialUrl: "https://fengoo.in/calculators/compound-interest.html",
    lastUpdated: "2025-02-15",
    description: "Calculate compounded returns across daily, monthly, quarterly, semi-annual, and annual compounding frequencies.",
    featured: true
  },
  {
    id: "calc-gst",
    name: "GST (Goods & Services Tax) Calculator",
    category: "calculators",
    subcategory: "tax",
    path: "/calculators/gst.html",
    status: "active",
    source: "GST Rates (5%, 12%, 18%, 28%)",
    officialUrl: "https://fengoo.in/calculators/gst.html",
    lastUpdated: "2025-02-15",
    description: "Calculate Inclusive and Exclusive GST amounts with automatic CGST and SGST equal 50:50 splits.",
    featured: true
  },
  {
    id: "calc-income-tax",
    name: "Income Tax Calculator (FY 2024-25 / 2025-26)",
    category: "calculators",
    subcategory: "tax",
    path: "/calculators/income-tax.html",
    status: "active",
    source: "Income Tax Department Slab Rates",
    officialUrl: "https://fengoo.in/calculators/income-tax.html",
    lastUpdated: "2025-02-15",
    description: "Compare tax liability under New Tax Regime (Section 115BAC) vs Old Tax Regime with standard deduction of ₹75,000.",
    featured: true
  },
  {
    id: "calc-inflation",
    name: "Inflation Calculator",
    category: "calculators",
    subcategory: "planning",
    path: "/calculators/inflation.html",
    status: "active",
    source: "Purchasing Power Parity Formula",
    officialUrl: "https://fengoo.in/calculators/inflation.html",
    lastUpdated: "2025-02-15",
    description: "Calculate future cost of living and purchasing power loss of money across 5 to 30 years based on projected inflation rate.",
    featured: false
  },
  {
    id: "calc-salary",
    name: "In-Hand Salary / Take-Home Calculator",
    category: "calculators",
    subcategory: "planning",
    path: "/calculators/salary.html",
    status: "active",
    source: "EPF & Professional Tax Regulations",
    officialUrl: "https://fengoo.in/calculators/salary.html",
    lastUpdated: "2025-02-15",
    description: "Convert annual Cost to Company (CTC) into estimated monthly in-hand take-home salary after EPF and tax deductions.",
    featured: true
  },
  {
    id: "calc-loan-eligibility",
    name: "Loan Eligibility (FOIR) Calculator",
    category: "calculators",
    subcategory: "loans",
    path: "/calculators/loan-eligibility.html",
    status: "active",
    source: "Fixed Obligation to Income Ratio (FOIR) Norms",
    officialUrl: "https://fengoo.in/calculators/loan-eligibility.html",
    lastUpdated: "2025-02-15",
    description: "Estimate maximum borrowing eligibility for personal and home loans based on net monthly income and existing EMI obligations.",
    featured: true
  },
  {
    id: "calc-percentage",
    name: "Percentage Calculator",
    category: "calculators",
    subcategory: "math",
    path: "/calculators/percentage.html",
    status: "active",
    source: "Mathematical Percentage Operations",
    officialUrl: "https://fengoo.in/calculators/percentage.html",
    lastUpdated: "2025-02-15",
    description: "Compute percentage increases, percentage decreases, and proportional changes between two numbers instantly.",
    featured: false
  },
  {
    id: "calc-discount",
    name: "Discount Calculator",
    category: "calculators",
    subcategory: "math",
    path: "/calculators/discount.html",
    status: "active",
    source: "Retail Pricing Formula",
    officialUrl: "https://fengoo.in/calculators/discount.html",
    lastUpdated: "2025-02-15",
    description: "Calculate exact savings, discounted price, and final payable amount with single or double consecutive discounts.",
    featured: false
  },
  {
    id: "calc-profit-loss",
    name: "Profit & Loss Calculator",
    category: "calculators",
    subcategory: "math",
    path: "/calculators/profit-loss.html",
    status: "active",
    source: "Commercial Accounting Formulas",
    officialUrl: "https://fengoo.in/calculators/profit-loss.html",
    lastUpdated: "2025-02-15",
    description: "Calculate net profit or loss amount and percentage markup based on Cost Price (CP) and Selling Price (SP).",
    featured: false
  },
  {
    id: "calc-average",
    name: "Average (Mean) Calculator",
    category: "calculators",
    subcategory: "math",
    path: "/calculators/average.html",
    status: "active",
    source: "Statistical Mean Formula",
    officialUrl: "https://fengoo.in/calculators/average.html",
    lastUpdated: "2025-02-15",
    description: "Calculate arithmetic average, total sum, and count for multiple financial figures, expenditures, or monthly savings.",
    featured: false
  },
  {
    id: "calc-ratio",
    name: "Ratio Calculator",
    category: "calculators",
    subcategory: "math",
    path: "/calculators/ratio.html",
    status: "active",
    source: "Mathematical Proportionality Formula",
    officialUrl: "https://fengoo.in/calculators/ratio.html",
    lastUpdated: "2025-02-15",
    description: "Simplify financial ratios, solve for missing proportion terms (A:B = C:D), and calculate asset allocation splits.",
    featured: false
  },
  {
    id: "calc-age",
    name: "Age & Financial Milestone Calculator",
    category: "calculators",
    subcategory: "planning",
    path: "/calculators/age.html",
    status: "active",
    source: "Calendar Calculations",
    officialUrl: "https://fengoo.in/calculators/age.html",
    lastUpdated: "2025-02-15",
    description: "Calculate exact chronological age in years, months, and days for scheme eligibility (SSY, APY, Senior Citizen schemes).",
    featured: false
  },
  {
    id: "calc-currency",
    name: "Currency Conversion Estimator",
    category: "calculators",
    subcategory: "planning",
    path: "/calculators/currency-converter.html",
    status: "active",
    source: "Indicative Forex Reference Rates",
    officialUrl: "https://fengoo.in/calculators/currency-converter.html",
    lastUpdated: "2025-02-15",
    description: "Convert major global currencies (USD, EUR, GBP, AED, SGD) to Indian Rupee (INR) with custom spread adjustment.",
    featured: false
  },
  {
    id: "calc-amortization",
    name: "Loan Amortization Schedule Calculator",
    category: "calculators",
    subcategory: "loans",
    path: "/calculators/loan-amortization.html",
    status: "active",
    source: "Reducing Balance Amortization",
    officialUrl: "https://fengoo.in/calculators/loan-amortization.html",
    lastUpdated: "2025-02-15",
    description: "Generate full year-by-year and month-by-month loan repayment schedules detailing principal reduction and interest paid.",
    featured: true
  },

  // ==========================================
  // 21. OFFICIAL REGULATORY LINKS DIRECTORY
  // ==========================================
  {
    id: "official-links-portal",
    name: "Verified Official Government & Regulatory Links Directory",
    category: "official-links",
    subcategory: "regulatory",
    path: "/official-links/official-links.html",
    status: "active",
    source: "RBI, SEBI, IRDAI, PFRDA, CBDT, MoF Official Registries",
    officialUrl: "https://fengoo.in/official-links/official-links.html",
    lastUpdated: "2025-02-15",
    description: "Comprehensive directory of 100% verified official government portals, regulators, and consumer dispute redressal portals.",
    featured: true
  }
];

// Helper functions for registry querying
if (typeof window !== "undefined") {
  window.FENGOO_REGISTRY = FENGOO_REGISTRY;

  window.getRegistryEntityById = function(id) {
    return FENGOO_REGISTRY.find(item => item.id === id) || null;
  };

  window.getRegistryEntitiesByCategory = function(category) {
    return FENGOO_REGISTRY.filter(item => item.category === category);
  };

  window.getRegistryFeaturedEntities = function() {
    return FENGOO_REGISTRY.filter(item => item.featured === true);
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { FENGOO_REGISTRY };
}
