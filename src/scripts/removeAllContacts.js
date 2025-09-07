import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  await writeContacts([]);
  console.log('All contacts have been removed.');
};

if (process.argv[1].includes('removeAllContacts.js')) {
  removeAllContacts();
}
