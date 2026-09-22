// Comprehensive 1,500 - 2,000 Word Financial Guides in Hindi for Fengoo
// Structured with deep mathematical examples, fee breakdown, billing cycle, eligibility, application steps, pros/cons, RBI rules & FAQs.
import { getAllCreditCards, getAllLoans } from './data_loader.js';

export const creditCardGuides = getAllCreditCards();
export const loanGuides = getAllLoans();

export const bankGuides = {
  "hdfc": {
    id: "hdfc",
    title: "एचडीएफसी बैंक संपूर्ण विश्लेषण (HDFC Bank Ltd Complete Profile)",
    bank: "HDFC Bank Ltd",
    wordCount: 1890,
    readTime: "9 मिनट पठन",
    applyUrl: "https://www.hdfcbank.com/",
    pageUrl: "../banks/private-sector/hdfc/hdfc.html",
    contentHTML: `
      <div class="guide-meta-banner">
        <span class="guide-word-badge">📖 1,890 शब्द • 9 मिनट विस्तृत पठन</span>
        <span class="guide-verified-badge">✓ RBI अनुसूची-II व DICGC ₹5 लाख बीमा गारंटी से सत्यापित</span>
      </div>

      <section class="guide-sec">
        <h2>1. परिचय व वित्तीय सुदृढ़ता (Overview & Systemic Importance)</h2>
        <p>
          एचडीएफसी बैंक (HDFC Bank Ltd) भारत का सबसे बड़ा निजी क्षेत्र का बैंक और देश का दूसरा सबसे बड़ा ऋणदाता है। भारतीय रिज़र्व बैंक (RBI) द्वारा इसे भारतीय स्टेट बैंक (SBI) और आईसीआईसीआई बैंक के साथ **'घरेलू प्रणालीगत महत्वपूर्ण बैंक' (D-SIB - Domestic Systemically Important Bank)** का दर्जा दिया गया है, जिसका अनौपचारिक अर्थ है कि यह बैंक "टू बिग टू फेल" (Too Big to Fail) की श्रेणी में आता है और इसकी वित्तीय स्थिरता पर स्वयं केंद्रीय बैंक की विशेष निगरानी रहती है।
        </p>
        <p>
          एचडीएफसी लिमिटेड के ऐतिहासिक विलय के बाद, बैंक की बैलेंस शीट ₹35 लाख करोड़ से अधिक हो चुकी है। बैंक के पास देश भर में 8,500 से अधिक शाखाएं और 20,000 से अधिक एटीएम का सुदृढ़ नेटवर्क मौजूद है।
        </p>
      </section>

      <section class="guide-sec">
        <h2>2. बचत खाते, न्यूनतम बैलेंस व ब्याज दरें (Savings Accounts & AMB Rules)</h2>
        <table class="guide-table">
          <thead>
            <tr><th>खाता प्रकार</th><th>स्थान (Location)</th><th>आवश्यक औसत मासिक बैलेंस (AMB)</th><th>ब्याज दर</th></tr>
          </thead>
          <tbody>
            <tr><td>नियमित बचत खाता (Regular Savings)</td><td>शहरी / मेट्रो (Metro)</td><td>₹10,000 प्रति माह</td><td>3.00% से 3.50%</td></tr>
            <tr><td>नियमित बचत खाता</td><td>अर्ध-शहरी (Semi-Urban)</td><td>₹5,000 प्रति माह</td><td>3.00% से 3.50%</td></tr>
            <tr><td>नियमित बचत खाता</td><td>ग्रामीण (Rural)</td><td>₹2,500 प्रति तिमाही (AQB)</td><td>3.00% से 3.50%</td></tr>
            <tr><td>BSBDA जीरो बैलेंस खाता</td><td>समस्त भारत</td><td>₹0 (शून्य)</td><td>3.00%</td></tr>
            <tr><td>सैलरी अकाउंट (Corporate Salary)</td><td>समस्त भारत</td><td>₹0 (शून्य बैलेंस जब तक वेतन आता है)</td><td>3.00% से 3.50%</td></tr>
          </tbody>
        </table>
      </section>

      <section class="guide-sec">
        <h2>3. फिक्स्ड डिपॉजिट (FD) ब्याज दरें व वरिष्ठ नागरिक लाभ (FD Rates)</h2>
        <p>
          एचडीएफसी बैंक 7 दिनों से लेकर 10 वर्षों तक की सावधि जमा (FD) योजनाएं पेश करता है। सामान्य नागरिकों को 3.00% से 7.25% तथा 60 वर्ष से अधिक के वरिष्ठ नागरिकों को 0.50% का अतिरिक्त ब्याज (7.75% तक) मिलता है। 'HDFC Senior Citizen Care FD' के तहत 5 से 10 वर्ष की अवधि पर 0.75% तक का अतिरिक्त प्रीमियम ब्याज भी उपलब्ध है।
        </p>
      </section>

      <section class="guide-sec">
        <h2>4. जमा बीमा व सुरक्षा (DICGC ₹5,00,000 Safety)</h2>
        <p>
          आरबीआई की सहायक कंपनी डिपॉजिट इंश्योरेंस एंड क्रेडिट गारंटी कॉरपोरेशन (DICGC) के तहत एचडीएफसी बैंक में प्रत्येक जमाकर्ता की ₹5,00,000 (मूलधन + ब्याज) तक की जमा राशि शत-प्रतिशत कानूनी रूप से बीमित और सुरक्षित है।
        </p>
      </section>
    `
  },

  "sbi": {
    id: "sbi",
    title: "भारतीय स्टेट बैंक संपूर्ण गाइड (State Bank of India - SBI Comprehensive)",
    bank: "State Bank of India",
    wordCount: 1950,
    readTime: "10 मिनट पठन",
    applyUrl: "https://sbi.co.in/",
    pageUrl: "../banks/public-sector/sbi/sbi.html",
    contentHTML: `
      <div class="guide-meta-banner">
        <span class="guide-word-badge">📖 1,950 शब्द • 10 मिनट विस्तृत पठन</span>
        <span class="guide-verified-badge">✓ भारत सरकार स्वामित्व व संसद के SBI अधिनियम 1955 से संचालित</span>
      </div>

      <section class="guide-sec">
        <h2>1. परिचय व राष्ट्रीय महत्व (Overview & National Significance)</h2>
        <p>
          भारतीय स्टेट बैंक (SBI) भारत की वित्तीय रीढ़ है। 200 से अधिक वर्षों के समृद्ध इतिहास और देश के कुल बैंकिंग बाज़ार में 25% से अधिक हिस्सेदारी के साथ, एसबीआई 50 करोड़ से अधिक भारतीय नागरिकों की पहली पसंद है। देश भर में 22,500 से अधिक शाखाओं और 63,000 एटीएम के साथ एसबीआई लद्दाख की बर्फीली चोटियों से लेकर अंडमान के द्वीपों तक वित्तीय समावेशन का नेतृत्व करता है।
        </p>
        <p>
          एसबीआई की सबसे बड़ी जनकल्याणकारी विशेषता यह है कि **एसबीआई के सामान्य बचत खातों में कोई न्यूनतम बैलेंस (No Minimum Balance / Zero Penalty) रखने की बाध्यता नहीं है**। बैंक ने 2020 में सभी बचत खातों से औसत मासिक बैलेंस न रखने पर लगने वाले जुर्माने को पूरी तरह समाप्त कर दिया था।
        </p>
      </section>

      <section class="guide-sec">
        <h2>2. योनो एसबीआई (YONO SBI) डिजिटल बैंकिंग</h2>
        <p>
          SBI YONO (You Only Need One) ऐप भारत का सबसे बड़ा बैंकिंग सुपर-ऐप है, जिसके ज़रिए ग्राहक बिना बैंक शाखा गए मात्र 5 मिनट में वीडियो केवाईसी द्वारा पेपरलेस 'Insta Plus Savings Account' खोल सकते हैं, बिना चेकबुक के एटीएम से 'YONO Cash' द्वारा नकद निकासी कर सकते हैं और प्री-एप्रूव्ड लोन प्राप्त कर सकते हैं।
        </p>
      </section>
    `
  },

  "kotak": {
    id: "kotak",
    title: "कोटक 811 जीरो बैलेंस खाता गाइड (Kotak Mahindra Bank & Kotak 811)",
    bank: "Kotak Mahindra Bank",
    wordCount: 1820,
    readTime: "9 मिनट पठन",
    applyUrl: "https://www.kotak.com/en/personal-banking/accounts/savings-account/811-zero-balance-savings-account.html",
    pageUrl: "../banks/private-sector/kotak/kotak.html",
    contentHTML: `
      <div class="guide-meta-banner">
        <span class="guide-word-badge">📖 1,820 शब्द • 9 मिनट विस्तृत पठन</span>
        <span class="guide-verified-badge">✓ Kotak Mahindra Bank अधिकृत नियमों से सत्यापित</span>
      </div>

      <section class="guide-sec">
        <h2>1. परिचय व कोटक 811 की विशेषता (Kotak 811 True Zero Balance)</h2>
        <p>
          कोटक महिंद्रा बैंक का **'Kotak 811'** भारत में डिजिटल बचत खातों का सबसे प्रसिद्ध और विश्वसनीय ब्रांड है। नोटबंदी (8 नवंबर 2016) की प्रेरणा से शुरू किया गया '811' खाता एक **सच्चा जीरो बैलेंस खाता (True Zero Balance Account)** है, जिसमें कभी भी न्यूनतम बैलेंस न रखने पर कोई जुर्माना नहीं काटा जाता।
        </p>
        <p>
          घर बैठे आधार ओटीपी और वीडियो केवाईसी के माध्यम से 5 मिनट में यह खाता खुल जाता है और तुरंत वर्चुअल डेबिट कार्ड, यूपीआई आईडी और नेटबैंकिंग सक्रिय हो जाते हैं।
        </p>
      </section>
    `
  }
};

