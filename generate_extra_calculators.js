import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';

export function generateSIPCalculatorHTML() {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>एसआईपी कैलकुलेटर (SIP & Lumpsum Calculator) | Fengoo.in</title>
  <meta name="description" content="म्यूचुअल फंड एसआईपी रिटर्न कैलकुलेट करें। जानें चक्रवृद्धि ब्याज (Compounding) की शक्ति से आपका ₹5,000 मासिक निवेश कैसे करोड़ों का कॉर्पस बना सकता है।" />
  <link rel="canonical" href="https://fengoo.in/calculators/sip.html" />
  ${getStyles('..')}
  <style>
    .calc-container {
      max-width: 960px;
      margin: 2.5rem auto 5rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 2.5rem;
      box-shadow: var(--shadow-sm);
    }
    .calc-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 2.5rem;
      margin-top: 1.5rem;
    }
    @media (max-width: 768px) {
      .calc-grid { grid-template-columns: 1fr; }
    }
    .input-group {
      margin-bottom: 1.5rem;
    }
    .input-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-weight: 600;
      font-size: 0.95rem;
    }
    .input-val-box {
      color: var(--primary);
      font-weight: 800;
    }
    .range-slider {
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background: var(--border);
      outline: none;
      -webkit-appearance: none;
    }
    .range-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--primary);
      cursor: pointer;
    }
    .result-card {
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .res-row {
      display: flex;
      justify-content: space-between;
      padding: 0.85rem 0;
      border-bottom: 1px dashed var(--border);
      font-size: 0.95rem;
    }
    .res-highlight {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--accent);
    }
    .demat-promo-box {
      margin-top: 2.5rem;
      background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
      border: 1px solid rgba(2, 132, 199, 0.25);
      border-radius: var(--radius);
      padding: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }
  </style>
