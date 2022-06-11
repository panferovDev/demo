const router = require('express').Router();
const bycrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    res.json({});
  });

router.route('/signin')
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && await bycrypt.compare(password, user.password)) {
        req.session.user = { name: user.name, id: user.id };
        return res.json({ name: user.name, id: user.id });
      }
      return res.sendStatus(401);
    }
    return res.sendStatus(401);
  });

router.route('/signup')
  .post(async (req, res) => {
    const { login, email, password } = req.body;
    if (login && email && password) {
      const pass = await bycrypt.hash(password, 10);
      const newUser = await User.create({ name: login, email, password: pass });
      req.session.user = { name: newUser.name, id: newUser.id };
      return res.json({ name: newUser.name, id: newUser.id });
    }
    return res.sendStatus(401);
  });

router.route('/check')
  .post((req, res) => {
    if (req.session.user) {
      return res.json(req.session.user);
    }
    return res.sendStatus(401);
  });

router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid').sendStatus(200);
  });

module.exports = router;
