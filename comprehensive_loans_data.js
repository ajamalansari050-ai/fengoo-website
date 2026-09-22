// Modular Loans Architecture
// Loads all individual loan files from /data/loans/
// To add a new loan: add a file in /data/loans/<loan-id>.json
// To delete a loan: delete the file from /data/loans/
import { getAllLoans } from './data_loader.js';

export const loanGuides = getAllLoans();
