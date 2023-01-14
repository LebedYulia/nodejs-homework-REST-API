const { Contact } = require("../models");

const getAll = async (ownerId, { skip, limit }) => {
  const result = await Contact.find(ownerId, '', {skip, limit});
  return result;
};

const getById = async (id, ownerId) => {
  const result = await Contact.findById(id, ownerId);
  return result;
};

const add = async (data) => {
  const result = await Contact.create(data);
  return result;
};

const updateById = async (id, ownerId, data) => {
  const result = await Contact.findByIdAndUpdate(id, data, ownerId);
  return result;
};

const updatePartial = async (id, status, ownerId) => {
  const result = await Contact.findByIdAndUpdate(id, status, ownerId);
  return result;
};

const remove = async (id, ownerId) => {
  const result = await Contact.findByIdAndRemove(id, ownerId);
  return result;
};

module.exports = {
  getAll,
  add,
  getById,
  updateById,
  updatePartial,
  remove,
};
