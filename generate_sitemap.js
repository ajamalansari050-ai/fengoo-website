import fs from 'fs';
import path from 'path';
import { getAllCreditCardsList, getAllLoansList, getAllBanksList } from './data_loader.js';

export function buildSitemapXML() {
  const domain = 'https://fengoo.in';
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    '',
    'banks/index.html',
    'credit-cards/index.html',
    'loans/index.html',
    'upi/index.html',
    'insurance/index.html',
    'investments/index.html',
    'government/index.html',
    'tax/index.html',
    'pension/index.html',
    'savings/index.html',
    'calculators/index.html',
    'privacy-policy.html',
    'terms-of-service.html',
    'disclaimer.html',
    'about-us.html',
    'contact-us.html',
    'affiliate-disclosure.html'
  ];

  const urls = [];

  staticPages.forEach(p => {
    urls.push({
      loc: `${domain}/${p}`,
      changefreq: p === '' ? 'daily' : 'weekly',
      priority: p === '' ? '1.0' : (p.includes('policy') || p.includes('terms') ? '0.5' : '0.8')
    });
  });

  // Credit Cards
  const cards = getAllCreditCardsList();
  cards.forEach(c => {
    urls.push({
      loc: `${domain}/credit-cards/${c.pageUrl}`,
      changefreq: 'weekly',
      priority: '0.9'
    });
  });

  // Loans
  const loans = getAllLoansList();
  loans.forEach(l => {
    urls.push({
      loc: `${domain}/loans/${l.pageUrl}`,
      changefreq: 'weekly',
      priority: '0.9'
    });
  });

  // Banks
  const banks = getAllBanksList();
  banks.forEach(b => {
    if (b.detailPage) {
      urls.push({
        loc: `${domain}/banks/${b.detailPage}`,
        changefreq: 'weekly',
        priority: '0.8'
      });
    }
  });

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('sitemap.xml', xmlContent, 'utf8');
  console.log(`Successfully generated sitemap.xml with ${urls.length} URLs!`);
}
