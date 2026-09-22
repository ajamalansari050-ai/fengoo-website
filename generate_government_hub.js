import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';

export function buildGovernmentHubHTML() {
  const schemesData = [
    // --- CENTRAL SCHEMES ---
    {
      id: "pm-kisan",
      name: "PM Kisan Samman Nidhi (पीएम किसान)",
      authority: "कृषि एवं किसान कल्याण मंत्रालय (Govt of India)",
      state: "central",
      stateName: "केंद्र सरकार (Central)",
      target: "सभी भूमिधारक किसान परिवार",
      benefit: "₹6,000 प्रति वर्ष (₹2,000 की 3 समान किस्तों में सीधे बैंक खाते में DBT)",
      eligibility: "संबंधित राज्य/यूटी के भू-अभिलेखों में खेती योग्य भूमि रखने वाले किसान परिवार। (संवैधानिक पदधारक, आयकर दाता व 10,000+ पेंशनभोगी अपात्र)।",
      documents: "आधार कार्ड, बैंक खाता (Aadhaar Seeded / NPCI Linked), खतौनी/भू-अभिलेख, ई-केवाईसी।",
      applyUrl: "https://pmkisan.gov.in/",
      applyLabel: "PM-Kisan पोर्टल पर नया पंजीकरण / स्टेटस चेक करें ↗",
      tag: "Direct Benefit Transfer (DBT)"
    },
    {
      id: "pmjdy",
      name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
      authority: "वित्तीय सेवाएं विभाग, वित्त मंत्रालय (Govt of India)",
      state: "central",
      stateName: "केंद्र सरकार (Central)",
      target: "देश का प्रत्येक नागरिक (विशेषतः बैंकिंग से वंचित परिवार)",
      benefit: "जीरो बैलेंस खाता, ₹2 लाख का मुफ्त RuPay दुर्घटना बीमा, ₹10,000 तक ओवरड्राफ्ट (OD) सुविधा, प्रत्यक्ष लाभ अंतरण (DBT)।",
      eligibility: "10 वर्ष से अधिक आयु का कोई भी भारतीय नागरिक। किसी भी बैंक शाखा अथवा बैंक मित्र के पास खुलाया जा सकता है।",
      documents: "आधार कार्ड, यदि आधार में पता वर्तमान नहीं है तो अन्य मान्य पते का प्रमाण, 2 पासपोर्ट साइज फोटो।",
      applyUrl: "https://pmjdy.gov.in/",
      applyLabel: "PMJDY आधिकारिक पोर्टल पर नियम देखें ↗",
      tag: "Financial Inclusion"
    },
    {
      id: "ayushman-bharat",
      name: "Ayushman Bharat PM-JAY (आयुष्मान भारत)",
      authority: "राष्ट्रीय स्वास्थ्य प्राधिकरण (National Health Authority)",
      state: "central",
      stateName: "केंद्र सरकार (Central)",
      target: "गरीब, ग्रामीण व वंचित परिवार + 70 वर्ष से अधिक के सभी वरिष्ठ नागरिक",
      benefit: "प्रति परिवार प्रति वर्ष ₹5,00,000 तक का पूर्णतः कैशलेस व निःशुल्क उपचार (देश के सभी पैनलबद्ध सरकारी व निजी अस्पतालों में)।",
      eligibility: "SECC 2011 डेटाबेस में सूचीबद्ध परिवार तथा 70+ वर्ष के सभी नागरिक (बिना किसी आय सीमा के)।",
      documents: "आधार कार्ड, राशन कार्ड / परिवार पहचान पत्र, पंजीकृत मोबाइल नंबर।",
      applyUrl: "https://pmjay.gov.in/",
      applyLabel: "आयुष्मान कार्ड बनाएं व पात्रता जांचें (NHA Portal) ↗",
      tag: "Health Security"
    },
    {
      id: "pmay",
      name: "Pradhan Mantri Awas Yojana (PMAY-U / PMAY-G)",
      authority: "आवास एवं शहरी कार्य मंत्रालय / ग्रामीण विकास मंत्रालय",
      state: "central",
      stateName: "केंद्र सरकार (Central)",
      target: "बेघर परिवार व कच्चे मकानों में रहने वाले नागरिक",
      benefit: "मैदानी क्षेत्रों में ₹1.20 लाख तथा पहाड़ी क्षेत्रों में ₹1.30 लाख की सीधी सहायता। शहरी क्षेत्र में होम लोन पर ₹2.67 लाख तक ब्याज सब्सिडी।",
      eligibility: "देश में कहीं भी पक्का मकान न हो, परिवार में 25 वर्ष से अधिक का कोई साक्षर वयस्क न होने वाले व बीपीएल/ईडब्ल्यूएस परिवार।",
      documents: "आधार कार्ड, मनरेगा जॉब कार्ड, बैंक पासबुक, भूमि/आवास का फोटो, जाति/आय प्रमाण पत्र।",
      applyUrl: "https://pmaymis.gov.in/",
      applyLabel: "PMAY पोर्टल पर ऑनलाइन आवेदन व सूची देखें ↗",
      tag: "Housing For All"
    },
    {
      id: "pm-mudra",
      name: "Pradhan Mantri Mudra Yojana (PMMY)",
      authority: "वित्तीय सेवाएं विभाग, भारत सरकार",
      state: "central",
      stateName: "केंद्र सरकार (Central)",
      target: "छोटे व्यवसायी, दुकानदार, कारीगर, स्टार्ट-अप व विनिर्माण उद्यमी",
      benefit: "बिना किसी गारंटी (Collateral-Free) के ₹50,000 से ₹10,00,000 तक का सस्ता व्यापार ऋण। (शिशु: 50K, किशोर: 5L, तरुण: 10L)।",
      eligibility: "18 वर्ष से अधिक आयु का कोई भी गैर-कॉर्पोरेट, गैर-कृषि लघु या सूक्ष्म व्यवसाय चलाने वाला नागरिक।",
      documents: "पहचान प्रमाण (आधार/पैन), निवास प्रमाण, व्यवसाय का पता व प्रोजेक्ट रिपोर्ट, 6 माह का बैंक स्टेटमेंट।",
      applyUrl: "https://www.mudra.org.in/",
      applyLabel: "उद्यमी मित्र पोर्टल पर मुद्रा लोन आवेदन करें ↗",
      tag: "MSME Business Credit"
    },
    {
      id: "sukanya-samriddhi",
      name: "Sukanya Samriddhi Yojana (SSY)",
      authority: "वित्त मंत्रालय / डाक विभाग (India Post)",
      state: "central",
      stateName: "केंद्र सरकार (Central)",
      target: "10 वर्ष से कम आयु की बालिकाओं के अभिभावक",
      benefit: "8.2% वार्षिक चक्रवृद्धि ब्याज (सरकारी योजनाओं में सबसे अधिक), EEE टैक्स छूट (80C छूट, ब्याज कर-मुक्त, मैच्योरिटी कर-मुक्त)।",
      eligibility: "बालिका के जन्म से 10 वर्ष की आयु तक खाता खोला जा सकता है। एक परिवार में अधिकतम 2 बालिकाओं के लिए।",
      documents: "बालिका का जन्म प्रमाण पत्र, अभिभावक का आधार कार्ड व पैन कार्ड, पते का प्रमाण।",
      applyUrl: "https://www.indiapost.gov.in/",
      applyLabel: "इंडिया पोस्ट पोर्टल पर SSY नियम व कैलकुलेटर ↗",
      tag: "Girl Child Wealth"
    },
    {
      id: "pm-vishwakarma",
      name: "PM Vishwakarma Yojana (पीएम विश्वकर्मा)",
      authority: "सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय (MoMSME)",
      state: "central",
      stateName: "केंद्र सरकार (Central)",
      target: "18 पारंपरिक व्यवसायों में कार्यरत कारीगर व शिल्पकार (बढ़ई, लोहार, कुम्हार, दर्जी, मोची आदि)",
      benefit: "₹15,000 की टूलकिट प्रोत्साहन राशि, बुनियादी प्रशिक्षण के दौरान ₹500/दिन व ₹3 लाख तक का कोलैटरल-फ्री लोन मात्र 5% रियायती ब्याज दर पर।",
      eligibility: "हाथ और औजारों से काम करने वाले पारंपरिक कारीगर, न्यूनतम आयु 18 वर्ष, परिवार का केवल 1 सदस्य पात्र।",
      documents: "आधार कार्ड, बैंक पासबुक, मोबाइल नंबर, कौशल/ट्रेड का विवरण, राशन कार्ड।",
      applyUrl: "https://pmvishwakarma.gov.in/",
      applyLabel: "PM Vishwakarma पोर्टल पर ऑनलाइन पंजीकरण करें ↗",
      tag: "Artisans & Craftsmen"
    },
    {
      id: "pm-surya-ghar",
      name: "PM Surya Ghar: Muft Bijli Yojana (सोलर रूफटॉप)",
      authority: "नवीन और नवीकरणीय ऊर्जा मंत्रालय (MNRE)",
      state: "central",
      stateName: "केंद्र सरकार (Central)",
      target: "आवासीय गृहस्वामी व आम उपभोक्ता",
      benefit: "छत पर सोलर पैनल लगाने पर ₹78,000 तक की प्रत्यक्ष सरकारी सब्सिडी + हर महीने 300 यूनिट तक मुफ्त बिजली।",
      eligibility: "वैध घरेलू बिजली कनेक्शन व सोलर सिस्टम लगाने हेतु उपयुक्त छत का स्वामित्व।",
      documents: "नवीनतम बिजली बिल, आधार कार्ड, बैंक खाता पासबुक, छत का स्वामित्व प्रमाण।",
      applyUrl: "https://pmsuryaghar.gov.in/",
      applyLabel: "PM Surya Ghar पोर्टल पर सब्सिडी हेतु आवेदन करें ↗",
      tag: "Green Energy & Subsidy"
    },
    {
      id: "pm-svanidhi",
      name: "PM SVANidhi (स्ट्रीट वेंडर आत्मनिर्भर निधि)",
      authority: "आवास एवं शहरी कार्य मंत्रालय (MoHUA)",
      state: "central",
      stateName: "केंद्र सरकार (Central)",
      target: "रेहड़ी-पटरी, ठेला व फुटपाथ पर दुकान लगाने वाले वेंडर्स",
      benefit: "प्रथम चरण में ₹10,000, समय पर चुकाने पर द्वितीय चरण में ₹20,000 और तृतीय चरण में ₹50,000 का कोलैटरल-फ्री लोन + 7% ब्याज सब्सिडी।",
      eligibility: "शहरी व अर्ध-शहरी क्षेत्रों में 24 मार्च 2020 से पूर्व अथवा नगर निकाय से वेंडिंग प्रमाण पत्र प्राप्त स्ट्रीट वेंडर्स।",
      documents: "आधार कार्ड, वेंडिंग पहचान पत्र (CoVs) या स्थानीय निकाय का सिफारिश पत्र, बैंक खाता।",
      applyUrl: "https://pmsvanidhi.mohua.gov.in/",
      applyLabel: "PM SVANidhi पोर्टल पर वेंडर लोन आवेदन ↗",
      tag: "Micro Credit"
    },
    {
      id: "atal-pension",
      name: "Atal Pension Yojana (APY - अटल पेंशन योजना)",
      authority: "PFRDA / वित्त मंत्रालय",
      state: "central",
      stateName: "केंद्र सरकार (Central)",
      target: "असंगठित क्षेत्र के 18 से 40 वर्ष के श्रमिक व नागरिक",
      benefit: "60 वर्ष की आयु के बाद आजीवन ₹1,000 से ₹5,000 प्रति माह की पक्की सरकारी पेंशन। ग्राहक की मृत्यु पर पति/पत्नी को पेंशन।",
      eligibility: "18 से 40 वर्ष की आयु। (नोट: 1 अक्टूबर 2022 से आयकर दाता APY के लिए पात्र नहीं हैं)।",
      documents: "आधार कार्ड, बैंक या डाकघर बचत खाता, ऑटो-डेबिट सहमति।",
      applyUrl: "https://www.npscra.nsdl.co.in/",
      applyLabel: "NSDL Protean APY पोर्टल पर पंजीकरण व प्रपत्र ↗",
      tag: "Guaranteed Pension"
    },

    // --- STATE-WISE SCHEMES ---

    // 1. Uttar Pradesh
    {
      id: "up-kanya-sumangala",
      name: "Mukhyamantri Kanya Sumangala Yojana (कन्या सुमंगला)",
      authority: "महिला कल्याण विभाग, उत्तर प्रदेश सरकार",
      state: "up",
      stateName: "उत्तर प्रदेश (Uttar Pradesh)",
      target: "उत्तर प्रदेश की बालिकाएं (जन्म से उच्च शिक्षा तक)",
      benefit: "बालिका के जन्म, टीकाकरण, कक्षा 1, 6, 9 में प्रवेश तथा स्नातक में दाखिले पर कुल ₹25,000 की वित्तीय सहायता सीधे बैंक खाते में।",
      eligibility: "उत्तर प्रदेश का मूल निवासी, परिवार की वार्षिक आय ₹3,00,000 से अधिक न हो, परिवार में अधिकतम 2 बालिकाएं।",
      documents: "बालिका का जन्म प्रमाण पत्र, माता-पिता का आधार कार्ड, आय प्रमाण पत्र, निवास प्रमाण पत्र, बैंक पासबुक।",
      applyUrl: "https://mksy.up.gov.in/",
      applyLabel: "MKSY पोर्टल पर कन्या सुमंगला आवेदन करें ↗",
      tag: "UP State Scheme"
    },
    {
      id: "up-bc-sakhi",
      name: "UP Banking Correspondent (BC) Sakhi Yojana",
      authority: "ग्रामीण आजीविका मिशन (UPSRLM), उत्तर प्रदेश सरकार",
      state: "up",
      stateName: "उत्तर प्रदेश (Uttar Pradesh)",
      target: "ग्रामीण महिलाएं व स्वयं सहायता समूह (SHG) सदस्य",
      benefit: "प्रथम 6 माह तक ₹4,000 प्रति माह स्टाइपेंड + हार्डवेयर (माइक्रो-एटीएम डिवाइस) हेतु ₹75,000 सहायता + प्रत्येक बैंकिंग लेनदेन पर कमीशन।",
      eligibility: "कक्षा 10वीं पास, 18-50 वर्ष आयु, स्मार्टफ़ोन चलाने में सक्षम व उसी ग्राम पंचायत की निवासी।",
      documents: "आधार कार्ड, 10वीं की मार्कशीट, निवास प्रमाण पत्र, बैंक खाता, पुलिस सत्यापन।",
      applyUrl: "https://bc-sakhi.in/",
      applyLabel: "UP BC Sakhi आधिकारिक ऐप व पोर्टल लिंक ↗",
      tag: "UP Women Empowerment"
    },
    {
      id: "up-free-scooty",
      name: "UP Rani Laxmibai Free Scooty Scheme",
      authority: "उच्च शिक्षा विभाग, उत्तर प्रदेश सरकार",
      state: "up",
      stateName: "उत्तर प्रदेश (Uttar Pradesh)",
      target: "मेधावी छात्राएं (स्नातक व परास्नातक स्तर)",
      benefit: "कॉलेज जाने वाली मेधावी छात्राओं को निःशुल्क स्कूटी अथवा समतुल्य वित्तीय सहायता।",
      eligibility: "उत्तर प्रदेश की मूल निवासी छात्राएं, जिन्होंने 12वीं में 75%+ अंक प्राप्त किए हों और उच्च शिक्षा में नामांकित हों।",
      documents: "12वीं की मार्कशीट, कॉलेज एडमिशन रसीद, आधार कार्ड, अधिवास प्रमाण पत्र।",
      applyUrl: "https://up.gov.in/",
      applyLabel: "उत्तर प्रदेश सरकार पोर्टल पर स्कूटी योजना दिशा-निर्देश ↗",
      tag: "UP Education"
    },

    // 2. Bihar
    {
      id: "bihar-student-credit-card",
      name: "Bihar Student Credit Card Yojana (BSCC)",
      authority: "शिक्षा विभाग, बिहार सरकार (7 निश्चय योजना)",
      state: "bihar",
      stateName: "बिहार (Bihar)",
      target: "12वीं पास विद्यार्थी जो उच्च शिक्षा ग्रहण करना चाहते हैं",
      benefit: "उच्च शिक्षा (B.Tech, MBBS, BBA, BCA आदि) हेतु ₹4,00,000 तक का शिक्षा ऋण मात्र 1% (छात्राओं, दिव्यांगों व ट्रांसजेंडर्स के लिए) और 4% (छात्रों के लिए) रियायती ब्याज पर।",
      eligibility: "बिहार का मूल निवासी, 12वीं उत्तीर्ण, 25 वर्ष से कम आयु, मान्यता प्राप्त संस्थान में प्रवेश।",
      documents: "12वीं की मार्कशीट, कॉलेज एडमिशन लेटर व फीस स्ट्रक्चर, आधार कार्ड, आवासीय प्रमाण पत्र, माता-पिता का पैन।",
      applyUrl: "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
      applyLabel: "MNSSBY पोर्टल पर स्टूडेंट क्रेडिट कार्ड ऑनलाइन अप्लाई ↗",
      tag: "Bihar 7 Nischay"
    },
    {
      id: "bihar-udyami-yojana",
      name: "Mukhyamantri Udyami Yojana (बिहार मुख्यमंत्री उद्यमी योजना)",
      authority: "उद्योग विभाग, बिहार सरकार",
      state: "bihar",
      stateName: "बिहार (Bihar)",
      target: "अनुसूचित जाति, जनजाति, अति पिछड़ा वर्ग, महिला व युवा उद्यमी",
      benefit: "नया उद्योग स्थापित करने हेतु ₹10,00,000 तक की कुल सहायता। इसमें ₹5,00,000 का अनुदान (100% माफ) तथा ₹5,00,000 का ब्याज-मुक्त ऋण (84 किश्तों में वापसी)।",
      eligibility: "बिहार का स्थायी निवासी, 10+2 / आईटीआई / पॉलिटेक्निक या समकक्ष योग्यता, आयु 18 से 50 वर्ष।",
      documents: "10वीं व 12वीं का प्रमाण पत्र, जाति प्रमाण पत्र, निवास प्रमाण पत्र, बैंक पासबुक (करंट अकाउंट), पैन कार्ड।",
      applyUrl: "https://udyami.bihar.gov.in/",
      applyLabel: "Udyami Bihar आधिकारिक पोर्टल पर आवेदन करें ↗",
      tag: "Bihar Entrepreneurship"
    },
    {
      id: "bihar-kanya-utthan",
      name: "Mukhyamantri Kanya Utthan Yojana (बिहार कन्या उत्थान)",
      authority: "शिक्षा विभाग / समाज कल्याण विभाग, बिहार",
      state: "bihar",
      stateName: "बिहार (Bihar)",
      target: "बिहार की छात्राएं (इंटरमीडिएट व स्नातक उत्तीर्ण)",
      benefit: "इंटरमीडिएट (12वीं) प्रथम श्रेणी पास करने पर ₹25,000 तथा किसी भी मान्यता प्राप्त विश्वविद्यालय से स्नातक (Graduation) पास करने पर ₹50,000 का एकमुश्त प्रोत्साहन।",
      eligibility: "बिहार राज्य की मूल निवासी अविवाहित छात्रा (12वीं हेतु) तथा स्नातक उत्तीर्ण सभी छात्राएं।",
      documents: "स्नातक/इंटर की अंकतालिका, आधार कार्ड, बैंक खाता (छात्रा के नाम से), आवासीय प्रमाण पत्र।",
      applyUrl: "https://medhasoft.bih.nic.in/",
      applyLabel: "Medhasoft पोर्टल पर कन्या उत्थान फॉर्म भरें ↗",
      tag: "Bihar Girls Education"
    },

    // 3. Madhya Pradesh
    {
      id: "mp-ladli-behna",
      name: "Mukhyamantri Ladli Behna Yojana (लाड़ली बहना योजना)",
      authority: "महिला एवं बाल विकास विभाग, मध्य प्रदेश सरकार",
      state: "mp",
      stateName: "मध्य प्रदेश (Madhya Pradesh)",
      target: "मध्य प्रदेश की 21 से 60 वर्ष की विवाहित, तलाकशुदा व परित्यक्ता महिलाएं",
      benefit: "प्रत्येक माह की 10 तारीख को ₹1,250 की सीधी नकद राशि बैंक खाते में डीबीटी (वार्षिक ₹15,000 का आर्थिक संबल)।",
      eligibility: "मध्य प्रदेश की स्थायी निवासी, परिवार की संयुक्त वार्षिक आय ₹2.5 लाख से कम हो, 5 एकड़ से कम कृषि भूमि हो।",
      documents: "समग्र परिवार आईडी (Samagra ID), आधार कार्ड, आधार लिंक व डीबीटी इनेबल्ड बैंक खाता।",
      applyUrl: "https://ladlibehna.mp.gov.in/",
      applyLabel: "Ladli Behna पोर्टल पर स्थिति व किस्त चेक करें ↗",
      tag: "MP Women Support"
    },
    {
      id: "mp-sambal-yojana",
      name: "Mukhyamantri Jan Kalyan Sambal 2.0 Yojana",
      authority: "श्रम विभाग, मध्य प्रदेश सरकार",
      state: "mp",
      stateName: "मध्य प्रदेश (Madhya Pradesh)",
      target: "असंगठित क्षेत्र के पंजीकृत श्रमिक परिवार",
      benefit: "प्रसूति सहायता ₹16,000, सामान्य मृत्यु पर ₹2,00,000, दुर्घटना मृत्यु पर ₹4,00,000, अंतिम संस्कार सहायता ₹5,000 तथा बच्चों की कॉलेज फीस माफी।",
      eligibility: "मध्य प्रदेश के असंगठित श्रमिक, आयु 18 से 60 वर्ष, जो ईपीएफ/ईएसआईसी अथवा आयकर के दायरे में न आते हों।",
      documents: "समग्र आईडी, आधार कार्ड, श्रमिक स्व-घोषणा पत्र, बैंक पासबुक।",
      applyUrl: "https://sambal.mp.gov.in/",
      applyLabel: "Sambal 2.0 पोर्टल पर संबल कार्ड बनाएं ↗",
      tag: "MP Social Security"
    },
    {
      id: "mp-medhavi-vidyarthi",
      name: "Mukhyamantri Medhavi Vidyarthi Yojana (MMVY)",
      authority: "तकनीकी शिक्षा एवं कौशल विकास विभाग, मध्य प्रदेश",
      state: "mp",
      stateName: "मध्य प्रदेश (Madhya Pradesh)",
      target: "मेधावी छात्र-छात्राएं (IIT, NIT, AIIMS, IIM, मेडिकल व इंजीनियरिंग दाखिले)",
      benefit: "उच्च शिक्षण संस्थानों की पूरी ट्यूशन फीस मध्य प्रदेश सरकार द्वारा वहन की जाती है।",
      eligibility: "MP बोर्ड में 70%+ या CBSE/ICSE में 85%+ अंक, परिवार की वार्षिक आय ₹6 लाख से कम।",
      documents: "10वीं व 12वीं की अंकसूची, जेईई/नीट/क्लैट स्कोर कार्ड, कॉलेज प्रवेश पत्र, आय प्रमाण पत्र।",
      applyUrl: "https://scholarshipportal.mp.nic.in/",
      applyLabel: "MP Scholarship पोर्टल पर मेधावी छात्र योजना आवेदन ↗",
      tag: "MP Higher Education"
    },

    // 4. Rajasthan
    {
      id: "rajasthan-chiranjeevi",
      name: "Mukhyamantri Ayushman / Chiranjeevi Swasthya Bima",
      authority: "चिकित्सा एवं स्वास्थ्य विभाग, राजस्थान सरकार",
      state: "rajasthan",
      stateName: "राजस्थान (Rajasthan)",
      target: "राजस्थान के सभी निवासी परिवार",
      benefit: "प्रति परिवार प्रति वर्ष ₹25,00,000 तक का कैशलेस स्वास्थ्य बीमा तथा ₹5 लाख का दुर्घटना बीमा कवर।",
      eligibility: "जन आधार कार्ड धारक परिवार। एनएफएसए व लघु-सीमांत किसानों के लिए निःशुल्क, अन्य के लिए मात्र ₹850 प्रति वर्ष।",
      documents: "जन आधार कार्ड (Jan Aadhaar), आधार कार्ड, मोबाइल नंबर।",
      applyUrl: "https://chiranjeevi.rajasthan.gov.in/",
      applyLabel: "चिरंजीवी पोर्टल पर पॉलिसी स्थिति व अस्पताल सूची देखें ↗",
      tag: "Rajasthan Healthcare"
    },
    {
      id: "rajasthan-smartphone",
      name: "Indira Gandhi Smartphone Yojana (IGSY)",
      authority: "सूचना प्रौद्योगिकी एवं संचार विभाग (DoIT&C), राजस्थान",
      state: "rajasthan",
      stateName: "राजस्थान (Rajasthan)",
      target: "चिरंजीवी परिवारों की महिला मुखिया व सरकारी स्कूलों/कॉलेजों की छात्राएं",
      benefit: "निःशुल्क 4G/5G स्मार्टफोन खरीदने हेतु ₹6,800 की प्रत्यक्ष डीबीटी सहायता + 3 वर्ष का फ्री इंटरनेट डेटा व कॉलिंग।",
      eligibility: "जन आधार कार्ड धारक परिवार की महिला मुखिया, 9वीं से 12वीं या कॉलेज में पढ़ने वाली छात्राएं, एकल नारी/पेंशनभोगी।",
      documents: "जन आधार कार्ड, आधार कार्ड, पैन कार्ड, पासपोर्ट साइज फोटो।",
      applyUrl: "https://rajasthan.gov.in/",
      applyLabel: "राजस्थान जन सूचना पोर्टल पर स्मार्टफोन पात्रता जांचें ↗",
      tag: "Rajasthan Digital"
    },

    // 5. Maharashtra
    {
      id: "mh-ladki-bahin",
      name: "Mukhyamantri Majhi Ladki Bahin Yojana (माझी लाड़की बहिन)",
      authority: "महिला व बाल विकास विभाग, महाराष्ट्र शासन",
      state: "maharashtra",
      stateName: "महाराष्ट्र (Maharashtra)",
      target: "महाराष्ट्र की 21 से 65 वर्ष की पात्र महिलाएं",
      benefit: "प्रति माह ₹1,500 की नकद वित्तीय सहायता सीधे बैंक खाते में (वार्षिक ₹18,000 का आर्थिक लाभ)।",
      eligibility: "महाराष्ट्र राज्य की अधिवासी, परिवार की वार्षिक आय ₹2.5 लाख से कम, परिवार का कोई सदस्य आयकर दाता न हो।",
      documents: "आधार कार्ड, अधिवास प्रमाण पत्र (Domicile) या 15 वर्ष पुराना राशन कार्ड, आय प्रमाण, बैंक पासबुक।",
      applyUrl: "https://ladkibahin.maharashtra.gov.in/",
      applyLabel: "माझी लाड़की बहिन पोर्टल पर ऑनलाइन फॉर्म भरें ↗",
      tag: "Maharashtra Welfare"
    },
    {
      id: "mh-jyotirao-phule",
      name: "Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY)",
      authority: "सार्वजनिक आरोग्य विभाग, महाराष्ट्र शासन",
      state: "maharashtra",
      stateName: "महाराष्ट्र (Maharashtra)",
      target: "महाराष्ट्र के सभी नागरिक व परिवार",
      benefit: "प्रति परिवार प्रति वर्ष ₹5,00,000 तक का कैशलेस अस्पताल उपचार (996 गंभीर चिकित्सा प्रक्रियाओं हेतु)।",
      eligibility: "महाराष्ट्र का कोई भी निवासी परिवार जिसके पास पीला, नारंगी या सफेद राशन कार्ड व आधार उपलब्ध हो।",
      documents: "राशन कार्ड, आधार कार्ड, मतदाता पहचान पत्र।",
      applyUrl: "https://www.jeevandayee.gov.in/",
      applyLabel: "MJPJAY पोर्टल पर नेटवर्क हॉस्पिटल व पैकेज विवरण ↗",
      tag: "Maharashtra Health"
    },

    // 6. Delhi
    {
      id: "delhi-ladli",
      name: "Delhi Ladli Scheme (दिल्ली लाड़ली योजना)",
      authority: "महिला एवं बाल विकास विभाग, दिल्ली सरकार",
      state: "delhi",
      stateName: "दिल्ली (Delhi)",
      target: "राष्ट्रीय राजधानी क्षेत्र दिल्ली में जन्म लेने वाली बालिकाएं",
      benefit: "अस्पताल में जन्म पर ₹11,000 तथा स्कूल की विभिन्न कक्षाओं (1, 6, 9, 10, 12वीं) में प्रवेश पर ₹5,000-₹5,000 जमा, जो 18 वर्ष की आयु में ब्याज सहित परिपक्व होता है।",
      eligibility: "बालिका का जन्म दिल्ली में हुआ हो, परिवार कम से कम 3 वर्ष से दिल्ली का निवासी हो, पारिवारिक वार्षिक आय ₹1 लाख से कम।",
      documents: "बालिका का जन्म प्रमाण पत्र, 3 वर्ष पुराना दिल्ली निवास प्रमाण, आय प्रमाण पत्र, आधार कार्ड।",
      applyUrl: "https://wcd.delhi.gov.in/",
      applyLabel: "e-District Delhi पर लाड़ली योजना आवेदन करें ↗",
      tag: "Delhi Child Welfare"
    },
    {
      id: "delhi-jai-bhim",
      name: "Jai Bhim Mukhyamantri Pratibha Vikas Yojana",
      authority: "अनुसूचित जाति/जनजाति कल्याण विभाग, दिल्ली सरकार",
      state: "delhi",
      stateName: "दिल्ली (Delhi)",
      target: "SC, ST, OBC व EWS वर्ग के प्रतिभाशाली छात्र",
      benefit: "UPSC, SSC, Banking, JEE, NEET, CLAT जैसी प्रतियोगी परीक्षाओं हेतु प्रतिष्ठित कोचिंग संस्थानों में 100% निःशुल्क कोचिंग + ₹2,500/माह स्टाइपेंड।",
      eligibility: "दिल्ली से 10वीं व 12वीं उत्तीर्ण, परिवार की वार्षिक आय ₹8 लाख तक।",
      documents: "10वीं व 12वीं का प्रमाणपत्र, जाति प्रमाणपत्र, आय प्रमाणपत्र, आधार कार्ड।",
      applyUrl: "https://scstwelfare.delhi.gov.in/",
      applyLabel: "दिल्ली एससी/एसटी कल्याण विभाग पोर्टल पर आवेदन ↗",
      tag: "Delhi Free Coaching"
    },

    // 7. Gujarat
    {
      id: "gujarat-ma-amrutam",
      name: "Mukhyamantri Amrutam (MA & MA Vatsalya) Yojana",
      authority: "स्वास्थ्य और परिवार कल्याण विभाग, गुजरात सरकार",
      state: "gujarat",
      stateName: "गुजरात (Gujarat)",
      target: "गुजरात के बीपीएल तथा ₹4 लाख तक वार्षिक आय वाले मध्यमवर्गीय परिवार",
      benefit: "प्रति परिवार प्रति वर्ष ₹5,00,000 से ₹10,00,000 तक का पूर्णतः कैशलेस अस्पताल इलाज (हार्ट सर्जरी, कैंसर, किडनी ट्रांसप्लांट आदि)।",
      eligibility: "गुजरात के स्थायी निवासी, बीपीएल सूची में दर्ज अथवा वार्षिक आय ₹4,00,000 तक के परिवार।",
      documents: "आय प्रमाण पत्र, राशन कार्ड, परिवार के सभी सदस्यों के आधार कार्ड।",
      applyUrl: "https://magujarat.com/",
      applyLabel: "MA Amrutam गुजरात पोर्टल पर कार्ड विवरण देखें ↗",
      tag: "Gujarat Health"
    },

    // 8. Karnataka
    {
      id: "karnataka-gruha-lakshmi",
      name: "Gruha Lakshmi Scheme (गृह लक्ष्मी योजना)",
      authority: "महिला एवं बाल विकास विभाग, कर्नाटक सरकार (पंच गारंटी)",
      state: "karnataka",
      stateName: "कर्नाटक (Karnataka)",
      target: "परिवार की महिला मुखिया (Housewife / Female Head)",
      benefit: "प्रति माह ₹2,000 की सीधी नकद सहायता बैंक खाते में (वार्षिक ₹24,000 का वित्तीय संबल)।",
      eligibility: "राशन कार्ड (BPL/Antyodaya/APL) में परिवार की मुखिया के रूप में नामित महिला। (करदाता महिला या उनके पति अपात्र)।",
      documents: "राशन कार्ड, आधार कार्ड (महिला व पति का), बैंक पासबुक (Aadhaar Seeded)।",
      applyUrl: "https://sevasindhu.karnataka.gov.in/",
      applyLabel: "Seva Sindhu पोर्टल पर गृह लक्ष्मी आवेदन व स्टेटस ↗",
      tag: "Karnataka Guarantee"
    },
    {
      id: "karnataka-yuva-nidhi",
      name: "Yuva Nidhi Scheme (युवा निधि योजना)",
      authority: "कौशल विकास, उद्यमिता एवं आजीविका विभाग, कर्नाटक",
      state: "karnataka",
      stateName: "कर्नाटक (Karnataka)",
      target: "कर्नाटक के बेरोजगार स्नातक व डिप्लोमा धारक युवा",
      benefit: "डिग्री स्नातकों को ₹3,000 प्रति माह तथा डिप्लोमा धारकों को ₹1,500 प्रति माह का बेरोजगारी भत्ता (अधिकतम 2 वर्ष हेतु)।",
      eligibility: "कर्नाटक के मूल निवासी युवा जिन्होंने विगत 6 माह से कोई नौकरी या उच्च शिक्षा प्राप्त न की हो।",
      documents: "डिग्री/डिप्लोमा प्रमाणपत्र, आधार कार्ड, निवास प्रमाण, आय प्रमाण।",
      applyUrl: "https://sevasindhugs.karnataka.gov.in/",
      applyLabel: "Yuva Nidhi पोर्टल पर युवा पंजीकरण करें ↗",
      tag: "Karnataka Youth"
    },

    // 9. West Bengal
    {
      id: "wb-lakshmir-bhandar",
      name: "Lakshmir Bhandar Scheme (लक्ष्मी भंडार)",
      authority: "महिला एवं बाल विकास तथा समाज कल्याण विभाग, पश्चिम बंगाल",
      state: "west-bengal",
      stateName: "पश्चिम बंगाल (West Bengal)",
      target: "25 से 60 वर्ष की महिला मुखिया",
      benefit: "सामान्य वर्ग की महिलाओं को ₹1,000 प्रति माह तथा SC/ST वर्ग की महिलाओं को ₹1,200 प्रति माह की सीधी वित्तीय सहायता।",
      eligibility: "पश्चिम बंगाल की स्थायी निवासी, 'दुआरे सरकार' कैंप में पंजीकृत, सरकारी पेंशनभोगी न हों।",
      documents: "स्वास्थ्य साथी कार्ड (Swasthya Sathi Card), आधार कार्ड, SC/ST प्रमाणपत्र (यदि लागू हो), बैंक पासबुक।",
      applyUrl: "https://socialsecurity.wb.gov.in/",
      applyLabel: "Lakshmir Bhandar आधिकारिक स्टेटस पोर्टल ↗",
      tag: "WB Social Security"
    },
    {
      id: "wb-kanyashree",
      name: "Kanyashree Prakalpa (कन्याश्री प्रकल्प - UN Awarded)",
      authority: "महिला एवं बाल विकास विभाग, पश्चिम बंगाल सरकार",
      state: "west-bengal",
      stateName: "पश्चिम बंगाल (West Bengal)",
      target: "13 से 18 वर्ष की स्कूल जाने वाली अविवाहित छात्राएं",
      benefit: "कक्षा 8 से 12 तक ₹1,000 वार्षिक छात्रवृत्ति (K1) तथा 18 वर्ष पूर्ण होने पर अविवाहित रहने व पढ़ाई जारी रखने पर ₹25,000 का एकमुश्त अनुदान (K2)।",
      eligibility: "पश्चिम बंगाल के मान्यता प्राप्त स्कूल/कॉलेज में नामांकित अविवाहित छात्रा।",
      documents: "जन्म प्रमाण पत्र, स्कूल बोनाफाइड सर्टिफिकेट, आधार कार्ड, बैंक खाता।",
      applyUrl: "https://www.wbkanyashree.gov.in/",
      applyLabel: "Kanyashree Online पोर्टल पर स्टेटस व नवीनीकरण ↗",
      tag: "WB Girls Welfare"
    },

    // 10. Tamil Nadu
    {
      id: "tn-magalir-urimai",
      name: "Kalaignar Magalir Urimai Thogai Scheme",
      authority: "विशेष कार्यक्रम कार्यान्वयन विभाग, तमिलनाडु सरकार",
      state: "tamil-nadu",
      stateName: "तमिलनाडु (Tamil Nadu)",
      target: "तमिलनाडु की पात्र महिला परिवार मुखिया",
      benefit: "प्रति माह ₹1,000 की सीधी नकद अधिकार राशि (Basic Income Entitlement) बैंक खाते में।",
      eligibility: "परिवार की वार्षिक आय ₹2.5 लाख से कम, 5 एकड़ से कम सिंचित भूमि, घरेलू बिजली खपत 3,600 यूनिट/वर्ष से कम।",
      documents: "स्मार्ट राशन कार्ड, आधार कार्ड, बिजली बिल नंबर, बैंक पासबुक।",
      applyUrl: "https://kmut.tn.gov.in/",
      applyLabel: "KMUT पोर्टल पर आवेदन स्थिति व अपील दर्ज करें ↗",
      tag: "TN Women Rights"
    },
    {
      id: "tn-pudhumai-penn",
      name: "Pudhumai Penn Scheme (पुधुमै पेन योजना)",
      authority: "सामाजिक कल्याण एवं महिला अधिकारिता विभाग, तमिलनाडु",
      state: "tamil-nadu",
      stateName: "तमिलनाडु (Tamil Nadu)",
      target: "सरकारी स्कूलों में पढ़ी छात्राएं जो कॉलेज में प्रवेश ले रही हैं",
      benefit: "स्नातक/डिप्लोमा/आईटीआई की पढ़ाई पूरी होने तक ₹1,000 प्रति माह की सीधी सहायता राशि।",
      eligibility: "कक्षा 6वीं से 12वीं तक सरकारी स्कूल में पढ़ी हो और किसी उच्च शिक्षण संस्थान में नामांकित हो।",
      documents: "स्कूल प्रमाण पत्र (6-12 सरकारी स्कूल), कॉलेज आईडी, आधार कार्ड, बैंक खाता।",
      applyUrl: "https://pudhumaipenn.tn.gov.in/",
      applyLabel: "Pudhumai Penn पोर्टल पर छात्रवृत्ति आवेदन ↗",
      tag: "TN Higher Education"
    },

    // 11. Odisha
    {
      id: "odisha-subhadra",
      name: "Subhadra Yojana (सुभद्रा योजना - Odisha)",
      authority: "महिला एवं बाल विकास विभाग, ओडिशा सरकार",
      state: "odisha",
      stateName: "ओडिशा (Odisha)",
      target: "ओडिशा की 21 से 60 वर्ष की सभी पात्र महिलाएं",
      benefit: "5 वर्षों में कुल ₹50,000 की वित्तीय सहायता (प्रति वर्ष ₹10,000 दो समान किस्तों - रक्षाबंधन व अंतर्राष्ट्रीय महिला दिवस पर डीबीटी)।",
      eligibility: "ओडिशा की स्थायी निवासी महिला, परिवार का कोई सदस्य सरकारी नौकरी या आयकर दाता न हो।",
      documents: "आधार कार्ड (मोबाइल लिंक्ड), सिंगल बैंक खाता (DBT Enabled), राशन कार्ड।",
      applyUrl: "https://subhadra.odisha.gov.in/",
      applyLabel: "Subhadra Odisha पोर्टल पर ऑनलाइन आवेदन व सूची ↗",
      tag: "Odisha Women Empowerment"
    },

    // 12. Chhattisgarh & Others
    {
      id: "cg-mahtari-vandan",
      name: "Mahtari Vandan Yojana (महतारी वंदन योजना)",
      authority: "महिला एवं बाल विकास विभाग, छत्तीसगढ़ सरकार",
      state: "chhattisgarh",
      stateName: "छत्तीसगढ़ (Chhattisgarh)",
      target: "छत्तीसगढ़ की 21 वर्ष से अधिक आयु की विवाहित महिलाएं",
      benefit: "प्रति माह ₹1,000 (वार्षिक ₹12,000) की सीधी वित्तीय सहायता बैंक खाते में।",
      eligibility: "छत्तीसगढ़ की स्थानीय निवासी विवाहित, विधवा, तलाकशुदा या परित्यक्ता महिला।",
      documents: "आधार कार्ड, विवाह प्रमाण पत्र/राशन कार्ड, बैंक पासबुक, निवास प्रमाण।",
      applyUrl: "https://mahtarivandan.cgstate.gov.in/",
      applyLabel: "Mahtari Vandan पोर्टल पर भुगतान स्थिति देखें ↗",
      tag: "Chhattisgarh Welfare"
    }
  ];

  const schemesCardsHTML = schemesData.map(scheme => {
    return `
    <article class="scheme-card-item" data-state="${scheme.state}" data-search="${scheme.name.toLowerCase()} ${scheme.authority.toLowerCase()} ${scheme.benefit.toLowerCase()} ${scheme.stateName.toLowerCase()}">
      <div class="scheme-card-header">
        <div class="scheme-badge-row">
          <span class="scheme-state-badge">${scheme.stateName}</span>
          <span class="scheme-tag-badge">${scheme.tag}</span>
        </div>
        <h3 class="scheme-title">${scheme.name}</h3>
        <span class="scheme-authority">अधिकृत विभाग: <strong>${scheme.authority}</strong></span>
      </div>

      <div class="scheme-card-body">
        <div class="scheme-highlight-box">
          <div class="highlight-title">💰 वित्तीय लाभ व सब्सिडी (Key Benefit):</div>
          <p class="highlight-val">${scheme.benefit}</p>
        </div>

        <div class="scheme-spec-row">
          <span class="spec-label">🎯 लक्षित लाभार्थी (Target):</span>
          <span class="spec-val">${scheme.target}</span>
        </div>

        <div class="scheme-spec-row">
          <span class="spec-label">📋 पात्रता (Eligibility):</span>
          <span class="spec-val">${scheme.eligibility}</span>
        </div>

        <div class="scheme-spec-row">
          <span class="spec-label">📄 आवश्यक दस्तावेज (Documents):</span>
          <span class="spec-val">${scheme.documents}</span>
        </div>
      </div>

      <div class="scheme-card-footer">
        <a href="${scheme.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-official-apply" title="आधिकारिक सरकारी वेबसाइट पर जाएं">
          🏛️ ${scheme.applyLabel}
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
  <title>सरकारी योजनाएं डायरेक्टरी (Government Schemes: Central & State-wise) | Fengoo</title>
  <meta name="description" content="केंद्र सरकार व भारत के सभी राज्यों (उत्तर प्रदेश, बिहार, मध्य प्रदेश, राजस्थान, महाराष्ट्र आदि) की सरकारी योजनाओं की संपूर्ण डायरेक्टरी। लाभ, पात्रता, आवश्यक दस्तावेज व आधिकारिक पोर्टल पर ऑनलाइन आवेदन लिंक।" />
  <link rel="canonical" href="https://fengoo.in/government/index.html" />
  ${getStyles('..')}
  <style>
    .scheme-hero {
      background: radial-gradient(circle at 50% 0%, var(--surface-2) 0%, var(--surface) 100%);
      border-bottom: 1px solid var(--border);
      padding: 3rem 0 2rem;
      text-align: center;
    }
    .scheme-hero h1 {
      font-size: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
      color: var(--text);
    }
    .scheme-hero p {
      font-size: 1.05rem;
      color: var(--text-muted);
      max-width: 760px;
      margin: 0 auto 1.5rem;
      line-height: 1.5;
    }
    .scheme-filter-section {
      max-width: 900px;
      margin: 0 auto;
    }
    .state-filter-tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.45rem;
      margin-top: 1.25rem;
    }
    .state-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.825rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .state-btn:hover, .state-btn.active {
      background: #0284c7;
      color: #fff;
      border-color: #0284c7;
    }
    .schemes-list-container {
      padding: 2.5rem 0 4rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .scheme-card-item {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow-sm);
      padding: 1.5rem;
      transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
      position: relative;
    }
    .scheme-card-item:hover {
      border-color: #0284c7;
      box-shadow: var(--shadow-md);
    }
    .scheme-card-header {
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.9rem;
      margin-bottom: 1rem;
    }
    .scheme-badge-row {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.35rem;
      flex-wrap: wrap;
    }
    .scheme-state-badge {
      font-size: 0.75rem;
      font-weight: 700;
      background: #eff6ff;
      color: #1d4ed8;
      border: 1px solid #bfdbfe;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
    }
    .scheme-tag-badge {
      font-size: 0.75rem;
      font-weight: 600;
      background: #f1f5f9;
      color: #475569;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }
    .scheme-title {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--text);
      margin: 0.3rem 0 0.2rem;
    }
    .scheme-authority {
      font-size: 0.85rem;
      color: var(--text-muted);
    }
    .scheme-card-body {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
    }
    .scheme-highlight-box {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-left: 4px solid #16a34a;
      border-radius: var(--radius-sm);
      padding: 0.75rem 1rem;
    }
    .highlight-title {
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      color: #166534;
      margin-bottom: 0.2rem;
    }
    .highlight-val {
      font-size: 1.05rem;
      font-weight: 800;
      color: #14532d;
      margin: 0;
    }
    .scheme-spec-row {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      font-size: 0.875rem;
      line-height: 1.45;
    }
    .spec-label {
      font-weight: 700;
      color: var(--text);
      font-size: 0.825rem;
    }
    .spec-val {
      color: var(--text-muted);
    }
    .scheme-card-footer {
      border-top: 1px solid var(--border);
      padding-top: 1rem;
    }
    .btn-official-apply {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      background: #0284c7;
      color: #fff;
      padding: 0.7rem 1.25rem;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 700;
      text-decoration: none;
      transition: background-color 0.15s ease;
    }
    .btn-official-apply:hover {
      background: #0369a1;
      color: #fff;
    }
  </style>
</head>
<body>
  ${getHeader('..')}

  <!-- Breadcrumb -->
  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="../index.html">होम (Home)</a></li>
      <li><span>सरकारी योजनाएं (Government Schemes Directory)</span></li>
    </ul>
  </div>

  <!-- Hero Header -->
  <section class="scheme-hero">
    <div class="container">
      <span class="badge-official">🏛️ भारत सरकार व राज्य सरकार जन-कल्याण योजनाएं</span>
      <h1>सरकारी योजनाएं (Central & State Schemes)</h1>
      <p>
        केंद्र सरकार एवं भारत के सभी 28 राज्यों व केंद्र शासित प्रदेशों की वित्तीय सहायता, छात्रवृत्ति, पेंशन व सब्सिडी योजनाएं। आधिकारिक पात्रता, आवश्यक दस्तावेज व मूल सरकारी पोर्टल पर ऑनलाइन आवेदन लिंक।
      </p>

      <!-- Search and State Filter Tabs -->
      <div class="scheme-filter-section">
        <div class="search-input-box" style="margin: 0 auto;">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input 
            type="text" 
            id="scheme-search-input" 
            placeholder="योजना का नाम या राज्य खोजें (उदा. PM Kisan, लाड़ली बहना, कन्या सुमंगला, स्टूडेंट क्रेडिट कार्ड)..." 
            aria-label="Search Schemes"
            autocomplete="off"
          />
        </div>

        <div class="state-filter-tabs">
          <button class="state-btn active" data-state="all">सभी योजनाएं (All)</button>
          <button class="state-btn" data-state="central">केंद्र सरकार (Central)</button>
          <button class="state-btn" data-state="up">उत्तर प्रदेश (UP)</button>
          <button class="state-btn" data-state="bihar">बिहार (Bihar)</button>
          <button class="state-btn" data-state="mp">मध्य प्रदेश (MP)</button>
          <button class="state-btn" data-state="rajasthan">राजस्थान (Rajasthan)</button>
          <button class="state-btn" data-state="maharashtra">महाराष्ट्र (Maharashtra)</button>
          <button class="state-btn" data-state="delhi">दिल्ली (Delhi)</button>
          <button class="state-btn" data-state="gujarat">गुजरात (Gujarat)</button>
          <button class="state-btn" data-state="karnataka">कर्नाटक (Karnataka)</button>
          <button class="state-btn" data-state="west-bengal">पश्चिम बंगाल (WB)</button>
          <button class="state-btn" data-state="tamil-nadu">तमिलनाडु (TN)</button>
          <button class="state-btn" data-state="odisha">ओडिशा (Odisha)</button>
          <button class="state-btn" data-state="chhattisgarh">छत्तीसगढ़ (CG)</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Schemes Listing -->
  <main class="container">
    <div class="schemes-list-container" id="schemes-list">
      ${schemesCardsHTML}
    </div>
  </main>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('scheme-search-input');
      const stateBtns = document.querySelectorAll('.state-btn');
      const schemeItems = document.querySelectorAll('.scheme-card-item');

      let currentState = 'all';
      let currentQuery = '';

      function filterSchemes() {
        schemeItems.forEach(item => {
          const itemState = item.getAttribute('data-state');
          const searchContent = item.getAttribute('data-search') || '';

          const stateMatch = (currentState === 'all' || itemState === currentState);
          const queryMatch = (!currentQuery || searchContent.includes(currentQuery));

          if (stateMatch && queryMatch) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentQuery = e.target.value.trim().toLowerCase();
          filterSchemes();
        });
      }

      stateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          stateBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentState = btn.getAttribute('data-state');
          filterSchemes();
        });
      });
    });
  </script>

  ${getFooter('..')}
  ${getScripts('..')}
</body>
</html>`;
}

// Generate the government/index.html file
const html = buildGovernmentHubHTML();
writeFile('government/index.html', html);
console.log('Successfully generated government/index.html with State-wise and Central Schemes');
