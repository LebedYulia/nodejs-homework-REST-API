const { getAll } = require("../../service");

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await getAll();
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllContacts;
