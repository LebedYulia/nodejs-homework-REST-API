const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const { users: ctrl } = require("../../controllers");
const { validation, auth, upload } = require("../../middlewares");
const { joiUserSchema } = require("../../models/user");

const router = express.Router();

router.post("/register", validation(joiUserSchema), ctrlWrapper(ctrl.register));

router.post("/login", validation(joiUserSchema), ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch("/", auth, ctrlWrapper(ctrl.updateStatusSubscription));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
