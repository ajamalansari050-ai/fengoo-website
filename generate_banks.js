import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';

const banks = [
  // 1. Kotak Mahindra Bank
  {
    filePath: 'banks/private-sector/kotak/kotak.html',
    rootRel: '../../..',
    id: 'kotak',
    name: 'Kotak Mahindra Bank',
    tagline: 'Private Sector Scheduled Commercial Bank | 811 Digital Banking',
    bankType: 'Private Sector Bank',
    colors: {
      primary: '#ed1b24',
      secondary: '#003366',
      accent: '#28a745'
    },
    founded: '2003 (RBI license granted)',
    headquarters: 'Mumbai, Maharashtra',
    rbiStatus: 'Scheduled Commercial Bank (Second Schedule to RBI Act, 1934)',
    dicgcCoverage: 'Yes (Up to ₹5,00,000 per depositor for principal + interest)',
    officialUrl: 'https://www.kotak.com/',
    tollFree: '1860 266 2666 / 1800 209 0000',
    lastUpdated: '2025-02-15',
    about: 'Kotak Mahindra Bank Limited is one of India\'s premier private financial services conglomerates. In February 2003, Kotak Mahindra Finance Ltd. (KMFL), the group\'s flagship company, received a banking licence from the Reserve Bank of India (RBI), becoming the first non-banking finance company in India to convert into a commercial bank. The bank is recognized for its Kotak 811 zero-balance digital savings platform, innovative ActivMoney auto-sweep deposit system, and comprehensive corporate banking franchise.',
    products: [
      { name: 'Kotak 811 Zero Balance Savings', desc: 'Completely paperless digital savings account opened via Video KYC. Zero minimum balance maintenance penalty, virtual Visa debit card, and instant fund transfers.' },
      { name: 'Everyday & Silk Savings Accounts', desc: 'Specialized savings accounts tailored for family daily cashflows and women entrepreneurs with preferential locker discounts and health offers.' },
      { name: 'Kotak ActivMoney (Auto Sweep-in FD)', desc: 'Surplus funds above threshold automatically convert into 180-day term deposits earning higher interest with zero premature penalty on liquidity draw.' },
      { name: 'Fixed & Recurring Deposits', desc: 'Term deposits with tenors ranging from 7 days to 10 years, offering additional 0.50% interest rate premium for senior citizens.' },
      { name: 'Home Loans & Loan Against Property', desc: 'Competitive floating interest rates linked to RBI Repo rate with simple documentation and online instant in-principle sanction.' },
      { name: 'Personal & Business Loans', desc: 'Unsecured financing for medical emergencies, home renovation, or working capital with customized tenures up to 60 months.' },
      { name: 'Credit Cards (White, League, Zen)', desc: 'Lifestyle, dining, and reward cards with airport lounge access, milestone reward vouchers, and contactless payment security.' },
      { name: 'Digital & Mobile Banking (Kotak App)', desc: 'Rated digital banking platform featuring biometric login, UPI scan & pay, investment tracking, and instant card controls.' }
    ],
    eligibility: [
      'Resident Individuals aged 18 years and above (for 811 Video KYC).',
      'Valid Indian Mobile Number linked with UIDAI Aadhaar.',
      'Physical Permanent Account Number (PAN) card present during video verification.',
      'Hindu Undivided Families (HUF), Proprietorships, and Corporate entities eligible for regular non-811 current/savings products.'
    ],
    documents: [
      'Identity Proof: Aadhaar Card / Passport / Voter ID / Driving License.',
      'Address Proof: Aadhaar / Passport / Utility Bill (not older than 2 months).',
      'Tax Compliance: Original Permanent Account Number (PAN) Card or Form 60.',
      'Income Documentation (For Loans/Cards): Latest 3 months salary slips, 6 months bank statement, Form 16 / ITR-V.'
    ],
    charges: [
      { item: 'Kotak 811 Account Maintenance', fee: 'Zero (No minimum balance requirement)' },
      { item: 'Standard Branch Savings MAB', fee: '₹10,000 (Metro) / ₹5,000 (Semi-Urban) / ₹2,000 (Rural)' },
      { item: 'ATM Withdrawals (Kotak ATMs)', fee: 'Free unlimited transactions on eligible tiers' },
      { item: 'NEFT / RTGS (Online / Mobile)', fee: 'Zero charges as per RBI mandate' },
      { item: 'IMPS (Online Digital)', fee: 'Nil for standard digital retail tiers' }
    ],
    partnerLink: {
      url: 'https://leads.banksathi.com/?h=V0xkeXEyZnRlNUo3VUhkWTd6VWM2QT09',
      label: 'Kotak 811 अकाउंट तुरंत खोलें (BankSathi Partner Offer)',
      disclosure: 'Disclosure: यह Kotak Mahindra Bank का Commercial Partner Link है। यदि आप यहाँ से सफलतापूर्वक अकाउंट खोलते हैं तो Fengoo को referral commission मिल सकता है, बिना आपके किसी अतिरिक्त शुल्क के।'
    }
  },

  // 2. HDFC Bank
  {
    filePath: 'banks/private-sector/hdfc/hdfc.html',
    rootRel: '../../..',
    id: 'hdfc',
    name: 'HDFC Bank',
    tagline: 'India\'s Largest Private Sector Bank by Market Capitalization and Balance Sheet',
    bankType: 'Private Sector Bank',
    colors: {
      primary: '#004c8f',
      secondary: '#ed232a',
      accent: '#059669'
    },
    founded: '1994',
    headquarters: 'Mumbai, Maharashtra',
    rbiStatus: 'Domestic Systemically Important Bank (D-SIB) / Scheduled Commercial Bank',
    dicgcCoverage: 'Yes (Statutory ₹5,00,000 per depositor insurance)',
    officialUrl: 'https://www.hdfcbank.com/',
    tollFree: '1800 202 6161 / 1800 1600',
    lastUpdated: '2025-02-15',
    about: 'HDFC Bank Limited is India\'s largest private sector bank by assets and market valuation. Following its historic mega-merger with Housing Development Finance Corporation (HDFC) in July 2023, the institution holds dominant market leadership across mortgages, credit card issuance, consumer lending, SME trade finance, and rural banking networks. Designated by the Reserve Bank of India as a Domestic Systemically Important Bank (D-SIB), it is considered an institution "Too Big To Fail".',
    products: [
      { name: 'Regular Savings & DigiSave Youth', desc: 'Versatile savings accounts with debit card international limits, insurance covers, and high transactional bandwidth.' },
      { name: 'Mortgages & Housing Finance', desc: 'Industry-leading retail home loans, home improvement finance, and top-up loans with long amortizations up to 30 years.' },
      { name: 'Credit Cards (Regalia Gold, Millennia, Infinia)', desc: 'India\'s largest card portfolio offering high cashback on SmartBuy, flight miles conversions, and global golf privileges.' },
      { name: 'Fixed Deposits & SureCover FDs', desc: 'Secure term deposits offering quarterly compounding interest, overdraft against FD, and senior citizen rate bonuses.' },
      { name: 'Express Personal Loans', desc: 'Instant pre-approved personal loans disbursed in under 10 seconds for existing salaried relationship holders.' },
      { name: 'HDFC Bank MobileBanking App & PayZapp', desc: 'Complete banking in your palm with one-click bill pay, virtual debit card generation, and UPI interoperability.' }
    ],
    eligibility: [
      'Resident Individuals (Sole or Joint accounts) above 18 years.',
      'Minors represented by natural or legal guardians.',
      'Valid identification via Aadhaar and PAN for instant digital onboarding.'
    ],
    documents: [
      'Identity & Address: Aadhaar / Passport / Voter ID card.',
      'Income Proof: 3-month salary certificate and bank credit trail for loan applicants.',
      'Tax Proof: Physical PAN card.'
    ],
    charges: [
      { item: 'Regular Savings Average Monthly Balance (AMB)', fee: '₹10,000 (Metro/Urban), ₹5,000 (Semi-Urban), ₹2,500 (Rural)' },
      { item: 'Non-Maintenance Fee', fee: 'Capped as per RBI proportional norms' },
      { item: 'Digital Transfers (NEFT / RTGS via NetBanking)', fee: 'Nil' }
    ],
    partnerLink: null
  },

  // 3. State Bank of India (SBI)
  {
    filePath: 'banks/public-sector/sbi/sbi.html',
    rootRel: '../../..',
    id: 'sbi',
    name: 'State Bank of India (SBI)',
    tagline: 'India\'s Largest Public Sector Commercial Bank & Statutory Corporation',
    bankType: 'Public Sector Bank',
    colors: {
      primary: '#280071',
      secondary: '#0093dd',
      accent: '#10b981'
    },
    founded: '1806 (Bank of Calcutta) / 1955 (SBI Act)',
    headquarters: 'Mumbai, Maharashtra',
    rbiStatus: 'Domestic Systemically Important Bank (D-SIB) / Public Sector Statutory Bank',
    dicgcCoverage: 'Yes (Statutory ₹5,00,000 insurance coverage under DICGC Act, 1961)',
    officialUrl: 'https://sbi.co.in/',
    tollFree: '1800 1234 / 1800 2100',
    lastUpdated: '2025-02-15',
    about: 'State Bank of India (SBI) is a Fortune 500 statutory banking corporation originating from the Bank of Calcutta founded in 1806. Holding over 23% market share in total Indian banking assets and commanding a massive network of over 22,500 branches, SBI anchors the nation\'s financial infrastructure. SBI is designated by RBI as a Domestic Systemically Important Bank (D-SIB). Its digital platform, YONO (You Only Need One), serves tens of millions of active users.',
    products: [
      { name: 'SBI Regular Savings & BSBDA Zero Balance', desc: 'Zero average monthly balance requirement on regular savings accounts across all branch categories.' },
      { name: 'SBI Home Loans (Regular & Maxgain)', desc: 'Lowest interest rates in the market linked to External Benchmark Lending Rate (EBLR), with overdraft savings option via Maxgain.' },
      { name: 'YONO Digital Banking & Insta Accounts', desc: 'Instant paperless savings account opening via Aadhaar OTP, digital pre-approved personal loans, and shopping discounts.' },
      { name: 'Term Deposits (Amrit Kalash, Special Tenors)', desc: 'High-safety fixed deposits, recurring deposits, and tax-saving 5-year term deposits under Section 80C.' },
      { name: 'Xpress Credit & Pension Loans', desc: 'Low-rate unsecured personal financing for defense personnel, central/state government employees, and family pensioners.' },
      { name: 'SBI Cards (SimplyCLICK, SimplySAVE, Cashback)', desc: 'Popular credit cards issued by SBI Card subsidiary with dining discounts and online cashback.' }
    ],
    eligibility: [
      'Any Indian citizen with valid KYC documents.',
      'Zero balance BSBDA accounts accessible to every unbanked citizen without minimum balance requirement.',
      'Aadhaar seeded for Direct Benefit Transfer (DBT) subsidies.'
    ],
    documents: [
      'Officially Valid Documents (OVD): Aadhaar Card, Passport, Driving Licence, Voter ID, NREGA Job Card.',
      'Permanent Account Number (PAN) or Form 60.',
      'Recent passport-size photographs.'
    ],
    charges: [
      { item: 'Average Monthly Balance (AMB) Non-maintenance', fee: 'WAIVED (Zero charge on all SBI savings accounts)' },
      { item: 'Online NEFT / RTGS / IMPS (via YONO / INB)', fee: 'Nil (Free)' },
      { item: 'ATM Withdrawals (SBI ATMs)', fee: '5 free monthly withdrawals (unlimited on higher deposit balances)' }
    ],
    partnerLink: null
  },

  // 4. Bank of Baroda
  {
    filePath: 'banks/public-sector/bank-of-baroda/bank-of-baroda.html',
    rootRel: '../../..',
    id: 'bank-of-baroda',
    name: 'Bank of Baroda (BoB)',
    tagline: 'Major Public Sector Commercial Bank | India\'s International Bank',
    bankType: 'Public Sector Bank',
    colors: {
      primary: '#f26522',
      secondary: '#004b87',
      accent: '#059669'
    },
    founded: '1908 by Maharaja Sayajirao Gaekwad III',
    headquarters: 'Vadodara, Gujarat',
    rbiStatus: 'Nationalized Scheduled Commercial Bank (Banking Companies Act, 1970)',
    dicgcCoverage: 'Yes (DICGC ₹5 Lakh statutory deposit guarantee)',
    officialUrl: 'https://www.bankofbaroda.in/',
    tollFree: '1800 5700 / 1800 5000',
    lastUpdated: '2025-02-15',
    about: 'Bank of Baroda is one of India\'s largest nationalized public sector banks, established in 1908. Following the successful amalgamation of Dena Bank and Vijaya Bank in 2019, Bank of Baroda commands an extensive footprint across urban, semi-urban, and rural India, alongside a robust international presence spanning New York, London, Dubai, and Singapore. Its digital suite bob World offers comprehensive retail lending, deposits, and agricultural credit.',
    products: [
      { name: 'bob World Digital Banking', desc: 'Single unified app for savings account management, investment, insurance, and FASTag recharges.' },
      { name: 'Baroda Advantage Savings Account', desc: 'Flexible savings scheme with customized debit card variants and personal accident insurance coverage.' },
      { name: 'Baroda Home Loan (Baroda Grah Shobha)', desc: 'Affordable residential mortgage with competitive interest rates linked to Baroda Repo Linked Lending Rate (BRLLR).' },
      { name: 'Baroda Kisan Credit Card (BKCC)', desc: 'Dedicated agricultural credit line for farmers for crop production, farm equipment, and post-harvest storage.' },
      { name: 'Baroda Term Deposits & Capital Gain Schemes', desc: 'Guaranteed interest fixed and recurring deposits with senior citizen preferential margins.' }
    ],
    eligibility: [
      'Individuals 18 years and older; joint applicants permitted.',
      'Valid proof of identity and residence under RBI KYC Master Directions.'
    ],
    documents: [
      'Aadhaar / Voter ID / Passport.',
      'PAN card or Form 60.',
      'Agricultural land revenue records (for BKCC loans).'
    ],
    charges: [
      { item: 'Quarterly Average Balance (QAB)', fee: '₹2,000 (Metro/Urban), ₹1,000 (Semi-Urban), ₹500 (Rural)' },
      { item: 'Online NEFT / RTGS', fee: 'Free via bob World mobile banking' }
    ],
    partnerLink: null
  },

  // 5. ICICI Bank
  {
    filePath: 'banks/private-sector/icici/icici.html',
    rootRel: '../../..',
    id: 'icici',
    name: 'ICICI Bank',
    tagline: 'Domestic Systemically Important Private Sector Bank | Digital Innovation Leader',
    bankType: 'Private Sector Bank',
    colors: {
      primary: '#b02a30',
      secondary: '#f37021',
      accent: '#10b981'
    },
    founded: '1994 (by Industrial Credit and Investment Corporation of India)',
    headquarters: 'Mumbai, Maharashtra',
    rbiStatus: 'Domestic Systemically Important Bank (D-SIB) / Scheduled Commercial Bank',
    dicgcCoverage: 'Yes (Statutory ₹5,00,000 insurance per depositor under DICGC Act)',
    officialUrl: 'https://www.icicibank.com/',
    tollFree: '1800 1080',
    lastUpdated: '2025-02-15',
    about: 'ICICI Bank Limited is a leading Indian private sector commercial bank and is categorized by the Reserve Bank of India as a Domestic Systemically Important Bank (D-SIB). Renowned for pioneering modern digital banking infrastructure in India, ICICI Bank operates an expansive network of branches and ATMs, alongside digital platforms including iMobile Pay, InstaBIZ, and Trade Online.',
    products: [
      { name: 'iMobile Pay Digital Savings', desc: 'Next-generation mobile banking app offering super-fast UPI payments, mutual fund investments, and credit card controls.' },
      { name: 'Mine Savings Account for Millennials', desc: 'Customizable zero-paperwork digital account for young professionals with cashback debit card tiers.' },
      { name: 'Amazon Pay ICICI Credit Card', desc: 'Lifetime free co-branded credit card with 5% unlimited cashback on Amazon India for Prime members.' },
      { name: 'Insta Home & Personal Loans', desc: 'Pre-approved digital lending sanctions with zero physical branch visits for eligible customers.' },
      { name: 'iWish Flexible Recurring Deposit', desc: 'Goal-based online recurring deposit allowing variable monthly deposits without penalties on missed installments.' }
    ],
    eligibility: [
      'Individuals residing in India aged 18+.',
      'PAN and Aadhaar mandatory for video KYC processing.'
    ],
    documents: [
      'Aadhaar Card with linked active mobile number for OTP authentication.',
      'Original PAN Card.',
      'Income slips or ITR for credit cards and loan applications.'
    ],
    charges: [
      { item: 'Monthly Average Balance (MAB)', fee: '₹10,000 (Metro/Urban), ₹5,000 (Semi-Urban), ₹2,000 (Rural)' },
      { item: 'Digital NEFT / RTGS', fee: 'Free through iMobile Pay & Internet Banking' }
    ],
    partnerLink: null
  },

  // 6. Axis Bank
  {
    filePath: 'banks/private-sector/axis/axis.html',
    rootRel: '../../..',
    id: 'axis',
    name: 'Axis Bank',
    tagline: 'Third Largest Private Sector Bank in India | Dil Se Open',
    bankType: 'Private Sector Bank',
    colors: {
      primary: '#97144d',
      secondary: '#6e1039',
      accent: '#0284c7'
    },
    founded: '1993 (as UTI Bank)',
    headquarters: 'Mumbai, Maharashtra',
    rbiStatus: 'Scheduled Commercial Bank (Second Schedule to RBI Act, 1934)',
    dicgcCoverage: 'Yes (Protected up to ₹5,00,000 by DICGC)',
    officialUrl: 'https://www.axisbank.com/',
    tollFree: '1860 419 5555 / 1860 500 5555',
    lastUpdated: '2025-02-15',
    about: 'Axis Bank Limited is the third largest private sector bank in India, offering the entire spectrum of financial services to customer segments covering Large and Mid-Corporates, MSME, Agriculture and Retail Businesses. In 2023, Axis Bank completed the acquisition of Citibank India\'s consumer business, substantially expanding its premium wealth and card client base.',
    products: [
      { name: 'ASAP Digital Savings Account', desc: 'Instant video KYC account with virtual debit card and flat 1% cashback on online spends.' },
      { name: 'Flipkart Axis Bank Credit Card', desc: 'Market-leading co-branded retail card delivering 5% unlimited cashback on Flipkart and Cleartrip.' },
      { name: 'Burgundy Private & Priority Banking', desc: 'Bespoke wealth management, dedicated relationship manager, and premium lifestyle concierge services.' },
      { name: 'Axis 24x7 Digital Loans', desc: 'Fast digital disbursement of personal loans and auto finance with flexible tenures.' }
    ],
    eligibility: ['Resident Indian citizens 18 years and above.'],
    documents: ['Aadhaar Card, PAN Card, address verification proof.'],
    charges: [
      { item: 'Standard Savings Monthly Average Balance', fee: '₹12,000 (Metro), ₹5,000 (Semi-urban)' },
      { item: 'Digital Transfers', fee: 'Nil on netbanking/mobile' }
    ],
    partnerLink: null
  },

  // 7. AU Small Finance Bank
  {
    filePath: 'banks/small-finance/au-small-finance/au-small-finance.html',
    rootRel: '../../..',
    id: 'au-small-finance',
    name: 'AU Small Finance Bank',
    tagline: 'India\'s Largest Scheduled Small Finance Bank | Badlaav Humse Hai',
    bankType: 'Small Finance Bank (SFB)',
    colors: {
      primary: '#6c2378',
      secondary: '#f26522',
      accent: '#10b981'
    },
    founded: '1996 (as AU Financiers) / SFB License 2017',
    headquarters: 'Jaipur, Rajasthan',
    rbiStatus: 'Scheduled Commercial Bank under Small Finance Bank Regulatory Framework',
    dicgcCoverage: 'Yes (100% covered under DICGC ₹5,00,000 statutory deposit insurance)',
    officialUrl: 'https://www.aubank.in/',
    tollFree: '1800 1200 1200',
    lastUpdated: '2025-02-15',
    about: 'AU Small Finance Bank Limited is a Fortune India 500 company and the largest Small Finance Bank in India. Transformed from a successful vehicle finance NBFC into a full-fledged scheduled commercial bank in 2017, AU Bank serves over 4 million customers through innovative digital video banking, competitive deposit interest rates, and high-yield savings tiers with monthly interest payouts.',
    products: [
      { name: 'AU High-Yield Savings Account', desc: 'Earn up to 7.25% p.a. interest with monthly interest credit directly into account.' },
      { name: 'AU 0101 Video Banking', desc: 'Face-to-face banking from home for account opening, FD booking, cheque requests, and service queries.' },
      { name: 'Wheels & Commercial Vehicle Loans', desc: 'Specialized vehicle financing for individual operators and logistics fleets.' },
      { name: 'Secured Business & MSME Loans', desc: 'Working capital and term finance for retail shopkeepers, traders, and small enterprises.' },
      { name: 'AU Credit Cards (Zenith, Vetta, Altura)', desc: 'Rewards cards offering complimentary airport lounge visits, golf games, and device insurance.' }
    ],
    eligibility: ['Resident Indian individuals aged 18+.'],
    documents: ['Aadhaar Card, PAN Card, Proof of Residence.'],
    charges: [
      { item: 'Savings Account Maintenance', fee: 'Options for zero balance or tiered balance' },
      { item: 'Monthly Interest Payout', fee: 'Free automated feature on eligible savings' }
    ],
    partnerLink: {
      url: 'https://www.aubank.in/personal-banking/savings-account',
      label: 'AU Savings Account देखें (Partner Offer)',
      disclosure: 'Disclosure: यह AU Small Finance Bank का Approved Partner Link है। पात्रता व सेवा नियम बैंक के आधिकारिक पोर्टल के अधीन हैं।'
    }
  },

  // 8. Airtel Payments Bank
  {
    filePath: 'banks/payments-banks/airtel-payments-bank/airtel-payments-bank.html',
    rootRel: '../../..',
    id: 'airtel-payments-bank',
    name: 'Airtel Payments Bank',
    tagline: 'India\'s First Payments Bank | Digital Financial Inclusion',
    bankType: 'Payments Bank (RBI Regulated)',
    colors: {
      primary: '#e40000',
      secondary: '#1a1a1a',
      accent: '#0284c7'
    },
    founded: '2017',
    headquarters: 'New Delhi',
    rbiStatus: 'Scheduled Payments Bank under RBI Payments Bank Guidelines',
    dicgcCoverage: 'Yes (Deposits up to ₹2 Lakh insured under DICGC)',
    officialUrl: 'https://www.airtel.in/bank/',
    tollFree: '400 (from Airtel) / 8800688006',
    lastUpdated: '2025-02-15',
    about: 'Airtel Payments Bank was launched in January 2017 as the first operational payments bank in India. As per RBI guidelines for Payments Banks, the institution does not issue credit cards or provide loans, and customer deposits are capped at ₹2,00,000 at end of day. The bank specializes in digital savings accounts, FASTag, utility payments, micro-insurance, and Aadhaar Enabled Payment System (AePS) cash withdrawal points at local retail outlets.',
    products: [
      { name: 'Digital Zero Balance Savings', desc: 'Mobile-first savings account opened using mobile number and Aadhaar biometric authentication.' },
      { name: 'Aadhaar Enabled Payment System (AePS)', desc: 'Interoperable cash withdrawals and balance enquiries at neighborhood retail banking points.' },
      { name: 'Airtel Safe Pay (Triple-layer Security)', desc: 'Patented digital security system requiring two-factor authorization on the smartphone before any debit occurs.' },
      { name: 'DigiGold Savings', desc: 'Buy, store, and sell 24K 99.5% pure physical digital gold in small amounts starting from ₹1.' }
    ],
    eligibility: ['Indian residents with active mobile number and Aadhaar card.'],
    documents: ['Aadhaar Number and PAN (or Form 60).'],
    charges: [
      { item: 'Maximum End-of-Day Balance', fee: 'Capped at ₹2,00,000 as per RBI statutory limit' },
      { item: 'Lending / Loans Provided', fee: 'None (Payments banks are legally prohibited from lending)' }
    ],
    partnerLink: null
  },

  // 9. India Post Payments Bank (IPPB)
  {
    filePath: 'banks/payments-banks/india-post-payments-bank/india-post-payments-bank.html',
    rootRel: '../../..',
    id: 'india-post-payments-bank',
    name: 'India Post Payments Bank (IPPB)',
    tagline: 'Aapka Bank, Aapke Dwaar | 100% Government of India Owned',
    bankType: 'Payments Bank (Govt of India Owned)',
    colors: {
      primary: '#c1272d',
      secondary: '#1a3c6e',
      accent: '#059669'
    },
    founded: '2018 (Department of Posts, Ministry of Communications)',
    headquarters: 'New Delhi',
    rbiStatus: 'Scheduled Payments Bank under RBI / Department of Posts',
    dicgcCoverage: 'Yes (DICGC statutory coverage up to statutory balance ceiling)',
    officialUrl: 'https://www.ippbonline.com/',
    tollFree: '155299 / 1800 8899 860',
    lastUpdated: '2025-02-15',
    about: 'India Post Payments Bank (IPPB) was established in 2018 under the Department of Posts, Ministry of Communications, with 100% equity owned by the Government of India. Harnessing the unparalleled reach of over 1,55,000 post offices and nearly 3,00,000 postal employees (Gramin Dak Sevaks), IPPB delivers doorstep digital banking, Direct Benefit Transfer (DBT) subsidy payments, and micro-savings to every corner of India.',
    products: [
      { name: 'Doorstep Digital Banking', desc: 'Dak Sevaks carry biometric smartphones and micro-ATMs to provide cash deposits, withdrawals, and bill payments at citizen homes.' },
      { name: 'Direct Benefit Transfer (DBT) Gateway', desc: 'Seamless receipt of PM-KISAN, MGNREGA, and state social security pension subsidies.' },
      { name: 'Post Office Savings Linkage', desc: 'Automatic two-way sweep-in sweep-out between IPPB digital account and traditional Post Office Savings Bank (POSB) account.' },
      { name: 'Digital Life Certificate (Jeevan Pramaan)', desc: 'Biometric life certificate generation for central, state, and defense pensioners directly at home.' }
    ],
    eligibility: ['All Indian citizens across urban, semi-urban, and remote rural hamlets.'],
    documents: ['Aadhaar Number and mobile verification.'],
    charges: [
      { item: 'Doorstep Banking Convenience Fee', fee: 'Nominal regulated charges for home visit services' },
      { item: 'Deposit Cap', fee: '₹2,00,000 (Surplus automatically swept to POSB account)' }
    ],
    partnerLink: null
  },

  // 10. Saraswat Co-operative Bank
  {
    filePath: 'banks/cooperative/saraswat-bank/saraswat-bank.html',
    rootRel: '../../..',
    id: 'saraswat-bank',
    name: 'Saraswat Co-operative Bank',
    tagline: 'India\'s Largest Scheduled Urban Co-operative Bank with Over 100 Years of Trust',
    bankType: 'Scheduled Urban Co-operative Bank',
    colors: {
      primary: '#005691',
      secondary: '#e30613',
      accent: '#10b981'
    },
    founded: '1918',
    headquarters: 'Mumbai, Maharashtra',
    rbiStatus: 'Scheduled Urban Co-operative Bank (Supervised by RBI and Central Registrar)',
    dicgcCoverage: 'Yes (Covered under DICGC ₹5,00,000 deposit insurance scheme)',
    officialUrl: 'https://www.saraswatbank.com/',
    tollFree: '1800 22 9999 / 1800 266 5555',
    lastUpdated: '2025-02-15',
    about: 'Saraswat Co-operative Bank Limited is India\'s largest Urban Co-operative Bank (UCB) with a continuous operational history spanning over a century since 1918. Operating across six states (Maharashtra, Goa, Gujarat, Madhya Pradesh, Karnataka, and New Delhi), Saraswat Bank operates under the dual regulatory oversight of the Reserve Bank of India and the Multi-State Co-operative Societies Act. Deposits are fully covered by DICGC.',
    products: [
      { name: 'Saraswat Retail Savings & Term Deposits', desc: 'Traditional and digital savings accounts offering competitive term deposit yields with quarterly compounding.' },
      { name: 'Vastu Siddhi Housing Loans', desc: 'Home loans with easy documentation and customized repayment structures for salaried and self-employed professionals.' },
      { name: 'MSME & SME Business Finance', desc: 'Credit support for small manufacturing and service enterprises with personalized branch relationships.' },
      { name: 'GoMo Mobile Banking App', desc: 'Full-featured mobile application for IMPS/NEFT transfers, bill payments, and card management.' }
    ],
    eligibility: ['Individuals, business entities, and housing societies in operating states.'],
    documents: ['Standard KYC (Aadhaar, PAN, residential verification).'],
    charges: [
      { item: 'Minimum Balance', fee: 'As per branch category (Metro/Urban)' },
      { item: 'Deposit Insurance', fee: 'Statutory ₹5,00,000 per depositor under DICGC' }
    ],
    partnerLink: null
  },

  // 11. Standard Chartered Bank India
  {
    filePath: 'banks/foreign/standard-chartered/standard-chartered.html',
    rootRel: '../../..',
    id: 'standard-chartered',
    name: 'Standard Chartered Bank (India)',
    tagline: 'India\'s Oldest and Largest Foreign Commercial Bank',
    bankType: 'Foreign Scheduled Commercial Bank',
    colors: {
      primary: '#0076a8',
      secondary: '#009a44',
      accent: '#0f172a'
    },
    founded: '1858 in India',
    headquarters: 'Kolkata/Mumbai (Operating Head: Mumbai)',
    rbiStatus: 'Foreign Bank operating through branch presence licensed by RBI',
    dicgcCoverage: 'Yes (DICGC ₹5 Lakh coverage applies to Indian branch deposits)',
    officialUrl: 'https://www.sc.com/in/',
    tollFree: '1800 345 1000',
    lastUpdated: '2025-02-15',
    about: 'Standard Chartered Bank has operated continuously in India for over 165 years, establishing its first branch in Kolkata in 1858. With over 100 branches across 42 cities, it is the largest international bank operating in India. It serves high-net-worth retail clients via Priority Banking, cross-border business traders, multinational corporates, and financial institutions.',
    products: [
      { name: 'Priority & Private Banking', desc: 'Bespoke global wealth advisory, cross-border family accounts, and dedicated senior relationship managers.' },
      { name: 'Ultimate & Rewards Credit Cards', desc: 'Premium international travel cards with unmatched reward points and domestic/overseas airport lounge access.' },
      { name: 'Foreign Currency (FCNR / NRE / NRO) Accounts', desc: 'Specialized foreign currency deposits and tax-exempt repatriation accounts for Non-Resident Indians (NRIs).' }
    ],
    eligibility: ['Resident Indians, High Net-worth Individuals, and Non-Resident Indians (NRIs).'],
    documents: ['Aadhaar, Passport, PAN, foreign visa/work permits for NRI accounts.'],
    charges: [
      { item: 'Priority Banking Relationship Value', fee: 'Minimum Total Relationship Value (TRV) of ₹30 Lakh' },
      { item: 'Cross-Border Transfers', fee: 'Competitive institutional forex spreads' }
    ],
    partnerLink: null
  },

  // 12. Export-Import Bank of India (EXIM Bank)
  {
    filePath: 'banks/other-rbi-regulated/exim-bank/exim-bank.html',
    rootRel: '../../..',
    id: 'exim-bank',
    name: 'Export-Import Bank of India (EXIM Bank)',
    tagline: 'All-India Financial Institution (AIFI) under RBI Regulation',
    bankType: 'All-India Financial Institution (Specialized Export Credit)',
    colors: {
      primary: '#004080',
      secondary: '#d97706',
      accent: '#059669'
    },
    founded: '1982 under Export-Import Bank of India Act, 1981',
    headquarters: 'Mumbai, Maharashtra',
    rbiStatus: 'All-India Financial Institution (AIFI) directly regulated by RBI',
    dicgcCoverage: 'Not applicable (Does not accept retail public savings/current deposits)',
    officialUrl: 'https://www.eximbankindia.in/',
    tollFree: 'Official Exchange Board: +91-22-2286 1000',
    lastUpdated: '2025-02-15',
    about: 'Export-Import Bank of India is the premier export finance institution in the country, established in 1982 by an Act of Parliament. Regulated by RBI alongside NABARD, SIDBI, and NHB as an All-India Financial Institution (AIFI), EXIM Bank coordinates the working of institutions engaged in financing export and import of goods and services, extending Lines of Credit (LOC) to foreign governments and assisting Indian companies in overseas investments.',
    products: [
      { name: 'Export Credits & Buyer\'s Credit', desc: 'Financing for foreign sovereign and commercial buyers to import capital goods and turnkey projects from India.' },
      { name: 'Lines of Credit (LOC)', desc: 'Concessional government-backed credit lines extended to developing nations across Africa, Asia, and Latin America.' },
      { name: 'Overseas Investment Finance', desc: 'Term loans to Indian joint ventures and wholly-owned subsidiaries abroad for mergers and capacity building.' },
      { name: 'Trade Assistance Programme (TAP)', desc: 'Trade credit risk mitigation for Indian commercial banks engaged in cross-border trade transactions.' }
    ],
    eligibility: ['Indian exporters, overseas sovereign governments, and financial institutions.'],
    documents: ['Export-Import Code (IEC), commercial contracts, audited company financials.'],
    charges: [
      { item: 'Retail Public Deposits', fee: 'Not accepted (Non-retail wholesale institutional lender)' }
    ],
    partnerLink: null
  }
];

