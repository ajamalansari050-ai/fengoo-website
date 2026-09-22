/**
 * Fengoo.in Monetization Engine & Dynamic Ad Placements
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initMonetization();
  });

  function initMonetization() {
    const config = window.AFFILIATE_CONFIG || {};

    // 1. Initialize Sticky Bottom Deal Bar
    initStickyDealBar(config.dealOfTheDay);

    // 2. Initialize Floating Community Quick Actions (WhatsApp / Telegram)
    initFloatingCommunity(config.community);

    // 3. Initialize Google AdSense script if active
    initAdSense(config.adsense);

    // 4. Enhance Credit Card & Loan Apply Links with Affiliate Parameters
    enhanceAffiliateLinks(config);
  }

  function initStickyDealBar(deal) {
    if (!deal || !deal.enabled) return;

    // Check if dismissed in last 12 hours
    const dismissedUntil = localStorage.getItem('fengoo_deal_dismissed');
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
      return;
    }

    const bar = document.createElement('div');
    bar.className = 'sticky-bottom-deal-bar';
    bar.id = 'sticky-deal-bar';
    bar.innerHTML = `
      <div class="deal-content">
        <span class="deal-icon">🎁</span>
        <div class="deal-text">
          <h4>${deal.title}</h4>
          <p>${deal.subtitle}</p>
        </div>
      </div>
      <div class="deal-actions">
        <a href="${deal.url}" target="_blank" rel="noopener noreferrer nofollow" class="btn-deal-claim">
          ${deal.ctaText}
        </a>
        <button type="button" class="btn-deal-close" id="btn-close-deal" title="बंद करें (Close)">&times;</button>
      </div>
    `;

    document.body.appendChild(bar);

    document.getElementById('btn-close-deal').addEventListener('click', () => {
      bar.classList.add('hidden');
      // Hide for 12 hours
      localStorage.setItem('fengoo_deal_dismissed', (Date.now() + 12 * 60 * 60 * 1000).toString());
      setTimeout(() => {
        if (bar.parentNode) bar.parentNode.removeChild(bar);
      }, 400);
    });
  }

  function initFloatingCommunity(community) {
    if (!community || !community.enabled) return;

    const floatContainer = document.createElement('div');
    floatContainer.className = 'floating-community-badge';
    floatContainer.innerHTML = `
      <a href="${community.whatsappGroupUrl}" target="_blank" rel="noopener noreferrer" class="float-btn float-wa" aria-label="Join WhatsApp VIP Channel">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.782 2.796.782 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.768-5.768-5.768zm0 10.372c-.886 0-1.637-.251-2.399-.683l-.171-.098-1.579.414.422-1.541-.112-.178c-.477-.756-.73-1.428-.729-2.32.001-2.518 2.05-4.567 4.568-4.567 2.519 0 4.568 2.049 4.568 4.567 0 2.519-2.049 4.568-4.567 4.568z"/></svg>
        <span class="float-tooltip">VIP WhatsApp अलर्ट</span>
      </a>
      <a href="${community.telegramChannelUrl}" target="_blank" rel="noopener noreferrer" class="float-btn float-tg" aria-label="Join Telegram VIP Channel">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
        <span class="float-tooltip">Telegram कम्युनिटी</span>
      </a>
    `;

    document.body.appendChild(floatContainer);
  }

  function initAdSense(adsense) {
    if (!adsense || !adsense.enabled) return;

    if (adsense.publisherId && !adsense.publisherId.includes('XXXXX')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense.publisherId}`;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  }

  function enhanceAffiliateLinks(config) {
    const cardsMap = config.creditCards || {};
    const loansMap = config.loans || {};
    const bankAccountsMap = config.bankAccounts || {};

    // 1. Check credit card hub buttons (.btn-cc-apply)
    document.querySelectorAll('.btn-cc-apply').forEach(btn => {
      const parent = btn.closest('.cc-card-item');
      if (!parent) return;
      
      const cardId = parent.getAttribute('data-id');
      if (cardId && cardsMap[cardId]?.affiliateUrl) {
        btn.href = cardsMap[cardId].affiliateUrl;
        btn.setAttribute('rel', 'noopener noreferrer sponsored nofollow');
        return;
      }

      const cardTitle = (parent.querySelector('.cc-name')?.textContent || '').toLowerCase();
      for (const [key, item] of Object.entries(cardsMap)) {
        if (cardTitle.includes(item.name.toLowerCase()) || 
            cardTitle.includes(key.replace(/-/g, ' '))) {
          if (item.affiliateUrl) {
            btn.href = item.affiliateUrl;
            btn.setAttribute('rel', 'noopener noreferrer sponsored nofollow');
          }
          break;
        }
      }
    });

    // 2. Check loan hub buttons (.btn-loan-apply)
    document.querySelectorAll('.btn-loan-apply').forEach(btn => {
      const parent = btn.closest('.loan-card-item');
      if (!parent) return;

      const loanTitle = parent.querySelector('.loan-name')?.textContent || '';
      for (const [key, item] of Object.entries(loansMap)) {
        if (loanTitle.toLowerCase().includes(key.replace(/-/g, ' '))) {
          if (item.affiliateUrl) {
            btn.href = item.affiliateUrl;
            btn.setAttribute('rel', 'noopener noreferrer sponsored nofollow');
          }
          break;
        }
      }
    });

    // 3. Check Bank Hub items (.bank-card-item) for Zero-Balance Open & Apply Card
    document.querySelectorAll('.bank-card-item').forEach(card => {
      const bankId = card.getAttribute('data-bank-id') || '';
      
      // Zero balance account button
      const openBtn = card.querySelector('.zero-balance-box .btn-green');
      if (openBtn && bankAccountsMap[bankId] && bankAccountsMap[bankId].affiliateUrl) {
        openBtn.href = bankAccountsMap[bankId].affiliateUrl;
        openBtn.setAttribute('rel', 'noopener noreferrer sponsored nofollow');
      }

      // Credit card button in bank directory
      const ccBtn = card.querySelector('.credit-card-box .btn-blue');
      if (ccBtn) {
        // match by bankId or top card
        for (const [key, item] of Object.entries(cardsMap)) {
          if (key.includes(bankId) || (bankId === 'sbi' && key.includes('sbi')) || (bankId === 'icici' && key.includes('icici'))) {
            if (item.affiliateUrl) {
              ccBtn.href = item.affiliateUrl;
              ccBtn.setAttribute('rel', 'noopener noreferrer sponsored nofollow');
              break;
            }
          }
        }
      }
    });
  }
})();
