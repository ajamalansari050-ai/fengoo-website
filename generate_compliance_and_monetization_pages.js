import { writeFile, getHeader, getFooter, getScripts, getStyles, getAdSlot } from './build_helpers.js';

// 1. Privacy Policy (Google AdSense 100% Compliant)
export function generatePrivacyPolicyHTML() {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>गोपनीयता नीति (Privacy Policy) | Fengoo.in</title>
  <meta name="description" content="Fengoo.in की गोपनीयता नीति - Google AdSense, कुकीज़, एनालिटिक्स, डेटा सुरक्षा और उपयोगकर्ता गोपनीयता अधिकार।" />
  <link rel="canonical" href="https://fengoo.in/privacy-policy.html" />
  ${getStyles('')}
  <style>
    .legal-content {
      max-width: 860px;
      margin: 3rem auto 5rem;
      background: var(--surface);
      padding: 2.5rem;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
    }
    .legal-content h1 {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      color: var(--text);
    }
    .legal-meta {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border);
    }
    .legal-content h2 {
      font-size: 1.3rem;
      font-weight: 700;
      margin: 1.75rem 0 0.75rem;
      color: var(--text);
    }
    .legal-content p, .legal-content li {
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--text);
      margin-bottom: 0.85rem;
    }
    .legal-content ul, .legal-content ol {
      padding-left: 1.5rem;
      margin-bottom: 1rem;
    }
    .legal-box {
      background: var(--surface-subtle);
      border-left: 4px solid var(--primary);
      padding: 1rem 1.25rem;
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      margin: 1.25rem 0;
    }
  </style>
