// Modular Credit Cards Architecture
// Loads all individual credit card files from /data/credit-cards/
// To add a new card: add a file in /data/credit-cards/<card-id>.json
// To delete a card: delete the file from /data/credit-cards/
import { getAllCreditCards } from './data_loader.js';

export const creditCardGuides = getAllCreditCards();
