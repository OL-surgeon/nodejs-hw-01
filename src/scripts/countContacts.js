import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Total contacts: ${contacts.length}`);
  return contacts.length;
};

if (process.argv[1].includes('countContacts.js')) {
  countContacts();
}