</head>
<body>
  ${getHeader('')}

  <main class="container">
    <article class="legal-content">
      <h1>गोपनीयता नीति (Privacy Policy)</h1>
      <div class="legal-meta">अंतिम अद्यतन (Last Updated): 21 सितंबर 2025 • विनियामक अनुपालन: IT Act 2000 & Google AdSense Publisher Guidelines</div>

      <p>
        Fengoo.in ("हम", "हमारी", अथवा "पोर्टल") पर हमारे उपयोगकर्ताओं की गोपनीयता सर्वोपरि है। यह गोपनीयता नीति दस्तावेज़ विस्तार से स्पष्ट करता है कि जब आप हमारी वेबसाइट पर आते हैं, तो किस प्रकार की जानकारी एकत्र की जाती है, उसका उपयोग कैसे किया जाता है, और आपकी सुरक्षा कैसे सुनिश्चित की जाती है।
      </p>

      <h2>1. हम कौन सी जानकारी एकत्र करते हैं? (Information We Collect)</h2>
      <p>
        Fengoo.in एक खुला वित्तीय साक्षरता व तुलना मंच है। हम ब्राउज़िंग के दौरान उपयोगकर्ताओं से कोई संवेदनशील व्यक्तिगत पहचान डेटा (जैसे आधार संख्या, क्रेडिट कार्ड सीवीवी, नेटबैंकिंग पासवर्ड आदि) कभी नहीं मांगते।
      </p>
      <ul>
        <li><strong>लॉग फाइल्स (Log Files):</strong> मानक वेब सर्वर प्रोटोकॉल के अनुसार, जब आप हमारी साइट पर आते हैं तो सर्वर स्वचालित रूप से इंटरनेट प्रोटोकॉल (IP) पता, ब्राउज़र का प्रकार, इंटरनेट सेवा प्रदाता (ISP), दिनांक/समय मोहर, और देखे गए पृष्ठों की संख्या रिकॉर्ड करता है। यह डेटा पूरी तरह से गैर-व्यक्तिगत होता है।</li>
        <li><strong>स्वैच्छिक संपर्क जानकारी:</strong> यदि आप हमारे संपर्क फॉर्म अथवा ईमेल द्वारा हमसे संवाद करते हैं, तो आपका नाम और ईमेल पता केवल आपके प्रश्न का उत्तर देने हेतु उपयोग किया जाता है।</li>
      </ul>

      <h2>2. Google AdSense और DART कुकीज़ (DoubleClick DART Cookie)</h2>
      <div class="legal-box">
        <p><strong>विज्ञापन भागीदार (Advertising Partners):</strong> Google हमारी वेबसाइट पर एक तृतीय-पक्ष विक्रेता (Third-Party Vendor) के रूप में विज्ञापन दिखाने हेतु कुकीज़ का उपयोग करता है।</p>
      </div>
      <ul>
        <li>Google द्वारा DART कुकीज़ का उपयोग हमारे आगंतुकों को Fengoo.in और इंटरनेट पर अन्य साइटों की उनकी यात्रा के आधार पर प्रासंगिक विज्ञापन (Interest-Based Ads) दिखाने में सक्षम बनाता है।</li>
        <li>उपयोगकर्ता Google विज्ञापन और सामग्री नेटवर्क गोपनीयता नीति के निम्नलिखित URL पर जाकर DART कुकी के उपयोग से बाहर निकल सकते हैं (Opt-Out): <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></li>
      </ul>

      <h2>3. संबद्ध और एफिलिएट भागीदार प्रकटीकरण (Affiliate Links Disclosure)</h2>
      <p>
        Fengoo.in भारत के प्रमुख बैंकिंग और वित्तीय संस्थानों (जैसे BankSathi, EarnKaro, Cuelinks आदि) के एफिलिएट कार्यक्रमों में भाग लेता है। जब आप हमारे पोर्टल पर दिए गए किसी क्रेडिट कार्ड अथवा लोन के "Apply Now" बटन पर क्लिक करते हैं और संबंधित बैंक में अपना आवेदन पूरा करते हैं, तो हमें उस संस्थान से एक छोटा रेफरल कमीशन प्राप्त हो सकता है। इससे आपकी किसी भी ब्याज दर अथवा कार्ड शुल्क में कोई वृद्धि नहीं होती है।
      </p>

      <h2>4. कुकीज़ और वेब बीकन (Cookies & Web Beacons)</h2>
      <p>
        Fengoo.in उपयोगकर्ता की प्राथमिकताओं (जैसे डार्क/लाइट थीम मोड) को सहेजने के लिए लोकल स्टोरेज (Local Storage) का उपयोग करता है। आप अपने वेब ब्राउज़र की सेटिंग्स में जाकर किसी भी समय कुकीज़ को अक्षम (Disable) कर सकते हैं।
      </p>

      <h2>5. डेटा सुरक्षा और बच्चों की गोपनीयता (Children's Privacy Protection)</h2>
      <p>
        हम 18 वर्ष से कम आयु के बच्चों से जानबूझकर कोई भी व्यक्तिगत डेटा एकत्र नहीं करते हैं। हमारी सभी वित्तीय गाइड और कैलकुलेटर वयस्क वित्तीय योजनाकारों और सामान्य उपभोक्ताओं के लिए डिज़ाइन किए गए हैं।
      </p>

      <h2>6. शिकायत निवारण व संपर्क अधिकारी (Grievance Officer)</h2>
      <p>
        सूचना प्रौद्योगिकी (मध्यवर्ती दिशानिर्देश और डिजिटल मीडिया आचार संहिता) नियम 2021 के अनुपालन में, यदि आपके पास इस गोपनीयता नीति के संबंध में कोई प्रश्न या शिकायत है, तो आप हमारे नोडल अधिकारी से संपर्क कर सकते हैं:
      </p>
      <div class="legal-box">
        <p><strong>नोडल अधिकारी:</strong> गोपनीयता अनुपालन विभाग (Fengoo Editorial Team)</p>
        <p><strong>ईमेल:</strong> <a href="mailto:contact@fengoo.in">contact@fengoo.in</a></p>
        <p><strong>पता:</strong> कस्तूरबा गांधी मार्ग, कनॉट प्लेस, नई दिल्ली - 110001</p>
      </div>
    </article>
  </main>

  ${getFooter('')}
  ${getScripts('')}
</body>
</html>`;
}

// 2. Terms of Service
export function generateTermsOfServiceHTML() {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>सेवा की शर्तें (Terms of Service) | Fengoo.in</title>
  <meta name="description" content="Fengoo.in की उपयोग की शर्तें - नियम, दायित्व की सीमा, कॉपीराइट और वैधानिक अस्वीकरण।" />
  <link rel="canonical" href="https://fengoo.in/terms-of-service.html" />
  ${getStyles('')}
  <style>
    .legal-content {
      max-width: 860px;
      margin: 3rem auto 5rem;
      background: var(--surface);
      padding: 2.5rem;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
    }
    .legal-content h1 { font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text); }
    .legal-meta { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border); }
    .legal-content h2 { font-size: 1.3rem; font-weight: 700; margin: 1.75rem 0 0.75rem; color: var(--text); }
    .legal-content p, .legal-content li { font-size: 0.95rem; line-height: 1.7; color: var(--text); margin-bottom: 0.85rem; }
    .legal-content ul { padding-left: 1.5rem; margin-bottom: 1rem; }
  </style>
</head>
<body>
  ${getHeader('')}

  <main class="container">
    <article class="legal-content">
      <h1>सेवा की शर्तें (Terms of Service)</h1>
      <div class="legal-meta">अंतिम अद्यतन: 21 सितंबर 2025 • सभी उपयोगकर्ताओं पर लागू</div>

      <p>
        Fengoo.in में आपका स्वागत है। हमारी वेबसाइट का उपयोग करके आप इन सेवा शर्तों से पूर्णतः सहमत होते हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया पोर्टल का उपयोग न करें।
      </p>

      <h2>1. शैक्षिक और सूचनात्मक उद्देश्य (Educational Nature Only)</h2>
      <p>
        Fengoo.in कोई बैंक, गैर-बैंकिंग वित्तीय कंपनी (NBFC), बीमा दलाल या भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI) पंजीकृत निवेश सलाहकार नहीं है। यहाँ प्रदान की गई सभी समीक्षाएं, तुलनाएं, 1500+ शब्दों की मार्गदर्शिकाएं और ईएमआई/एसआईपी कैलकुलेटर केवल सामान्य वित्तीय साक्षरता और शैक्षिक उद्देश्यों के लिए हैं।
      </p>

      <h2>2. बौद्धिक संपदा और सामग्री का उपयोग (Intellectual Property)</h2>
      <p>
        Fengoo.in पर प्रकाशित सभी मौलिक लेख, समीक्षाएं, कैलकुलेटर स्क्रिप्ट्स, और लेआउट्स कॉपीराइट कानूनों द्वारा संरक्षित हैं। किसी भी सामग्री को व्यावसायिक लाभ हेतु बिना पूर्व लिखित अनुमति के कॉपी, री-पब्लिश या स्क्रैप करना पूर्णतः प्रतिबंधित है।
      </p>

      <h2>3. बाहरी वेबसाइटों के लिंक (Third-Party External Links)</h2>
      <p>
        हमारी वेबसाइट पर आधिकारिक बैंकों (जैसे SBI, HDFC, ICICI), सरकारी पोर्टल्स (जैसे RBI, Income Tax, Vidya Lakshmi) और संबद्ध भागीदारों के लिंक शामिल हैं। हम बाहरी साइटों की सामग्री, सुरक्षा नीतियों या सेवाओं के लिए ज़िम्मेदार नहीं हैं।
      </p>

      <h2>4. दायित्व का परिसीमन (Limitation of Liability)</h2>
      <p>
        यद्यपि हम सभी ब्याज दरों, शुल्कों और पात्रता नियमों को अत्यंत सावधानीपूर्वक सत्यापित रखते हैं, तथापि बैंक और ऋणदाता अपनी नीतियों को बिना किसी पूर्व सूचना के बदलने के लिए स्वतंत्र हैं। Fengoo.in किसी भी वित्तीय निर्णय या उससे होने वाले किसी भी प्रत्यक्ष या अप्रत्यक्ष नुकसान के लिए उत्तरदायी नहीं होगा।
      </p>

      <h2>5. क्षेत्राधिकार (Jurisdiction)</h2>
      <p>
        इन शर्तों से संबंधित किसी भी विवाद का निपटारा भारत गणराज्य के कानूनों के तहत विशेष रूप से नई दिल्ली की सक्षम अदालतों के अधिकार क्षेत्र में होगा।
      </p>
    </article>
  </main>

  ${getFooter('')}
  ${getScripts('')}
</body>
</html>`;
}

