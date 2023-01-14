const express = require("express");
const {ctrlWrapper} = require("../../helpers");
const { users: ctrl } = require("../../controllers");
const { validation, auth } = require("../../middlewares");
const { joiUserSchema } = require("../../models/user");

const router = express.Router();


router.post('/register',  validation(joiUserSchema), ctrlWrapper(ctrl.register));

router.post('/login', validation(joiUserSchema), ctrlWrapper(ctrl.login))

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent) )

router.get('/logout', auth,  ctrlWrapper(ctrl.logout))

router.patch("/", auth, ctrlWrapper(ctrl.updateStatusSubscription))


module.exports = router;