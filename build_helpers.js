import fs from 'fs';
import path from 'path';

// Helper to write file ensuring directory exists
function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
}

// Common Header Component generator with relative prefix support
function getHeader(relativePathToRoot = '') {
  const p = relativePathToRoot ? relativePathToRoot + '/' : '';
  return `
  <header>
    <div class="container header-inner">
      <a href="${p}index.html" class="brand-logo" id="header-logo-link">
        <span class="logo-badge" id="header-logo-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </span>
        <span class="brand-name">Fengoo<span>.in</span></span>
      </a>

      <nav class="nav-desktop" aria-label="Main Navigation">
        <a href="${p}index.html" class="nav-link">Home</a>
        <a href="${p}banks/index.html" class="nav-link">Banks</a>
        <a href="${p}credit-cards/index.html" class="nav-link">Cards</a>
        <a href="${p}upi/index.html" class="nav-link">UPI</a>
        <a href="${p}loans/index.html" class="nav-link">Loans</a>
        <a href="${p}insurance/index.html" class="nav-link">Insurance</a>
        <a href="${p}investments/index.html" class="nav-link">Investments</a>
        <a href="${p}government/index.html" class="nav-link">Govt Schemes</a>
        <a href="${p}tax/index.html" class="nav-link">Tax</a>
        <a href="${p}pension/index.html" class="nav-link">Pension</a>
        <a href="${p}savings/index.html" class="nav-link">Savings</a>
        <a href="${p}calculators/index.html" class="nav-link">Calculators</a>
        <a href="${p}official-links/official-links.html" class="nav-link">Official Links</a>
      </nav>

      <div class="header-actions">
        <button class="btn-icon theme-toggle-btn" id="theme-toggle-btn" title="Toggle Theme" aria-label="Toggle Theme">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
        </button>
        <button class="btn-icon mobile-menu-btn" id="mobile-menu-btn" title="Open Menu" aria-label="Open Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="mobile-drawer" id="mobile-drawer">
    <div class="drawer-content">
      <div class="drawer-header">
        <span class="brand-name font-bold">Fengoo Navigation</span>
        <button class="modal-close drawer-close-btn" id="drawer-close-btn">&times;</button>
      </div>
      <div class="drawer-links">
        <a href="${p}index.html" class="drawer-link">Home</a>
        <a href="${p}banks/index.html" class="drawer-link">Banks Directory</a>
        <a href="${p}credit-cards/index.html" class="drawer-link">Credit Cards</a>
        <a href="${p}upi/index.html" class="drawer-link">UPI & Payments</a>
        <a href="${p}loans/index.html" class="drawer-link">Loans</a>
        <a href="${p}insurance/index.html" class="drawer-link">Insurance</a>
        <a href="${p}investments/index.html" class="drawer-link">Investments</a>
        <a href="${p}government/index.html" class="drawer-link">Government Schemes</a>
        <a href="${p}tax/index.html" class="drawer-link">Tax Slabs</a>
        <a href="${p}pension/index.html" class="drawer-link">Pension & Retirement</a>
        <a href="${p}savings/index.html" class="drawer-link">Savings & Deposits</a>
        <a href="${p}financial-education/index.html" class="drawer-link">Financial Education</a>
        <a href="${p}calculators/index.html" class="drawer-link">20+ Calculators</a>
        <a href="${p}official-links/official-links.html" class="drawer-link">Official Regulatory Links</a>
      </div>
    </div>
  </div>
  `;
}

