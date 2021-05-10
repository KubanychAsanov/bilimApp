const { Router } = require('express')
const Blog = require('../models/blog')
const auth = require('../middleware/auth')
var moment = require('moment'); // require
const router = Router()

router.get('/', auth, (req, res) => {
  res.render('add', {
    title: 'Add blog',
    isAdd: true
  })
})

router.post('/', auth, async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    desc: req.body.desc,
    content: req.body.content,
    img: req.body.img,
    userId: req.user,
    dateAdded: moment(new Date()).format("DD.MM.YYYY")
  })

  try {
    await blog.save()
    res.redirect('/blogs')
  } catch (error) {
    console.log(error)
  }
})

module.exports = router