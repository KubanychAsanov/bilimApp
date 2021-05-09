const { Router } = require('express')
const Blog = require('../models/blog')
const auth = require('../middleware/auth')
const router = Router()

function isOwner(blog, req) {
  return blog.userId.toString() === req.user._id.toString()
}

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ _id: -1 }).populate('userId', 'name surname avatarUrl')
    res.render('blogs', {
      title: 'Blogs',
      isBlogs: true,
      userId: req.user ? req.user._id.toString() : null,
      blogs,
    })
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
    res.render('blog', {
      layout: 'empty',
      title: `Blog ${blog.title}`,
      blog
    })
  } catch (e) {
    console.log(e)
  }
})

router.get('/:id/edit', auth, async (req, res) => {
  if (!req.query.allow) {
    return res.redirect('/')
  }

  try {
    const blog = await Blog.findById(req.params.id)

    if (!isOwner(blog, req)) {
      return res.redirect('/blogs')
    }

    res.render('blog-edit', {
      title: `Edit "${blog.title}"`,
      blog
    })
  } catch (e) {
    console.log(e)
  }
})

router.post('/edit', auth, async (req, res) => {
  try {
    const { id } = req.body
    delete req.body.id
    const blog = await Blog.findById(id)

    if (!isOwner(blog, req)) {
      return res.redirect('/blogs')
    }

    Object.assign(blog, req.body)
    await blog.save()
    res.redirect('/blogs')
  } catch (e) {
    console.log(e)
  }
})

router.post('/remove', auth, async (req, res) => {
  try {
    await Blog.deleteOne({
      _id: req.body.id,
      userId: req.user._id,
    })
    res.redirect('/blogs')
  } catch (e) {
    console.log(e)
  }
})


module.exports = router