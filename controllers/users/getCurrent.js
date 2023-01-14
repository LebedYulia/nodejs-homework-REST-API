const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const { RequestError } = require("../../helpers");
// const { User } = require("../../models");


const getCurrent = async(req, res) => {
    const {email, subscription} = req.user;
    res.json ({
        status: 'success',
        cod: 200,
        data: {
            email,
            subscription,
        }
    })

}


module.exports = getCurrent;