import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';

export function buildCalculatorsHubHTML() {
  // Comprehensive list of 105 EMI & Financial Calculator Varieties
  const calculators = [
    // --- 1. HOME LOAN VARIETIES (15) ---
    {
      id: "calc-home-regular",
      category: "home",
      catName: "होम लोन",
      name: "नियमित होम लोन ईएमआई (Regular Home Loan EMI)",
      amount: 4000000,
      rate: 8.50,
      tenureMonths: 240,
      desc: "मानक आवासीय संपत्ति खरीद हेतु 20 वर्ष की अवधि के लिए होम लोन ईएमआई गणना।"
    },
    {
      id: "calc-home-sbi",
      category: "home",
      catName: "होम लोन",
      name: "एसबीआई होम लोन ईएमआई (SBI Home Loan EMI)",
      amount: 5000000,
      rate: 8.40,
      tenureMonths: 300,
      desc: "स्टेट बैंक ऑफ इंडिया (SBI) की न्यूनतम 8.40% फ्लोटिंग ब्याज दर पर 25 वर्ष की ईएमआई।"
    },
    {
      id: "calc-home-hdfc",
      category: "home",
      catName: "होम लोन",
      name: "एचडीएफसी होम लोन ईएमआई (HDFC Bank Home Loan)",
      amount: 6000000,
      rate: 8.60,
      tenureMonths: 240,
      desc: "एचडीएफसी बैंक रिटेल हाउसिंग फाइनेंस के मानक स्लैब पर आधारित सटीक किस्त।"
    },
    {
      id: "calc-home-pmay",
      category: "home",
      catName: "होम लोन",
      name: "पीएम आवास योजना ब्याज सब्सिडी ईएमआई (PMAY Subsidy Home Loan)",
      amount: 2500000,
      rate: 6.50,
      tenureMonths: 240,
      desc: "PMAY क्रेडिट लिंक्ड सब्सिडी (CLSS) के प्रभावी ब्याज लाभ के साथ रियायती ईएमआई।"
    },
    {
      id: "calc-home-stepup",
      category: "home",
      catName: "होम लोन",
      name: "स्टेप-अप होम लोन ईएमआई (Step-Up Flexible EMI)",
      amount: 3500000,
      rate: 8.75,
      tenureMonths: 240,
      desc: "युवा पेशेवरों के लिए शुरुआती वर्षों में कम किस्त और बाद में वेतन वृद्धि के साथ बढ़ती ईएमआई।"
    },
    {
      id: "calc-home-plot-construction",
      category: "home",
      catName: "होम लोन",
      name: "प्लॉट खरीद व मकान निर्माण लोन (Plot + Construction Loan)",
      amount: 4500000,
      rate: 8.85,
      tenureMonths: 180,
      desc: "जमीन खरीद कर स्वयं का मकान बनवाने हेतु चरणबद्ध वितरण व निर्माण ईएमआई।"
    },
    {
      id: "calc-home-renovation",
      category: "home",
      catName: "होम लोन",
      name: "घर नवीनीकरण व विस्तार लोन (Home Renovation / Improvement)",
      amount: 1000000,
      rate: 9.15,
      tenureMonths: 84,
      desc: "पुराने घर में अतिरिक्त कमरा, पेंटिंग या इंटीरियर कार्य हेतु 7 वर्ष की ईएमआई।"
    },
    {
      id: "calc-home-nri",
      category: "home",
      catName: "होम लोन",
      name: "एनआरआई होम लोन ईएमआई (NRI Home Loan EMI)",
      amount: 8000000,
      rate: 8.70,
      tenureMonths: 180,
      desc: "प्रवासी भारतीयों (NRI) द्वारा भारत में रियल एस्टेट निवेश व मकान खरीद हेतु ईएमआई।"
    },
    {
      id: "calc-home-topup",
      category: "home",
      catName: "होम लोन",
      name: "होम लोन टॉप-अप ईएमआई (Home Loan Top-Up EMI)",
      amount: 1500000,
      rate: 8.95,
      tenureMonths: 120,
      desc: "मौजूदा होम लोन पर सस्ती दरों पर अतिरिक्त नकदी प्राप्त करने हेतु टॉप-अप किस्त।"
    },
    {
      id: "calc-home-balance-transfer",
      category: "home",
      catName: "होम लोन",
      name: "होम लोन बैलेंस ट्रांसफर (Home Loan Balance Transfer)",
      amount: 4200000,
      rate: 8.35,
      tenureMonths: 216,
      desc: "दूसरे बैंक में कम ब्याज दर पर लोन ट्रांसफर करके ब्याज बचत की गणना।"
    },
    {
      id: "calc-home-women",
      category: "home",
      catName: "होम लोन",
      name: "महिला सह-आवेदक छूट होम लोन (Women Concession Home Loan)",
      amount: 5500000,
      rate: 8.45,
      tenureMonths: 240,
      desc: "महिला गृहस्वामी को मिलने वाली 0.05% (5 bps) ब्याज छूट के साथ ईएमआई।"
    },
    {
      id: "calc-home-rural",
      category: "home",
      catName: "होम लोन",
      name: "ग्रामीण आवास विकास लोन (Rural Housing / Gramin Awas EMI)",
      amount: 1200000,
      rate: 8.65,
      tenureMonths: 180,
      desc: "कस्बों और ग्रामीण क्षेत्रों में पक्का मकान निर्माण हेतु कम राशि का किफायती लोन।"
    },
    {
      id: "calc-home-joint",
      category: "home",
      catName: "होम लोन",
      name: "संयुक्त आवेदक होम लोन (Joint Borrower Home Loan EMI)",
      amount: 7500000,
      rate: 8.50,
      tenureMonths: 300,
      desc: "पति-पत्नी या पिता-पुत्र की संयुक्त आय पर बड़ी लोन पात्रता की मासिक किस्त।"
    },
    {
      id: "calc-home-pre-emi",
      category: "home",
      catName: "होम लोन",
      name: "प्री-ईएमआई अंडर-कंस्ट्रक्शन फ्लैट (Pre-EMI Interest Calculator)",
      amount: 3000000,
      rate: 8.60,
      tenureMonths: 36,
      desc: "बिल्डर द्वारा पजेशन मिलने तक केवल सरल ब्याज (Simple Interest) भुगतान गणना।"
    },
    {
      id: "calc-home-30yr",
      category: "home",
      catName: "होम लोन",
      name: "30-वर्षीय दीर्घकालिक होम लोन ईएमआई (30-Year Ultra Long Home Loan)",
      amount: 6500000,
      rate: 8.75,
      tenureMonths: 360,
      desc: "अधिकतम 30 वर्ष (360 महीने) की अवधि में न्यूनतम मासिक भार की गणना।"
    },

    // --- 2. VEHICLE & AUTO LOANS (12) ---
    {
      id: "calc-car-new",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "नई कार लोन ईएमआई (New Car Loan EMI)",
      amount: 800000,
      rate: 8.85,
      tenureMonths: 84,
      desc: "नई गाड़ी की ऑन-रोड कीमत पर 7 वर्ष (84 महीने) की मानक कार लोन ईएमआई।"
    },
    {
      id: "calc-car-used",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "पुरानी / यूज्ड कार लोन ईएमआई (Pre-Owned / Used Car Loan)",
      amount: 450000,
      rate: 12.50,
      tenureMonths: 60,
      desc: "प्रमाणित सेकंड-हैंड कार खरीदने हेतु 5 वर्ष की अवधि पर किस्त गणना।"
    },
    {
      id: "calc-car-ev",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "इलेक्ट्रिक वाहन (EV) ग्रीन कार लोन ईएमआई (Electric Vehicle Green Loan)",
      amount: 1400000,
      rate: 8.60,
      tenureMonths: 84,
      desc: "पर्यावरण अनुकूल इलेक्ट्रिक कार पर 0.25% विशेष ग्रीन कंसेशन ब्याज दर।"
    },
    {
      id: "calc-bike-two-wheeler",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "टू-व्हीलर व बाइक लोन ईएमआई (Two-Wheeler / Motorcycle Loan)",
      amount: 120000,
      rate: 11.50,
      tenureMonths: 36,
      desc: "कम्यूटर मोटरसाइकिल व स्कूटी खरीद हेतु 3 वर्ष की आसान मासिक किस्त।"
    },
    {
      id: "calc-superbike",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "प्रीमियम सुपरबाइक लोन ईएमआई (Superbike & Cruiser Loan)",
      amount: 500000,
      rate: 10.25,
      tenureMonths: 48,
      desc: "रॉयल एनफील्ड, हार्ले या कावासाकी जैसी प्रीमियम स्पोर्ट्स बाइक्स हेतु किस्त।"
    },
    {
      id: "calc-commercial-vehicle",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "कमर्शियल व्हीकल (ट्रक/बस) लोन ईएमआई (Commercial Vehicle Truck/Bus)",
      amount: 2800000,
      rate: 9.75,
      tenureMonths: 60,
      desc: "ट्रांसपोर्ट व्यवसाय हेतु भारी मालवाहक व यात्री बसों के लिए ऋण किस्त।"
    },
    {
      id: "calc-tractor",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "ट्रैक्टर व कृषि उपकरण लोन (Tractor & Farm Equipment Loan)",
      amount: 650000,
      rate: 10.50,
      tenureMonths: 60,
      desc: "किसानों के लिए महिंद्रा/स्वराज ट्रैक्टर व कल्टीवेटर खरीद हेतु ईएमआई।"
    },
    {
      id: "calc-auto-rickshaw",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "ऑटो रिक्शा व 3-व्हीलर लोन (Auto Rickshaw & 3-Wheeler Loan)",
      amount: 250000,
      rate: 12.00,
      tenureMonths: 48,
      desc: "सीएनजी व ई-रिक्शा चालकों के लिए स्वरोजगार वाहन ऋण किस्त।"
    },
    {
      id: "calc-luxury-car",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "लग्जरी कार बैलून लोन (Luxury Car Balloon Payment Loan)",
      amount: 4500000,
      rate: 8.75,
      tenureMonths: 60,
      desc: "बीएमडब्ल्यू, मर्सिडीज या ऑडी हेतु अंतिम बड़ी बैलून किस्त के साथ सस्ती ईएमआई।"
    },
    {
      id: "calc-car-zero-downpayment",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "शून्य डाउन पेमेंट कार लोन (100% On-Road Funding Car Loan)",
      amount: 950000,
      rate: 9.25,
      tenureMonths: 84,
      desc: "बिना किसी अग्रिम डाउन पेमेंट के पूरी ऑन-रोड कीमत की 7 वर्ष की ईएमआई।"
    },
    {
      id: "calc-car-preclosure",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "कार लोन पार्ट-पेमेंट व प्री-क्लोजर (Car Loan Part-Payment Calculator)",
      amount: 600000,
      rate: 8.90,
      tenureMonths: 48,
      desc: "अवधि से पहले एकमुश्त भुगतान करने पर कुल ब्याज बचत की गणना।"
    },
    {
      id: "calc-fleet-cab",
      category: "vehicle",
      catName: "वाहन लोन",
      name: "ओला/उबर टैक्सी फ्लीट लोन (Cab / Taxi Commercial Fleet Loan)",
      amount: 700000,
      rate: 11.25,
      tenureMonths: 48,
      desc: "टैक्सी ऑपरेटरों व फ्लीट मालिकों हेतु वाणिज्यिक वाहन ऋण की ईएमआई।"
    },

    // --- 3. PERSONAL LOANS (14) ---
    {
      id: "calc-personal-salaried",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "वेतनभोगी कर्मचारी पर्सनल लोन (Salaried Employee Personal Loan)",
      amount: 500000,
      rate: 10.75,
      tenureMonths: 60,
      desc: "प्राइवेट व कॉर्पोरेट कर्मचारियों के लिए 5 वर्ष की अनसिक्योर्ड व्यक्तिगत ऋण किस्त।"
    },
    {
      id: "calc-personal-selfemployed",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "स्व-रोजगार पेशेवर पर्सनल लोन (Self-Employed Professional Loan)",
      amount: 750000,
      rate: 12.25,
      tenureMonths: 48,
      desc: "डॉक्टर, सीए व व्यापारियों के लिए आयकर रिटर्न के आधार पर पर्सनल लोन।"
    },
    {
      id: "calc-personal-instant",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "इंस्टेंट डिजिटल प्री-अप्रूव्ड लोन (Instant Pre-Approved Digital Loan)",
      amount: 300000,
      rate: 11.99,
      tenureMonths: 36,
      desc: "नेटबैंकिंग व मोबाइल ऐप द्वारा 10 सेकंड में स्वीकृत तुरंत पर्सनल लोन की ईएमआई।"
    },
    {
      id: "calc-personal-wedding",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "विवाह व शादी खर्च लोन (Wedding & Marriage Personal Loan)",
      amount: 600000,
      rate: 11.50,
      tenureMonths: 48,
      desc: "शादी-समारोह, आभूषण व कैटरिंग खर्चों के लिए 4 वर्ष की आसान किस्त।"
    },
    {
      id: "calc-personal-medical",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "आपातकालीन चिकित्सा लोन (Medical Emergency Healthcare Loan)",
      amount: 400000,
      rate: 10.99,
      tenureMonths: 36,
      desc: "अस्पताल भर्ती व सर्जरी के अप्रत्याशित खर्चों के तत्काल प्रबंधन हेतु ईएमआई।"
    },
    {
      id: "calc-personal-travel",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "यात्रा व वेकेशन हॉलिडे लोन (Travel & Vacation Holiday Loan)",
      amount: 250000,
      rate: 12.75,
      tenureMonths: 24,
      desc: "घरेलू व विदेश भ्रमण के हवाई टिकट व होटल पैकेज हेतु 2 वर्ष की किस्त।"
    },
    {
      id: "calc-personal-home-interior",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "होम फर्निशिंग व इंटीरियर लोन (Home Furnishing & Interior Loan)",
      amount: 350000,
      rate: 11.75,
      tenureMonths: 36,
      desc: "नए फ्लैट के मॉड्यूलर किचन, सोफा व इलेक्ट्रॉनिक्स सामान खरीदने हेतु लोन।"
    },
    {
      id: "calc-personal-debt-consolidation",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "कर्ज एकीकरण लोन (Debt Consolidation Personal Loan)",
      amount: 800000,
      rate: 10.50,
      tenureMonths: 60,
      desc: "क्रेडिट कार्ड के महंगे बकायों को एक सस्ते एकल पर्सनल लोन में बदलने की ईएमआई।"
    },
    {
      id: "calc-personal-govt-employee",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "सरकारी कर्मचारी विशेष पर्सनल लोन (Government Employee Concession)",
      amount: 700000,
      rate: 10.25,
      tenureMonths: 72,
      desc: "केंद्र व राज्य सरकार के कर्मचारियों को 6 वर्ष तक की लंबी अवधि का रियायती लोन।"
    },
    {
      id: "calc-personal-pensioner",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "पेंशनभोगी वरिष्ठ नागरिक लोन (Pensioners Personal Loan EMI)",
      amount: 300000,
      rate: 10.90,
      tenureMonths: 48,
      desc: "पेंशन खाते के आधार पर 75 वर्ष तक के वरिष्ठ नागरिकों हेतु कम ब्याज ईएमआई।"
    },
    {
      id: "calc-personal-micro",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "स्मॉल टिकट माइक्रो-पर्सनल लोन (Small Ticket Nano Personal Loan)",
      amount: 50000,
      rate: 14.00,
      tenureMonths: 12,
      desc: "1 वर्ष की छोटी अवधि के लिए तत्काल ₹50,000 की डिजिटल आपातकालीन किस्त।"
    },
    {
      id: "calc-personal-p2p",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "पीयर-टू-पीयर (P2P) लेंडिंग लोन (Peer-to-Peer FinTech Loan)",
      amount: 150000,
      rate: 13.50,
      tenureMonths: 18,
      desc: "फिनटेक एनबीएफसी-पी2पी प्लेटफॉर्म पर क्रेडिट स्कोर के आधार पर ऋण किस्त।"
    },
    {
      id: "calc-personal-overdraft",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "पर्सनल लोन ओवरड्राफ्ट ड्रॉपलाइन (Personal Overdraft Drop-line Facility)",
      amount: 500000,
      rate: 11.25,
      tenureMonths: 36,
      desc: "जितनी राशि उपयोग करें केवल उतने दिन का ब्याज चुकाने की ड्रॉपलाइन गणना।"
    },
    {
      id: "calc-personal-festive",
      category: "personal",
      catName: "पर्सनल लोन",
      name: "त्योहार ऑफर जीरो प्रोसेसिंग पर्सनल लोन (Festive Offer Zero Processing)",
      amount: 450000,
      rate: 10.65,
      tenureMonths: 48,
      desc: "दिवाली/नवरात्रि में बिना किसी प्रोसेसिंग फीस के न्यूनतम ब्याज दर पर ईएमआई।"
    },

    // --- 4. EDUCATION LOANS (10) ---
    {
      id: "calc-edu-domestic",
      category: "education",
      catName: "शिक्षा लोन",
      name: "घरेलू उच्च शिक्षा लोन ईएमआई (Domestic Higher Education Vidya Lakshmi)",
      amount: 750000,
      rate: 8.75,
      tenureMonths: 120,
      desc: "भारत के इंजीनियरिंग, मैनेजमेंट व यूनिवर्सिटी कोर्स हेतु 10 वर्ष की ईएमआई।"
    },
    {
      id: "calc-edu-abroad",
      category: "education",
      catName: "शिक्षा लोन",
      name: "विदेश अध्ययन ओवरसीज शिक्षा लोन (Study Abroad Overseas Education)",
      amount: 3500000,
      rate: 9.50,
      tenureMonths: 180,
      desc: "अमेरिका, यूके, कनाडा या जर्मनी में एमएस/एमबीए हेतु 15 वर्ष की अवधि का लोन।"
    },
    {
      id: "calc-edu-medical",
      category: "education",
      catName: "शिक्षा लोन",
      name: "एमबीबीएस व मेडिकल डिग्री लोन (Medical / MBBS Course Loan EMI)",
      amount: 4000000,
      rate: 8.95,
      tenureMonths: 180,
      desc: "मेडिकल कॉलेज की ट्यूशन फीस व हॉस्टल खर्च हेतु लंबी अवधि की किस्त।"
    },
    {
      id: "calc-edu-engineering",
      category: "education",
      catName: "शिक्षा लोन",
      name: "बी.टेक व तकनीकी शिक्षा लोन (B.Tech / Engineering Degree Loan)",
      amount: 1000000,
      rate: 9.15,
      tenureMonths: 120,
      desc: "आईआईटी, एनआईटी व निजी इंजीनियरिंग कॉलेजों के लिए 10 वर्ष की ईएमआई।"
    },
    {
      id: "calc-edu-mba",
      category: "education",
      catName: "शिक्षा लोन",
      name: "आईआईएम व प्रीमियर एमबीए लोन (IIM & Premier B-School MBA Loan)",
      amount: 2500000,
      rate: 8.40,
      tenureMonths: 144,
      desc: "देश के शीर्ष 20 प्रबंधन संस्थानों में बिना किसी बंधक (Collateral-Free) के लोन।"
    },
    {
      id: "calc-edu-vocational",
      category: "education",
      catName: "शिक्षा लोन",
      name: "कौशल विकास व वोकेशनल लोन (Skill Development & Vocational Loan)",
      amount: 200000,
      rate: 9.85,
      tenureMonths: 48,
      desc: "पायलट ट्रेनिंग, मरीन या डिजाइनिंग डिप्लोमा कोर्स हेतु 4 वर्ष की किस्त।"
    },
    {
      id: "calc-edu-csis-subsidy",
      category: "education",
      catName: "शिक्षा लोन",
      name: "केंद्रीय ब्याज सब्सिडी शिक्षा लोन (CSIS Subsidy Education Loan)",
      amount: 600000,
      rate: 8.65,
      tenureMonths: 120,
      desc: "आर्थिक रूप से कमजोर वर्ग (ईडब्ल्यूएस) के छात्रों के लिए मॉरेटोरियम ब्याज माफी।"
    },
    {
      id: "calc-edu-moratorium",
      category: "education",
      catName: "शिक्षा लोन",
      name: "मॉरेटोरियम पीरियड पुनर्भुगतान ईएमआई (Course + Moratorium Repayment)",
      amount: 1200000,
      rate: 9.25,
      tenureMonths: 120,
      desc: "पढ़ाई पूरी होने + 1 वर्ष नौकरी तलाश अवधि के बाद शुरू होने वाली वास्तविक किस्त।"
    },
    {
      id: "calc-edu-collateral-free",
      category: "education",
      catName: "शिक्षा लोन",
      name: "₹7.5 लाख तक बिना गारंटी शिक्षा लोन (₹7.5L Collateral-Free Vidya Lakshmi)",
      amount: 750000,
      rate: 9.00,
      tenureMonths: 120,
      desc: "बिना किसी जमीन या मकान गिरवी रखे सीएजी/क्रेडिट गारंटी फंड के तहत ऋण।"
    },
    {
      id: "calc-edu-girl-child",
      category: "education",
      catName: "शिक्षा लोन",
      name: "छात्रा विशेष 0.5% ब्याज छूट लोन (Girl Student 0.5% Concession Loan)",
      amount: 1500000,
      rate: 8.70,
      tenureMonths: 120,
      desc: "बैंकों द्वारा बालिकाओं की उच्च शिक्षा हेतु 0.50% की विशेष ब्याज छूट के साथ ईएमआई।"
    },

    // --- 5. BUSINESS & MSME LOANS (14) ---
    {
      id: "calc-mudra-shishu",
      category: "business",
      catName: "व्यापार / MSME",
      name: "पीएम मुद्रा शिशु लोन ईएमआई (PM Mudra Shishu - up to ₹50,000)",
      amount: 50000,
      rate: 9.50,
      tenureMonths: 36,
      desc: "छोटे फेरीवालों व दुकानदारों हेतु 3 वर्ष की आसान किस्त।"
    },
    {
      id: "calc-mudra-kishore",
      category: "business",
      catName: "व्यापार / MSME",
      name: "पीएम मुद्रा किशोर लोन ईएमआई (PM Mudra Kishore - ₹50K to ₹5L)",
      amount: 400000,
      rate: 10.25,
      tenureMonths: 48,
      desc: "दुकान विस्तार व इन्वेंटरी स्टॉक हेतु 4 वर्ष की बिना गारंटी ईएमआई।"
    },
    {
      id: "calc-mudra-tarun",
      category: "business",
      catName: "व्यापार / MSME",
      name: "पीएम मुद्रा तरुण लोन ईएमआई (PM Mudra Tarun - ₹5L to ₹10L)",
      amount: 900000,
      rate: 10.75,
      tenureMonths: 60,
      desc: "स्थापित कारोबारियों के लिए कार्यशील पूंजी व नए उपकरणों हेतु 5 वर्ष की किस्त।"
    },
    {
      id: "calc-standup-india",
      category: "business",
      catName: "व्यापार / MSME",
      name: "स्टैंड-अप इंडिया लोन ईएमआई (Stand-Up India SC/ST & Women)",
      amount: 4500000,
      rate: 9.25,
      tenureMonths: 84,
      desc: "महिला व अनुसूचित जाति/जनजाति उद्यमियों के ग्रीनफील्ड प्रोजेक्ट हेतु ऋण।"
    },
    {
      id: "calc-cgtmse-msme",
      category: "business",
      catName: "व्यापार / MSME",
      name: "सीजीटीएमएसई कोलैटरल-फ्री लोन (CGTMSE Collateral-Free up to ₹5 Cr)",
      amount: 5000000,
      rate: 9.85,
      tenureMonths: 84,
      desc: "सरकारी क्रेडिट गारंटी ट्रस्ट योजना के तहत मध्यम विनिर्माण इकाई हेतु ईएमआई।"
    },
    {
      id: "calc-msme-working-capital",
      category: "business",
      catName: "व्यापार / MSME",
      name: "कार्यशील पूंजी टर्म लोन (Working Capital Business Term Loan)",
      amount: 2500000,
      rate: 10.50,
      tenureMonths: 60,
      desc: "कच्चा माल खरीद, वेतन भुगतान व दैनिक परिचालन के लिए 5 वर्ष की ईएमआई।"
    },
    {
      id: "calc-machinery-loan",
      category: "business",
      catName: "व्यापार / MSME",
      name: "मशीनरी व उपकरण खरीद लोन (Machinery & Equipment Finance)",
      amount: 3000000,
      rate: 9.75,
      tenureMonths: 60,
      desc: "सीएनसी मशीन, प्रिंटिंग प्रेस व कारखाने के टूल्स खरीदने हेतु ऋण किस्त।"
    },
    {
      id: "calc-doctor-practice",
      category: "business",
      catName: "व्यापार / MSME",
      name: "डॉक्टर क्लिनिक व डायग्नोस्टिक सेटअप लोन (Doctor Clinic Setup Loan)",
      amount: 3500000,
      rate: 9.40,
      tenureMonths: 72,
      desc: "डॉक्टरों द्वारा नया क्लिनिक, अल्ट्रासाउंड या लैब उपकरण लगाने हेतु किस्त।"
    },
    {
      id: "calc-retail-merchant",
      category: "business",
      catName: "व्यापार / MSME",
      name: "दुकानदार मर्चेंट पीओएस स्वाइप लोन (POS Swipe / QR Merchant Loan)",
      amount: 300000,
      rate: 13.50,
      tenureMonths: 24,
      desc: "डेली क्यूआर कोड और कार्ड स्वाइप मशीन टर्नओवर के आधार पर ऋण।"
    },
    {
      id: "calc-invoice-discounting",
      category: "business",
      catName: "व्यापार / MSME",
      name: "इनवॉइस डिस्काउंटिंग बिल फाइनेंसिंग (Invoice / Bill Discounting)",
      amount: 1500000,
      rate: 9.90,
      tenureMonths: 12,
      desc: "बड़ी कंपनियों को जारी बिलों के बदले 90-180 दिन के लिए कार्यशील नकदी।"
    },
    {
      id: "calc-startup-expansion",
      category: "business",
      catName: "व्यापार / MSME",
      name: "स्टार्टअप स्केल-अप कैपिटल लोन (Startup Growth Term Loan)",
      amount: 7500000,
      rate: 10.50,
      tenureMonths: 60,
      desc: "डीपीआईआईटी पंजीकृत नए इनोवेटिव स्टार्टअप्स हेतु विस्तार पूंजी ईएमआई।"
    },
    {
      id: "calc-warehouse-construction",
      category: "business",
      catName: "व्यापार / MSME",
      name: "गोदाम व कोल्ड स्टोरेज निर्माण लोन (Warehouse & Cold Storage Loan)",
      amount: 6000000,
      rate: 9.15,
      tenureMonths: 120,
      desc: "कृषि उत्पादों के भंडारण हेतु 10 वर्ष की लंबी अवधि का अवसंरचना लोन।"
    },
    {
      id: "calc-export-credit",
      category: "business",
      catName: "व्यापार / MSME",
      name: "निर्यात पूर्व व पश्चात पैकिंग क्रेडिट (Export Pre-Shipment Packing Credit)",
      amount: 4000000,
      rate: 8.85,
      tenureMonths: 12,
      desc: "विदेशी खरीदारों के आर्डर पूरे करने हेतु निर्यातकों के लिए रियायती ऋण।"
    },
    {
      id: "calc-franchise-setup",
      category: "business",
      catName: "व्यापार / MSME",
      name: "फ्रैंचाइज़ी बिजनेस सेटअप लोन (Franchise Business Setup Loan)",
      amount: 2000000,
      rate: 11.00,
      tenureMonths: 48,
      desc: "लोकप्रिय ब्रांड्स (फूड, रिटेल, सैलून) की फ्रेंचाइजी खोलने हेतु पूंजी।"
    },

    // --- 6. GOLD & PROPERTY COLLATERAL LOANS (10) ---
    {
      id: "calc-gold-regular",
      category: "collateral",
      catName: "गोल्ड व प्रॉपर्टी",
      name: "सोने के आभूषण पर गोल्ड लोन ईएमआई (Gold Jewellery Loan Monthly EMI)",
      amount: 300000,
      rate: 9.25,
      tenureMonths: 24,
      desc: "सोने के गहनों के 75% मूल्यांकन पर 2 वर्ष की आसान मासिक किस्त।"
    },
    {
      id: "calc-gold-agri",
      category: "collateral",
      catName: "गोल्ड व प्रॉपर्टी",
      name: "कृषि प्रयोजन गोल्ड लोन 7% ब्याज (Agricultural Gold Loan 7% p.a.)",
      amount: 250000,
      rate: 7.00,
      tenureMonths: 12,
      desc: "किसानों द्वारा बीज व खाद हेतु गिरवी रखे सोने पर सरकारी 7% रियायती ब्याज।"
    },
    {
      id: "calc-gold-bullet",
      category: "collateral",
      catName: "गोल्ड व प्रॉपर्टी",
      name: "बुलेट रीपेमेंट गोल्ड लोन (Gold Loan Bullet Repayment)",
      amount: 200000,
      rate: 9.50,
      tenureMonths: 12,
      desc: "बिना किसी मासिक ईएमआई के अंत में एक साथ मूलधन व ब्याज का भुगतान।"
    },
    {
      id: "calc-lap-residential",
      category: "collateral",
      catName: "गोल्ड व प्रॉपर्टी",
      name: "मकान बंधक लोन अगेंस्ट प्रॉपर्टी (Loan Against Residential Property - LAP)",
      amount: 3500000,
      rate: 9.65,
      tenureMonths: 180,
      desc: "अपने आवासीय मकान को गिरवी रखकर व्यापार या पारिवारिक जरूरतों हेतु 15 वर्ष का लोन।"
    },
    {
      id: "calc-lap-commercial",
      category: "collateral",
      catName: "गोल्ड व प्रॉपर्टी",
      name: "दुकान/ऑफिस बंधक लोन (Commercial Property LAP)",
      amount: 5000000,
      rate: 10.25,
      tenureMonths: 120,
      desc: "व्यावसायिक दुकान या शोरूम के मूल्यांकन के 60% तक 10 वर्ष की ईएमआई।"
    },
    {
      id: "calc-lap-industrial",
      category: "collateral",
      catName: "गोल्ड व प्रॉपर्टी",
      name: "औद्योगिक प्लॉट व शेड बंधक लोन (Industrial Plot & Factory LAP)",
      amount: 8000000,
      rate: 10.50,
      tenureMonths: 120,
      desc: "कारखाने की जमीन व शेड पर बड़ी पूंजी विस्तार हेतु ऋण किस्त।"
    },
    {
      id: "calc-lrd-lease",
      category: "collateral",
      catName: "गोल्ड व प्रॉपर्टी",
      name: "लीज रेंटल डिस्काउंटिंग (Lease Rental Discounting - LRD)",
      amount: 10000000,
      rate: 9.10,
      tenureMonths: 120,
      desc: "बैंक या कॉर्पोरेट को किराए पर दी गई संपत्ति के भविष्य के किराए पर अग्रिम लोन।"
    },
    {
      id: "calc-las-shares",
      category: "collateral",
      catName: "गोल्ड व प्रॉपर्टी",
      name: "शेयर व म्यूचुअल फंड बंधक लोन (Loan Against Shares & Mutual Funds)",
      amount: 500000,
      rate: 9.75,
      tenureMonths: 36,
      desc: "अपने निवेश पोर्टफोलियो को बेचे बिना तात्कालिक नकदी हासिल करने की सुविधा।"
    },
    {
      id: "calc-fd-overdraft",
      category: "collateral",
      catName: "गोल्ड व प्रॉपर्टी",
      name: "बैंक एफडी पर लोन / ओवरड्राफ्ट (Overdraft Against Fixed Deposit)",
      amount: 400000,
      rate: 8.25,
      tenureMonths: 24,
      desc: "FD ब्याज से केवल 1% अधिक दर पर बिना एफडी तोड़े तुरंत आपातकालीन ऋण।"
    },
    {
      id: "calc-property-purchase",
      category: "collateral",
      catName: "गोल्ड व प्रॉपर्टी",
      name: "कमर्शियल प्रॉपर्टी परचेज लोन (Commercial Office/Shop Purchase Loan)",
      amount: 6000000,
      rate: 9.50,
      tenureMonths: 180,
      desc: "नया व्यावसायिक दफ्तर या दुकान खरीदने हेतु 15 वर्ष की मासिक किस्त।"
    },

    // --- 7. KISAN & AGRICULTURE LOANS (8) ---
    {
      id: "calc-kcc-crop",
      category: "agri",
      catName: "किसान व कृषि",
      name: "किसान क्रेडिट कार्ड (Kisan Credit Card - KCC 4% Net Rate)",
      amount: 300000,
      rate: 4.00,
      tenureMonths: 12,
      desc: "समय पर पुनर्भुगतान करने पर 3% सरकारी ब्याज सबवेंशन सहित मात्र 4% प्रभावी वार्षिक ब्याज।"
    },
    {
      id: "calc-solar-pump",
      category: "agri",
      catName: "किसान व कृषि",
      name: "पीएम कुसुम सोलर पंप कृषि लोन (PM Kusum Solar Pump Agri Loan)",
      amount: 180000,
      rate: 8.50,
      tenureMonths: 60,
      desc: "खेतों में सिंचाई हेतु 60% सरकारी सब्सिडी के बाद शेष 30% किसान अंशदान का ऋण।"
    },
    {
      id: "calc-dairy-farming",
      category: "agri",
      catName: "किसान व कृषि",
      name: "डेयरी फार्मिंग व पशुपालन लोन (Dairy Farming & Cattle Loan)",
      amount: 500000,
      rate: 8.75,
      tenureMonths: 60,
      desc: "दुधारू गाय-भैंस खरीदने व शेड निर्माण हेतु नाबार्ड सब्सिडी समर्थित ऋण।"
    },
    {
      id: "calc-poultry-farm",
      category: "agri",
      catName: "किसान व कृषि",
      name: "पोल्ट्री फार्मिंग व्यवसाय लोन (Poultry & Broiler Farming Loan)",
      amount: 800000,
      rate: 9.25,
      tenureMonths: 60,
      desc: "लेयर व ब्रायलर पोल्ट्री शेड व ऑटोमैटिक फीडर लगाने हेतु 5 वर्ष की ईएमआई।"
    },
    {
      id: "calc-fisheries-aquaculture",
      category: "agri",
      catName: "किसान व कृषि",
      name: "मत्स्य पालन व तालाब निर्माण लोन (Fisheries & Aquaculture PMMSY)",
      amount: 700000,
      rate: 8.90,
      tenureMonths: 60,
      desc: "प्रधानमंत्री मत्स्य संपदा योजना (PMMSY) के तहत बायोफ्लॉक व तालाब निर्माण लोन।"
    },
    {
      id: "calc-harvester-combine",
      category: "agri",
      catName: "किसान व कृषि",
      name: "कंबाइन हार्वेस्टर खरीद लोन (Combine Harvester Machine Loan)",
      amount: 2200000,
      rate: 9.80,
      tenureMonths: 60,
      desc: "फसल कटाई के आधुनिक कंबाइन हार्वेस्टर खरीदने हेतु व्यावसायिक कृषि लोन।"
    },
    {
      id: "calc-horticulture-orchard",
      category: "agri",
      catName: "किसान व कृषि",
      name: "बागवानी व फलदार वृक्षारोपण लोन (Horticulture & Orchard Plantation)",
      amount: 400000,
      rate: 8.65,
      tenureMonths: 84,
      desc: "आम, सेब या अमरूद के बाग लगाने हेतु 7 वर्ष की दीर्घकालिक कृषि किस्त।"
    },
    {
      id: "calc-acabc-agri-clinic",
      category: "agri",
      catName: "किसान व कृषि",
      name: "एग्री-क्लिनिक व एग्री-बिजनेस सेंटर (ACABC Agri-Clinic Loan)",
      amount: 2000000,
      rate: 9.00,
      tenureMonths: 84,
      desc: "कृषि स्नातकों द्वारा मिट्टी परीक्षण व कृषि परामर्श केंद्र खोलने हेतु ऋण।"
    },

    // --- 8. PREPAYMENT & COMPARISON (10) ---
    {
      id: "calc-prepay-stepup",
      category: "prepay",
      catName: "प्रीपेमेंट व बचत",
      name: "वार्षिक 5% स्टेप-अप प्रीपेमेंट प्रभाव (5% Annual Step-Up Prepayment)",
      amount: 4000000,
      rate: 8.50,
      tenureMonths: 240,
      desc: "हर साल ईएमआई 5% बढ़ाकर 20 वर्ष के लोन को मात्र 12 वर्ष में समाप्त करने की गणना।"
    },
    {
      id: "calc-prepay-extra-emi",
      category: "prepay",
      catName: "प्रीपेमेंट व बचत",
      name: "प्रति वर्ष 1 अतिरिक्त ईएमआई बचत (1 Extra EMI Per Year Savings)",
      amount: 3500000,
      rate: 8.60,
      tenureMonths: 240,
      desc: "साल में 12 की जगह 13 किश्तें चुकाकर लाखों रुपये का ब्याज बचाने की सटीक गणना।"
    },
    {
      id: "calc-prepay-lumpsum",
      category: "prepay",
      catName: "प्रीपेमेंट व बचत",
      name: "एकमुश्त पार्ट-पेमेंट प्रभाव (Lump-Sum Part Payment Impact)",
      amount: 5000000,
      rate: 8.50,
      tenureMonths: 240,
      desc: "बोनस या बचत से ₹5 लाख जमा करने पर लोन अवधि में होने वाली भारी कमी।"
    },
    {
      id: "calc-tenor-vs-emi",
      category: "prepay",
      catName: "प्रीपेमेंट व बचत",
      name: "लोन अवधि कमी बनाम ईएमआई कटौती (Tenure Reduction vs EMI Lowering)",
      amount: 4500000,
      rate: 8.75,
      tenureMonths: 240,
      desc: "पार्ट पेमेंट के बाद ईएमआई कम करें या लोन की अवधि - दोनों विकल्पों की तुलना।"
    },
    {
      id: "calc-flat-vs-reducing",
      category: "prepay",
      catName: "प्रीपेमेंट व बचत",
      name: "फ्लैट बनाम रिड्यूसिंग बैलेंस ब्याज (Flat vs Reducing Balance Rate)",
      amount: 500000,
      rate: 12.00,
      tenureMonths: 60,
      desc: "डीलरों द्वारा बताई गई 7% फ्लैट दर का वास्तविक 13% रिड्यूसिंग दर में अंतर।"
    },
    {
      id: "calc-balance-transfer-savings",
      category: "prepay",
      catName: "प्रीपेमेंट व बचत",
      name: "बैलेंस ट्रांसफर शुद्ध लाभ कैलकुलेटर (Balance Transfer Net Benefit)",
      amount: 4000000,
      rate: 8.90,
      tenureMonths: 180,
      desc: "प्रोसेसिंग शुल्क काटने के बाद दूसरे बैंक में लोन ले जाने पर वास्तविक शुद्ध बचत।"
    },
    {
      id: "calc-fixed-vs-floating",
      category: "prepay",
      catName: "प्रीपेमेंट व बचत",
      name: "फिक्स्ड बनाम फ्लोटिंग ब्याज तुलना (Fixed vs Floating Rate Comparison)",
      amount: 3500000,
      rate: 8.50,
      tenureMonths: 240,
      desc: "आरबीआई रेपो रेट बढ़ने या घटने पर मासिक किस्तों में होने वाले उतार-चढ़ाव की जांच।"
    },
    {
      id: "calc-daily-vs-monthly",
      category: "prepay",
      catName: "प्रीपेमेंट व बचत",
      name: "दैनिक घटती शेष ब्याज गणना (Daily Reducing Balance EMI Engine)",
      amount: 3000000,
      rate: 8.40,
      tenureMonths: 180,
      desc: "बैंकों में दैनिक आधार पर लगने वाले सटीक ब्याज की पारदर्शी गणना।"
    },
    {
      id: "calc-preclosure-penalty",
      category: "prepay",
      catName: "प्रीपेमेंट व बचत",
      name: "प्री-क्लोजर पेनल्टी बनाम बचत (Pre-closure Penalty vs Interest Saved)",
      amount: 800000,
      rate: 11.50,
      tenureMonths: 36,
      desc: "पर्सनल लोन जल्दी बंद करने पर 3% फोरक्लोजर चार्ज के बाद भी लाभ की गणना।"
    },
    {
      id: "calc-loan-affordability",
      category: "prepay",
      catName: "प्रीपेमेंट व बचत",
      name: "वेतन अनुसार अधिकतम लोन पात्रता (Salary vs Max Loan Affordability)",
      amount: 4800000,
      rate: 8.50,
      tenureMonths: 240,
      desc: "50% FOIR (नियम) के तहत आपके मासिक वेतन पर बैंक कितना अधिकतम लोन देगा।"
    },

    // --- 9. SAVINGS, SIP & WEALTH (12) ---
    {
      id: "calc-sip-regular",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "म्यूचुअल फंड एसआईपी कैलकुलेटर (Mutual Fund Regular Monthly SIP)",
      amount: 10000,
      rate: 12.00,
      tenureMonths: 120,
      desc: "हर महीने ₹10,000 के अनुशासित निवेश से 10 वर्ष में संभावित ₹23.23 लाख का फंड।"
    },
    {
      id: "calc-sip-stepup",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "स्टेप-अप एसआईपी कैलकुलेटर (Step-Up SIP Wealth Compounding)",
      amount: 5000,
      rate: 12.50,
      tenureMonths: 180,
      desc: "प्रति वर्ष निवेश में 10% की वृद्धि करने पर 15 वर्षों में बनने वाला विशाल वेल्थ फंड।"
    },
    {
      id: "calc-lumpsum-mf",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "एकमुश्त म्यूचुअल फंड निवेश (Lump-Sum Mutual Fund Growth)",
      amount: 500000,
      rate: 12.00,
      tenureMonths: 120,
      desc: "एक बार ₹5,00,000 जमा करके 10 वर्ष में ₹15.52 लाख बनने का चक्रवृद्धि चक्र।"
    },
    {
      id: "calc-bank-fd",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "बैंक फिक्स्ड डिपॉजिट (FD) मैच्योरिटी (Fixed Deposit Maturity Calculator)",
      amount: 200000,
      rate: 7.25,
      tenureMonths: 36,
      desc: "त्रैमासिक चक्रवृद्धि (Quarterly Compounding) ब्याज के साथ 3 वर्ष की कुल परिपक्वता राशि।"
    },
    {
      id: "calc-bank-rd",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "रिकरिंग डिपॉजिट (RD) मासिक बचत (Recurring Deposit Maturity Value)",
      amount: 5000,
      rate: 7.00,
      tenureMonths: 60,
      desc: "हर महीने ₹5,000 डाकघर या बैंक आरडी में 5 वर्ष जमा करने पर कुल रिटर्न।"
    },
    {
      id: "calc-ppf",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "पब्लिक प्रॉविडेंट फंड 15 वर्ष (Public Provident Fund - PPF 7.1% EEE)",
      amount: 12500,
      rate: 7.10,
      tenureMonths: 180,
      desc: "वार्षिक ₹1.5 लाख जमा करके 15 वर्ष बाद ₹40.68 लाख का 100% टैक्स-फ्री फंड।"
    },
    {
      id: "calc-ssy-growth",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "सुकन्या समृद्धि योजना परिपक्वता (Sukanya Samriddhi 8.2% Maturity)",
      amount: 10000,
      rate: 8.20,
      tenureMonths: 180,
      desc: "बेटी की पढ़ाई व विवाह हेतु 8.2% की उच्चतम सरकारी ब्याज दर पर चक्रवृद्धि लाभ।"
    },
    {
      id: "calc-nps-pension",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "नेशनल पेंशन सिस्टम (NPS Monthly Pension & 60% Corpus Payout)",
      amount: 5000,
      rate: 10.00,
      tenureMonths: 300,
      desc: "सेवानिवृत्ति पर 60% एकमुश्त कर-मुक्त फंड + 40% एन्युइटी से आजीवन मासिक पेंशन।"
    },
    {
      id: "calc-apy-table",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "अटल पेंशन योजना मासिक अंशदान (APY Contribution & ₹5,000 Pension)",
      amount: 210,
      rate: 8.00,
      tenureMonths: 504,
      desc: "18 वर्ष की आयु में मात्र ₹210 प्रति माह जमा करके 60 वर्ष बाद ₹5,000/माह पक्की पेंशन।"
    },
    {
      id: "calc-pomis-income",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "डाकघर मासिक आय योजना (Post Office MIS Monthly Cash Flow)",
      amount: 900000,
      rate: 7.40,
      tenureMonths: 60,
      desc: "एकल खाते में ₹9 लाख जमा कर हर महीने ₹5,550 की निश्चित मासिक ब्याज आय।"
    },
    {
      id: "calc-scss-senior",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "वरिष्ठ नागरिक बचत योजना (Senior Citizen Savings Scheme - SCSS 8.2%)",
      amount: 1500000,
      rate: 8.20,
      tenureMonths: 60,
      desc: "60+ वर्ष के नागरिकों हेतु हर 3 महीने में सीधे खाते में ₹30,750 की गारंटीड पेंशन आय।"
    },
    {
      id: "calc-gratuity",
      category: "wealth",
      catName: "निवेश व बचत",
      name: "कर्मचारी ग्रेच्युटी कैलकुलेटर (Statutory Employee Gratuity Calculator)",
      amount: 1500000,
      rate: 0,
      tenureMonths: 240,
      desc: "कंपनी में 5+ वर्ष की निरंतर सेवा के बाद 15/26 फार्मूले के आधार पर ग्रेच्युटी राशि।"
    }
  ];

  // Render cards for all 105 varieties
  const calcCardsHTML = calculators.map((calc, idx) => {
    return `
    <div class="calculator-variety-card" 
         data-cat="${calc.category}" 
         data-search="${calc.name.toLowerCase()} ${calc.catName.toLowerCase()} ${calc.desc.toLowerCase()}"
         onclick="loadPreset(${calc.amount}, ${calc.rate}, ${calc.tenureMonths}, '${calc.name.replace(/'/g, "\\'")}', '${calc.desc.replace(/'/g, "\\'")}')">
      <div class="variety-badge-row">
        <span class="variety-cat-badge">${calc.catName}</span>
        <span class="variety-index-num">#${idx + 1}</span>
      </div>
      <h4 class="variety-title">${calc.name}</h4>
      <p class="variety-desc">${calc.desc}</p>
      <div class="variety-meta-row">
        <span>राशि: <strong>₹${calc.amount >= 100000 ? (calc.amount / 100000).toFixed(1) + ' Lakh' : calc.amount.toLocaleString('en-IN')}</strong></span>
        <span>दर: <strong>${calc.rate}%</strong></span>
        <span>अवधि: <strong>${Math.round(calc.tenureMonths / 12)} वर्ष</strong></span>
      </div>
      <button class="btn-load-preset" type="button">
        🧮 इस कैलकुलेटर को लोड करें (Calculate) →
      </button>
    </div>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>100+ ईएमआई व वित्तीय कैलकुलेटर डायरेक्टरी (100+ EMI & Financial Calculators) | Fengoo</title>
  <meta name="description" content="भारत का सबसे बड़ा 100+ वित्तीय व ईएमआई कैलकुलेटर हब। होम लोन, कार लोन, पर्सनल लोन, एजुकेशन, एमएसएमई, गोल्ड लोन, प्रीपेमेंट व एसआईपी की हर वैरायटी के लाइव कैलकुलेटर।" />
  <link rel="canonical" href="https://fengoo.in/calculators/index.html" />
  ${getStyles('..')}
  <style>
    .calc-hub-hero {
      background: radial-gradient(circle at 50% 0%, var(--surface-2) 0%, var(--surface) 100%);
      border-bottom: 1px solid var(--border);
      padding: 2.5rem 0 2rem;
      text-align: center;
    }
    .calc-hub-hero h1 {
      font-size: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
      color: var(--text);
    }
    .calc-hub-hero p {
      font-size: 1.05rem;
      color: var(--text-muted);
      max-width: 760px;
      margin: 0 auto 1.5rem;
      line-height: 1.5;
    }

    /* Live Master Interactive Calculator Engine */
    .master-calculator-box {
      background: var(--surface);
      border: 2px solid var(--primary);
      border-radius: var(--radius);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      margin: 2rem auto 3rem;
      max-width: 960px;
    }
    .master-calc-header {
      border-bottom: 1px solid var(--border);
      padding-bottom: 1rem;
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .active-calc-title {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--primary);
      margin: 0;
    }
    .active-calc-desc {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin-top: 0.25rem;
    }
    .calc-interactive-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 2rem;
      align-items: center;
    }
    @media (max-width: 768px) {
      .calc-interactive-grid {
        grid-template-columns: 1fr;
      }
    }
    .input-control-group {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .input-row-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.4rem;
    }
    .input-label {
      font-weight: 700;
      font-size: 0.925rem;
      color: var(--text);
    }
    .numeric-input-wrap {
      display: flex;
      align-items: center;
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 0.2rem 0.6rem;
    }
    .numeric-input-wrap input {
      border: none;
      background: transparent;
      font-size: 1rem;
      font-weight: 700;
      color: var(--text);
      width: 130px;
      text-align: right;
      outline: none;
    }
    .slider-range {
      width: 100%;
      accent-color: var(--primary);
      cursor: pointer;
      height: 6px;
    }
    .range-limits {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--text-muted);
      margin-top: 0.25rem;
    }

    /* Result Card */
    .calc-result-panel {
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      text-align: center;
    }
    .result-emi-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 8px;
      padding: 1.25rem 1rem;
    }
    .result-emi-label {
      font-size: 0.85rem;
      font-weight: 700;
      color: #1e40af;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .result-emi-value {
      font-size: 2.2rem;
      font-weight: 900;
      color: #1e3a8a;
      margin: 0.3rem 0;
    }
    .result-stats-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
      text-align: left;
    }
    .res-col {
      background: var(--surface);
      border: 1px solid var(--border);
      padding: 0.75rem;
      border-radius: 6px;
    }
    .res-lbl {
      font-size: 0.725rem;
      color: var(--text-muted);
      text-transform: uppercase;
    }
    .res-val {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--text);
      margin-top: 0.2rem;
    }

    /* Ratio Progress Bar */
    .ratio-bar-container {
      margin-top: 0.5rem;
      text-align: left;
    }
    .ratio-bar-label {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      font-weight: 600;
      margin-bottom: 0.35rem;
    }
    .ratio-bar {
      height: 10px;
      border-radius: 9999px;
      background: #e2e8f0;
      display: flex;
      overflow: hidden;
    }
    .ratio-principal {
      background: #0284c7;
      height: 100%;
    }
    .ratio-interest {
      background: #f59e0b;
      height: 100%;
    }

    /* Filter & Search for 100 Varieties */
    .varieties-section {
      padding: 1rem 0 5rem;
    }
    .section-header-row {
      text-align: center;
      margin-bottom: 2rem;
    }
    .section-header-row h2 {
      font-size: 1.85rem;
      font-weight: 800;
      color: var(--text);
      margin-bottom: 0.5rem;
    }
    .filter-chips-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin: 1.25rem 0 2rem;
    }
    .chip-btn {
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
    .chip-btn:hover, .chip-btn.active {
      background: var(--primary);
      color: #fff;
      border-color: var(--primary);
    }

    /* Calculator Cards Grid */
    .varieties-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: 1.25rem;
    }
    .calculator-variety-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    }
    .calculator-variety-card:hover {
      transform: translateY(-2px);
      border-color: var(--primary);
      box-shadow: var(--shadow-md);
    }
    .variety-badge-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    .variety-cat-badge {
      font-size: 0.725rem;
      font-weight: 700;
      background: var(--primary-light);
      color: var(--primary);
      padding: 0.15rem 0.5rem;
      border-radius: 4px;
    }
    .variety-index-num {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--text-muted);
    }
    .variety-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--text);
      line-height: 1.35;
      margin-bottom: 0.4rem;
    }
    .variety-desc {
      font-size: 0.8rem;
      color: var(--text-muted);
      line-height: 1.4;
      margin-bottom: 0.75rem;
      flex-grow: 1;
    }
    .variety-meta-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--text);
      background: var(--surface-subtle);
      padding: 0.4rem 0.6rem;
      border-radius: 4px;
      margin-bottom: 0.75rem;
    }
    .btn-load-preset {
      width: 100%;
      background: transparent;
      border: 1px solid var(--primary);
      color: var(--primary);
      font-size: 0.8rem;
      font-weight: 700;
      padding: 0.45rem;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .btn-load-preset:hover {
      background: var(--primary);
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
      <li><span>100+ ईएमआई व वित्तीय कैलकुलेटर</span></li>
    </ul>
  </div>

  <!-- Hero Header -->
  <section class="calc-hub-hero">
    <div class="container">
      <span class="badge-official">🧮 100% सटीक वित्तीय गणितीय टूल्स</span>
      <h1>100+ ईएमआई व वित्तीय कैलकुलेटर डायरेक्टरी</h1>
      <p>
        होम लोन, कार लोन, पर्सनल लोन, एजुकेशन, बिज़नेस, एमएसएमई, गोल्ड लोन, प्रीपेमेंट व एसआईपी की 100 से अधिक वैरायटी। किसी भी कार्ड पर क्लिक करके तुरंत लाइव कैलकुलेटर में गणना करें।
      </p>
    </div>
  </section>

  <!-- Live Master Interactive Calculator Engine -->
  <div class="container">
    <div class="master-calculator-box" id="master-calculator-engine">
      <div class="master-calc-header">
        <div>
          <span class="badge-official" style="font-size:0.75rem;">लाइव गणना इंजन (Interactive Engine)</span>
          <h2 class="active-calc-title" id="display-calc-title">नियमित होम लोन ईएमआई (Regular Home Loan EMI)</h2>
          <p class="active-calc-desc" id="display-calc-desc">मानक आवासीय संपत्ति खरीद हेतु 20 वर्ष की अवधि के लिए होम लोन ईएमआई गणना।</p>
        </div>
      </div>

      <div class="calc-interactive-grid">
        <!-- Input Sliders Column -->
        <div class="input-control-group">
          <!-- Loan Amount -->
          <div>
            <div class="input-row-header">
              <label class="input-label" for="input-amount">ऋण राशि (Loan Amount):</label>
              <div class="numeric-input-wrap">
                <span>₹</span>
                <input type="number" id="input-amount" value="4000000" min="10000" max="100000000" step="10000" />
              </div>
            </div>
            <input type="range" class="slider-range" id="slider-amount" min="50000" max="20000000" step="50000" value="4000000" />
            <div class="range-limits">
              <span>₹50,000</span>
              <span>₹2 करोड़ (2 Cr)</span>
            </div>
          </div>

          <!-- Interest Rate -->
          <div>
            <div class="input-row-header">
              <label class="input-label" for="input-rate">वार्षिक ब्याज दर (Interest Rate % p.a.):</label>
              <div class="numeric-input-wrap">
                <input type="number" id="input-rate" value="8.50" min="1" max="36" step="0.05" />
                <span>%</span>
              </div>
            </div>
            <input type="range" class="slider-range" id="slider-rate" min="3" max="24" step="0.1" value="8.5" />
            <div class="range-limits">
              <span>3.0%</span>
              <span>24.0%</span>
            </div>
          </div>

          <!-- Tenure -->
          <div>
            <div class="input-row-header">
              <label class="input-label" for="input-tenure">ऋण अवधि (Tenure in Years):</label>
              <div class="numeric-input-wrap">
                <input type="number" id="input-tenure" value="20" min="1" max="35" step="1" />
                <span>वर्ष (Yrs)</span>
              </div>
            </div>
            <input type="range" class="slider-range" id="slider-tenure" min="1" max="30" step="1" value="20" />
            <div class="range-limits">
              <span>1 वर्ष (12 माह)</span>
              <span>30 वर्ष (360 माह)</span>
            </div>
          </div>
        </div>

        <!-- Result Stats Column -->
        <div class="calc-result-panel">
          <div class="result-emi-box">
            <span class="result-emi-label">मासिक ईएमआई (Monthly EMI)</span>
            <div class="result-emi-value" id="res-monthly-emi">₹34,713</div>
            <span style="font-size:0.75rem; color:#475569;">प्रति माह देय किस्त</span>
          </div>

          <div class="result-stats-row">
            <div class="res-col">
              <span class="res-lbl">कुल ब्याज (Total Interest):</span>
              <div class="res-val" id="res-total-interest">₹43,31,114</div>
            </div>
            <div class="res-col">
              <span class="res-lbl">कुल भुगतान (Total Amount):</span>
              <div class="res-val" id="res-total-payment">₹83,31,114</div>
            </div>
          </div>

          <div class="ratio-bar-container">
            <div class="ratio-bar-label">
              <span style="color:#0284c7;">■ मूलधन: <strong id="ratio-p-val">48%</strong></span>
              <span style="color:#f59e0b;">■ कुल ब्याज: <strong id="ratio-i-val">52%</strong></span>
            </div>
            <div class="ratio-bar">
              <div class="ratio-principal" id="bar-principal" style="width: 48%;"></div>
              <div class="ratio-interest" id="bar-interest" style="width: 52%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 100+ Varieties Directory Section -->
  <main class="container varieties-section">
    <div class="section-header-row">
      <h2>100+ ईएमआई व वित्तीय कैलकुलेटर लाइब्रेरी</h2>
      <p style="color:var(--text-muted); max-width:640px; margin:0 auto;">
        नीचे दी गई किसी भी वैरायटी को चुनें। वह सीधे ऊपर दिए गए लाइव कैलकुलेटर इंजन में लोड हो जाएगी।
      </p>

      <!-- Instant Live Search Box -->
      <div class="search-input-box" style="margin: 1.5rem auto 0; max-width:640px;">
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
        <input 
          type="text" 
          id="calc-search-input" 
          placeholder="कैलकुलेटर खोजें (उदा. SBI होम लोन, बाइक, मुद्रा, प्रीपेमेंट, एसआईपी)..." 
          aria-label="Search Calculators"
          autocomplete="off"
        />
      </div>

      <!-- Filter Chips -->
      <div class="filter-chips-grid">
        <button class="chip-btn active" data-filter="all">सभी 100+ कैलकुलेटर (All)</button>
        <button class="chip-btn" data-filter="home">होम लोन (Home)</button>
        <button class="chip-btn" data-filter="vehicle">वाहन व कार (Vehicle)</button>
        <button class="chip-btn" data-filter="personal">पर्सनल लोन (Personal)</button>
        <button class="chip-btn" data-filter="education">शिक्षा लोन (Education)</button>
        <button class="chip-btn" data-filter="business">व्यापार व मुद्रा (MSME)</button>
        <button class="chip-btn" data-filter="collateral">गोल्ड व संपत्ति (LAP)</button>
        <button class="chip-btn" data-filter="agri">किसान व कृषि (Agri)</button>
        <button class="chip-btn" data-filter="prepay">प्रीपेमेंट व बचत (Prepayment)</button>
        <button class="chip-btn" data-filter="wealth">निवेश, SIP व वेल्थ (Wealth)</button>
      </div>
    </div>

    <div class="varieties-grid" id="varieties-list">
      ${calcCardsHTML}
    </div>
  </main>

  <script>
    // Live Master Calculation Engine
    function calculateEMI() {
      const P = parseFloat(document.getElementById('input-amount').value) || 0;
      const annualRate = parseFloat(document.getElementById('input-rate').value) || 0;
      const years = parseFloat(document.getElementById('input-tenure').value) || 0;
      const N = years * 12;

      if (P <= 0 || N <= 0) return;

      let emi = 0;
      let totalInterest = 0;
      let totalPayment = 0;

      if (annualRate === 0) {
        emi = P / N;
        totalPayment = P;
        totalInterest = 0;
      } else {
        const R = (annualRate / 12) / 100;
        emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        totalPayment = emi * N;
        totalInterest = totalPayment - P;
      }

      document.getElementById('res-monthly-emi').textContent = '₹' + Math.round(emi).toLocaleString('en-IN');
      document.getElementById('res-total-interest').textContent = '₹' + Math.round(totalInterest).toLocaleString('en-IN');
      document.getElementById('res-total-payment').textContent = '₹' + Math.round(totalPayment).toLocaleString('en-IN');

      const pPercent = Math.round((P / totalPayment) * 100);
      const iPercent = 100 - pPercent;
      document.getElementById('ratio-p-val').textContent = pPercent + '%';
      document.getElementById('ratio-i-val').textContent = iPercent + '%';
      document.getElementById('bar-principal').style.width = pPercent + '%';
      document.getElementById('bar-interest').style.width = iPercent + '%';
    }

    // Sync numeric inputs and sliders
    function setupSync(inputId, sliderId) {
      const input = document.getElementById(inputId);
      const slider = document.getElementById(sliderId);

      input.addEventListener('input', () => {
        slider.value = input.value;
        calculateEMI();
      });

      slider.addEventListener('input', () => {
        input.value = slider.value;
        calculateEMI();
      });
    }

    setupSync('input-amount', 'slider-amount');
    setupSync('input-rate', 'slider-rate');
    setupSync('input-tenure', 'slider-tenure');

    // Preset loader when user clicks any of the 100+ variety cards
    window.loadPreset = function(amount, rate, tenureMonths, name, desc) {
      const years = Math.max(1, Math.round(tenureMonths / 12));
      document.getElementById('input-amount').value = amount;
      document.getElementById('slider-amount').value = Math.min(20000000, amount);

      document.getElementById('input-rate').value = rate;
      document.getElementById('slider-rate').value = Math.min(24, rate);

      document.getElementById('input-tenure').value = years;
      document.getElementById('slider-tenure').value = Math.min(30, years);

      document.getElementById('display-calc-title').textContent = name;
      document.getElementById('display-calc-desc').textContent = desc;

      calculateEMI();

      // Smooth scroll up to engine
      const engine = document.getElementById('master-calculator-engine');
      if (engine) {
        engine.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    // Filter and Search for 100 varieties
    document.addEventListener('DOMContentLoaded', () => {
      calculateEMI();

      const searchInput = document.getElementById('calc-search-input');
      const chipBtns = document.querySelectorAll('.chip-btn');
      const cards = document.querySelectorAll('.calculator-variety-card');

      let currentCat = 'all';
      let currentQuery = '';

      function applyFilter() {
        cards.forEach(card => {
          const cat = card.getAttribute('data-cat');
          const searchData = card.getAttribute('data-search') || '';

          const catMatch = (currentCat === 'all' || cat === currentCat);
          const queryMatch = (!currentQuery || searchData.includes(currentQuery));

          if (catMatch && queryMatch) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentQuery = e.target.value.trim().toLowerCase();
          applyFilter();
        });
      }

      chipBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          chipBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentCat = btn.getAttribute('data-filter');
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

// Generate the calculators/index.html file
const html = buildCalculatorsHubHTML();
writeFile('calculators/index.html', html);
console.log('Successfully generated calculators/index.html with 105 EMI varieties');
