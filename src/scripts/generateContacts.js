import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = Array.from({ length: number }, createFakeContact);

  const updatedContacts = [...contacts, ...newContacts];
  await writeContacts(updatedContacts);

  console.log(
    `Generated ${number} contacts. Total contacts: ${updatedContacts.length}`,
  );
};

if (process.argv[1].includes('generateContacts.js')) {
  generateContacts(5);
}
