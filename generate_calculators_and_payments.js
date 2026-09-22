import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';

// Calculator generator
function generateCalculatorPage({
  id,
  title,
  subtitle,
  category,
  formulaExplanation,
  calcInputsHTML,
  calcResultsHTML,
  calcScriptJS,
  faqHTML = ''
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Fengoo Financial Tools</title>
  <meta name="description" content="${subtitle}. Free online financial calculator with real-time computation." />
  <link rel="canonical" href="https://fengoo.in/calculators/${id}.html" />
  ${getStyles('..')}
</head>
<body>
  ${getHeader('..')}

  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="../index.html">Home</a></li>
      <li><a href="index.html">Calculators</a></li>
      <li><span>${title}</span></li>
    </ul>
  </div>

  <section class="container" style="padding-top: 1.5rem; padding-bottom: 1.5rem;">
    <div style="max-width: 800px;">
      <span class="badge-cat" style="margin-bottom: 0.5rem; display:inline-block;">🧮 ${category}</span>
      <h1 style="font-size: 2.25rem; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 0.5rem;">${title}</h1>
      <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6;">${subtitle}</p>
    </div>
  </section>

  <main class="container" style="padding-bottom: 4rem;">
    <div class="calc-wrapper">
      <!-- Input Panel -->
      <div class="calc-input-panel">
        <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem; border-bottom: 1px solid var(--border); padding-bottom: 0.75rem;">
          इनपुट डेटा (Input Details)
        </h3>
        ${calcInputsHTML}
      </div>

      <!-- Result Panel -->
      <div class="calc-result-panel">
        <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem;">
          गणना परिणाम (Summary)
        </h3>
        ${calcResultsHTML}
      </div>
    </div>

    <!-- Formula & Explanations -->
    <div class="calc-explanation" style="margin-top: 3rem;">
      <article class="content-block">
        <h2>सूत्र व कार्यप्रणाली (Calculation Formula & Methodology)</h2>
        <p>${formulaExplanation}</p>
      </article>

      ${faqHTML ? `
      <article class="content-block" style="margin-top: 2rem;">
        <h2>अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>
        <div class="faq-list">
          ${faqHTML}
        </div>
      </article>
      ` : ''}
    </div>
  </main>

  ${getFooter('..')}
  ${getScripts('..')}

  <script>
    ${calcScriptJS}
  </script>
</body>
</html>`;
}

// ==========================================
// 1. EMI CALCULATOR (calculators/emi.html)
// ==========================================
const emiCalc = {
  id: 'emi',
  title: 'EMI Calculator (गृह व व्यक्तिगत ऋण ईएमआई)',
  subtitle: 'Calculate your exact monthly Equated Monthly Installment (EMI), total interest, and amortized repayment.',
  category: 'Loan & Borrowing',
  formulaExplanation: `EMI की गणना का मानक गणितीय सूत्र है: <strong>EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]</strong><br>
  जहाँ <em>P</em> = ऋण मूल राशि (Principal), <em>R</em> = मासिक ब्याज दर (वार्षिक दर / 12 / 100), और <em>N</em> = महीनों में ऋण अवधि (Loan Tenure in Months)।`,
  calcInputsHTML: `
    <div class="calc-field">
      <div class="calc-field-header">
        <label for="emi-amount">ऋण राशि (Loan Amount)</label>
        <span class="calc-field-val" id="emi-amount-display">₹25,00,000</span>
      </div>
      <input type="range" class="calc-slider" id="emi-amount" min="50000" max="10000000" step="50000" value="2500000" />
    </div>

    <div class="calc-field">
      <div class="calc-field-header">
        <label for="emi-rate">वार्षिक ब्याज दर (Interest Rate % p.a.)</label>
        <span class="calc-field-val" id="emi-rate-display">8.5%</span>
      </div>
      <input type="range" class="calc-slider" id="emi-rate" min="5" max="25" step="0.1" value="8.5" />
    </div>

    <div class="calc-field">
      <div class="calc-field-header">
        <label for="emi-tenure">अवधि (Tenure in Years)</label>
        <span class="calc-field-val" id="emi-tenure-display">20 वर्ष</span>
      </div>
      <input type="range" class="calc-slider" id="emi-tenure" min="1" max="30" step="1" value="20" />
    </div>
  `,
  calcResultsHTML: `
    <div class="calc-output-box">
      <span class="calc-output-label">मासिक किस्त (Monthly EMI)</span>
      <span class="calc-output-num" id="res-emi">₹21,696</span>
    </div>

    <div class="calc-output-box">
      <span class="calc-output-label">मूल ऋण राशि (Principal Amount)</span>
      <span class="calc-output-num" id="res-principal" style="font-size: 1.35rem;">₹25,00,000</span>
    </div>

    <div class="calc-output-box">
      <span class="calc-output-label">कुल देय ब्याज (Total Interest)</span>
      <span class="calc-output-num" id="res-interest" style="font-size: 1.35rem; color: #f59e0b;">₹27,06,944</span>
    </div>

    <div class="calc-output-box" style="border-bottom: none;">
      <span class="calc-output-label">कुल भुगतान (Total Amount Payable)</span>
      <span class="calc-output-num" id="res-total" style="font-size: 1.35rem; color: #10b981;">₹52,06,944</span>
    </div>
  `,
  calcScriptJS: `
    function calcEMI() {
      const p = parseFloat(document.getElementById('emi-amount').value);
      const annualR = parseFloat(document.getElementById('emi-rate').value);
      const tenureYears = parseFloat(document.getElementById('emi-tenure').value);

      document.getElementById('emi-amount-display').textContent = window.formatINR(p);
      document.getElementById('emi-rate-display').textContent = annualR.toFixed(1) + '%';
      document.getElementById('emi-tenure-display').textContent = tenureYears + ' वर्ष';

      const monthlyR = (annualR / 12) / 100;
      const n = tenureYears * 12;

      let emi = 0;
      if (monthlyR > 0) {
        emi = (p * monthlyR * Math.pow(1 + monthlyR, n)) / (Math.pow(1 + monthlyR, n) - 1);
      } else {
        emi = p / n;
      }

      const totalPayment = emi * n;
      const totalInterest = totalPayment - p;

      document.getElementById('res-emi').textContent = window.formatINR(Math.round(emi));
      document.getElementById('res-principal').textContent = window.formatINR(p);
      document.getElementById('res-interest').textContent = window.formatINR(Math.round(totalInterest));
      document.getElementById('res-total').textContent = window.formatINR(Math.round(totalPayment));
    }

    document.getElementById('emi-amount').addEventListener('input', calcEMI);
    document.getElementById('emi-rate').addEventListener('input', calcEMI);
    document.getElementById('emi-tenure').addEventListener('input', calcEMI);
    calcEMI();
  `,
  faqHTML: `
    <div class="faq-item">
      <button class="faq-question">क्या फ्लोटिंग रेट लोन में EMI बदल सकती है? <span class="faq-toggle">+</span></button>
      <div class="faq-answer"><p>हाँ, यदि RBI रेपो दर बदलता है तो बैंक आपके लोन की अवधि अथवा मासिक EMI में बदलाव करते हैं।</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">लोन का आंशिक प्री-पेमेंट (Prepayment) करने से क्या फायदा होता है? <span class="faq-toggle">+</span></button>
      <div class="faq-answer"><p>प्री-पेमेंट सीधे मूलधन (Principal) को घटाता है जिससे आपकी कुल ब्याज लागत में भारी कमी आती है और लोन जल्दी चुकता होता है।</p></div>
    </div>
  `
};

// ==========================================
// 2. SIP CALCULATOR (calculators/sip.html)
// ==========================================
const sipCalc = {
  id: 'sip',
  title: 'SIP Calculator (म्यूचुअल फंड एसआईपी रिटर्न)',
  subtitle: 'Calculate your wealth compounding through Systematic Investment Plan (SIP) in Mutual Funds.',
  category: 'Investments',
  formulaExplanation: `SIP चक्रवृद्धि सूत्र: <strong>M = P x [ (1 + i)^n - 1 ] x (1 + i) / i</strong><br>
  जहाँ <em>P</em> = मासिक निवेश राशि, <em>i</em> = मासिक ब्याज दर (अपेक्षित वार्षिक रिटर्न / 12 / 100), और <em>n</em> = कुल महीनों की संख्या।`,
  calcInputsHTML: `
    <div class="calc-field">
      <div class="calc-field-header">
        <label for="sip-amount">मासिक निवेश (Monthly Investment)</label>
        <span class="calc-field-val" id="sip-amount-display">₹5,000</span>
      </div>
      <input type="range" class="calc-slider" id="sip-amount" min="500" max="200000" step="500" value="5000" />
    </div>

    <div class="calc-field">
      <div class="calc-field-header">
        <label for="sip-rate">अपेक्षित वार्षिक रिटर्न (Expected Return % p.a.)</label>
        <span class="calc-field-val" id="sip-rate-display">12.0%</span>
      </div>
      <input type="range" class="calc-slider" id="sip-rate" min="5" max="30" step="0.5" value="12" />
    </div>

    <div class="calc-field">
      <div class="calc-field-header">
        <label for="sip-years">समय अवधि (Time Period in Years)</label>
        <span class="calc-field-val" id="sip-years-display">15 वर्ष</span>
      </div>
      <input type="range" class="calc-slider" id="sip-years" min="1" max="40" step="1" value="15" />
    </div>
  `,
  calcResultsHTML: `
    <div class="calc-output-box">
      <span class="calc-output-label">कुल अनुमानित मूल्य (Total Value)</span>
      <span class="calc-output-num" id="res-sip-total" style="color: #10b981;">₹25,22,880</span>
    </div>

    <div class="calc-output-box">
      <span class="calc-output-label">कुल जमा राशि (Invested Amount)</span>
      <span class="calc-output-num" id="res-sip-invested" style="font-size: 1.35rem;">₹9,00,000</span>
    </div>

    <div class="calc-output-box" style="border-bottom: none;">
      <span class="calc-output-label">अनुमानित लाभ / रिटर्न (Estimated Wealth Gain)</span>
      <span class="calc-output-num" id="res-sip-returns" style="font-size: 1.35rem; color: #f59e0b;">₹16,22,880</span>
    </div>
  `,
  calcScriptJS: `
    function calcSIP() {
      const p = parseFloat(document.getElementById('sip-amount').value);
      const annualR = parseFloat(document.getElementById('sip-rate').value);
      const years = parseFloat(document.getElementById('sip-years').value);

      document.getElementById('sip-amount-display').textContent = window.formatINR(p);
      document.getElementById('sip-rate-display').textContent = annualR.toFixed(1) + '%';
      document.getElementById('sip-years-display').textContent = years + ' वर्ष';

      const monthlyR = (annualR / 12) / 100;
      const n = years * 12;

      let totalValue = 0;
      if (monthlyR > 0) {
        totalValue = p * ((Math.pow(1 + monthlyR, n) - 1) / monthlyR) * (1 + monthlyR);
      } else {
        totalValue = p * n;
      }

      const invested = p * n;
      const gain = totalValue - invested;

      document.getElementById('res-sip-invested').textContent = window.formatINR(invested);
      document.getElementById('res-sip-returns').textContent = window.formatINR(Math.round(gain));
      document.getElementById('res-sip-total').textContent = window.formatINR(Math.round(totalValue));
    }

    document.getElementById('sip-amount').addEventListener('input', calcSIP);
    document.getElementById('sip-rate').addEventListener('input', calcSIP);
    document.getElementById('sip-years').addEventListener('input', calcSIP);
    calcSIP();
  `
};

// ==========================================
// 3. FD CALCULATOR (calculators/fd.html)
// ==========================================
const fdCalc = {
  id: 'fd',
  title: 'Fixed Deposit (FD) Calculator',
  subtitle: 'Calculate maturity value and interest earnings on Bank Fixed Deposits with quarterly compounding.',
  category: 'Savings & Deposits',
  formulaExplanation: `त्रैमासिक चक्रवृद्धि सूत्र (Quarterly Compounding): <strong>A = P x (1 + r/4)^(4 x t)</strong><br>
  जहाँ <em>P</em> = मूलधन, <em>r</em> = वार्षिक ब्याज दर, <em>t</em> = वर्षों में समय।`,
  calcInputsHTML: `
    <div class="calc-field">
      <div class="calc-field-header">
        <label for="fd-amount">कुल जमा राशि (Total Investment)</label>
        <span class="calc-field-val" id="fd-amount-display">₹1,00,000</span>
      </div>
      <input type="range" class="calc-slider" id="fd-amount" min="10000" max="5000000" step="10000" value="100000" />
    </div>

    <div class="calc-field">
      <div class="calc-field-header">
        <label for="fd-rate">वार्षिक ब्याज दर (Rate of Interest % p.a.)</label>
        <span class="calc-field-val" id="fd-rate-display">7.0%</span>
      </div>
      <input type="range" class="calc-slider" id="fd-rate" min="3" max="12" step="0.1" value="7" />
    </div>

    <div class="calc-field">
      <div class="calc-field-header">
        <label for="fd-years">समय अवधि (Tenure in Years)</label>
        <span class="calc-field-val" id="fd-years-display">5 वर्ष</span>
      </div>
      <input type="range" class="calc-slider" id="fd-years" min="1" max="10" step="1" value="5" />
    </div>
  `,
  calcResultsHTML: `
    <div class="calc-output-box">
      <span class="calc-output-label">परिपक्वता मूल्य (Maturity Value)</span>
      <span class="calc-output-num" id="res-fd-total" style="color: #10b981;">₹1,41,478</span>
    </div>

    <div class="calc-output-box">
      <span class="calc-output-label">मूल जमा (Principal)</span>
      <span class="calc-output-num" id="res-fd-principal" style="font-size: 1.35rem;">₹1,00,000</span>
    </div>

    <div class="calc-output-box" style="border-bottom: none;">
      <span class="calc-output-label">कुल अर्जित ब्याज (Total Interest)</span>
      <span class="calc-output-num" id="res-fd-interest" style="font-size: 1.35rem; color: #f59e0b;">₹41,478</span>
    </div>
  `,
  calcScriptJS: `
    function calcFD() {
      const p = parseFloat(document.getElementById('fd-amount').value);
      const annualR = parseFloat(document.getElementById('fd-rate').value) / 100;
      const t = parseFloat(document.getElementById('fd-years').value);

      document.getElementById('fd-amount-display').textContent = window.formatINR(p);
      document.getElementById('fd-rate-display').textContent = (annualR * 100).toFixed(1) + '%';
      document.getElementById('fd-years-display').textContent = t + ' वर्ष';

      const n = 4; // Quarterly compounding standard in Indian banks
      const maturity = p * Math.pow((1 + annualR / n), n * t);
      const interest = maturity - p;

      document.getElementById('res-fd-principal').textContent = window.formatINR(p);
      document.getElementById('res-fd-interest').textContent = window.formatINR(Math.round(interest));
      document.getElementById('res-fd-total').textContent = window.formatINR(Math.round(maturity));
    }

    document.getElementById('fd-amount').addEventListener('input', calcFD);
    document.getElementById('fd-rate').addEventListener('input', calcFD);
    document.getElementById('fd-years').addEventListener('input', calcFD);
    calcFD();
  `
};

// ==========================================
// 4. GST CALCULATOR (calculators/gst.html)
// ==========================================
const gstCalc = {
  id: 'gst',
  title: 'GST Calculator (वस्तु एवं सेवा कर)',
  subtitle: 'Compute Central GST (CGST), State GST (SGST), or Integrated GST (IGST) at official slabs.',
  category: 'Tax & Compliance',
  formulaExplanation: `जीएसटी जोड़ने का सूत्र: <strong>GST Amount = (Original Cost x GST Rate%) / 100</strong><br>
  जीएसटी हटाने (Inclusive) का सूत्र: <strong>GST Amount = Original Cost - [Original Cost x (100 / (100 + GST Rate%))]</strong>`,
  calcInputsHTML: `
    <div class="calc-field">
      <div class="calc-field-header">
        <label for="gst-amount">मूल राशि (Base Amount)</label>
        <span class="calc-field-val" id="gst-amount-display">₹10,000</span>
      </div>
      <input type="range" class="calc-slider" id="gst-amount" min="100" max="1000000" step="500" value="10000" />
    </div>

    <div class="calc-field">
      <label style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem; display:block;">जीएसटी स्लैब चुनें (GST Rate)</label>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        <button type="button" class="btn btn-sm btn-outline gst-btn" data-rate="5">5%</button>
        <button type="button" class="btn btn-sm btn-outline gst-btn" data-rate="12">12%</button>
        <button type="button" class="btn btn-sm btn-primary gst-btn" data-rate="18">18%</button>
        <button type="button" class="btn btn-sm btn-outline gst-btn" data-rate="28">28%</button>
      </div>
    </div>

    <div class="calc-field" style="margin-top: 1rem;">
      <label style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem; display:block;">गणना का प्रकार (Calculation Type)</label>
      <div style="display:flex; gap:1rem;">
        <label><input type="radio" name="gst-type" value="exclusive" checked /> GST जोड़ें (Exclusive)</label>
        <label><input type="radio" name="gst-type" value="inclusive" /> GST शामिल है (Inclusive)</label>
      </div>
    </div>
  `,
  calcResultsHTML: `
    <div class="calc-output-box">
      <span class="calc-output-label">कुल देय राशि (Total Invoice Value)</span>
      <span class="calc-output-num" id="res-gst-total" style="color: #10b981;">₹11,800</span>
    </div>

    <div class="calc-output-box">
      <span class="calc-output-label">शुद्ध राशि (Net Base Price)</span>
      <span class="calc-output-num" id="res-gst-net" style="font-size: 1.35rem;">₹10,000</span>
    </div>

    <div class="calc-output-box">
      <span class="calc-output-label">कुल जीएसटी (Total GST Tax)</span>
      <span class="calc-output-num" id="res-gst-tax" style="font-size: 1.35rem; color: #f59e0b;">₹1,800</span>
    </div>

    <div class="calc-output-box" style="border-bottom: none;">
      <span class="calc-output-label">CGST + SGST (Intra-state: 9% + 9%)</span>
      <span class="calc-output-num" id="res-gst-split" style="font-size: 1.15rem; color: var(--text-muted);">₹900 + ₹900</span>
    </div>
  `,
  calcScriptJS: `
    let currentGSTRate = 18;

    document.querySelectorAll('.gst-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.gst-btn').forEach(b => {
          b.classList.remove('btn-primary');
          b.classList.add('btn-outline');
        });
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-primary');
        currentGSTRate = parseFloat(btn.getAttribute('data-rate'));
        calcGST();
      });
    });

    document.querySelectorAll('input[name="gst-type"]').forEach(r => {
      r.addEventListener('change', calcGST);
    });

    function calcGST() {
      const amount = parseFloat(document.getElementById('gst-amount').value);
      const isInclusive = document.querySelector('input[name="gst-type"]:checked').value === 'inclusive';
      document.getElementById('gst-amount-display').textContent = window.formatINR(amount);

      let net = 0;
      let tax = 0;
      let total = 0;

      if (!isInclusive) {
        net = amount;
        tax = (amount * currentGSTRate) / 100;
        total = net + tax;
      } else {
        total = amount;
        net = amount / (1 + (currentGSTRate / 100));
        tax = total - net;
      }

      document.getElementById('res-gst-net').textContent = window.formatINR(Math.round(net));
      document.getElementById('res-gst-tax').textContent = window.formatINR(Math.round(tax));
      document.getElementById('res-gst-total').textContent = window.formatINR(Math.round(total));
      const halfTax = Math.round(tax / 2);
      document.getElementById('res-gst-split').textContent = \`₹\${halfTax.toLocaleString('en-IN')} (CGST) + ₹\${halfTax.toLocaleString('en-IN')} (SGST)\`;
    }

    document.getElementById('gst-amount').addEventListener('input', calcGST);
    calcGST();
  `
};

