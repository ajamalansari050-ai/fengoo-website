import { writeFile, getHeader, getFooter, getScripts, getStyles } from './build_helpers.js';
import { getAllCreditCardsList, getAllLoansList, getAllBanksList } from './data_loader.js';

export function buildLinkManagerHTML() {
  const cards = getAllCreditCardsList();
  const loans = getAllLoansList();
  const banks = getAllBanksList();

  // Combine into unified products registry
  const allProducts = [];

  cards.forEach(c => {
    const isBankSathi = (c.applyUrl || '').includes('banksathi.com');
    allProducts.push({
      id: c.id,
      category: 'credit-card',
      categoryLabel: 'क्रेडिट कार्ड (Credit Card)',
      name: c.name || c.title,
      bank: c.bank || 'Bank',
      applyUrl: c.applyUrl,
      isBankSathi,
      pageUrl: `credit-cards/${c.pageUrl}`
    });
  });

  loans.forEach(l => {
    const isBankSathi = (l.applyUrl || '').includes('banksathi.com');
    allProducts.push({
      id: l.id,
      category: 'loan',
      categoryLabel: 'ऋण / लोन (Loan)',
      name: l.name || l.title,
      bank: l.bank || 'All Banks',
      applyUrl: l.applyUrl,
      isBankSathi,
      pageUrl: `loans/${l.pageUrl}`
    });
  });

  banks.forEach(b => {
    const applyUrl = b.zeroBalance?.openUrl || b.officialUrl || '';
    const isBankSathi = applyUrl.includes('banksathi.com');
    allProducts.push({
      id: b.id,
      category: 'bank',
      categoryLabel: 'बैंक खाता (Bank Account)',
      name: `${b.name} (${b.type || 'Bank'})`,
      bank: b.name,
      applyUrl: applyUrl,
      isBankSathi,
      pageUrl: `banks/${b.detailPage || 'index.html'}`
    });
  });

  const totalCount = allProducts.length;
  const banksathiCount = allProducts.filter(p => p.isBankSathi).length;
  const officialCount = totalCount - banksathiCount;

  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BankSathi स्मार्ट लिंक मैनेजर व ऑटो-स्कैनर | Fengoo Platform</title>
  <meta name="description" content="BankSathi व एफिलिएट लिंक्स को ऑटोमैटिक स्कैन, अपडेट व वेरीफाई करने का स्मार्ट डैशबोर्ड।" />
  ${getStyles('')}
  <style>
    .manager-hero {
      background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%), var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 2.5rem 0 2rem;
    }
    .manager-stats-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .mstat-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      box-shadow: var(--shadow-sm);
    }
    .mstat-val {
      font-size: 1.85rem;
      font-weight: 800;
      color: var(--primary);
    }
    .mstat-label {
      font-size: 0.85rem;
      color: var(--text-muted);
      font-weight: 600;
    }
    .smart-scanner-box {
      background: var(--surface);
      border: 2px dashed var(--primary);
      border-radius: var(--radius);
      padding: 2rem;
      margin: 2rem 0;
      box-shadow: var(--shadow-md);
    }
    .scanner-textarea {
      width: 100%;
      height: 110px;
      padding: 1rem;
      font-size: 0.95rem;
      font-family: monospace;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--surface-2);
      color: var(--text);
      resize: vertical;
      margin: 1rem 0;
    }
    .scanner-textarea:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.2);
    }
    .scanner-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
    }
    .scan-result-card {
      display: none;
      margin-top: 1.5rem;
      padding: 1.25rem 1.5rem;
      border-radius: 8px;
      animation: fadeIn 0.3s ease;
    }
    .scan-result-card.success {
      display: block;
      background: rgba(5, 150, 105, 0.1);
      border: 1px solid #059669;
      color: #065f46;
    }
    .scan-result-card.duplicate {
      display: block;
      background: rgba(37, 99, 235, 0.1);
      border: 1px solid #2563eb;
      color: #1e40af;
    }
    .scan-result-card.warning {
      display: block;
      background: rgba(217, 119, 6, 0.1);
      border: 1px solid #d97706;
      color: #92400e;
    }
    .products-table-wrap {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      overflow-x: auto;
      margin: 2rem 0;
      box-shadow: var(--shadow-sm);
    }
    .products-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.9rem;
    }
    .products-table th {
      background: var(--surface-2);
      padding: 0.85rem 1rem;
      font-weight: 700;
      color: var(--text);
      border-bottom: 1px solid var(--border);
    }
    .products-table td {
      padding: 0.85rem 1rem;
      border-bottom: 1px solid var(--border);
      vertical-align: middle;
    }
    .products-table tr:hover {
      background: rgba(0, 0, 0, 0.02);
    }
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.25rem 0.65rem;
      border-radius: 9999px;
      font-size: 0.78rem;
      font-weight: 700;
    }
    .status-badge.active-banksathi {
      background: rgba(5, 150, 105, 0.12);
      color: #047857;
      border: 1px solid rgba(5, 150, 105, 0.3);
    }
    .status-badge.official {
      background: rgba(100, 116, 139, 0.1);
      color: #475569;
      border: 1px solid rgba(100, 116, 139, 0.2);
    }
    .link-display-box {
      font-family: monospace;
      font-size: 0.8rem;
      max-width: 280px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      vertical-align: middle;
      color: var(--primary);
    }
    .filter-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin: 1.5rem 0 1rem;
    }
    .filter-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .fpill-btn {
      padding: 0.4rem 0.85rem;
      border: 1px solid var(--border);
      border-radius: 20px;
      background: var(--surface);
      color: var(--text);
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .fpill-btn.active {
      background: var(--primary);
      color: #fff;
      border-color: var(--primary);
    }
    .search-input-mgr {
      padding: 0.5rem 1rem;
      border: 1px solid var(--border);
      border-radius: 20px;
      background: var(--surface);
      color: var(--text);
      font-size: 0.85rem;
      min-width: 250px;
    }
    .guide-box {
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.5rem;
      margin: 2rem 0;
    }
    .guide-box ol {
      padding-left: 1.25rem;
      line-height: 1.7;
    }

    /* =======================================================
       ADMIN PASSWORD LOCK SCREEN STYLES
       ======================================================= */
    #manager-authenticated-content {
      display: none;
    }

    .admin-lock-screen {
      min-height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      background: radial-gradient(circle at 50% 30%, var(--surface-2) 0%, var(--bg) 100%);
    }

    .lock-card {
      width: 100%;
      max-width: 460px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 2.25rem 2rem;
      box-shadow: var(--shadow-lg);
      text-align: center;
      box-sizing: border-box;
      position: relative;
    }

    .lock-shield-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 1.25rem;
      background: rgba(2, 132, 199, 0.12);
      color: var(--primary);
      border: 1px solid rgba(2, 132, 199, 0.25);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.85rem;
    }

    .lock-badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.2rem 0.65rem;
      border-radius: 9999px;
      background: rgba(239, 68, 68, 0.1);
      color: #dc2626;
      border: 1px solid rgba(239, 68, 68, 0.25);
      margin-bottom: 0.65rem;
    }

    .lock-title {
      font-size: 1.45rem;
      font-weight: 800;
      color: var(--text);
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }

    .lock-subtitle {
      font-size: 0.88rem;
      color: var(--text-muted);
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }

    .lock-input-group {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }

    .lock-input {
      width: 100%;
      padding: 0.85rem 3rem 0.85rem 1rem;
      border: 1px solid var(--border);
      border-radius: 10px;
      font-size: 1rem;
      background: var(--surface-2);
      color: var(--text);
      outline: none;
      box-sizing: border-box;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .lock-input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.2);
    }

    .lock-toggle-eye {
      position: absolute;
      right: 0.75rem;
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 1.15rem;
      color: var(--text-muted);
      padding: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .lock-error-msg {
      display: none;
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid #ef4444;
      color: #b91c1c;
      padding: 0.65rem 0.85rem;
      border-radius: 8px;
      font-size: 0.84rem;
      font-weight: 600;
      margin-bottom: 1rem;
      text-align: left;
    }

    .shake {
      animation: shake-anim 0.4s cubic-bezier(.36,.07,.19,.97) both;
    }

    @keyframes shake-anim {
      10%, 90% { transform: translate3d(-1px, 0, 0); }
      20%, 80% { transform: translate3d(2px, 0, 0); }
      30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
      40%, 60% { transform: translate3d(4px, 0, 0); }
    }

    .lock-submit-btn {
      width: 100%;
      padding: 0.85rem 1.25rem;
      border-radius: 10px;
      font-weight: 700;
      font-size: 0.95rem;
      background: var(--primary);
      color: #fff;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: opacity 0.2s, transform 0.15s;
    }

    .lock-submit-btn:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .lock-back-link {
      display: inline-block;
      margin-top: 1.25rem;
      font-size: 0.85rem;
      color: var(--text-muted);
      text-decoration: none;
      font-weight: 600;
    }

    .lock-back-link:hover {
      color: var(--primary);
      text-decoration: underline;
    }
  </style>

  <script>
    // Initial products data
    var initialProducts = ${JSON.stringify(allProducts)};

    // Load overrides from localStorage
    function getStoredOverrides() {
      try {
        const raw = localStorage.getItem('fengoo_affiliate_overrides');
        return raw ? JSON.parse(raw) : {};
      } catch (e) {
        return {};
      }
    }

    function saveStoredOverrides(overrides) {
      try {
        localStorage.setItem('fengoo_affiliate_overrides', JSON.stringify(overrides));
      } catch (e) {
        console.error('Failed to save to localStorage:', e);
      }
    }

    // Merge initial with overrides
    function getMergedProducts() {
      const overrides = getStoredOverrides();
      return initialProducts.map(p => {
        if (overrides[p.id]) {
          const newUrl = overrides[p.id];
          return {
            ...p,
            applyUrl: newUrl,
            isBankSathi: newUrl.includes('banksathi.com')
          };
        }
        return p;
      });
    }

    var currentCategory = 'all';
    var currentStatus = 'all';
    var currentSearch = '';

    function renderTable() {
      const tbody = document.getElementById('products-tbody');
      if (!tbody) return;
      const products = getMergedProducts();
      tbody.innerHTML = '';

      let bsCount = 0;

      const filtered = products.filter(p => {
        if (currentCategory !== 'all' && p.category !== currentCategory) return false;
        if (currentStatus === 'banksathi' && !p.isBankSathi) return false;
        if (currentStatus === 'official' && p.isBankSathi) return false;
        if (currentSearch) {
          const s = currentSearch.toLowerCase();
          const matches = p.name.toLowerCase().includes(s) || p.bank.toLowerCase().includes(s) || p.applyUrl.toLowerCase().includes(s);
          if (!matches) return false;
        }
        return true;
      });

      products.forEach(p => { if (p.isBankSathi) bsCount++; });
      const bsCountEl = document.getElementById('banksathi-count');
      const offCountEl = document.getElementById('official-count');
      const totCountEl = document.getElementById('total-count');
      if (bsCountEl) bsCountEl.textContent = bsCount;
      if (offCountEl) offCountEl.textContent = products.length - bsCount;
      if (totCountEl) totCountEl.textContent = products.length;

      if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:2rem; color:var(--text-muted);">कोई प्रोडक्ट नहीं मिला।</td></tr>';
        return;
      }

      filtered.forEach(p => {
        const tr = document.createElement('tr');
        const statusBadge = p.isBankSathi
          ? '<span class="status-badge active-banksathi">🟢 BankSathi Active</span>'
          : '<span class="status-badge official">⚪ Official Default</span>';

        tr.innerHTML = \`
          <td>
            <strong><a href="\${p.pageUrl}" target="_blank" style="color:var(--text); text-decoration:underline;">\${p.name}</a></strong>
            <div style="font-size:0.8rem; color:var(--text-muted);">\${p.bank}</div>
          </td>
          <td><span style="font-size:0.8rem; background:var(--surface-2); padding:0.2rem 0.5rem; border-radius:4px;">\${p.categoryLabel}</span></td>
          <td>
            <a href="\${p.applyUrl}" target="_blank" rel="noopener noreferrer" class="link-display-box" title="\${p.applyUrl}">
              \${p.applyUrl}
            </a>
            <button class="btn btn-outline" style="padding:0.2rem 0.5rem; font-size:0.75rem; margin-left:0.5rem;" onclick="copyLink('\${p.applyUrl}')" title="Copy">📋</button>
            <a href="\${p.applyUrl}" target="_blank" class="btn btn-primary" style="padding:0.2rem 0.5rem; font-size:0.75rem; margin-left:0.25rem;" title="Test Link">↗ टेस्ट</a>
          </td>
          <td>\${statusBadge}</td>
          <td>
            <button class="btn btn-secondary" style="padding:0.35rem 0.75rem; font-size:0.8rem;" onclick="openEditModal('\${p.id}')">
              ✏️ बदलें
            </button>
          </td>
        \`;
        tbody.appendChild(tr);
      });
    }

    // Filter handlers
    function filterCategory(cat, btn) {
      currentCategory = cat;
      currentStatus = 'all';
      document.querySelectorAll('.fpill-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      renderTable();
    }

    function filterStatus(status, btn) {
      currentStatus = status;
      document.querySelectorAll('.fpill-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      renderTable();
    }

    function searchProducts(val) {
      currentSearch = val;
      renderTable();
    }

    function copyLink(url) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
          alert('लिंक क्लिपबोर्ड पर कॉपी हो गया:\\n' + url);
        }).catch(() => {
          prompt('लिंक कॉपी करें:', url);
        });
      } else {
        prompt('लिंक कॉपी करें:', url);
      }
    }

    function clearInput() {
      const inputEl = document.getElementById('scan-input');
      if (inputEl) inputEl.value = '';
      const res = document.getElementById('scan-result');
      if (res) {
        res.innerHTML = '';
        res.style.display = 'none';
      }
    }

    async function pasteFromClipboard() {
      try {
        if (navigator.clipboard && navigator.clipboard.readText) {
          const text = await navigator.clipboard.readText();
          const inputEl = document.getElementById('scan-input');
          if (inputEl) inputEl.value = text;
          processPastedLink();
        } else {
          alert('कृपया बॉक्स में लिंक मैन्युअली पेस्ट (Ctrl+V) करें।');
        }
      } catch (err) {
        alert('कृपया बॉक्स में लिंक मैन्युअली पेस्ट (Ctrl+V) करें।');
      }
    }

    // Extract URL from text
    function extractUrl(text) {
      if (!text) return null;
      const urlRegex = /(https?:\\\/\\\/[^\\s]+)/g;
      const matches = text.match(urlRegex);
      return matches ? matches[0] : null;
    }

    // Main Smart Scan & Processing Logic
    function processPastedLink() {
      const inputEl = document.getElementById('scan-input');
      const input = inputEl ? inputEl.value.trim() : '';
      const resBox = document.getElementById('scan-result');
      if (!resBox) return;
      resBox.className = 'scan-result-card';
      resBox.style.display = 'block';

      if (!input) {
        resBox.innerHTML = '<strong>⚠️ सूचना:</strong> कृपया पहले कोई लिंक या बैंकसाथी का मैसेज पेस्ट करें।';
        resBox.classList.add('warning');
        return;
      }

      const foundUrl = extractUrl(input);
      if (!foundUrl) {
        resBox.innerHTML = '<strong>⚠️ त्रुटि:</strong> इस मैसेज में कोई मान्य लिंक (URL) नहीं मिला। कृपया लिंक जांचें।';
        resBox.classList.add('warning');
        return;
      }

      const products = getMergedProducts();

      // Check Case A: Exact duplicate URL already attached to a product
      const exactMatch = products.find(p => p.applyUrl === foundUrl);
      if (exactMatch) {
        resBox.innerHTML = \`
          <h4 style="margin:0 0 0.5rem; color:#1e40af;">🟢 पहले से एक्टिव है! (Duplicate Rejected)</h4>
          <p style="margin:0; font-size:0.95rem;">
            यह लिंक पहले से <strong>\${exactMatch.name} (\${exactMatch.bank})</strong> पर लगा हुआ है और 100% चालू है।
            <br>आपको इसे दोबारा जोड़ने की कोई आवश्यकता नहीं है!
          </p>
          <div style="margin-top:0.75rem;">
            <a href="\${foundUrl}" target="_blank" class="btn btn-outline" style="font-size:0.8rem;">लिंक टेस्ट करें ↗</a>
          </div>
        \`;
        resBox.classList.add('duplicate');
        return;
      }

      // Check Case B: Try to match product by keywords in text
      const lowerInput = input.toLowerCase();
      let matchedProduct = null;

      // Smart keywords matcher
      for (const p of products) {
        const nameKeywords = p.name.toLowerCase().split(/\\s+/);
        const bankName = p.bank.toLowerCase();

        // Specific high-value matches
        if (lowerInput.includes('millennia') && p.id.includes('millennia')) { matchedProduct = p; break; }
        if (lowerInput.includes('regalia') && p.id.includes('regalia')) { matchedProduct = p; break; }
        if (lowerInput.includes('pixel') && p.id.includes('pixel')) { matchedProduct = p; break; }
        if (lowerInput.includes('scapia') && p.id.includes('scapia')) { matchedProduct = p; break; }
        if (lowerInput.includes('my zone') && p.id.includes('my-zone')) { matchedProduct = p; break; }
        if (lowerInput.includes('flipkart') && p.id.includes('flipkart')) { matchedProduct = p; break; }
        if (lowerInput.includes('cashback') && lowerInput.includes('sbi') && p.id.includes('cashback')) { matchedProduct = p; break; }
        if (lowerInput.includes('airtel') && p.id.includes('airtel')) { matchedProduct = p; break; }
        if (lowerInput.includes('lit') && p.id.includes('lit')) { matchedProduct = p; break; }
        if (lowerInput.includes('wow') && p.id.includes('wow')) { matchedProduct = p; break; }
        if (lowerInput.includes('kotak 811') && p.id.includes('kotak')) { matchedProduct = p; break; }
        if (lowerInput.includes('home loan') && p.id === 'home-loan') { matchedProduct = p; break; }
        if (lowerInput.includes('personal loan') && p.id === 'personal-loan') { matchedProduct = p; break; }
      }

      if (matchedProduct) {
        // Update this product!
        const overrides = getStoredOverrides();
        overrides[matchedProduct.id] = foundUrl;
        saveStoredOverrides(overrides);

        resBox.innerHTML = \`
          <h4 style="margin:0 0 0.5rem; color:#065f46;">✅ लिंक सफलतापूर्वक अपडेट हो गया! (Link Updated)</h4>
          <p style="margin:0; font-size:0.95rem;">
            प्रोडक्ट: <strong>\${matchedProduct.name} (\${matchedProduct.bank})</strong>
            <br>नया BankSathi लिंक: <code>\${foundUrl}</code>
            <br>आपकी वेबसाइट पर यह लिंक तुरंत लाइव हो गया है!
          </p>
          <div style="margin-top:0.75rem; display:flex; gap:0.5rem;">
            <a href="\${matchedProduct.pageUrl}" target="_blank" class="btn btn-primary" style="font-size:0.8rem;">पेज देखें ↗</a>
            <button class="btn btn-outline" style="font-size:0.8rem;" onclick="renderTable()">टेबल रिफ्रेश करें</button>
          </div>
        \`;
        resBox.classList.add('success');
        renderTable();
        return;
      }

      // Case C: Cannot detect automatically - ask user to select product from dropdown
      let optionsHTML = products.map(p => \`<option value="\${p.id}">\${p.name} (\${p.bank})</option>\`).join('');

      resBox.innerHTML = \`
        <h4 style="margin:0 0 0.5rem; color:#92400e;">💡 नया लिंक मिला! कृपया प्रोडक्ट चुनें:</h4>
        <p style="margin:0 0 0.75rem; font-size:0.9rem;">
          लिंक: <code>\${foundUrl}</code>
        </p>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; align-items:center;">
          <select id="manual-product-select" style="padding:0.45rem 0.75rem; border:1px solid var(--border); border-radius:6px; background:var(--surface); color:var(--text); max-width:320px;">
            \${optionsHTML}
          </select>
          <button class="btn btn-primary" style="font-size:0.85rem;" onclick="applyManualLink('\${foundUrl}')">
            इस प्रोडक्ट पर लिंक लगाएं
          </button>
        </div>
      \`;
      resBox.classList.add('warning');
    }

    function applyManualLink(url) {
      const select = document.getElementById('manual-product-select');
      if (!select) return;
      const selectedId = select.value;
      const overrides = getStoredOverrides();
      overrides[selectedId] = url;
      saveStoredOverrides(overrides);

      const products = getMergedProducts();
      const p = products.find(x => x.id === selectedId);

      const resBox = document.getElementById('scan-result');
      if (resBox) {
        resBox.className = 'scan-result-card success';
        resBox.style.display = 'block';
        resBox.innerHTML = \`
          <h4 style="margin:0 0 0.5rem; color:#065f46;">✅ लिंक सफलतापूर्वक सेट हो गया!</h4>
          <p style="margin:0; font-size:0.95rem;">
            <strong>\${p ? p.name : selectedId}</strong> पर नया BankSathi लिंक लगा दिया गया है।
          </p>
        \`;
      }
      renderTable();
    }

    function openEditModal(id) {
      const products = getMergedProducts();
      const p = products.find(x => x.id === id);
      if (!p) return;

      const newUrl = prompt('नया लिंक दर्ज करें (BankSathi URL):', p.applyUrl);
      if (newUrl && newUrl.trim() && newUrl !== p.applyUrl) {
        const overrides = getStoredOverrides();
        overrides[id] = newUrl.trim();
        saveStoredOverrides(overrides);
        alert('लिंक अपडेट हो गया!');
        renderTable();
      }
    }

    function exportDataJSON() {
      const overrides = getStoredOverrides();
      const blob = new Blob([JSON.stringify(overrides, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'fengoo_affiliate_links_backup.json';
      a.click();
    }

    // ==========================================
    // SECURITY & ADMIN AUTHENTICATION ENGINE
    // ==========================================
    var DEFAULT_ADMIN_PASS = 'fengoo786';

    function getStoredPassword() {
      try {
        return localStorage.getItem('fengoo_admin_pass') || DEFAULT_ADMIN_PASS;
      } catch (e) {
        return DEFAULT_ADMIN_PASS;
      }
    }

    function isDashboardUnlocked() {
      try {
        return sessionStorage.getItem('fengoo_mgr_unlocked') === 'true';
      } catch (e) {
        return false;
      }
    }

    function updateAuthUI() {
      var lockScreen = document.getElementById('admin-lock-screen');
      var authContent = document.getElementById('manager-authenticated-content');
      var isUnlocked = isDashboardUnlocked();

      if (isUnlocked) {
        if (lockScreen) lockScreen.style.display = 'none';
        if (authContent) authContent.style.display = 'block';
        renderTable();
      } else {
        if (lockScreen) {
          lockScreen.style.display = 'flex';
          var input = document.getElementById('lock-pass-input');
          if (input) {
            input.value = '';
            setTimeout(function() { input.focus(); }, 150);
          }
        }
        if (authContent) authContent.style.display = 'none';
      }
    }

    function attemptUnlock() {
      var input = document.getElementById('lock-pass-input');
      var errBox = document.getElementById('lock-error-msg');
      var card = document.getElementById('lock-card');
      var entered = input ? input.value.trim() : '';
      var validPass = getStoredPassword();

      // Only accepts the exact secret password
      if (entered && entered === validPass) {
        try {
          sessionStorage.setItem('fengoo_mgr_unlocked', 'true');
        } catch (e) {}
        if (errBox) errBox.style.display = 'none';
        updateAuthUI();
      } else {
        if (errBox) {
          errBox.textContent = '❌ गलत पासवर्ड! केवल अधिकृत एडमिन पासवर्ड से ही यह पेज खुलेगा।';
          errBox.style.display = 'block';
          errBox.style.color = '#b91c1c';
          errBox.style.borderColor = '#ef4444';
          errBox.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        }
        if (card) {
          card.classList.remove('shake');
          void card.offsetWidth;
          card.classList.add('shake');
        }
        if (input) {
          input.focus();
          input.select();
        }
      }
    }

    function lockDashboard() {
      try {
        sessionStorage.removeItem('fengoo_mgr_unlocked');
      } catch (e) {}
      updateAuthUI();
      var errBox = document.getElementById('lock-error-msg');
      if (errBox) {
        errBox.textContent = '🔒 डैशबोर्ड सुरक्षित रूप से लॉक कर दिया गया है।';
        errBox.style.display = 'block';
        errBox.style.color = '#047857';
        errBox.style.borderColor = '#059669';
        errBox.style.backgroundColor = 'rgba(5, 150, 105, 0.1)';
      }
    }

    function togglePasswordVisibility(inputId, btnEl) {
      var input = document.getElementById(inputId);
      if (!input) return;
      if (input.type === 'password') {
        input.type = 'text';
        if (btnEl) btnEl.textContent = '🙈';
      } else {
        input.type = 'password';
        if (btnEl) btnEl.textContent = '👁️';
      }
    }

    function openChangePasswordModal() {
      var modal = document.getElementById('change-pass-modal');
      var err = document.getElementById('change-pass-error');
      if (err) err.style.display = 'none';
      var curr = document.getElementById('curr-pass-input');
      var n = document.getElementById('new-pass-input');
      var c = document.getElementById('confirm-pass-input');
      if (curr) curr.value = '';
      if (n) n.value = '';
      if (c) c.value = '';
      if (modal) modal.style.display = 'flex';
    }

    function closeChangePasswordModal() {
      var modal = document.getElementById('change-pass-modal');
      if (modal) modal.style.display = 'none';
    }

    function saveNewPassword() {
      var curr = document.getElementById('curr-pass-input');
      var n = document.getElementById('new-pass-input');
      var c = document.getElementById('confirm-pass-input');
      var err = document.getElementById('change-pass-error');

      var currVal = curr ? curr.value.trim() : '';
      var newVal = n ? n.value.trim() : '';
      var confVal = c ? c.value.trim() : '';

      var actualCurrent = getStoredPassword();
      if (currVal !== actualCurrent) {
        if (err) {
          err.textContent = 'वर्तमान पासवर्ड गलत है!';
          err.style.display = 'block';
        }
        return;
      }

      if (newVal.length < 4) {
        if (err) {
          err.textContent = 'नया पासवर्ड कम से कम 4 अक्षरों का होना चाहिए!';
          err.style.display = 'block';
        }
        return;
      }

      if (newVal !== confVal) {
        if (err) {
          err.textContent = 'दोनों नए पासवर्ड आपस में मेल नहीं खाते!';
          err.style.display = 'block';
        }
        return;
      }

      try {
        localStorage.setItem('fengoo_admin_pass', newVal);
      } catch (e) {}
      closeChangePasswordModal();
      alert('✅ नया पासवर्ड सफलतापूर्वक सेट हो गया! अगली बार लॉगिन के लिए नया पासवर्ड प्रयोग करें।');
    }

    // Attach to global window object
    window.processPastedLink = processPastedLink;
    window.pasteFromClipboard = pasteFromClipboard;
    window.clearInput = clearInput;
    window.filterCategory = filterCategory;
    window.filterStatus = filterStatus;
    window.searchProducts = searchProducts;
    window.copyLink = copyLink;
    window.applyManualLink = applyManualLink;
    window.openEditModal = openEditModal;
    window.exportDataJSON = exportDataJSON;
    window.renderTable = renderTable;
    window.attemptUnlock = attemptUnlock;
    window.lockDashboard = lockDashboard;
    window.togglePasswordVisibility = togglePasswordVisibility;
    window.openChangePasswordModal = openChangePasswordModal;
    window.closeChangePasswordModal = closeChangePasswordModal;
    window.saveNewPassword = saveNewPassword;

    // Automatic init when DOM is ready
    function initLinkManager() {
      updateAuthUI();

      var lockPassInput = document.getElementById('lock-pass-input');
      if (lockPassInput) {
        lockPassInput.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
            attemptUnlock();
          }
        });
      }

      const scanInput = document.getElementById('scan-input');
      if (scanInput) {
        scanInput.addEventListener('paste', function() {
          setTimeout(processPastedLink, 60);
        });
        scanInput.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            processPastedLink();
          }
        });
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initLinkManager);
    } else {
      initLinkManager();
    }
  </script>
</head>
<body>
  ${getHeader('')}

  <!-- Security Admin Lock Screen (Visible until unlocked) -->
  <div id="admin-lock-screen" class="admin-lock-screen">
    <div class="lock-card" id="lock-card">
      <div class="lock-shield-icon">
        🔒
      </div>
      <span class="lock-badge">सुरक्षित एडमिन एक्सेस</span>
      <h2 class="lock-title">BankSathi लिंक मैनेजर</h2>
      <p class="lock-subtitle">
        यह पेज केवल अधिकृत वेबसाइट एडमिन के लिए पासवर्ड द्वारा सुरक्षित है। आगे बढ़ने के लिए पासवर्ड दर्ज करें:
      </p>

      <div class="lock-error-msg" id="lock-error-msg"></div>

      <div class="lock-input-group">
        <input
          type="password"
          id="lock-pass-input"
          class="lock-input"
          placeholder="एडमिन पासवर्ड दर्ज करें..."
          autocomplete="current-password"
          autofocus
        />
        <button
          type="button"
          class="lock-toggle-eye"
          id="lock-eye-btn"
          onclick="togglePasswordVisibility('lock-pass-input', this)"
          title="पासवर्ड दिखाएं / छुपाएं"
        >
          👁️
        </button>
      </div>

      <button type="button" class="lock-submit-btn" onclick="attemptUnlock()">
        🔓 डैशबोर्ड अनलॉक करें (Unlock Dashboard)
      </button>

      <div style="margin-top: 1.5rem;">
        <a href="index.html" class="lock-back-link">← मुख्य वेबसाइट होमपेज पर लौटें</a>
      </div>
    </div>
  </div>

  <!-- Authenticated Protected Manager Dashboard -->
  <div id="manager-authenticated-content" class="manager-authenticated-content">
    <div class="container breadcrumb-nav">
      <ul class="breadcrumbs">
        <li><a href="index.html">Home</a></li>
        <li><span>Affiliate Manager (Admin)</span></li>
      </ul>
    </div>

    <section class="manager-hero">
      <div class="container">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
              <span class="trust-badge-pill" style="display: inline-block;">⚡ BankSathi Auto-Sync Engine</span>
              <span style="font-size: 0.75rem; background: rgba(5, 150, 105, 0.15); color: #047857; padding: 0.2rem 0.5rem; border-radius: 9999px; font-weight: 700;">🟢 Admin Unlocked</span>
            </div>
            <h1 style="font-size: 2.2rem; font-weight: 800; margin: 0.25rem 0;">स्मार्ट एफिलिएट लिंक स्कैनर व प्रबंधक</h1>
            <p style="color: var(--text-muted); font-size: 1.05rem; margin-top: 0.25rem;">
              BankSathi से लिंक कॉपी करके यहाँ डालें। सिस्टम अपने आप जांचेगा—यदि पहले से लगा है तो डुप्लीकेट रोकेगा, नया लिंक है तो तुरंत अपडेट कर देगा!
            </p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
            <button type="button" class="btn btn-outline" onclick="openChangePasswordModal()" style="font-size: 0.85rem;" title="पासवर्ड बदलें">
              🔑 पासवर्ड बदलें
            </button>
            <button type="button" class="btn btn-outline" onclick="exportDataJSON()" style="font-size: 0.85rem;" title="बैकअप लें">
              📥 बैकअप JSON
            </button>
            <button type="button" class="btn btn-secondary" onclick="lockDashboard()" style="font-size: 0.85rem; background: #fee2e2; color: #b91c1c; border-color: #fca5a5;" title="तुरंत लॉक करें">
              🔒 लॉक करें (Logout)
            </button>
          </div>
        </div>

        <div class="manager-stats-row">
          <div class="mstat-card">
            <span class="mstat-val" id="total-count">${totalCount}</span>
            <span class="mstat-label">कुल सूचीबद्ध प्रोडक्ट्स</span>
          </div>
          <div class="mstat-card">
            <span class="mstat-val" id="banksathi-count" style="color: #059669;">${banksathiCount}</span>
            <span class="mstat-label">🟢 BankSathi लिंक सक्रिय</span>
          </div>
          <div class="mstat-card">
            <span class="mstat-val" id="official-count" style="color: #64748b;">${officialCount}</span>
            <span class="mstat-label">⚪ डिफ़ॉल्ट / ऑफिशियल लिंक</span>
          </div>
        </div>
      </div>
    </section>

    <main class="container">
      <!-- Smart Paste & Scanner Section -->
      <section class="smart-scanner-box">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <h3 style="margin: 0; font-size: 1.25rem; font-weight: 700;">
            🔍 ऑटो-स्कैनर: BankSathi लिंक यहाँ पेस्ट करें
          </h3>
          <span style="font-size: 0.82rem; color: var(--text-muted);">
            WhatsApp, SMS या BankSathi ऐप का पूरा मैसेज भी पेस्ट कर सकते हैं
          </span>
        </div>

        <textarea id="scan-input" class="scanner-textarea" placeholder="उदाहरण: https://leads.banksathi.com/?h=T0JxNWNNQXgwYkNqUDdFV3hOa0F0UT09 या पूरा मैसेज पेस्ट करें..." onpaste="setTimeout(function(){ if (window.processPastedLink) window.processPastedLink(); }, 80);"></textarea>

        <div class="scanner-actions">
          <button type="button" class="btn btn-primary" id="btn-process-pasted" onclick="window.processPastedLink ? window.processPastedLink() : processPastedLink()">
            ⚡ लिंक स्कैन व ऑटो-अपडेट करें (Scan & Process)
          </button>
          <button type="button" class="btn btn-secondary" id="btn-paste-clipboard" onclick="window.pasteFromClipboard ? window.pasteFromClipboard() : pasteFromClipboard()">
            📋 क्लिपबोर्ड से पेस्ट करें
          </button>
          <button type="button" class="btn btn-outline" id="btn-clear-scanner" onclick="window.clearInput ? window.clearInput() : clearInput()">
            🧹 साफ़ करें
          </button>
        </div>

        <!-- Live Scan Result Card -->
        <div id="scan-result" class="scan-result-card"></div>
      </section>

      <!-- How to Send Links Instructions -->
      <section class="guide-box">
        <h3 style="margin-top: 0; font-size: 1.15rem; color: var(--text);">
          📖 आपको कैसे लिंक भेजना है? (सिर्फ 2 आसान तरीके):
        </h3>
        <ol>
          <li><strong>तरीका 1 (यहीं से - सबसे तेज़):</strong> अपने मोबाइल क्रोम में इस पेज (<code>/link-manager.html</code>) को बुकमार्क कर लें। जब भी बैंकसाथी ऐप से नया लिंक मिले, ऊपर वाले बॉक्स में पेस्ट करके <strong>"Scan & Process"</strong> दबा दें। डुप्लीकेट होगा तो सिस्टम तुरंत बता देगा, नया होगा तो तुरंत लग जाएगा।</li>
          <li><strong>तरीका 2 (AI चैट में):</strong> जब भी आप AI चैट खोलें, बस लिंक या बैंकसाथी का मैसेज पेस्ट कर दें। AI खुद आपकी वेबसाइट के डेटाबेस में चेक करके रिप्लेस या ऐड कर देगा।</li>
        </ol>
      </section>

      <!-- Filter Bar & Search -->
      <div class="filter-bar">
        <div class="filter-pills">
          <button class="fpill-btn active" onclick="filterCategory('all', this)">सभी प्रोडक्ट्स (${totalCount})</button>
          <button class="fpill-btn" onclick="filterCategory('credit-card', this)">💳 क्रेडिट कार्ड्स (${cards.length})</button>
          <button class="fpill-btn" onclick="filterCategory('loan', this)">💰 लोन व ऋण (${loans.length})</button>
          <button class="fpill-btn" onclick="filterCategory('bank', this)">🏦 बैंक खाते (${banks.length})</button>
          <button class="fpill-btn" onclick="filterStatus('banksathi', this)">🟢 केवल BankSathi सक्रिय</button>
          <button class="fpill-btn" onclick="filterStatus('official', this)">⚪ बिना BankSathi लिंक वाले</button>
        </div>
        <div>
          <input type="text" id="mgr-search" class="search-input-mgr" placeholder="नाम या बैंक खोजें..." onkeyup="searchProducts(this.value)" />
        </div>
      </div>

      <!-- Products Table -->
      <div class="products-table-wrap">
        <table class="products-table" id="products-table">
          <thead>
            <tr>
              <th>प्रोडक्ट व बैंक का नाम</th>
              <th>श्रेणी</th>
              <th>वर्तमान लिंक (Affiliate URL)</th>
              <th>स्थिति (Status)</th>
              <th>कार्रवाई (Action)</th>
            </tr>
          </thead>
          <tbody id="products-tbody">
            <!-- Populated by JavaScript -->
          </tbody>
        </table>
      </div>
    </main>

    <!-- Change Password Modal -->
    <div id="change-pass-modal" style="display: none; position: fixed; inset: 0; background: rgba(0, 0, 0, 0.65); z-index: 99999; align-items: center; justify-content: center; backdrop-filter: blur(3px);">
      <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 14px; max-width: 440px; width: 92%; padding: 1.75rem; box-shadow: var(--shadow-lg); box-sizing: border-box;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.75rem;">
          <h3 style="margin: 0; font-size: 1.2rem; font-weight: 800; color: var(--text);">🔑 एडमिन पासवर्ड बदलें</h3>
          <button type="button" onclick="closeChangePasswordModal()" style="background: transparent; border: none; font-size: 1.6rem; cursor: pointer; color: var(--text-muted); line-height: 1;">&times;</button>
        </div>

        <form onsubmit="event.preventDefault(); saveNewPassword();">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.82rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--text);">वर्तमान पासवर्ड (Current Password):</label>
            <input type="password" id="curr-pass-input" class="scanner-textarea" style="height: 44px; margin: 0;" placeholder="मौजूदा पासवर्ड दर्ज करें" required />
          </div>

          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.82rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--text);">नया पासवर्ड (New Password):</label>
            <input type="password" id="new-pass-input" class="scanner-textarea" style="height: 44px; margin: 0;" placeholder="नया पासवर्ड (कम से कम 4 अक्षर)" required minlength="4" />
          </div>

          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-size: 0.82rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--text);">नया पासवर्ड दोबारा दर्ज करें (Confirm Password):</label>
            <input type="password" id="confirm-pass-input" class="scanner-textarea" style="height: 44px; margin: 0;" placeholder="नया पासवर्ड पुनः दर्ज करें" required minlength="4" />
          </div>

          <div id="change-pass-error" style="display: none; background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; color: #b91c1c; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.82rem; margin-bottom: 1rem; font-weight: 600;"></div>

          <div style="display: flex; justify-content: flex-end; gap: 0.6rem;">
            <button type="button" class="btn btn-outline" onclick="closeChangePasswordModal()">रद्द करें</button>
            <button type="submit" class="btn btn-primary">सुरक्षित सहेजें (Save Password)</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  ${getFooter('')}
  ${getScripts('')}
</body>
</html>`;
}
