import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  console.table(contacts);
  return contacts;
};

if (process.argv[1].includes('getAllContacts.js')) {
  getAllContacts();
}