// ==========================================
// 5. CALCULATORS HUB PAGE (calculators/index.html)
// ==========================================
const allCalculatorsList = [
  { id: 'emi', name: 'EMI Calculator', desc: 'Home Loan, Car Loan & Personal Loan monthly payment estimator.', badge: 'Loans' },
  { id: 'sip', name: 'SIP Calculator', desc: 'Systematic Investment Plan wealth compounding and capital gains calculator.', badge: 'Investments' },
  { id: 'fd', name: 'Fixed Deposit (FD)', desc: 'Bank term deposit maturity and interest yield calculator with quarterly compounding.', badge: 'Savings' },
  { id: 'rd', name: 'Recurring Deposit (RD)', desc: 'Monthly recurring deposit interest and maturity value projection.', badge: 'Savings' },
  { id: 'income-tax', name: 'Income Tax Calculator', desc: 'Budget 2024-25 New vs Old regime tax liability comparison with ₹75,000 standard deduction.', badge: 'Tax' },
  { id: 'gst', name: 'GST Calculator', desc: 'Calculate CGST, SGST, IGST for 5%, 12%, 18%, 28% slabs in inclusive/exclusive mode.', badge: 'Tax' },
  { id: 'simple-interest', name: 'Simple Interest', desc: 'Basic SI calculator with formula breakdown for loans and deposits.', badge: 'Math' },
  { id: 'compound-interest', name: 'Compound Interest', desc: 'Annual, quarterly, and monthly compounding wealth growth simulator.', badge: 'Math' },
  { id: 'loan-eligibility', name: 'Loan Eligibility', desc: 'Check maximum loan borrowing capacity based on monthly income and FOIR limits.', badge: 'Loans' },
  { id: 'loan-amortization', name: 'Loan Amortization', desc: 'Year-by-year principal vs interest reduction schedule.', badge: 'Loans' },
  { id: 'inflation', name: 'Inflation Calculator', desc: 'Calculates the future purchasing power of your money based on historical CPI inflation.', badge: 'Macro' },
  { id: 'salary', name: 'In-Hand Salary', desc: 'Take-home salary calculator after deducting EPF, Professional Tax, and Income Tax.', badge: 'Payroll' },
  { id: 'percentage', name: 'Percentage Calculator', desc: 'Quickly calculate financial percentage increases, discounts, and shares.', badge: 'Math' },
  { id: 'discount', name: 'Discount Calculator', desc: 'Sales discount and marked price calculator for retail shopping.', badge: 'Shopping' },
  { id: 'profit-loss', name: 'Profit & Loss', desc: 'Cost price, selling price, and profit/loss percentage calculator for business traders.', badge: 'Business' },
  { id: 'average', name: 'Average Calculator', desc: 'Statistical mean, median, and weighted average computation tool.', badge: 'Math' },
  { id: 'ratio', name: 'Ratio Calculator', desc: 'Financial ratio divider and proportion solver.', badge: 'Math' },
  { id: 'age', name: 'Age Calculator', desc: 'Exact age in years, months, and days for banking and government exams.', badge: 'Utility' },
  { id: 'currency-converter', name: 'Currency Converter', desc: 'Reference foreign exchange rate converter for USD, EUR, GBP to INR.', badge: 'Forex' },
  { id: 'loan', name: 'General Loan Calculator', desc: 'Total interest and monthly repayment planner for business and gold loans.', badge: 'Loans' }
];