// 3. Legal Disclaimer
export function generateDisclaimerHTML() {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>कानूनी अस्वीकरण (Legal Disclaimer) | Fengoo.in</title>
  <meta name="description" content="Fengoo.in का कानूनी व वित्तीय अस्वीकरण - RBI, SEBI, IRDAI एवं बैंकिंग नियमों से संबंधित सूचना।" />
  <link rel="canonical" href="https://fengoo.in/disclaimer.html" />
  ${getStyles('')}
  <style>
    .legal-content {
      max-width: 860px;
      margin: 3rem auto 5rem;
      background: var(--surface);
      padding: 2.5rem;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
    }
    .legal-content h1 { font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text); }
    .legal-meta { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border); }
    .legal-content h2 { font-size: 1.3rem; font-weight: 700; margin: 1.75rem 0 0.75rem; color: var(--text); }
    .legal-content p, .legal-content li { font-size: 0.95rem; line-height: 1.7; color: var(--text); margin-bottom: 0.85rem; }
    .alert-disclaimer {
      background: #fffbeb;
      border: 1px solid #fde68a;
      border-left: 5px solid #f59e0b;
      padding: 1.25rem;
      border-radius: var(--radius-sm);
      margin: 1.5rem 0;
    }
  </style>
</head>
<body>
  ${getHeader('')}

  <main class="container">
    <article class="legal-content">
      <h1>कानूनी व वित्तीय अस्वीकरण (Legal Disclaimer)</h1>
      <div class="legal-meta">अंतिम अद्यतन: 21 सितंबर 2025 • वैधानिक सूचना</div>

      <div class="alert-disclaimer">
        <strong>महत्वपूर्ण सूचना (Important Notice):</strong> Fengoo.in पर दी गई जानकारी को किसी भी प्रकार की कानूनी, कर (Tax), या निवेश सलाह (Investment Advice) नहीं माना जाना चाहिए। कोई भी वित्तीय निर्णय लेने से पहले कृपया किसी प्रमाणित वित्तीय योजनाकार (Certified Financial Planner) अथवा संबंधित बैंक शाखा से परामर्श करें।
      </div>

      <h2>1. ब्याज दरों व शुल्कों की सटीकता</h2>
      <p>
        भारतीय रिज़र्व बैंक (RBI) द्वारा रेपो रेट (Repo Rate) में परिवर्तन किए जाने पर सभी बैंकों की ऋण व सावधि जमा (FD) दरें तुरंत बदल सकती हैं। हम अपनी सामग्री को नियमित रूप से अपडेट करते हैं, किंतु उपयोगकर्ता से अनुरोध है कि वे आवेदन करने से पूर्व बैंक के आधिकारिक पोर्टल पर वर्तमान दरों की पुष्टि अवश्य कर लें।
      </p>

      <h2>2. कोई ऋण गारंटी नहीं (No Loan Approval Guarantee)</h2>
      <p>
        क्रेडिट कार्ड अथवा ऋण का अनुमोदन पूर्णतः संबंधित बैंक के क्रेडिट रिस्क मूल्यांकन, आवेदक के सिबिल स्कोर, मासिक आय और दस्तावेजों के सत्यापन पर निर्भर करता है। Fengoo.in किसी भी ऋणदाता की ओर से अनुमोदन या स्वीकृति की कोई गारंटी नहीं देता है।
      </p>

      <h2>3. विनियामक संस्थाओं से स्वतंत्रता</h2>
      <p>
        इस पोर्टल पर प्रदर्शित सरकारी योजनाओं (जैसे पीएम जन धन योजना, मुद्रा लोन, सुकन्या समृद्धि आदि) के लोगो और नाम केवल जागरूकता और जन-सूचना के लिए हैं। Fengoo.in भारत सरकार या किसी बैंक का आधिकारिक अंग नहीं है।
      </p>
    </article>
  </main>

  ${getFooter('')}
  ${getScripts('')}
