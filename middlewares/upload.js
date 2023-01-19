const multer = require("multer");
const path = require("path");

const FILE_DIR = path.resolve("./tmp");
console.log(FILE_DIR);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, FILE_DIR);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
