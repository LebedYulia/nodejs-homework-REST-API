const { Contact } = require("../models");

const getAll = async() => {
    const result = await Contact.find({});
    return result;
}

const getById = async(id) => {
    const result = await Contact.findById(id);    
    return result;   
}

const add = async(data) => {
    const result = await Contact.create(data)    
    return result;
}

const updateById = async(id, data) => {
    const result = await Contact.findByIdAndUpdate(id, data)
    return result;
}

const updatePartial = async(id, status) => {
    const result = await Contact.findByIdAndUpdate(id, status);
    return result;
}

const remove = async(id) => {
    const result = await Contact.findByIdAndRemove(id);
    return result;
}

module.exports = {
    getAll,
    add,
    getById,    
    updateById,
    updatePartial,
    remove,
}