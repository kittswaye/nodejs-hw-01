import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    const contacts = [];
    for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact());
    }
    const originalContacts = await readContacts();
    const updatedContacts = originalContacts.concat(contacts);
    await writeContacts(updatedContacts);
};

generateContacts(5);
