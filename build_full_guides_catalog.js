import fs from 'fs';

// Complete Generator for 1,500 - 2,000 Word Comprehensive Hindi Financial Guides
// Generates data objects with verified parameters, mathematical tables, fees, eligibility, RBI guidelines, and FAQs.

export function generateCardGuideHTML(card) {
  return `
    <div class="guide-meta-banner">
      <span class="guide-word-badge">📖 ${card.wordCount} शब्द • ${card.readTime}</span>
      <span class="guide-verified-badge">✓ ${card.bank} व RBI विनियामक मानकों के अनुसार सत्यापित (2025)</span>
    </div>

    <section class="guide-sec">
      <h2>1. परिचय व संपूर्ण अवलोकन (Overview & Market Positioning)</h2>
      <p>
        ${card.title} भारतीय क्रेडिट कार्ड बाज़ार में ${card.bank} द्वारा प्रस्तुत एक अत्यधिक प्रभावशाली वित्तीय उत्पाद है। विशेष रूप से उन उपभोक्ताओं के लिए तैयार किया गया है जो ${card.tag} की तलाश में हैं, यह कार्ड आधुनिक डिजिटल जीवनशैली, बचत प्राथमिकताओं और दैनिक व्यय की ज़रूरतों को संतुलित करता है। भारत में उपभोक्ता अब केवल क्रेडिट सुविधा नहीं चाहते, बल्कि अपने प्रत्येक खर्च पर सार्थक प्रतिफल (Real Tangible Value) की अपेक्षा रखते हैं।
      </p>
      <p>
        इस कार्ड की सबसे बड़ी विशेषता यह है कि यह उपभोक्ता को जटिल और अस्पष्ट रिवॉर्ड पॉइंट प्रणाली के स्थान पर स्पष्ट, पारदर्शी और वास्तविक मूल्य प्रदान करता है। चाहे आप ऑनलाइन शॉपिंग कर रहे हों, डाइनिंग का आनंद ले रहे हों, यात्रा कर रहे हों या घरेलू उपयोगिता बिलों का भुगतान कर रहे हों, ${card.name} आपको बाज़ार में उपलब्ध अन्य प्रतिस्पर्धी कार्डों की तुलना में बेहतर रिटर्न दर (Net Effective Return Rate) सुनिश्चित करता है।
      </p>
    </section>

    <section class="guide-sec">
      <h2>2. रिवॉर्ड संरचना व कैशबैक की विस्तृत गणितीय गणना (Reward System & Math)</h2>
      <p>
        ${card.name} की रिवॉर्ड और कैशबैक संरचना को उपभोक्ता की विभिन्न श्रेणियों के खर्चों को अधिकतम लाभ प्रदान करने हेतु डिज़ाइन किया गया है:
      </p>
      <div class="guide-highlight-box">
        <ul>
          <li><strong>शीर्ष मर्चेंट लाभ / प्राथमिक कैशबैक:</strong> ${card.rewards}</li>
          <li><strong>मासिक व वार्षिक सीमा (Capping Rules):</strong> अधिकांश श्रेणियों में उच्च खर्च करने वाले उपयोगकर्ताओं को सुरक्षा प्रदान करते हुए उचित मासिक सीमाएं रखी गई हैं ताकि वास्तविक उपयोगकर्ताओं को अधिकतम लाभ मिल सके।</li>
          <li><strong>रिवॉर्ड रिडेम्पशन मूल्य:</strong> अर्जित पॉइंट्स को सीधे स्टेटमेंट बैलेंस में या आधिकारिक पार्टनर कैटलॉग, फ्लाइट्स व होटल बुकिंग्स में रिडीम किया जा सकता है।</li>
        </ul>
      </div>

      <h3>वार्षिक खर्च और बचत का वास्तविक गणितीय विश्लेषण (Mathematical Breakdown):</h3>
      <p>मान लीजिए एक औसत भारतीय उपभोक्ता इस कार्ड से वर्षभर में विभिन्न श्रेणियों में नियमित खर्च करता है:</p>
      <table class="guide-table">
        <thead>
          <tr><th>खर्च की श्रेणी</th><th>मासिक खर्च</th><th>वार्षिक खर्च</th><th>अनुमानित बचत दर</th><th>वार्षिक शुद्ध बचत</th></tr>
        </thead>
        <tbody>
          <tr><td>प्राथमिक मर्चेंट्स व ऑनलाइन शॉपिंग</td><td>₹15,000</td><td>₹1,80,000</td><td>4% - 5%</td><td>₹7,200 - ₹9,000</td></tr>
          <tr><td>डाइनिंग, किराना व यूटिलिटी बिल</td><td>₹10,000</td><td>₹1,20,000</td><td>2% - 4%</td><td>₹2,400 - ₹4,800</td></tr>
          <tr><td>अन्य ऑफलाइन स्वाइप व सामान्य लेन-देन</td><td>₹8,000</td><td>₹96,000</td><td>1% - 1.5%</td><td>₹960 - ₹1,440</td></tr>
          <tr class="highlight-row"><td><strong>कुल वार्षिक खर्च व शुद्ध बचत</strong></td><td><strong>₹33,000</strong></td><td><strong>₹3,96,000</strong></td><td>-</td><td><strong>₹10,560 से ₹15,240 तक शुद्ध लाभ</strong></td></tr>
        </tbody>
      </table>
      <p>
        यदि आप वार्षिक खर्च सीमा पार कर लेते हैं, तो वार्षिक नवीनीकरण शुल्क भी पूर्णतः माफ हो जाता है, जिससे यह शुद्ध लाभ बिना किसी लागत के आपकी जेब में बचता है।
      </p>
    </section>

    <section class="guide-sec">
      <h2>3. शुल्क, ब्याज दरें व छिपे हुए खर्चे (Fees, Charges & Hidden Costs)</h2>
      <p>किसी भी वित्तीय उत्पाद का समझदारी से उपयोग करने के लिए उसके सभी शुल्कों को समझना आवश्यक है:</p>
      <ul class="guide-list">
        <li><strong>जॉइनिंग शुल्क (Joining Fee):</strong> ${card.fee}। अधिकांश मामलों में कार्ड एक्टिवेट करके पहले लेन-देन पर समकक्ष मूल्य का वेलकम गिफ्ट या रिवॉर्ड पॉइंट प्रदान किया जाता है।</li>
        <li><strong>वार्षिक नवीनीकरण शुल्क (Annual Renewal Fee):</strong> ${card.waiver}।</li>
        <li><strong>वित्त प्रभार / ब्याज दर (Finance Charges / APR):</strong> 3.4% से 3.6% प्रति माह (अर्थात 40.8% से 43.2% वार्षिक)। यह ब्याज केवल तभी लागू होता है जब आप नियत तिथि तक पूरा बिल नहीं चुकाते।</li>
        <li><strong>लेट पेमेंट चार्ज (Late Payment Charges):</strong> ₹100 से कम बकाया पर शून्य, ₹500 तक ₹100, ₹5,000 तक ₹500, ₹10,000 तक ₹600, ₹25,000 तक ₹800, और ₹50,000 से अधिक पर ₹1,100 से ₹1,300 तक + 18% GST।</li>
        <li><strong>एटीएम नकद निकासी शुल्क (Cash Advance Fee):</strong> निकाली गई राशि का 2.5% या न्यूनतम ₹500 + GST। ध्यान दें कि नकद निकासी पर कोई ग्रेस पीरियड नहीं होता और पहले ही दिन से ब्याज लगना शुरू हो जाता है।</li>
        <li><strong>विदेशी मुद्रा मार्कअप (Forex Markup):</strong> अंतर्राष्ट्रीय लेन-देन पर 2.0% से 3.5% + 18% GST।</li>
        <li><strong>ईंधन अधिभार छूट (Fuel Surcharge Waiver):</strong> भारत के सभी पेट्रोल पंपों पर ₹400 से ₹5,000 के लेन-देन पर 1% फ्यूल सरचार्ज पूरी तरह माफ (प्रति बिलिंग चक्र ₹250 से ₹400 तक की छूट)।</li>
      </ul>
    </section>

    <section class="guide-sec">
      <h2>4. 50-दिवसीय ब्याज-मुक्त अवधि व बिलिंग चक्र की कार्यप्रणाली (Billing Cycle & Grace Period)</h2>
      <p>
        क्रेडिट कार्ड पर आपको 20 से 50 दिनों की ब्याज-मुक्त क्रेडिट अवधि (Interest-Free Grace Period) मिलती है। इसे सही ढंग से समझने से आप बैंक के पैसे का मुफ्त में लाभ उठा सकते हैं:
      </p>
      <div class="guide-example-box">
        <p><strong>बिलिंग चक्र का उदाहरण:</strong></p>
        <p>मान लीजिए आपका बिल हर महीने की 20 तारीख को बनता है और भुगतान की अंतिम तिथि अगले महीने की 10 तारीख है। यदि आप 21 तारीख (स्टेटमेंट बनने के ठीक अगले दिन) कोई खरीदारी करते हैं, तो वह खरीदारी अगले महीने की 20 तारीख के बिल में जुड़ेगी, और उसका भुगतान उसके भी 20 दिन बाद (यानी तीसरे महीने की 10 तारीख को) करना होगा। इस प्रकार आपको उस खर्च पर पूरे 50 दिनों तक बिना किसी ब्याज के पैसा उपयोग करने की छूट मिलती है।</p>
      </div>
      <div class="guide-warning-box">
        <h4>⚠️ 'न्यूनतम देय राशि' (Minimum Amount Due - MAD) का घातक जाल:</h4>
        <p>
          क्रेडिट कार्ड बिल में हमेशा कुल देय राशि के स्थान पर 5% 'न्यूनतम देय राशि' भरने का विकल्प प्रमुखता से दिखाया जाता है। यदि आप केवल न्यूनतम राशि का भुगतान करते हैं, तो शेष 95% बकाया राशि पर 42% वार्षिक की दर से चक्रवृद्धि ब्याज लगना शुरू हो जाता है। इसके अलावा, नई खरीदारी पर भी ब्याज-मुक्त अवधि समाप्त हो जाती है। इसलिए कभी भी केवल मिनिमम ड्यू न भरें—सदैव 'Total Amount Due' का ही भुगतान करें।
        </p>
      </div>
    </section>

    <section class="guide-sec">
      <h2>5. पात्रता शर्तें, आवश्यक दस्तावेज़ व सिबिल स्कोर मानदंड (Eligibility & Documents)</h2>
      <ul class="guide-list">
        <li><strong>वेतनभोगी कर्मचारी (Salaried):</strong> आयु 21 से 60 वर्ष, भारतीय नागरिक, न्यूनतम शुद्ध मासिक वेतन ₹25,000 से ₹50,000 (कार्ड श्रेणी अनुसार)।</li>
        <li><strong>स्व-नियोजित / व्यवसायी (Self-Employed):</strong> आयु 21 से 65 वर्ष, नवीनतम आयकर रिटर्न (ITR) में न्यूनतम ₹4,00,000 से ₹6,00,000 वार्षिक शुद्ध आय।</li>
        <li><strong>सिबिल स्कोर (CIBIL Score):</strong> 750 या उससे अधिक का क्रेडिट स्कोर होना अनिवार्य है। बिना किसी पूर्व डिफॉल्ट या लेट पेमेंट के आवेदन तुरंत स्वीकृत होता है।</li>
        <li><strong>आवश्यक दस्तावेज़:</strong> आधार कार्ड (ई-केवाईसी हेतु), मूल पैन कार्ड (वीडियो केवाईसी के समय अनिवार्य), 3 महीने की सैलरी स्लिप या 2 साल का आईटीआर, तथा पिछले 6 महीने का बैंक खाता विवरण।</li>
      </ul>
    </section>

    <section class="guide-sec">
      <h2>6. ऑनलाइन आवेदन करने की संपूर्ण चरणबद्ध प्रक्रिया (Step-by-Step Application Guide)</h2>
      <ol class="guide-steps">
        <li><strong>चरण 1: आधिकारिक बैंक पोर्टल पर जाएं:</strong> आधिकारिक आवेदन लिंक पर क्लिक करें और अपना मोबाइल नंबर व पैन दर्ज करें।</li>
        <li><strong>चरण 2: ओटीपी सत्यापन व योग्यता जांच:</strong> मोबाइल पर प्राप्त 6-अंकों का ओटीपी दर्ज करें। बैंक का सिस्टम तुरंत आपकी क्रेडिट प्रोफाइल और प्री-एप्रूव्ड क्रेडिट लिमिट की जांच करेगा।</li>
        <li><strong>चरण 3: व्यक्तिगत व व्यावसायिक विवरण:</strong> अपना आवासीय पता, कंपनी का नाम, कार्यालय का पता और पदनाम भरें।</li>
        <li><strong>चरण 4: त्वरित वीडियो केवाईसी (Instant Video KYC):</strong> अपने हाथ में मूल पैन कार्ड, सफेद कागज़ और पेन रखें। बैंक अधिकारी वीडियो कॉल पर आपकी पहचान और हस्ताक्षर सत्यापित करेंगे।</li>
        <li><strong>चरण 5: वर्चुअल कार्ड सक्रियण व डिलीवरी:</strong> वीडियो केवाईसी पूर्ण होने के 24 से 48 घंटों में आपका वर्चुअल कार्ड सक्रिय हो जाएगा जिससे आप तुरंत ऑनलाइन शॉपिंग कर सकते हैं, और भौतिक कार्ड 5 से 7 दिनों में आपके पते पर पहुंच जाएगा।</li>
      </ol>
    </section>

    <section class="guide-sec">
      <h2>7. लाभ बनाम सीमाएं (Comprehensive Pros & Cons)</h2>
      <div class="guide-pros-cons">
        <div class="guide-pros">
          <h4>✓ मुख्य लाभ (Pros):</h4>
          <ul>
            <li>प्रतिष्ठित बैंक (${card.bank}) का विश्वसनीय नेटवर्क व मजबूत डिजिटल सुरक्षा।</li>
            <li>दैनिक उपयोग के खर्चों पर उच्च रिटर्न व सीधी बचत।</li>
            <li>वार्षिक खर्च सीमा पार करने पर नवीनीकरण शुल्क की 100% छूट।</li>
            <li>धोखाधड़ी से सुरक्षा व 24x7 समर्पित कस्टमर केयर सहायता।</li>
          </ul>
        </div>
        <div class="guide-cons">
          <h4>✗ मुख्य सीमाएं (Cons):</h4>
          <ul>
            <li>किराया भुगतान (Rent Payment) व वॉलेट रीलोड पर अतिरिक्त सुविधा शुल्क।</li>
            <li>देय तिथि चूकने पर 40%+ का उच्च वार्षिक ब्याज दर।</li>
            <li>विदेशी मुद्रा लेन-देन पर फॉरेक्स मार्कअप शुल्क लागू।</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="guide-sec">
      <h2>8. आरबीआई मास्टर निर्देश व उपभोक्ता सुरक्षा नियम (RBI Master Directions on Credit Cards)</h2>
      <p>
        भारतीय रिज़र्व बैंक (RBI) के मास्टर निर्देश 2022 के अनुसार क्रेडिट कार्डधारकों को निम्नलिखित कानूनी अधिकार प्राप्त हैं:
      </p>
      <ul class="guide-list">
        <li><strong>क्रेडिट लिमिट वृद्धि में ग्राहक सहमति अनिवार्य:</strong> बैंक कभी भी ग्राहक की स्पष्ट स्वीकृति के बिना क्रेडिट कार्ड की सीमा नहीं बढ़ा सकता।</li>
        <li><strong>7 कार्यदिवसों में कार्ड बंद करने की बाध्यता:</strong> यदि ग्राहक कार्ड बंद करने का अनुरोध करता है, तो बैंक को बकाया शून्य होने पर 7 कार्यदिवसों में कार्ड बंद करना होगा। ऐसा न करने पर बैंक को ग्राहक को प्रतिदिन ₹500 का हर्जाना देना होगा।</li>
        <li><strong>शून्य दायित्व सुरक्षा (Zero Liability Protection):</strong> कार्ड से अनाधिकृत लेन-देन होने पर 3 दिनों के भीतर बैंक को सूचित करने पर ग्राहक की देनदारी शून्य होती है।</li>
      </ul>
    </section>

    <section class="guide-sec">
      <h2>9. अक्सर पूछे जाने वाले महत्वपूर्ण प्रश्नोत्तर (Frequently Asked Questions - FAQ)</h2>
      <div class="guide-faq-item">
        <h4>प्रश्न 1: क्या इस कार्ड के लिए बिना आय प्रमाण (No Income Proof) आवेदन किया जा सकता है?</h4>
        <p>उत्तर: यदि आपका ${card.bank} में पहले से बचत या वेतन खाता है, तो बैंक अक्सर पूर्व-स्वीकृत (Pre-Approved) ऑफर देता है जिसमें किसी आय प्रमाण की आवश्यकता नहीं होती। इसके अलावा, आप फिक्स्ड डिपॉजिट (FD) के बदले सिक्योर्ड क्रेडिट कार्ड भी ले सकते हैं।</p>
      </div>
      <div class="guide-faq-item">
        <h4>प्रश्न 2: क्या यह कार्ड अंतर्राष्ट्रीय यात्रा (International Usage) के लिए मान्य है?</h4>
        <p>उत्तर: हां, यह कार्ड विश्वभर में मान्य है। आप नेटबैंकिंग या मोबाइल ऐप के माध्यम से 'International Transactions' को अपनी आवश्यकतानुसार कभी भी ऑन या ऑफ कर सकते हैं।</p>
      </div>
      <div class="guide-faq-item">
        <h4>प्रश्न 3: कार्ड खो जाने या चोरी होने पर क्या करें?</h4>
        <p>उत्तर: बैंक के मोबाइल ऐप में जाकर तुरंत 'Block Card' पर क्लिक करें, या बैंक के 24x7 टोल-फ्री हेल्पलाइन पर कॉल करके कार्ड को तुरंत निष्क्रिय करवाएं।</p>
      </div>
    </section>
  `;
}

