import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    const originalContacts = await readContacts();
    originalContacts.push(createFakeContact());
    await writeContacts(originalContacts);
};

addOneContact();
