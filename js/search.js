/**
 * FENGOO SITE-WIDE SEARCH ENGINE (js/search.js)
 * Live search across Banks, Credit Cards, UPI, Payments, Loans, Insurance,
 * Investments, Government Schemes, Pension, Savings, Tax, and Calculators.
 */

(function() {
  let searchInput = null;
  let searchDropdown = null;
  let highlightedIndex = -1;
  let currentResults = [];

  function initSearch() {
    searchInput = document.querySelector('#global-search-input, .search-input-box input');
    searchDropdown = document.querySelector('#search-dropdown, .search-dropdown');

    if (!searchInput || !searchDropdown) return;

    searchInput.addEventListener('input', handleInput);
    searchInput.addEventListener('keydown', handleKeydown);
    document.addEventListener('click', handleClickOutside);
  }

  function handleInput(e) {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      closeDropdown();
      return;
    }

    const registry = window.FENGOO_REGISTRY || [];
    currentResults = registry.filter(item => {
      const name = (item.name || '').toLowerCase();
      const desc = (item.description || '').toLowerCase();
      const cat = (item.category || '').toLowerCase();
      const subcat = (item.subcategory || '').toLowerCase();
      return name.includes(query) || desc.includes(query) || cat.includes(query) || subcat.includes(query);
    }).slice(0, 10); // Top 10 matches

    renderDropdown(currentResults, query);
  }

  function renderDropdown(results, query) {
    if (!results.length) {
      searchDropdown.innerHTML = `
        <div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          "${query}" के लिए कोई परिणाम नहीं मिला। कृपया अन्य वित्तीय शब्द (जैसे SBI, EMI, NPS, Tax) खोजें।
        </div>
      `;
      searchDropdown.classList.add('active');
      highlightedIndex = -1;
      return;
    }

    const html = results.map((item, idx) => `
      <div class="search-item" data-index="${idx}" data-path="${item.path}">
        <div class="search-item-info">
          <h4>${escapeHTML(item.name)}</h4>
          <p>${escapeHTML(item.description)}</p>
        </div>
        <span class="search-item-badge">${formatCategoryBadge(item.category)}</span>
      </div>
    `).join('');

    searchDropdown.innerHTML = html;
    searchDropdown.classList.add('active');
    highlightedIndex = -1;

    // Attach click handlers
    searchDropdown.querySelectorAll('.search-item').forEach(el => {
      el.addEventListener('click', () => {
        const path = el.getAttribute('data-path');
        if (path) {
          window.location.href = path;
        }
      });
    });
  }

  function formatCategoryBadge(cat) {
    const map = {
      'banks': 'Bank',
      'credit-cards': 'Credit Card',
      'upi': 'UPI',
      'payments': 'Payments',
      'loans': 'Loan',
      'insurance': 'Insurance',
      'investments': 'Investment',
      'government': 'Govt Scheme',
      'pension': 'Pension',
      'savings': 'Savings',
      'tax': 'Tax',
      'financial-education': 'Education',
      'calculators': 'Calculator',
      'official-links': 'Official Link'
    };
    return map[cat] || cat.toUpperCase();
  }

  function handleKeydown(e) {
    if (!searchDropdown || !searchDropdown.classList.contains('active')) return;
    const items = searchDropdown.querySelectorAll('.search-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      highlightedIndex = (highlightedIndex + 1) % items.length;
      updateHighlight(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      highlightedIndex = (highlightedIndex - 1 + items.length) % items.length;
      updateHighlight(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && items[highlightedIndex]) {
        items[highlightedIndex].click();
      } else if (items.length > 0) {
        items[0].click();
      }
    } else if (e.key === 'Escape') {
      closeDropdown();
    }
  }

  function updateHighlight(items) {
    items.forEach((item, idx) => {
      if (idx === highlightedIndex) {
        item.classList.add('highlighted');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('highlighted');
      }
    });
  }

  function closeDropdown() {
    if (searchDropdown) {
      searchDropdown.classList.remove('active');
    }
    highlightedIndex = -1;
  }

  function handleClickOutside(e) {
    if (searchInput && searchDropdown && !searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      closeDropdown();
    }
  }

  function escapeHTML(str) {
    return (str || '').replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  document.addEventListener('DOMContentLoaded', initSearch);
})();
