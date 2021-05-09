const { Router } = require('express')
const Blog = require('../models/blog')
const router = Router()

router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find()
        return res.status(200).send(blogs)
    } catch (e) {
        res.status(500);
        console.log(e)
    }
})

router.get('/blogs/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        if (blog !== null) {
            return res.status(200).send(blog)
        } else {
            return res.status(404)
        }
    } catch (e) {
        console.log(e)
    }
})

router.post('/add', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        desc: req.body.desc,
        content: req.body.content,
        img: req.body.img
    })

    try {
        await blog.save()
        return res.status(200).send(blog)
    } catch (error) {
        console.log(error)
    }
})

router.put('/blogs/:id', async (req, res) => {
    try {
        const { id } = req.body
        delete req.body.id
        const blog = await Blog.findById(id)

        Object.assign(blog, req.body)
        await blog.save()
        return res.status(200).send(blog)
    } catch (e) {
        console.log(e)
    }
})

router.delete('/blogs/:id', async (req, res) => {
    try {
      await Blog.deleteOne({
        _id: req.body.id,
      })
      return res.status(201)
    } catch (e) {
      console.log(e)
    }
  })

module.exports = router