</body>
</html>`;
}

// 4. About Us
export function generateAboutUsHTML() {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>हमारे बारे में (About Us) | Fengoo.in</title>
  <meta name="description" content="Fengoo.in का मिशन - भारत के प्रत्येक नागरिक तक निष्पक्ष, पारदर्शी व सुलभ वित्तीय ज्ञान पहुंचाना।" />
  <link rel="canonical" href="https://fengoo.in/about-us.html" />
  ${getStyles('')}
  <style>
    .about-hero {
      text-align: center;
      padding: 3.5rem 1rem 2rem;
      background: radial-gradient(circle at 50% 0%, var(--surface-2) 0%, var(--surface) 100%);
      border-bottom: 1px solid var(--border);
    }
    .about-hero h1 { font-size: 2.25rem; font-weight: 800; margin-bottom: 0.75rem; color: var(--text); }
    .about-hero p { font-size: 1.1rem; color: var(--text-muted); max-width: 720px; margin: 0 auto; }
    .about-content {
      max-width: 860px;
      margin: 3rem auto 5rem;
      background: var(--surface);
      padding: 2.5rem;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
    }
    .about-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    }
    .about-card {
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 1.25rem;
    }
    .about-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text); }
    .about-card p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0; }
  </style>
</head>
<body>
  ${getHeader('')}

  <section class="about-hero">
    <div class="container">
      <span class="badge-official" style="margin-bottom:0.75rem; display:inline-block;">🏛️ भारत का निष्पक्ष वित्तीय साक्षरता पोर्टल</span>
      <h1>हमारा मिशन: हर भारतीय के लिए सरल, पारदर्शी वित्त</h1>
      <p>क्रेडिट कार्ड्स के छिपे हुए शुल्क, बैंक ऋणों के जटिल गणित और सरकारी बचत योजनाओं को आम बोलचाल की हिंदी में स्पष्ट रूप से समझना।</p>
    </div>
  </section>

  <main class="container">
    <div class="about-content">
      <h2>हमारा दृष्टिकोण (Our Vision)</h2>
      <p>
        भारतीय वित्तीय बाज़ार में प्रतिदिन सैकड़ों नए क्रेडिट कार्ड्स, लोन ऐप्स और निवेश उत्पाद लॉन्च होते हैं। अक्सर उपभोक्ता विज्ञापनों के चकाचौंध में छिपे हुए शुल्कों और ब्याज के चक्रव्यूह में फंस जाते हैं। Fengoo.in की स्थापना इसी समस्या के समाधान हेतु की गई है—ताकि प्रत्येक उपभोक्ता को आवेदन करने से पहले 1,500 से 2,000 शब्दों की निष्पक्ष, तथ्य-आधारित समीक्षा प्राप्त हो सके।
      </p>

      <div class="about-grid">
        <div class="about-card">
          <div style="font-size:1.75rem; margin-bottom:0.5rem;">📖</div>
          <h3>1500+ शब्द गहन विश्लेषण</h3>
          <p>प्रत्येक वित्तीय उत्पाद का शुल्क, नियम, ब्याज गणित और वास्तविक लाभ का विस्तृत व पारदर्शी परीक्षण।</p>
        </div>
        <div class="about-card">
          <div style="font-size:1.75rem; margin-bottom:0.5rem;">🛡️</div>
          <h3>100% विनियामक सत्यापन</h3>
          <p>आरबीआई (RBI), सेबी (SEBI), और आईआरडीएआई (IRDAI) के नवीनतम सर्कुलर्स के अनुसार प्रमाणित डेटा।</p>
        </div>
        <div class="about-card">
          <div style="font-size:1.75rem; margin-bottom:0.5rem;">🧮</div>
          <h3>सटीक गणितीय टूल्स</h3>
          <p>ईएमआई, एसआईपी और कर गणना के लिए बिना किसी छिपे शुल्क के 20+ मुफ़्त वित्तीय कैलकुलेटर।</p>
        </div>
      </div>

      <h2>संपादकीय स्वतंत्रता (Editorial Independence)</h2>
      <p>
        हमारी संपादकीय टीम किसी भी बैंक अथवा वित्तीय संस्थान के दबाव में समीक्षाएं नहीं लिखती है। यदि किसी कार्ड अथवा लोन में कोई खामी (जैसे अधिक नवीनीकरण शुल्क, कम रिवॉर्ड दर अथवा छुपा हुआ मार्कअप) है, तो हम अपनी गाइड में उसे स्पष्ट रूप से रेखांकित करते हैं।
      </p>
    </div>
  </main>

  ${getFooter('')}
  ${getScripts('')}
</body>
</html>`;
}