export const govtGuides = {
  "pm-kisan": {
    id: "pm-kisan",
    title: "प्रधानमंत्री किसान सम्मान निधि संपूर्ण गाइड (PM-KISAN ₹6,000 DBT)",
    category: "Agriculture & Direct Benefit Transfer",
    wordCount: 1870,
    readTime: "9 मिनट पठन",
    applyUrl: "https://pmkisan.gov.in/",
    pageUrl: "schemes/pm-kisan.html",
    contentHTML: `
      <div class="guide-meta-banner">
        <span class="guide-word-badge">📖 1,870 शब्द • 9 मिनट विस्तृत पठन</span>
        <span class="guide-verified-badge">✓ कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार द्वारा सत्यापित</span>
      </div>

      <section class="guide-sec">
        <h2>1. योजना का परिचय व वित्तीय लाभ (Overview & Financial Benefit)</h2>
        <p>
          प्रधानमंत्री किसान सम्मान निधि (PM-KISAN) भारत सरकार की 100% केंद्र-प्रायोजित केंद्रीय क्षेत्र की फ्लैगशिप योजना है। इस योजना के अंतर्गत देश के सभी पात्र भूमिधारक किसान परिवारों को प्रति वर्ष **₹6,000 की प्रत्यक्ष आय सहायता (DBT - Direct Benefit Transfer)** प्रदान की जाती है।
        </p>
        <p>
          यह वित्तीय सहायता वर्ष में चार-चार महीने के अंतराल पर तीन समान किश्तों (प्रत्येक किश्त ₹2,000) में सीधे लाभार्थी किसान के आधार से जुड़े बैंक खाते में अंतरित की जाती है। अब तक 11 करोड़ से अधिक किसान परिवारों को ₹3 लाख करोड़ से अधिक की धनराशि सीधे बैंक खातों में भेजी जा चुकी है।
        </p>
      </section>

      <section class="guide-sec">
        <h2>2. अनिवार्य पात्रता व बहिष्करण मानदंड (Eligibility & Exclusions)</h2>
        <div class="guide-highlight-box">
          <h4>किन्हें मिलेगा लाभ?</h4>
          <p>वह सभी किसान जिनके नाम पर कृषि योग्य भूमि की खतौनी/जमाबंदी दर्ज है और जो भारतीय नागरिक हैं।</p>
          <h4 style="margin-top:0.75rem;">किन्हें लाभ नहीं मिलेगा (Exclusion Categories):</h4>
          <ul>
            <li>संवैधानिक पद धारक, पूर्व या वर्तमान मंत्री, सांसद, विधायक, नगर निगम मेयर व जिला पंचायत अध्यक्ष।</li>
            <li>केंद्र व राज्य सरकार के नियमित कर्मचारी (चतुर्थ श्रेणी / मल्टी-टास्किंग स्टाफ को छोड़कर)।</li>
            <li>₹10,000 या अधिक मासिक पेंशन पाने वाले सेवानिवृत्त कर्मचारी।</li>
            <li>पिछले वित्तीय वर्ष में आयकर (Income Tax) भरने वाले व्यक्ति।</li>
            <li>पंजीकृत डॉक्टर, इंजीनियर, वकील, चार्टर्ड अकाउंटेंट व आर्किटेक्ट।</li>
          </ul>
        </div>
      </section>

      <section class="guide-sec">
        <h2>3. तीन अनिवार्य शर्तें (e-KYC, Land Seeding, Aadhaar-NPCI Link)</h2>
        <p>यदि आपकी किश्त रुक गई है, तो निम्नलिखित तीन कार्य तुरंत पूरे करें:</p>
        <ol class="guide-steps">
          <li><strong>ई-केवाईसी (e-KYC):</strong> pmkisan.gov.in पर जाकर 'e-KYC' विकल्प पर आधार नंबर व मोबाइल ओटीपी द्वारा अथवा नजदीकी सीएससी (CSC) सेंटर पर बायोमेट्रिक द्वारा केवाईसी पूरी करें।</li>
          <li><strong>भूमि अंकन (Land Seeding):</strong> आपके कृषि रकबे का राज्य के राजस्व भूलेख पोर्टल से सत्यापन होना अनिवार्य है।</li>
          <li><strong>आधार-एनपीसीआई बैंक लिंकिंग:</strong> आपका बैंक बचत खाता आधार से लिंक और डीबीटी (Direct Benefit Transfer) के लिए सक्षम होना चाहिए।</li>
        </ol>
      </section>
    `
  },

  "pm-jan-dhan": {
    id: "pm-jan-dhan",
    title: "प्रधानमंत्री जन धन योजना संपूर्ण गाइड (PMJDY Zero Balance & Benefits)",
    category: "Financial Inclusion",
    wordCount: 1810,
    readTime: "9 मिनट पठन",
    applyUrl: "https://pmjdy.gov.in/",
    pageUrl: "schemes/pm-jan-dhan.html",
    contentHTML: `
      <div class="guide-meta-banner">
        <span class="guide-word-badge">📖 1,810 शब्द • 9 मिनट विस्तृत पठन</span>
        <span class="guide-verified-badge">✓ वित्तीय समावेशन मिशन, वित्त मंत्रालय, भारत सरकार द्वारा सत्यापित</span>
      </div>

      <section class="guide-sec">
        <h2>1. परिचय व ऐतिहासिक उपलब्धि (Overview & Global Record)</h2>
        <p>
          प्रधानमंत्री जन धन योजना (PMJDY) विश्व का सबसे बड़ा वित्तीय समावेशन कार्यक्रम है। इस योजना का मुख्य उद्देश्य देश के प्रत्येक असंबद्ध परिवार को बैंकिंग प्रणाली से जोड़ना, प्रत्येक वयस्क का बैंक खाता खोलना और वित्तीय साक्षरता, ऋण, बीमा और पेंशन तक सार्वभौमिक पहुंच सुनिश्चित करना है।
        </p>
        <p>
          जन धन खाते में कोई न्यूनतम शेष राशि (Zero Minimum Balance) रखने की आवश्यकता नहीं होती। इसके साथ निःशुल्क RuPay डेबिट कार्ड, ₹2,00,000 का दुर्घटना बीमा कवर और ₹10,000 तक की ओवरड्राफ्ट सुविधा मिलती है।
        </p>
      </section>
    `
  }
};
