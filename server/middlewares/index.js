const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/img/');
  },

  filename(req, file, cb) {
    cb(null, `${Date.now() + file.originalname}`);
  },
});

const upload = multer({ storage });

const checkUser = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  return res.sendStatus(401);
};

module.exports = { upload, checkUser };