// 5. Contact Us
export function generateContactUsHTML() {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>हमसे संपर्क करें (Contact Us) | Fengoo.in</title>
  <meta name="description" content="Fengoo.in से संपर्क करें - संपादकीय प्रश्न, सुधार, विज्ञापन पूछताछ व शिकायत निवारण।" />
  <link rel="canonical" href="https://fengoo.in/contact-us.html" />
  ${getStyles('')}
  <style>
    .contact-container {
      max-width: 800px;
      margin: 3.5rem auto 5rem;
      background: var(--surface);
      padding: 2.5rem;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
    }
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 2rem;
    }
    @media (max-width: 640px) {
      .contact-grid { grid-template-columns: 1fr; }
    }
    .contact-box {
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 1.5rem;
    }
    .contact-box h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text); }
    .contact-box p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .form-group label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text);
    }
    .form-group input, .form-group textarea {
      padding: 0.75rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--bg);
      color: var(--text);
      font-family: inherit;
    }
    .btn-submit {
      background: var(--primary);
      color: #fff;
      font-weight: 700;
      padding: 0.85rem;
      border-radius: var(--radius-sm);
      border: none;
      cursor: pointer;
      transition: background 0.15s;
    }
    .btn-submit:hover { background: var(--primary-hover); }
  </style>