</head>
<body>
  ${getHeader('..')}

  <main class="container">
    <div class="calc-container">
      <div style="border-bottom: 1px solid var(--border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
        <span class="badge-official">📈 म्यूचुअल फंड वेल्थ क्रिएटर</span>
        <h1 style="font-size: 2rem; font-weight: 800; margin-top: 0.5rem;">एसआईपी कैलकुलेटर (SIP Wealth Calculator)</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">
          नियमित मासिक निवेश पर संभावित रिटर्न व चक्रवृद्धि ब्याज (Compounding) की वास्तविक गणना करें।
        </p>
      </div>

      <div class="calc-grid">
        <!-- Inputs Column -->
        <div class="calc-inputs">
          <div class="input-group">
            <div class="input-header">
              <label for="monthly-invest">मासिक निवेश राशि (Monthly Investment)</label>
              <span class="input-val-box" id="val-monthly">₹5,000</span>
            </div>
            <input type="range" class="range-slider" id="monthly-invest" min="500" max="100000" step="500" value="5000" />
          </div>

          <div class="input-group">
            <div class="input-header">
              <label for="expected-return">अपेक्षित वार्षिक रिटर्न (Expected Return p.a.)</label>
              <span class="input-val-box" id="val-rate">12%</span>
            </div>
            <input type="range" class="range-slider" id="expected-return" min="5" max="30" step="0.5" value="12" />
          </div>

          <div class="input-group">
            <div class="input-header">
              <label for="time-period">निवेश अवधि (Time Period in Years)</label>
              <span class="input-val-box" id="val-tenure">15 वर्ष</span>
            </div>
            <input type="range" class="range-slider" id="time-period" min="1" max="40" step="1" value="15" />
          </div>
        </div>

        <!-- Output Column -->
        <div class="result-card">
          <div>
            <div class="res-row">
              <span style="color:var(--text-muted);">कुल निवेशित राशि (Invested Amount):</span>
              <strong id="res-invested">₹9,00,000</strong>
            </div>
            <div class="res-row">
              <span style="color:var(--text-muted);">अनुमानित लाभ (Estimated Wealth Gain):</span>
              <strong id="res-gain" style="color:var(--primary);">₹16,22,880</strong>
            </div>
            <div class="res-row" style="border-bottom:none; margin-top:0.5rem; padding-top:1rem; border-top:2px solid var(--border);">
              <span style="font-weight:700;">कुल मैच्योरिटी वैल्यू (Total Maturity Value):</span>
              <span class="res-highlight" id="res-total">₹25,22,880</span>
            </div>
          </div>
          <p style="font-size:0.75rem; color:var(--text-muted); margin-top:1rem;">
            *नोट: यह गणना 12% के मानक ऐतिहासिक इक्विटी म्यूचुअल फंड औसत रिटर्न पर आधारित है। म्यूचुअल फंड निवेश बाज़ार जोखिमों के अधीन हैं।
          </p>
        </div>
      </div>

      <!-- Demat & Investment Affiliate Offer Bar -->
      <div class="demat-promo-box">
        <div>
          <span class="affiliate-partner-badge">🎁 एक्सक्लूसिव पार्टनर ऑफर</span>
          <h4 style="font-size: 1.1rem; font-weight: 800; margin: 0.25rem 0;">0% ब्रोकरेज पर तुरंत डीमैट खाता खोलें व SIP शुरू करें!</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">Zerodha / Angel One / Groww पर मात्र 5 मिनट में आधार ई-केवाईसी द्वारा डिजिटल खाता चालू करें।</p>
        </div>
        <a href="https://zerodha.com/?c=fengoo-partner" target="_blank" rel="noopener noreferrer sponsored nofollow" class="btn btn-primary" style="padding: 0.6rem 1.25rem; font-weight: 700;">
          फ्री डीमैट खाता खोलें ↗
        </a>
      </div>
    </div>
  </main>

  ${getFooter('..')}
  ${getScripts('..')}

  <script>
    function calculateSIP() {
      const p = parseFloat(document.getElementById('monthly-invest').value);
      const r = parseFloat(document.getElementById('expected-return').value) / 12 / 100;
      const n = parseFloat(document.getElementById('time-period').value) * 12;

      document.getElementById('val-monthly').textContent = '₹' + p.toLocaleString('en-IN');
      document.getElementById('val-rate').textContent = document.getElementById('expected-return').value + '%';
      document.getElementById('val-tenure').textContent = document.getElementById('time-period').value + ' वर्ष';

      const invested = p * n;
      // SIP Compound Formula: P * [ ( (1 + r)^n - 1 ) / r ] * (1 + r)
      const total = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const gain = total - invested;

      document.getElementById('res-invested').textContent = '₹' + Math.round(invested).toLocaleString('en-IN');
      document.getElementById('res-gain').textContent = '₹' + Math.round(gain).toLocaleString('en-IN');
      document.getElementById('res-total').textContent = '₹' + Math.round(total).toLocaleString('en-IN');
    }

    document.getElementById('monthly-invest').addEventListener('input', calculateSIP);
    document.getElementById('expected-return').addEventListener('input', calculateSIP);
    document.getElementById('time-period').addEventListener('input', calculateSIP);

    calculateSIP();
  </script>
