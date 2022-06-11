const router = require('express').Router();
const { Post } = require('../db/models');
const { upload, checkUser } = require('../middlewares');

router.route('/')
  .get(async (req, res) => {
    const posts = await Post.findAll();
    res.json({ posts });
  })
  .post(upload.single('file'), async (req, res) => {
    console.log(req.body)
    // const { title, text } = req.body;
    // await Post.create({
    //   text, title, user_id: req.session.user.id, img: `/img/${req.file.originalname}`,
    // });
    res.json(200);
  });

module.exports = router;