// Common Footer Component generator
function getFooter(relativePathToRoot = '') {
  const p = relativePathToRoot ? relativePathToRoot + '/' : '';
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand-logo">
            <span class="logo-badge">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </span>
            <span class="brand-name">Fengoo<span>.in</span></span>
          </div>
          <p>Fengoo भारत का एक स्वतंत्र, निष्पक्ष वित्तीय सूचना व शिक्षा मंच है। यहाँ केवल वैधानिक और आधिकारिक स्रोतों (RBI, SEBI, IRDAI, Income Tax, PFRDA, DICGC) से सत्यापित डेटा प्रस्तुत किया जाता है।</p>
          <div class="footer-badges">
            <span class="trust-badge-pill">🛡️ DICGC ₹5L Coverage Guide</span>
            <span class="trust-badge-pill">⚖️ Zero Biased Advice</span>
            <span class="trust-badge-pill">🏛️ Verified Regulators</span>
          </div>
        </div>

        <div class="footer-col">
          <h5>बैंकिंग व कार्ड्स</h5>
          <ul class="footer-links">
            <li><a href="${p}banks/public-sector/sbi/sbi.html">State Bank of India</a></li>
            <li><a href="${p}banks/private-sector/hdfc/hdfc.html">HDFC Bank</a></li>
            <li><a href="${p}banks/private-sector/kotak/kotak.html">Kotak Mahindra Bank</a></li>
            <li><a href="${p}banks/small-finance/au-small-finance/au-small-finance.html">AU Small Finance</a></li>
            <li><a href="${p}credit-cards/index.html">Credit Cards Directory</a></li>
            <li><a href="${p}upi/index.html">UPI Services</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>ऋण व निवेश</h5>
          <ul class="footer-links">
            <li><a href="${p}loans/home-loan/index.html">Home Loan Guide</a></li>
            <li><a href="${p}loans/personal-loan/index.html">Personal Loan</a></li>
            <li><a href="${p}investments/mutual-funds/sip-equity-debt.html">Mutual Funds & SIP</a></li>
            <li><a href="${p}investments/bonds/sovereign-gold-bonds.html">Sovereign Gold Bonds</a></li>
            <li><a href="${p}insurance/life/term-insurance.html">Term Life Insurance</a></li>
            <li><a href="${p}insurance/health/individual-family-floater.html">Health Insurance</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>सरकारी योजनाएं व टैक्स</h5>
          <ul class="footer-links">
            <li><a href="${p}government/schemes/pm-jan-dhan-yojana.html">PM Jan Dhan Yojana</a></li>
            <li><a href="${p}government/schemes/sukanya-samriddhi-yojana.html">Sukanya Samriddhi</a></li>
            <li><a href="${p}pension/nps/nps.html">National Pension System</a></li>
            <li><a href="${p}pension/atal-pension-yojana/atal-pension-yojana.html">Atal Pension Yojana</a></li>
            <li><a href="${p}tax/income-tax-slabs/income-tax-slabs.html">Income Tax Slabs</a></li>
            <li><a href="${p}calculators/gst.html">GST Calculator & Slabs</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>टूल्स व नीतियां (Policies)</h5>
          <ul class="footer-links">
            <li><a href="${p}link-manager.html" style="color:var(--primary); font-weight:700;">⚡ BankSathi Link Manager</a></li>
            <li><a href="${p}calculators/emi.html">EMI Calculator</a></li>
            <li><a href="${p}calculators/sip.html">SIP Calculator</a></li>
            <li><a href="${p}affiliate-disclosure.html">Affiliate Disclosure</a></li>
            <li><a href="${p}privacy-policy.html">Privacy Policy</a></li>
            <li><a href="${p}terms-of-service.html">Terms of Service</a></li>
            <li><a href="${p}disclaimer.html">Legal Disclaimer</a></li>
            <li><a href="${p}about-us.html">About Fengoo</a></li>
            <li><a href="${p}contact-us.html">Contact Us</a></li>
            <li><a href="${p}advertise.html">📢 Advertise With Us</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-compliance-box">
        <strong>वैधानिक अस्वीकरण (Statutory Disclaimer):</strong> Fengoo.in कोई बैंक, गैर-बैंकिंग वित्तीय कंपनी (NBFC), बीमा मध्यस्थ अथवा SEBI-पंजीकृत निवेश सलाहकार नहीं है। यहाँ उपलब्ध सामग्री केवल सामान्य सूचना व वित्तीय साक्षरता के उद्देश्य से है। किसी भी वित्तीय उत्पाद में निवेश या ऋण लेने से पूर्व संबंधित संस्थान के आधिकारिक दस्तावेज़ व नियम अवश्य पढ़ें।
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 Fengoo.in. All rights reserved. Free, Independent Financial Information for India.</p>
      </div>
    </div>
  </footer>

  <!-- Affiliate Disclosure Modal -->
  <div class="modal-backdrop" id="affiliate-disclosure-modal">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3>पारदर्शिता व पार्टनर नीति (Affiliate Disclosure)</h3>
        <button class="modal-close" onclick="closeModal('affiliate-disclosure-modal')">&times;</button>
      </div>
      <div style="font-size:0.9rem; line-height:1.6; color:var(--text); display:flex; flex-direction:column; gap:0.75rem;">
        <p>1. <strong>स्पष्ट पृथक्करण:</strong> Fengoo पर आधिकारिक विनियामक लिंक्स (जैसे RBI, SEBI, Income Tax) 100% गैर-व्यावसायिक हैं और उन पर कोई कमीशन नहीं लिया जाता।</p>
        <p>2. <strong>पार्टनर लिंक्स की पहचान:</strong> जहाँ भी व्यावसायिक रेफरल लिंक उपलब्ध है, वहाँ स्पष्ट रूप से <strong>"Partner Link"</strong> अथवा <strong>"Affiliate Link"</strong> का लेबल लगाया गया है।</p>
        <p>3. <strong>उपयोगकर्ता पर शून्य अतिरिक्त लागत:</strong> यदि आप किसी पार्टनर लिंक का उपयोग करके खाता खोलते हैं या सेवा लेते हैं, तो आपको कोई अतिरिक्त शुल्क नहीं देना पड़ता।</p>
        <p>4. <strong>संपादकीय स्वतंत्रता:</strong> किसी बैंक अथवा वित्तीय संस्था द्वारा दी जाने वाली कमीशन दर हमारी निष्पक्ष समीक्षा या कैलकुलेटर की गणना को प्रभावित नहीं करती।</p>
      </div>
    </div>
  </div>

  <!-- Disclaimer Modal -->
  <div class="modal-backdrop" id="disclaimer-modal">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3>कानूनी अस्वीकरण (Disclaimer)</h3>
        <button class="modal-close" onclick="closeModal('disclaimer-modal')">&times;</button>
      </div>
      <div style="font-size:0.9rem; line-height:1.6; color:var(--text); display:flex; flex-direction:column; gap:0.75rem;">
        <p>Fengoo.in पर दी गई ब्याज दरें, शुल्क और सरकारी योजना के नियम संबंधित आधिकारिक पोर्टल्स के नवीनतम विज्ञापनों पर आधारित हैं। ब्याज दरें और पात्रता शर्तें समय-समय पर RBI और संबंधित बैंकों द्वारा बदली जा सकती हैं। अंतिम निर्णय से पूर्व अधिकृत बैंक शाखा अथवा पोर्टल से पुष्टि अवश्य करें।</p>
      </div>
    </div>
  </div>
  `;
}

// Helper to generate Google AdSense Compliant Ad Slots
function getAdSlot(slotType = 'leaderboard', label = 'प्रायोजित विज्ञापन (Advertisement)') {
  if (slotType === 'in-article') {
    return `
    <div class="ad-slot-container">
      <span class="ad-label">${label}</span>
      <div class="ad-box ad-in-article">
        <div class="ad-box-placeholder">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>
          <span>Google AdSense • Responsive In-Article Display Ad</span>
        </div>
      </div>
    </div>`;
  }
  return `
  <div class="ad-slot-container">
    <span class="ad-label">${label}</span>
    <div class="ad-box ad-leaderboard">
      <div class="ad-box-placeholder">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>
        <span>Google AdSense • Top High-CPC Leaderboard Banner (728x90 / Responsive)</span>
      </div>
    </div>
  </div>`;
}

// Common Scripts Include generator
function getScripts(relativePathToRoot = '') {
  const p = relativePathToRoot ? relativePathToRoot + '/' : '';
  return `
  <script src="${p}js/registry.js"></script>
  <script src="${p}js/theme.js"></script>
  <script src="${p}js/links.js"></script>
  <script src="${p}js/search.js"></script>
  <script src="${p}js/navigation.js"></script>
  <script src="${p}js/main.js"></script>
  <script src="${p}js/language.js"></script>
  <script src="${p}js/affiliate_config.js"></script>
  <script src="${p}js/monetization.js"></script>
  `;
}

// Common Styles Include generator
function getStyles(relativePathToRoot = '') {
  const p = relativePathToRoot ? relativePathToRoot + '/' : '';
  return `
  <link rel="icon" type="image/png" href="${p}favicon.png" />
  <link rel="icon" type="image/svg+xml" href="${p}favicon.svg" />
  <link rel="apple-touch-icon" href="${p}favicon.png" />
  <link rel="stylesheet" href="${p}css/style.css" />
  <link rel="stylesheet" href="${p}css/header.css" />
  <link rel="stylesheet" href="${p}css/footer.css" />
  <link rel="stylesheet" href="${p}css/cards.css" />
  <link rel="stylesheet" href="${p}css/pages.css" />
  <link rel="stylesheet" href="${p}css/calculators.css" />
  <link rel="stylesheet" href="${p}css/responsive.css" />
  <link rel="stylesheet" href="${p}css/monetization.css" />
  `;
}

console.log('Fengoo Generator Helpers initialized.');

export {
  writeFile,
  getHeader,
  getFooter,
  getScripts,
  getStyles,
  getAdSlot
};