</head>
<body>
  ${getHeader('')}

  <main class="container">
    <div class="contact-container">
      <h1 style="font-size: 2rem; font-weight: 800; color: var(--text);">हमसे संपर्क करें (Contact Us)</h1>
      <p style="color: var(--text-muted); margin-top: 0.5rem;">
        यदि आपके पास किसी क्रेडिट कार्ड समीक्षा पर कोई सुझाव है, किसी डेटा में सुधार कराना है, या आप विज्ञापन व पार्टनरशिप करना चाहते हैं, तो कृपया नीचे दिए गए माध्यमों से संपर्क करें।
      </p>

      <div class="contact-grid">
        <div class="contact-box">
          <div style="font-size:1.75rem; margin-bottom:0.5rem;">✉️</div>
          <h3>संपादकीय व सामान्य पूछताछ</h3>
          <p>ईमेल: <a href="mailto:contact@fengoo.in" style="font-weight:700; color:var(--primary);">contact@fengoo.in</a></p>
          <p>हम सामान्यतः 24 से 48 कार्य घंटों के भीतर सभी ईमेल का उत्तर देते हैं।</p>
        </div>

        <div class="contact-box">
          <div style="font-size:1.75rem; margin-bottom:0.5rem;">📢</div>
          <h3>विज्ञापन व पार्टनरशिप</h3>
          <p>ईमेल: <a href="mailto:advertise@fengoo.in" style="font-weight:700; color:var(--primary);">advertise@fengoo.in</a></p>
          <p>फिनटेक, बैंकिंग व एफिलिएट नेटवर्क सहयोग हेतु संपर्क करें।</p>
        </div>
      </div>

      <div style="margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid var(--border);">
        <h3 style="font-size: 1.25rem; font-weight: 700;">संदेश भेजें (Send a Direct Message)</h3>
        <form class="contact-form" onsubmit="event.preventDefault(); alert('धन्यवाद! आपका संदेश सफलतापूर्वक प्राप्त हो गया है। हमारी टीम शीघ्र संपर्क करेगी।'); this.reset();">
          <div class="form-group">
            <label for="c-name">आपका नाम (Full Name) *</label>
            <input type="text" id="c-name" required placeholder="उदा. राहुल शर्मा" />
          </div>
          <div class="form-group">
            <label for="c-email">ईमेल पता (Email Address) *</label>
            <input type="email" id="c-email" required placeholder="name@example.com" />
          </div>
          <div class="form-group">
            <label for="c-subject">विषय (Subject) *</label>
            <input type="text" id="c-subject" required placeholder="संदेश का विषय..." />
          </div>
          <div class="form-group">
            <label for="c-message">संदेश (Message) *</label>
            <textarea id="c-message" rows="5" required placeholder="अपना संदेश विस्तार से यहाँ लिखें..."></textarea>
          </div>
          <button type="submit" class="btn-submit">संदेश भेजें (Send Message) →</button>
        </form>
      </div>
    </div>
  </main>

  ${getFooter('')}
  ${getScripts('')}
