const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

async function getAllContacts() {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  const result = JSON.parse(contacts);
  return result;
}


const listContacts = async () => {
  return await getAllContacts();
};

const getContactById = async (contactId) => {
  const contacts = await getAllContacts();
  const contact = contacts.find(({ id }) => id === contactId);
  if (!contact) {
    return null;
  }
  return contact;
};

const removeContact = async (contactId) => {
  const contacts = await getAllContacts();
  const contact = contacts.find(({ id }) => id === contactId);
  if (!contact) {
    return null;
  }
  const updateContacts = contacts.filter(({ id }) => id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(updateContacts), "utf-8");
  return contact;
};

const addContact = async (body) => {
  const contacts = await getAllContacts();
  const newContact = {
    id: nanoid(),
    ...body,
  };
  if (contacts.find((contact) => contact.name === body.name)) {
    return console.warn(`Contact with name ${body.name} already exists!`);
  }
  const newContacts = [...contacts, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newContacts), "utf-8");
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await getAllContacts();
  const indexContact = contacts.findIndex(({ id }) => id === contactId);
  console.log(indexContact);
  if (indexContact === -1) {
    return null;
  }
  contacts[indexContact] = { id: contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts), "utf-8");
  return contacts[indexContact];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
