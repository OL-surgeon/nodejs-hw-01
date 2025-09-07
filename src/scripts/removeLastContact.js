import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('⚠️ Список контактів порожній. Немає контакту для видалення.');
    return;
  }

  contacts.pop();
  await writeContacts(contacts);

  console.log(`Removed last contact. Total contacts: ${contacts.length}`);
};

if (process.argv[1].includes('removeLastContact.js')) {
  removeLastContact();
}
