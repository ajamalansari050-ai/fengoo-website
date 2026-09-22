/**
 * Fengoo.in Centralized Affiliate & Monetization Configuration
 * 
 * यहाँ आप अपने BankSathi, EarnKaro, Cuelinks, Admitad अथवा डायरेक्ट बैंक एफिलिएट लिंक्स दर्ज कर सकते हैं।
 * जब भी कोई उपयोगकर्ता कार्ड अथवा लोन अप्लाई बटन पर क्लिक करेगा, आपका एफिलिएट लिंक स्वचालित रूप से सक्रिय हो जाएगा।
 */

window.AFFILIATE_CONFIG = {
  // 1. WhatsApp & Telegram VIP Community Links (Disabled)
  community: {
    enabled: false,
    whatsappGroupUrl: "",
    telegramChannelUrl: "",
    bannerText: "",
  },

  // 2. Google AdSense Settings
  adsense: {
    enabled: true,
    publisherId: "ca-pub-XXXXXXXXXXXXXXXX", // अपना AdSense Publisher ID यहाँ डालें
    autoAds: true
  },

  // 3. Featured Deal of the Day (Sticky Bottom Bar)
  dealOfTheDay: {
    enabled: true,
    title: "🔥 स्पेशल क्रेडिट कार्ड ऑफर: Amazon Pay ICICI (Lifetime Free)",
    subtitle: "असीमित 5% कैशबैक + कोई वार्षिक शुल्क नहीं • तुरंत 2 मिनट में डिजिटल अप्रूवल",
    ctaText: "अभी ऑफर क्लेम करें ↗",
    url: "https://www.amazon.in/cbcc/market?tag=fengoo-partner-21"
  },

  // 4. Credit Cards Affiliate Links Map (BankSathi Partner Network)
  creditCards: {
    "hdfc-millennia": {
      name: "HDFC Millennia Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=T0JxNWNNQXgwYkNqUDdFV3hOa0F0UT09",
      payoutBonus: "1 वर्ष Amazon Prime सदस्यता + ₹1,500 वाउचर व 5% कैशबैक",
      isExclusive: true
    },
    "hdfc-regalia-gold": {
      name: "HDFC Regalia Gold Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=T0JxNWNNQXgwYkNqUDdFV3hOa0F0UT09",
      payoutBonus: "फ्री Amazon Prime + 12 डोमेस्टिक व इंटरनेशनल लाउंज एक्सेस",
      isExclusive: true
    },
    "hdfc-fd-card": {
      name: "HDFC Bank FD Backed Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=Yms5VUx2MUxISDB6U3hVcVZsM1hKdz09",
      payoutBonus: "बिना सिबिल/आय प्रमाण 90% तक लिमिट + गारंटीड क्रेडिट कार्ड",
      isExclusive: true
    },
    "hdfc-pixel-play": {
      name: "HDFC Pixel Play Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=RFhUUVg1NWNvKzZaV3l3Q3p2L21rZz09",
      payoutBonus: "10X पर्सनलाइज़्ड रिवॉर्ड्स + 3% असीमित कैशबैक + 100% डिजिटल",
      isExclusive: true
    },
    "hdfc-rupay-upi": {
      name: "HDFC UPI RuPay Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=VkVVc2VDdDFrN0NCMmtUbVRuTlNjZz09",
      payoutBonus: "ग्रॉसरी पर 3% कैशपॉइंट्स + 50 दिन ब्याज मुक्त + 0 फ्यूल सरचार्ज",
      isExclusive: true
    },
    "scapia-federal": {
      name: "Scapia Federal Bank Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=NCtIaU15akFMTEZMdE10SkpYNmU3Zz09",
      payoutBonus: "लाइफटाइम फ्री + 0% विदेशी मुद्रा शुल्क (Zero Forex) + असीमित लाउंज",
      isExclusive: true
    },
    "idfc-first-wow": {
      name: "IDFC FIRST WOW Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=Uk9SamdaNDZpeXQydmwwRVc3eTN1UT09",
      payoutBonus: "सदा के लिए फ्री + 7.25% FD ब्याज + नो इनकम प्रूफ (बेस्ट सिबिल बिल्डर)",
      isExclusive: true
    },
    "idfc-first-millennia": {
      name: "IDFC FIRST Millennia Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=NmwzRFVFc3BnTVEwaTZwT0N2ZXYrQT09",
      payoutBonus: "लाइफटाइम फ्री + ₹500 वाउचर + 75% मूवी छूट + कभी न एक्सपायर होने वाले रिवॉर्ड्स",
      isExclusive: true
    },
    "axis-neo-ltf": {
      name: "Axis Bank Neo / LTF Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=VSthc1ora2lSd1hCek0yaHZlMHNLQT09",
      payoutBonus: "लाइफटाइम फ्री + LIC प्रीमियम पर 2X पॉइंट्स + 15% डाइनिंग छूट",
      isExclusive: true
    },
    "axis-my-zone": {
      name: "Axis Bank My Zone Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=TTh5M1dRb0t4U0pZMy9oWEU2SjJTZz09",
      payoutBonus: "लाइफटाइम फ्री + Zomato पर 40% छूट + ₹300 बिल कैशबैक + 10% BookMyShow",
      isExclusive: true
    },
    "axis-rewards-card": {
      name: "Axis Bank Rewards Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=dlZ6L2lHTG9yWTljdTJtaTQyVkk5dz09",
      payoutBonus: "₹600 वेलकम बेनिफिट्स + 50% ऑनलाइन फूड छूट + फ्री लाउंज एक्सेस",
      isExclusive: true
    },
    "flipkart-axis": {
      name: "Flipkart Axis Bank Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=cmwwbUVteDc3UTBxZDZoT1cvM002UT09",
      payoutBonus: "5% असीमित सीधा कैशबैक + ₹600 फ्लिपकार्ट वाउचर वेलकम गिफ्ट",
      isExclusive: true
    },
    "airtel-axis": {
      name: "Airtel Axis Bank Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=SS9mRzQ2R0EwejFaQXJ1cEJCVllqdz09",
      payoutBonus: "25% एयरटेल बिल कैशबैक + 10% यूटिलिटी व Swiggy + ₹500 Amazon वाउचर",
      isExclusive: true
    },
    "au-lit": {
      name: "AU LIT Customizable Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=akZIaDBiVlR2TldkVk9jMDNNUFFGdz09",
      payoutBonus: "100% कस्टमाइज़ेबल + लाइफटाइम फ्री बेस कार्ड + नए उपयोगकर्ताओं के लिए आसान अप्रूवल",
      isExclusive: true
    },
    "au-ixigo-travel": {
      name: "AU Ixigo Travel Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=VVY2OXdWWW44SDdadWtYZUtqR2xvdz09",
      payoutBonus: "0% फॉरेक्स मार्कअप + असीमित लाउंज एक्सेस + 10% कॉइन्स कैशबैक",
      isExclusive: true
    },
    "yes-bank-ltf": {
      name: "YES Bank Lifetime Free Credit Cards",
      affiliateUrl: "https://leads.banksathi.com/?h=c0d2ZmUrZEkwR1QwcmU5eDdVWmJBdz09",
      payoutBonus: "लाइफटाइम फ्री + घरेलू व अंतरराष्ट्रीय लाउंज + शॉपिंग पर कैशबैक",
      isExclusive: true
    },
    "popclub-rupay": {
      name: "POP RuPay Credit Card (POPclub)",
      affiliateUrl: "https://leads.banksathi.com/?h=b2tHM0M4Yk1IUTExbWw5V0dVUzBQZz09",
      payoutBonus: "शून्य जॉइनिंग फीस + ₹5000 वेलकम लाभ + 10 POPcoins ऑनलाइन पेमेंट्स पर",
      isExclusive: true
    },
    "kiwi-yes-bank": {
      name: "Kiwi Yes Bank RuPay Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=eHBOVkk4VStGcU5tZGcrV0dTLysvZz09",
      payoutBonus: "लाइफटाइम फ्री + 2% फ्लैट Scan & Pay UPI कैशबैक + तुरंत वर्चुअल अप्रूवल",
      isExclusive: true
    },
    "cashback-sbi-card": {
      name: "Cashback SBI Card",
      affiliateUrl: "https://leads.banksathi.com/?h=OHZraWV1MWhuQmRxUUtCbjBOM3laQT09",
      payoutBonus: "फ्लैट 5% असीमित ऑनलाइन कैशबैक + एसबीआई का सुरक्षित कार्ड",
      isExclusive: true
    },
    "indusind-easy": {
      name: "IndusInd Easy Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=WWUrWlNVOFhmSUc2eWxJV1l3Rytidz09",
      payoutBonus: "सदा के लिए फ्री (LTF) + कभी एक्सपायर न होने वाले पॉइंट्स + फ्री लाउंज एक्सेस",
      isExclusive: true
    },
    "rbl-shoprite": {
      name: "RBL ShopRite Credit Card",
      affiliateUrl: "https://leads.banksathi.com/?h=NDA4SFc3eTZNUURrazVrcm1QYWxEQT09",
      payoutBonus: "लाइफटाइम फ्री + 2,000 वेलकम पॉइंट्स + ग्रॉसरी पर 20X रिवॉर्ड्स",
      isExclusive: true
    },
    "amazon-pay-icici": {
      name: "Amazon Pay ICICI Credit Card",
      affiliateUrl: "https://www.amazon.in/cbcc/market?tag=fengoo-partner-21",
      payoutBonus: "लाइफटाइम फ्री + ₹2,000 तक वेलकम रिवॉर्ड्स + 5% अनलिमिटेड कैशबैक",
      isExclusive: true
    },
    "kotak-league-rupay": {
      name: "Kotak League RuPay Credit Card",
      affiliateUrl: "https://www.kotak.com/en/personal-banking/cards/credit-cards/league-platinum-card.html?partner=fengoo",
      payoutBonus: "UPI स्कैन पर 4X रिवॉर्ड पॉइंट्स",
      isExclusive: true
    },
    "standard-chartered-ultimate": {
      name: "Standard Chartered Ultimate Credit Card",
      affiliateUrl: "https://www.sc.com/in/credit-cards/ultimate-card/?partner=fengoo",
      payoutBonus: "5,000 रिवॉर्ड पॉइंट्स वेलकम गिफ्ट",
      isExclusive: true
    }
  },

  // 5. Loan Affiliate Partners (BankSathi / Cuelinks / Direct Bank DSA)
  loans: {
    "home-loan": {
      affiliateUrl: "https://sbi.co.in/web/personal-banking/loans/home-loans?partner=fengoo",
      bonusNotice: "शून्य प्रोसेसिंग फीस + 8.40% से आकर्षक ब्याज दर"
    },
    "personal-loan": {
      affiliateUrl: "https://www.hdfcbank.com/personal/borrow/popular-loans/personal-loan?partner=fengoo",
      bonusNotice: "मात्र 10 सेकंड में प्री-अप्रूव्ड लोन डिस्बर्सल"
    },
    "education-loan": {
      affiliateUrl: "https://www.vidyalakshmi.co.in/Students/?partner=fengoo",
      bonusNotice: "सरकारी विद्या लक्ष्मी पोर्टल द्वारा 40+ बैंकों में सीधा आवेदन"
    },
    "vehicle-loan": {
      affiliateUrl: "https://sbi.co.in/web/personal-banking/loans/auto-loans?partner=fengoo",
      bonusNotice: "ऑन-रोड कीमत पर 90-100% तक फाइनेंस"
    },
    "gold-loan": {
      affiliateUrl: "https://sbi.co.in/web/personal-banking/loans/loans-against-securities/personal-gold-loans?partner=fengoo",
      bonusNotice: "7.00% से शुरू • मात्र 15 मिनट में बैंक खाते में नकद"
    },
    "lap-loan": {
      affiliateUrl: "https://www.bajajfinserv.in/loan-against-property?partner=fengoo",
      bonusNotice: "संपत्ति मूल्य का 70% तक सुरक्षित ऋण"
    },
    "mudra-loan": {
      affiliateUrl: "https://www.udyamimitra.in/?partner=fengoo",
      bonusNotice: "बिना किसी गारंटी या बंधक के ₹10 लाख तक सरकारी मुद्रा ऋण"
    },
    "kcc-loan": {
      affiliateUrl: "https://eseva.csc.gov.in/?partner=fengoo",
      bonusNotice: "समय पर पुनर्भुगतान पर मात्र 4% प्रभावी वार्षिक ब्याज दर"
    }
  },

  // 6. Bank Accounts (Zero Balance / Savings Accounts)
  // BankSathi / EarnKaro / Cuelinks से मिलने वाले बैंक खाता लिंक यहाँ डालें
  bankAccounts: {
    "kotak": {
      name: "Kotak 811 Zero Balance Savings",
      affiliateUrl: "https://leads.banksathi.com/?h=V0xkeXEyZnRlNUo3VUhkWTd6VWM2QT09",
      commissionNotice: "प्रति अप्रूवल ₹300 - ₹450 तक (Active Lead)"
    },
    "kotak-super": {
      name: "Kotak 811 Super Savings Account",
      affiliateUrl: "https://leads.banksathi.com/?h=TzJmV21XbHh0ME9mMkF6VjMyZ1FLQT09",
      commissionNotice: "प्रति अप्रूवल ₹350 - ₹500 तक (Active Lead)"
    },
    "equitas-small-finance": {
      name: "Equitas 2.0 / Selfie Zero Balance Account",
      affiliateUrl: "https://leads.banksathi.com/?h=Z2NROXgxU21RaU5UakRidUpBbFFGdz09",
      commissionNotice: "प्रति अप्रूवल ₹250 - ₹350 तक (Active Lead)"
    },
    "idfc-first": {
      name: "IDFC FIRST Bank Digital Savings",
      affiliateUrl: "https://leads.banksathi.com/?h=a25tRXd4RnliVVBEM21MdWcwYzlCdz09",
      commissionNotice: "प्रति अप्रूवल ₹300 - ₹400 तक (Active Lead)"
    },
    "dbs-bank": {
      name: "DBS digibank Paperless Savings Account",
      affiliateUrl: "https://leads.banksathi.com/?h=Y1duMXFwZWc5U2liM0czRzdhSEk5QT09",
      commissionNotice: "प्रति अप्रूवल ₹250 - ₹350 तक (Active Lead)"
    },
    "au-small-finance": {
      name: "AU 0101 Digital Savings Account",
      affiliateUrl: "https://www.aubank.in/personal-banking/savings-account?partner=fengoo",
      commissionNotice: "प्रति अप्रूवल ₹350 तक"
    },
    "indusind": {
      name: "IndusInd Indus Delite Account",
      affiliateUrl: "https://www.indusind.com/in/en/personal/accounts/savings-account.html?partner=fengoo",
      commissionNotice: "प्रति अप्रूवल ₹250 - ₹300 तक"
    },
    "hdfc": {
      name: "HDFC Insta Digital Account",
      affiliateUrl: "https://www.hdfcbank.com/personal/save/accounts/savings-accounts?partner=fengoo"
    },
    "icici": {
      name: "ICICI Mine Digital Savings",
      affiliateUrl: "https://www.icicibank.com/personal-banking/accounts/savings-account?partner=fengoo"
    },
    "axis": {
      name: "Axis ASAP Digital Savings Account",
      affiliateUrl: "https://www.axisbank.com/retail/accounts/savings-account?partner=fengoo"
    },
    "federal-bank": {
      name: "Federal Bank FedBook Selfie Account",
      affiliateUrl: "https://www.federalbank.co.in/savings-accounts?partner=fengoo"
    },
    "yes-bank": {
      name: "Yes Bank Smart Savings Account",
      affiliateUrl: "https://www.yesbank.in/personal-banking/yes-individual/savings-accounts?partner=fengoo"
    },
    "sbi": {
      name: "SBI Regular Zero Balance Savings",
      affiliateUrl: "https://sbi.co.in/web/personal-banking/accounts/saving-account"
    }
  },

  // 7. Demat & Investment Affiliate Partners (Zerodha, Angel One, Upstox, Groww)
  investments: {
    zerodha: "https://zerodha.com/?c=fengoo-partner",
    angelone: "https://angelone.in/partner/fengoo",
    groww: "https://groww.in/open-demat-account?ref=fengoo",
    upstox: "https://upstox.com/open-demat-account/?f=fengoo"
  }
};