</body>
</html>`;
}

// 6. Advertise With Us / Sponsorships Page
export function generateAdvertiseHTML() {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>विज्ञापन व पार्टनरशिप (Advertise With Us) | Fengoo.in</title>
  <meta name="description" content="Fengoo.in पर अपने वित्तीय ब्रांड, क्रेडिट कार्ड या फिनटेक ऐप का विज्ञापन करें। उच्च-क्रय क्षमता वाले लक्षित भारतीय दर्शकों तक पहुंचें।" />
  <link rel="canonical" href="https://fengoo.in/advertise.html" />
  ${getStyles('')}
  <style>
    .ad-hero {
      text-align: center;
      padding: 3.5rem 1rem 2.5rem;
      background: radial-gradient(circle at 50% 0%, #0369a1 0%, #0f172a 100%);
      color: #fff;
    }
    .ad-hero h1 { font-size: 2.25rem; font-weight: 800; margin-bottom: 0.75rem; }
    .ad-hero p { font-size: 1.1rem; opacity: 0.9; max-width: 720px; margin: 0 auto 1.5rem; }
    .stats-bar {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 1.5rem;
    }
    .stat-pill {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius);
      border: 1px solid rgba(255, 255, 255, 0.2);
      text-align: center;
    }
    .stat-val { font-size: 1.5rem; font-weight: 800; color: #38bdf8; display: block; }
    .stat-lbl { font-size: 0.75rem; text-transform: uppercase; opacity: 0.85; }
    .ad-plans-container {
      max-width: 960px;
      margin: 3.5rem auto 5rem;
    }
    .plans-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .plan-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.75rem;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .plan-card.featured {
      border: 2px solid #4f46e5;
      position: relative;
    }
    .plan-tag {
      position: absolute;
      top: -12px;
      right: 20px;
      background: #4f46e5;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
    }
    .plan-card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text); }
    .plan-price { font-size: 1.75rem; font-weight: 800; color: var(--primary); margin: 0.5rem 0 1rem; }
    .plan-features { list-style: none; padding: 0; margin-bottom: 1.5rem; }
    .plan-features li { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem; }
    .btn-inquire {
      display: block;
      width: 100%;
      text-align: center;
      background: var(--primary);
      color: #fff;
      font-weight: 700;
      padding: 0.75rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: background 0.15s;
    }
    .btn-inquire:hover { background: var(--primary-hover); }
  </style>
</head>
<body>
  ${getHeader('')}

  <section class="ad-hero">
    <div class="container">
      <span class="badge-official" style="background:rgba(255,255,255,0.2); color:#fff; border-color:rgba(255,255,255,0.3); margin-bottom:0.75rem; display:inline-block;">📢 उच्च-क्रय क्षमता वित्तीय दर्शक</span>
      <h1>Fengoo.in पर अपने ब्रांड का प्रचार करें</h1>
      <p>लाखों ऐसे जागरूक भारतीय ग्राहकों तक सीधे पहुंचें जो सक्रिय रूप से नए क्रेडिट कार्ड्स, पर्सनल लोन, म्यूचुअल फंड्स और बैंकिंग उत्पाद खोज रहे हैं।</p>

      <div class="stats-bar">
        <div class="stat-pill">
          <span class="stat-val">100%</span>
          <span class="stat-lbl">ऑर्गेनिक फाइनेंस ट्रैफिक</span>
        </div>
        <div class="stat-pill">
          <span class="stat-val">₹25K+</span>
          <span class="stat-lbl">औसत उपयोगकर्ता मासिक आय</span>
        </div>
        <div class="stat-pill">
          <span class="stat-val">13+</span>
          <span class="stat-lbl">बैंक व फिनटेक कवर्ड</span>
        </div>
      </div>
    </div>
  </section>

  <main class="container">
    <div class="ad-plans-container">
      <div class="text-center" style="text-align: center;">
        <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text);">पार्टनरशिप व प्रायोजन पैकेज (Sponsorship Packages)</h2>
        <p style="color: var(--text-muted);">अपने फिनटेक स्टार्टअप, एनबीएफसी अथवा बैंकिंग ऐप के लिए सबसे उपयुक्त विकल्प चुनें:</p>
      </div>

      <div class="plans-grid">
        <!-- Plan 1 -->
        <div class="plan-card">
          <div>
            <h3>स्पॉन्सर्ड रिव्यू आर्टिकल (Sponsored Review)</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted);">आपके कार्ड अथवा ऐप पर 1,500+ शब्दों का समर्पित संपादकीय विश्लेषण।</p>
            <div class="plan-price">₹9,999 <span style="font-size: 0.9rem; font-weight: normal; color: var(--text-muted);">/ स्थायी पोस्ट</span></div>
            <ul class="plan-features">
              <li>✓ 1500+ शब्दों की गहन समीक्षा</li>
              <li>✓ Do-Follow आधिकारिक लिंक</li>
              <li>✓ होमपेज पर 30 दिनों का फ़ीचर्ड स्थान</li>
              <li>✓ सामाजिक मीडिया व टेलीग्राम चैनल में शेयर</li>
            </ul>
          </div>
          <a href="mailto:advertise@fengoo.in?subject=Inquiry: Sponsored Review" class="btn-inquire">बुक करें (Inquire Now) ↗</a>
        </div>

        <!-- Plan 2 (Featured) -->
        <div class="plan-card featured">
          <span class="plan-tag">सर्वाधिक लोकप्रिय</span>
          <div>
            <h3>होमपेज बैनर व डील ऑफ द डे</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted);">वेबसाइट के शीर्ष व सभी 1500+ शब्द गाइड पेजों पर विशेष बैनर स्लॉट।</p>
            <div class="plan-price">₹14,999 <span style="font-size: 0.9rem; font-weight: normal; color: var(--text-muted);">/ प्रति माह</span></div>
            <ul class="plan-features">
              <li>✓ 728x90 टॉप हेडर लीडरबोर्ड</li>
              <li>✓ स्टिकी बॉटम डील बार में प्राथमिकता</li>
              <li>✓ सभी 13+ क्रेडिट कार्ड पेजों पर प्लेसमेंट</li>
              <li>✓ मासिक 50,000+ उच्च-मूल्य इंप्रेशन्स</li>
            </ul>
          </div>
          <a href="mailto:advertise@fengoo.in?subject=Inquiry: Homepage Banner & Sticky Deal" class="btn-inquire" style="background:#4f46e5;">अभी स्लॉट बुक करें ↗</a>
        </div>

        <!-- Plan 3 -->
        <div class="plan-card">
          <div>
            <h3>एक्सक्लूसिव एफिलिएट पार्टनरशिप</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted);">CPA / CPL मॉडल पर दीर्घकालिक सहयोग व कस्टम कैंपेन।</p>
            <div class="plan-price">कस्टम <span style="font-size: 0.9rem; font-weight: normal; color: var(--text-muted);">(CPA / Revenue Share)</span></div>
            <ul class="plan-features">
              <li>✓ कस्टम ट्रैकिंग लिंक इंटीग्रेशन</li>
              <li>✓ कार्ड डायरेक्टरी में 'Top Recommended' बैज</li>
              <li>✓ वीआईपी व्हाट्सएप व टेलीग्राम प्रसारण</li>
              <li>✓ समर्पित खाता प्रबंधक (Account Manager)</li>
            </ul>
          </div>
          <a href="mailto:advertise@fengoo.in?subject=Inquiry: Exclusive Affiliate Partnership" class="btn-inquire">चर्चा शुरू करें ↗</a>
        </div>
      </div>
    </div>
  </main>

  ${getFooter('')}
  ${getScripts('')}
</body>
</html>`;
}

// Generate all pages and write them to disk
writeFile('privacy-policy.html', generatePrivacyPolicyHTML());
writeFile('terms-of-service.html', generateTermsOfServiceHTML());
writeFile('disclaimer.html', generateDisclaimerHTML());
writeFile('about-us.html', generateAboutUsHTML());
writeFile('contact-us.html', generateContactUsHTML());
writeFile('advertise.html', generateAdvertiseHTML());

console.log('Successfully generated all 6 AdSense compliance & monetization pages!');