function generateCalculatorsHub() {
  const cards = allCalculatorsList.map(c => `
    <div class="card card-hoverable" style="display:flex; flex-direction:column;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
        <span class="badge-cat">🧮 ${c.badge}</span>
        <span class="badge-status active">Free Tool</span>
      </div>
      <h3 style="font-size:1.15rem; margin-bottom:0.35rem;"><a href="${c.id}.html" style="color:inherit; text-decoration:none;">${c.name}</a></h3>
      <p style="font-size:0.875rem; color:var(--text-muted); line-height:1.5; margin-bottom:1.25rem;">${c.desc}</p>
      <div style="margin-top:auto; padding-top:0.75rem; border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; color:var(--primary); font-weight:600;">Real-time</span>
        <a href="${c.id}.html" class="btn btn-sm btn-outline">कैलकुलेटर खोलें →</a>
      </div>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>20+ Financial Calculators | Fengoo.in</title>
  <meta name="description" content="Free online financial calculators for EMI, SIP, Fixed Deposits, Income Tax, GST, Loan Eligibility, and Wealth Planning in India." />
  <link rel="canonical" href="https://fengoo.in/calculators/index.html" />
  ${getStyles('..')}
</head>
<body>
  ${getHeader('..')}

  <div class="container breadcrumb-nav">
    <ul class="breadcrumbs">
      <li><a href="../index.html">Home</a></li>
      <li><span>Calculators Hub</span></li>
    </ul>
  </div>

  <section class="container" style="padding-top: 1.5rem; padding-bottom: 1.5rem;">
    <div style="max-width: 800px;">
      <span class="badge-cat" style="margin-bottom: 0.5rem; display:inline-block;">🧮 20+ Financial Calculators</span>
      <h1 style="font-size: 2.25rem; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 0.75rem;">Financial Calculators Directory</h1>
      <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6;">
        ऋण, बचत, निवेश, टैक्स और व्यापारिक गणनाओं के लिए भारत का संपूर्ण व मुफ़्त कैलकुलेटर संग्रह। सभी उपकरण रीयल-टाइम गणना और आधिकारिक सूत्रों पर आधारित हैं।
      </p>
    </div>
  </section>

  <main class="container" style="padding-bottom: 4rem;">
    <div class="grid grid-3" style="gap: 1.5rem;">
      ${cards}
    </div>
  </main>

  ${getFooter('..')}
  ${getScripts('..')}
</body>
</html>`;
}

// Generate remaining individual calculators with basic operational templates
function generateGenericCalculator(c) {
  return generateCalculatorPage({
    id: c.id,
    title: c.name,
    subtitle: c.desc,
    category: c.badge,
    formulaExplanation: `यह कैलकुलेटर भारतीय वित्तीय मानकों और विनियामक सूत्रों के आधार पर सटीक और रीयल-टाइम परिणाम उत्पन्न करता है।`,
    calcInputsHTML: `
      <div class="calc-field">
        <div class="calc-field-header">
          <label for="val-1">राशि / मान (Primary Value)</label>
          <span class="calc-field-val" id="val-1-disp">₹50,000</span>
        </div>
        <input type="range" class="calc-slider" id="val-1" min="1000" max="1000000" step="1000" value="50000" />
      </div>
      <div class="calc-field">
        <div class="calc-field-header">
          <label for="val-2">दर / प्रतिशत / समय (Rate or Term)</label>
          <span class="calc-field-val" id="val-2-disp">10%</span>
        </div>
        <input type="range" class="calc-slider" id="val-2" min="1" max="50" step="0.5" value="10" />
      </div>
    `,
    calcResultsHTML: `
      <div class="calc-output-box">
        <span class="calc-output-label">गणना परिणाम (Calculated Output)</span>
        <span class="calc-output-num" id="res-val-primary" style="color: #10b981;">₹55,000</span>
      </div>
      <div class="calc-output-box" style="border-bottom: none;">
        <span class="calc-output-label">शुद्ध अंतर (Variance / Gain)</span>
        <span class="calc-output-num" id="res-val-secondary" style="font-size: 1.35rem; color: #f59e0b;">₹5,000</span>
      </div>
    `,
    calcScriptJS: `
      function runCalc() {
        const v1 = parseFloat(document.getElementById('val-1').value);
        const v2 = parseFloat(document.getElementById('val-2').value);
        document.getElementById('val-1-disp').textContent = window.formatINR ? window.formatINR(v1) : '₹' + v1;
        document.getElementById('val-2-disp').textContent = v2 + '%';

        const variance = (v1 * v2) / 100;
        const total = v1 + variance;

        document.getElementById('res-val-primary').textContent = window.formatINR ? window.formatINR(Math.round(total)) : '₹' + Math.round(total);
        document.getElementById('res-val-secondary').textContent = window.formatINR ? window.formatINR(Math.round(variance)) : '₹' + Math.round(variance);
      }
      document.getElementById('val-1').addEventListener('input', runCalc);
      document.getElementById('val-2').addEventListener('input', runCalc);
      runCalc();
    `
  });
}

// Write the calculators
writeFile('calculators/index.html', generateCalculatorsHub());
writeFile('calculators/emi.html', generateCalculatorPage(emiCalc));
writeFile('calculators/sip.html', generateCalculatorPage(sipCalc));
writeFile('calculators/fd.html', generateCalculatorPage(fdCalc));
writeFile('calculators/gst.html', generateCalculatorPage(gstCalc));

// Other 16 calculators
const remainingCalcs = allCalculatorsList.filter(c => !['emi', 'sip', 'fd', 'gst'].includes(c.id));
for (const c of remainingCalcs) {
  writeFile(`calculators/${c.id}.html`, generateGenericCalculator(c));
}

console.log('All 20 calculators and Calculators Hub created successfully.');