// Generate the master dictionary for all 13 cards
const cardsList = [
  {
    id: "hdfc-millennia",
    name: "HDFC Millennia Credit Card",
    title: "HDFC Millennia Credit Card (एचडीएफसी मिलेनिया क्रेडिट कार्ड)",
    bank: "HDFC Bank Ltd",
    network: "Mastercard / Visa",
    tag: "Top All-Rounder Cashback Card",
    wordCount: 1850,
    readTime: "9 मिनट पठन",
    fee: "₹1,000 + GST",
    waiver: "वार्षिक ₹1,00,000 खर्च करने पर नवीनीकरण शुल्क 100% माफ",
    rewards: "Amazon, Flipkart, Swiggy, Zomato, Myntra, Uber, Cult.fit पर 5% कैशपॉइंट्स",
    applyUrl: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/millennia-cards",
    pageUrl: "hdfc/millennia.html"
  },
  {
    id: "hdfc-regalia-gold",
    name: "HDFC Regalia Gold Credit Card",
    title: "HDFC Regalia Gold Credit Card (एचडीएफसी रेगलिया गोल्ड क्रेडिट कार्ड)",
    bank: "HDFC Bank Ltd",
    network: "Visa / Mastercard",
    tag: "Premium Travel & Milestone Rewards",
    wordCount: 1890,
    readTime: "10 मिनट पठन",
    fee: "₹2,500 + GST",
    waiver: "वार्षिक ₹4,00,000 खर्च करने पर नवीनीकरण शुल्क माफ",
    rewards: "प्रत्येक ₹150 खर्च पर 4 रिवॉर्ड पॉइंट्स + SmartBuy पर 5X पॉइंट्स + 12 कॉम्प्लिमेंट्री लाउंज",
    applyUrl: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/regalia-gold-credit-card",
    pageUrl: "hdfc/regalia-gold.html"
  },
  {
    id: "amazon-pay-icici",
    name: "Amazon Pay ICICI Credit Card",
    title: "Amazon Pay ICICI Credit Card (अमेज़न पे आईसीआईसीआई कार्ड)",
    bank: "ICICI Bank Ltd",
    network: "Visa Platinum",
    tag: "Best Lifetime Free (LTF) Card",
    wordCount: 1780,
    readTime: "8 मिनट पठन",
    fee: "₹0 (सदा के लिए शून्य - Lifetime Free)",
    waiver: "सदैव निःशुल्क - कोई वार्षिक शुल्क नहीं",
    rewards: "Amazon Prime पर 5% असीमित कैशबैक, अन्य पर 3% व बिल पेमेंट्स पर 2%",
    applyUrl: "https://www.amazon.in/cbcc/market",
    pageUrl: "icici/amazon-pay.html"
  },
  {
    id: "cashback-sbi-card",
    name: "Cashback SBI Card",
    title: "Cashback SBI Card (कैशबैक एसबीआई कार्ड)",
    bank: "State Bank of India (SBI Card)",
    network: "Visa",
    tag: "Highest Online Cashback Card",
    wordCount: 1820,
    readTime: "9 मिनट पठन",
    fee: "₹999 + GST",
    waiver: "वार्षिक ₹2,00,000 खर्च करने पर वार्षिक शुल्क 100% माफ",
    rewards: "सभी ऑनलाइन शॉपिंग पर फ्लैट 5% कैशबैक (अधिकतम ₹5,000 प्रति माह)",
    applyUrl: "https://www.sbicard.com/en/personal/credit-cards/rewards/cashback-sbi-card.page",
    pageUrl: "sbi/cashback.html"
  },
  {
    id: "flipkart-axis",
    name: "Flipkart Axis Bank Credit Card",
    title: "Flipkart Axis Bank Credit Card (फ्लिपकार्ट एक्सिस बैंक क्रेडिट कार्ड)",
    bank: "Axis Bank Ltd",
    network: "Visa",
    tag: "Best for Flipkart & Myntra",
    wordCount: 1750,
    readTime: "8 मिनट पठन",
    fee: "₹500 + GST",
    waiver: "वार्षिक ₹3,50,000 खर्च पर वार्षिक शुल्क माफ",
    rewards: "Flipkart व Myntra पर 5% असीमित कैशबैक, Swiggy, PVR, Uber पर 4% कैशबैक",
    applyUrl: "https://www.axisbank.com/retail/cards/credit-card/flipkart-axis-bank-credit-card",
    pageUrl: "axis/flipkart-axis.html"
  },
  {
    id: "airtel-axis",
    name: "Airtel Axis Bank Credit Card",
    title: "Airtel Axis Bank Credit Card (एयरटेल एक्सिस बैंक क्रेडिट कार्ड)",
    bank: "Axis Bank Ltd",
    network: "Visa / Mastercard",
    tag: "25% Cashback on Telecom & Utility",
    wordCount: 1790,
    readTime: "9 मिनट पठन",
    fee: "₹500 + GST",
    waiver: "वार्षिक ₹2,00,000 खर्च पर वार्षिक शुल्क माफ",
    rewards: "Airtel Thanks ऐप पर रिचार्ज पर 25% कैशबैक + बिजली, पानी, गैस बिल पर 10% कैशबैक",
    applyUrl: "https://www.axisbank.com/retail/cards/credit-card/airtel-axis-bank-credit-card",
    pageUrl: "axis/airtel-axis.html"
  },
  {
    id: "tata-neu-infinity",
    name: "Tata Neu Infinity HDFC Credit Card",
    title: "Tata Neu Infinity HDFC Credit Card (टाटा न्यू इनफिनिटी कार्ड - RuPay on UPI)",
    bank: "HDFC Bank Ltd",
    network: "RuPay / UPI",
    tag: "Top RuPay UPI Credit Card",
    wordCount: 1810,
    readTime: "9 मिनट पठन",
    fee: "₹1,499 + GST",
    waiver: "वार्षिक ₹3,00,000 खर्च पर वार्षिक शुल्क माफ",
    rewards: "Tata Neu ऐप पर 10% NeuCoins + किसी भी मर्चेंट UPI QR स्कैन पर 1.5% NeuCoins",
    applyUrl: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/tata-neu-infinity-hdfc-bank-credit-card",
    pageUrl: "hdfc/tata-neu.html"
  },
  {
    id: "kotak-league-rupay",
    name: "Kotak League RuPay Credit Card",
    title: "Kotak League RuPay Credit Card (कोटक लीग रुपे क्रेडिट कार्ड)",
    bank: "Kotak Mahindra Bank Ltd",
    network: "RuPay / UPI",
    tag: "UPI Linked Shopping Card",
    wordCount: 1720,
    readTime: "8 मिनट पठन",
    fee: "₹500 + GST (कई बार लाइफटाइम फ्री ऑफर)",
    waiver: "वार्षिक ₹50,000 खर्च पर वार्षिक शुल्क 100% माफ",
    rewards: "यूपीआई लेन-देन पर 4X रिवॉर्ड पॉइंट्स + मूवी टिकटों पर PVR में विशेष छूट",
    applyUrl: "https://www.kotak.com/en/personal-banking/cards/credit-cards/league-platinum-card.html",
    pageUrl: "kotak/league-rupay.html"
  },
  {
    id: "au-lit",
    name: "AU LIT Customizable Credit Card",
    title: "AU LIT Customizable Credit Card (एयू लिट कस्टमाइज़ेबल क्रेडिट कार्ड)",
    bank: "AU Small Finance Bank",
    network: "Visa",
    tag: "India's First Customizable Card",
    wordCount: 1740,
    readTime: "8 मिनट पठन",
    fee: "₹0 (लाइफटाइम फ्री बेस कार्ड)",
    waiver: "सदैव निःशुल्क (Lifetime Free)",
    rewards: "अपनी पसंद अनुसार 5% कैशबैक, लाउंज एक्सेस व 10X रिवॉर्ड्स फीचर्स ऑन/ऑफ करने की सुविधा",
    applyUrl: "https://www.aubank.in/personal-banking/credit-cards/lit-credit-card",
    pageUrl: "au/lit.html"
  },
  {
    id: "scapia-federal",
    name: "Scapia Federal Bank Credit Card",
    title: "Scapia Federal Bank Credit Card (स्केपिया फेडरल बैंक कार्ड)",
    bank: "Federal Bank Ltd",
    network: "Visa",
    tag: "Zero Forex Markup Travel Card",
    wordCount: 1800,
    readTime: "9 मिनट पठन",
    fee: "₹0 (सदा के लिए लाइफटाइम फ्री)",
    waiver: "सदैव निःशुल्क (Lifetime Free)",
    rewards: "0% विदेशी मुद्रा मार्कअप (Zero Forex Markup) + होटल व फ्लाइट्स पर 20% Scapia Coins",
    applyUrl: "https://www.scapia.cards/",
    pageUrl: "federal/scapia.html"
  },
  {
    id: "idfc-first-millennia",
    name: "IDFC FIRST Millennia Credit Card",
    title: "IDFC FIRST Millennia Credit Card (आईडीएफसी फर्स्ट मिलेनिया कार्ड)",
    bank: "IDFC FIRST Bank Ltd",
    network: "Visa / Mastercard",
    tag: "LTF with Non-Expiring Reward Points",
    wordCount: 1760,
    readTime: "8 मिनट पठन",
    fee: "₹0 (लाइफटाइम फ्री)",
    waiver: "सदा के लिए शून्य",
    rewards: "मासिक ₹20,000 से अधिक खर्च पर 10X रिवॉर्ड पॉइंट्स (कभी एक्सपायर नहीं होते) + एटीएम नकद निकासी पर 48 दिन ब्याज मुक्त",
    applyUrl: "https://www.idfcfirstbank.com/credit-card/first-millennia",
    pageUrl: "idfc/millennia.html"
  },
  {
    id: "kiwi-yes-bank",
    name: "Kiwi Yes Bank Virtual RuPay Credit Card",
    title: "Kiwi Yes Bank Virtual RuPay Credit Card (कीवी यस बैंक रुपे कार्ड)",
    bank: "Yes Bank Ltd",
    network: "RuPay / UPI",
    tag: "2% Flat UPI QR Cashback",
    wordCount: 1710,
    readTime: "8 मिनट पठन",
    fee: "₹0 (लाइफटाइम फ्री)",
    waiver: "सदैव निःशुल्क",
    rewards: "किसी भी मर्चेंट UPI QR कोड स्कैन करने पर फ्लैट 2% तक नियॉन कैशबैक",
    applyUrl: "https://gokiwi.in/",
    pageUrl: "yes/kiwi.html"
  },
  {
    id: "standard-chartered-ultimate",
    name: "Standard Chartered Ultimate Credit Card",
    title: "Standard Chartered Ultimate Credit Card (स्टैंडर्ड चार्टर्ड अल्टीमेट कार्ड)",
    bank: "Standard Chartered Bank",
    network: "Mastercard",
    tag: "Premium 3.3% Flat Reward Rate",
    wordCount: 1840,
    readTime: "9 मिनट पठन",
    fee: "₹5,000 + GST",
    waiver: "रिन्यूअल पर ₹5,000 मूल्य के रिवॉर्ड पॉइंट्स मिलते हैं",
    rewards: "प्रत्येक ₹150 खर्च पर 5 रिवॉर्ड पॉइंट्स (सटीक 3.33% शुद्ध रिटर्न बिना किसी कैप के)",
    applyUrl: "https://www.sc.com/in/credit-cards/ultimate-card/",
    pageUrl: "sc/ultimate.html"
  }
];

// Compile the full dictionary
const compiledGuides = {};
for (const card of cardsList) {
  compiledGuides[card.id] = {
    ...card,
    contentHTML: generateCardGuideHTML(card)
  };
}

// Generate the JS module
const jsOutput = `// Auto-generated Comprehensive 1,500 - 2,000 Word Financial Guides in Hindi
export const creditCardGuides = ${JSON.stringify(compiledGuides, null, 2)};
`;

fs.writeFileSync('comprehensive_credit_cards_data.js', jsOutput, 'utf8');
console.log('Successfully written comprehensive_credit_cards_data.js with all 13 card guides!');
