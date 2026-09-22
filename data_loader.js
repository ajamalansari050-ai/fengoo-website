import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const CARDS_DIR = path.join(ROOT_DIR, 'data', 'credit-cards');
const LOANS_DIR = path.join(ROOT_DIR, 'data', 'loans');
const BANKS_DIR = path.join(ROOT_DIR, 'data', 'banks');

/**
 * Loads all credit cards from data/credit-cards/ directory.
 * Ignores any template or draft files starting with underscore (e.g. _TEMPLATE_CARD.json).
 * Deleting a file in data/credit-cards/ automatically removes the card.
 * Adding a file automatically adds the card.
 */
export function getAllCreditCards() {
  if (!fs.existsSync(CARDS_DIR)) return {};
  const files = fs.readdirSync(CARDS_DIR);
  const cards = {};

  for (const file of files) {
    if (file.startsWith('_') || !file.endsWith('.json')) continue;
    try {
      const fullPath = path.join(CARDS_DIR, file);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const data = JSON.parse(raw);
      if (data.id) {
        cards[data.id] = data;
      }
    } catch (err) {
      console.error(`Error loading credit card file ${file}:`, err.message);
    }
  }
  return cards;
}

export function getAllCreditCardsList() {
  return Object.values(getAllCreditCards());
}

/**
 * Loads all loan products from data/loans/ directory.
 * Ignores any template files starting with underscore (e.g. _TEMPLATE_LOAN.json).
 */
export function getAllLoans() {
  if (!fs.existsSync(LOANS_DIR)) return {};
  const files = fs.readdirSync(LOANS_DIR);
  const loans = {};

  for (const file of files) {
    if (file.startsWith('_') || !file.endsWith('.json')) continue;
    try {
      const fullPath = path.join(LOANS_DIR, file);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const data = JSON.parse(raw);
      if (data.id) {
        loans[data.id] = data;
      }
    } catch (err) {
      console.error(`Error loading loan file ${file}:`, err.message);
    }
  }
  return loans;
}

export function getAllLoansList() {
  return Object.values(getAllLoans());
}

/**
 * Loads all banks from data/banks/ directory.
 * Ignores any template files starting with underscore (e.g. _TEMPLATE_BANK.json).
 */
export function getAllBanks() {
  if (!fs.existsSync(BANKS_DIR)) return {};
  const files = fs.readdirSync(BANKS_DIR);
  const banks = {};

  for (const file of files) {
    if (file.startsWith('_') || !file.endsWith('.json')) continue;
    try {
      const fullPath = path.join(BANKS_DIR, file);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const data = JSON.parse(raw);
      if (data.id) {
        banks[data.id] = data;
      }
    } catch (err) {
      console.error(`Error loading bank file ${file}:`, err.message);
    }
  }
  return banks;
}

export function getAllBanksList() {
  return Object.values(getAllBanks());
}
