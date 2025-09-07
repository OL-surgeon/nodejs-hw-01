import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = createFakeContact();

  const updatedContacts = [...contacts, newContact];
  await writeContacts(updatedContacts);

  console.log(`Added one contact. Total contacts: ${updatedContacts.length}`);
};

if (process.argv[1].includes('addOneContact.js')) {
  addOneContact();
}