</body>
</html>`;
}

export function generatePPFCalculatorHTML() {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>पीपीएफ कैलकुलेटर (PPF Calculator - Public Provident Fund) | Fengoo.in</title>
  <meta name="description" content="पब्लिक प्रोविडेंट फंड (PPF) 7.1% टैक्स-फ्री ब्याज कैलकुलेटर। धारा 80C के तहत ₹1.5 लाख तक कर छूट व 15 वर्ष मैच्योरिटी राशि जानें।" />
  <link rel="canonical" href="https://fengoo.in/calculators/ppf.html" />
  ${getStyles('..')}
  <style>
    .calc-container {
      max-width: 960px;
      margin: 2.5rem auto 5rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 2.5rem;
      box-shadow: var(--shadow-sm);
    }
    .calc-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 2.5rem;
      margin-top: 1.5rem;
    }
    @media (max-width: 768px) {
      .calc-grid { grid-template-columns: 1fr; }
    }
    .input-group { margin-bottom: 1.5rem; }
    .input-header { display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-weight: 600; }
    .input-val-box { color: var(--primary); font-weight: 800; }
    .range-slider { width: 100%; height: 6px; border-radius: 3px; background: var(--border); outline: none; -webkit-appearance: none; }
    .range-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: var(--primary); cursor: pointer; }
    .result-card { background: var(--surface-subtle); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem; display: flex; flex-direction: column; justify-content: space-between; }
    .res-row { display: flex; justify-content: space-between; padding: 0.85rem 0; border-bottom: 1px dashed var(--border); font-size: 0.95rem; }
    .res-highlight { font-size: 1.35rem; font-weight: 800; color: var(--accent); }
  </style>
</head>
<body>
  ${getHeader('..')}

  <main class="container">
    <div class="calc-container">
      <div style="border-bottom: 1px solid var(--border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
        <span class="badge-official">🏛️ 100% सॉवरेन सुरक्षित बचत</span>
        <h1 style="font-size: 2rem; font-weight: 800; margin-top: 0.5rem;">पीपीएफ कैलकुलेटर (PPF Calculator)</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">
          वर्तमान 7.1% वार्षिक चक्रवृद्धि ब्याज दर व ट्रिपल-ई (EEE) कर-मुक्त स्थिति के साथ 15 वर्ष का रिटर्न कैलकुलेट करें।
        </p>
      </div>

      <div class="calc-grid">
        <div class="calc-inputs">
          <div class="input-group">
            <div class="input-header">
              <label for="yearly-invest">वार्षिक जमा राशि (Yearly Investment)</label>
              <span class="input-val-box" id="val-yearly">₹1,50,000</span>
            </div>
            <input type="range" class="range-slider" id="yearly-invest" min="500" max="150000" step="500" value="150000" />
          </div>

          <div class="input-group">
            <div class="input-header">
              <label>वर्तमान सरकारी ब्याज दर (Current Govt ROI)</label>
              <span class="input-val-box">7.1% p.a.</span>
            </div>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">
              वित्त मंत्रालय, भारत सरकार द्वारा प्रत्येक तिमाही में संशोधित।
            </p>
          </div>

          <div class="input-group">
            <div class="input-header">
              <label for="ppf-tenure">अवधि (Tenure in Years)</label>
              <span class="input-val-box" id="val-tenure">15 वर्ष (अनिवार्य लॉक-इन)</span>
            </div>
            <input type="range" class="range-slider" id="ppf-tenure" min="15" max="30" step="5" value="15" />
          </div>
        </div>

        <div class="result-card">
          <div>
            <div class="res-row">
              <span style="color:var(--text-muted);">कुल मूलधन जमा (Total Deposit):</span>
              <strong id="res-invested">₹22,50,000</strong>
            </div>
            <div class="res-row">
              <span style="color:var(--text-muted);">कुल कर-मुक्त ब्याज (Total Interest Earned):</span>
              <strong id="res-gain" style="color:var(--primary);">₹18,18,209</strong>
            </div>
            <div class="res-row" style="border-bottom:none; margin-top:0.5rem; padding-top:1rem; border-top:2px solid var(--border);">
              <span style="font-weight:700;">कुल मैच्योरिटी राशि (Maturity Amount):</span>
              <span class="res-highlight" id="res-total">₹40,68,209</span>
            </div>
          </div>
          <div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); border-radius:var(--radius-sm); padding:0.75rem; margin-top:1rem;">
            <span style="font-size:0.8rem; color:var(--text); font-weight:600;">
              ✨ EEE टैक्स छूट: जमा पर धारा 80C छूट, ब्याज पर 0% टैक्स, और मैच्योरिटी राशि भी 100% कर-मुक्त!
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>

  ${getFooter('..')}
  ${getScripts('..')}

  <script>
    function calculatePPF() {
      const p = parseFloat(document.getElementById('yearly-invest').value);
      const years = parseFloat(document.getElementById('ppf-tenure').value);
      const r = 0.071; // 7.1%

      document.getElementById('val-yearly').textContent = '₹' + p.toLocaleString('en-IN');
      document.getElementById('val-tenure').textContent = years + ' वर्ष';

      let balance = 0;
      let totalInvested = p * years;

      for (let y = 1; y <= years; y++) {
        balance = (balance + p) * (1 + r);
      }

      const totalInterest = balance - totalInvested;

      document.getElementById('res-invested').textContent = '₹' + Math.round(totalInvested).toLocaleString('en-IN');
      document.getElementById('res-gain').textContent = '₹' + Math.round(totalInterest).toLocaleString('en-IN');
      document.getElementById('res-total').textContent = '₹' + Math.round(balance).toLocaleString('en-IN');
    }

    document.getElementById('yearly-invest').addEventListener('input', calculatePPF);
    document.getElementById('ppf-tenure').addEventListener('input', calculatePPF);

    calculatePPF();
  </script>
</body>
</html>`;
}

writeFile('calculators/sip.html', generateSIPCalculatorHTML());
writeFile('calculators/ppf.html', generatePPFCalculatorHTML());
console.log('Successfully generated calculators/sip.html and calculators/ppf.html!');