// Generate individual Bank Page HTML
function generateBankHTML(b) {
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

  const partnerLinkHTML = b.partnerLink ? `
    <div class="banner-notice" style="border-left-color: var(--warning); background: var(--warning-light);">
      <h4 style="color: #92400e; margin-bottom: 0.35rem;">🤝 पार्टनर विकल्प (Commercial Partner Offer)</h4>
      <p style="font-size: 0.875rem; color: #78350f; margin-bottom: 0.75rem;">${b.partnerLink.disclosure}</p>
      <a href="${b.partnerLink.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: #d97706; border-color: #d97706;">
        ${b.partnerLink.label} ↗
      </a>
    </div>
  ` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${b.name} - Products, Rates, Eligibility, Customer Care | Fengoo</title>
  <meta name="description" content="Complete verified guide to ${b.name}: savings accounts, loans, fixed deposit interest rates, customer care, DICGC coverage, and official portal." />
  <link rel="canonical" href="https://fengoo.in/${b.filePath}" />
  ${getStyles(b.rootRel)}
  <style>
    ${customColors}
  </style>
</head>
<body>
  ${getHeader(b.rootRel)}

  <!-- Breadcrumbs -->
  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="${b.rootRel}/index.html">Home</a></li>
      <li><a href="${b.rootRel}/banks/private-sector/kotak/kotak.html">Banks</a></li>
      <li><span>${b.bankType}</span></li>
      <li><span>${b.name}</span></li>
    </ul>
  </div>

  <!-- Bank Hero -->
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
          <a href="#products" class="btn btn-secondary">बैंकिंग प्रोडक्ट्स देखें</a>
          <a href="#customer-service" class="btn btn-outline">हेल्पलाइन नंबर</a>
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
        <div class="quick-spec-item">
          <span class="quick-spec-label">सत्यापन तिथि:</span>
          <span class="quick-spec-val">${b.lastUpdated}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Body Content -->
  <main class="container">
    <div class="page-layout">
      <!-- Sticky Sidebar Navigation -->
      <aside class="page-sidebar-nav">
        <a href="#about" class="page-sidebar-link active">बैंक परिचय</a>
        <a href="#products" class="page-sidebar-link">उत्पाद व सेवाएं</a>
        <a href="#eligibility" class="page-sidebar-link">पात्रता व डाक्यूमेंट्स</a>
        <a href="#charges" class="page-sidebar-link">शुल्क व न्यूनतम बैलेंस</a>
        <a href="#dicgc-security" class="page-sidebar-link">जमा सुरक्षा (DICGC)</a>
        <a href="#customer-service" class="page-sidebar-link">ग्राहक सेवा व निवारण</a>
      </aside>

      <!-- Content Column -->
      <div class="page-content-area">
        ${partnerLinkHTML}

        <!-- Section: About -->
        <article class="content-block" id="about">
          <h2>बैंक के बारे में (About ${b.name})</h2>
          <p>${b.about}</p>
          <div class="banner-notice">
            <strong>नियामक स्थिति (Regulatory Status):</strong> ${b.rbiStatus}
          </div>
        </article>

        <!-- Section: Products -->
        <article class="content-block" id="products">
          <h2>प्रमुख बैंकिंग उत्पाद व सेवाएं (Products & Services)</h2>
          <p>${b.name} द्वारा खुदरा (Retail), एमएसएमई और कॉर्पोरेट ग्राहकों के लिए उपलब्ध प्रमुख वित्तीय सेवाएं निम्नलिखित हैं:</p>
          <div class="product-cards-grid">
            ${productsHTML}
          </div>
        </article>

        <!-- Section: Eligibility & Documents -->
        <article class="content-block" id="eligibility">
          <h2>पात्रता और आवश्यक दस्तावेज (Eligibility & Documents)</h2>
          <h3>खाता खोलने की सामान्य पात्रता:</h3>
          <ul class="checklist-styled">
            ${eligibilityHTML}
          </ul>

          <h3 style="margin-top: 1.5rem;">आवश्यक केवाईसी (KYC) दस्तावेज:</h3>
          <ul class="checklist-styled">
            ${documentsHTML}
          </ul>
        </article>

        <!-- Section: Fees & Charges -->
        <article class="content-block" id="charges">
          <h2>शुल्क व न्यूनतम बैलेंस जानकारी (Verified Charges)</h2>
          <p>भारतीय रिज़र्व बैंक (RBI) के पारदर्शिता दिशा-निर्देशों के अनुसार ${b.name} द्वारा अधिसूचित सामान्य शुल्क संरचना:</p>
          <div class="data-table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>सेवा / मद (Service Head)</th>
                  <th>लागू शुल्क (Applicable Charge / Limit)</th>
                </tr>
              </thead>
              <tbody>
                ${chargesHTML}
              </tbody>
            </table>
          </div>
          <p style="font-size:0.825rem; color:var(--text-muted); margin-top:0.5rem;">
            *नोट: विभिन्न खाता श्रेणियों (विशेष वेतन खाते, वरिष्ठ नागरिक, प्रीमियम वेल्थ) के लिए शुल्क में छूट हो सकती है। कृपया खाता खोलने से पूर्व संबंधित उत्पाद का Key Fact Statement (KFS) अवश्य देखें।
          </p>
        </article>

        <!-- Section: DICGC Security -->
        <article class="content-block" id="dicgc-security" style="border-left: 4px solid var(--accent);">
          <h2 style="color: var(--accent);">🛡️ जमा सुरक्षा व DICGC ₹5,00,000 बीमा</h2>
          <p>${b.dicgcCoverage}</p>
          <p><strong>DICGC नियम:</strong> बैंक में जमा बचत खाता (Savings), चालू खाता (Current), सावधि जमा (FD) और आवर्ती जमा (RD) की कुल मूल राशि और अर्जित ब्याज को मिलाकर प्रति जमाकर्ता अधिकतम ₹5,00,000 तक का वैधानिक बीमा कवर मिलता है।</p>
          <a href="${b.rootRel}/savings/savings-account/savings-account.html" class="btn btn-outline btn-sm">DICGC सुरक्षा नियम विस्तार से पढ़ें →</a>
        </article>

        <!-- Section: Customer Service -->
        <article class="content-block" id="customer-service">
          <h2>ग्राहक सेवा व शिकायत निवारण (Customer Service & Support)</h2>
          <p>आधिकारिक रूप से सत्यापित कस्टमर केयर संपर्क विवरण:</p>
          <div class="support-box">
            <div class="support-item">
              <span class="support-label">टोल फ्री नंबर</span>
              <span class="support-val">${b.tollFree}</span>
            </div>
            <div class="support-item">
              <span class="support-label">आधिकारिक पोर्टल</span>
              <span class="support-val"><a href="${b.officialUrl}" target="_blank" rel="noopener" style="color:var(--primary); font-size:0.9rem;">वेबसाइट लिंक ↗</a></span>
            </div>
            <div class="support-item">
              <span class="support-label">RBI लोकपाल पोर्टल</span>
              <span class="support-val"><a href="https://cms.rbi.org.in/" target="_blank" rel="noopener" style="color:var(--primary); font-size:0.9rem;">RBI CMS ↗</a></span>
            </div>
          </div>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-top:1rem;">
            यदि बैंक स्तर पर 30 दिनों के भीतर शिकायत का समाधान नहीं होता है, तो ग्राहक रिज़र्व बैंक के Integrated Ombudsman Scheme (RBI CMS) पर निःशुल्क शिकायत दर्ज कर सकते हैं।
          </p>
        </article>
      </div>
    </div>
  </main>

  ${getFooter(b.rootRel)}
  ${getScripts(b.rootRel)}
</body>
</html>`;
}

for (const bank of banks) {
  const html = generateBankHTML(bank);
  writeFile(bank.filePath, html);
}

console.log(`Generated ${banks.length} individual bank pages successfully.`);
