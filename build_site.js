import fs from 'fs';
import { buildIndexHTML } from './generate_index.js';
import { buildCreditCardsHubHTML } from './generate_credit_cards_hub.js';
import { generateAllCardPages } from './generate_card_pages.js';
import { buildLoansHubHTML } from './generate_loans_hub.js';
import { generateAllLoanPages } from './generate_loan_pages.js';
import { buildBanksHubHTML } from './generate_banks_hub.js';
import { buildLinkManagerHTML } from './generate_link_manager.js';
import { buildSitemapXML } from './generate_sitemap.js';
import { getAllCreditCardsList, getAllLoansList, getAllBanksList } from './data_loader.js';
import { writeFile } from './build_helpers.js';

console.log('🚀 Starting dynamic site build from modular data files...');

// 1. Credit cards
console.log('Building credit cards hub and standalone pages...');
buildCreditCardsHubHTML();
generateAllCardPages();

// 2. Loans
console.log('Building loans hub and standalone pages...');
buildLoansHubHTML();
generateAllLoanPages();

// 3. Banks
console.log('Building banks hub...');
buildBanksHubHTML();

// 4. Index & Link Manager
console.log('Building home index & link manager...');
buildIndexHTML();
const linkMgrHtml = buildLinkManagerHTML();
writeFile('link-manager.html', linkMgrHtml);

// 5. Generate XML Sitemap for Google Search & AdSense
console.log('Building sitemap.xml...');
buildSitemapXML();

// 6. Generate client JSON bundle for runtime search & filters
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

fs.writeFileSync('public/banksathi_products.json', JSON.stringify({
  creditCards: getAllCreditCardsList(),
  loans: getAllLoansList(),
  banks: getAllBanksList()
}, null, 2), 'utf8');

console.log('✅ Entire site successfully generated from data/ files!');
