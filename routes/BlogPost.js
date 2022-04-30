const express = require('express')
const router = express.Router()
const Post = require('../models/BlogPost')
const Comment = require('../models/Comment')
const check = require("../config/ensureLoggedIn")




//POST ROUTES
//Index
router.get("/", (req, res) => {
    Post.find({}, (err, foundPosts) => {
        if (!err) {
            res.status(200).json(foundPosts)
        } else {
            res.status(400).json(err)
        }
    })
})

//Create
router.post('/', async (req, res) => {
    try {
        const { body } = req
        const createdPost = await Post.create(body)
        res.status(200).json({ message: "Item Created!", createdPost })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

//Edit post
router.put("/:id", (req, res) => {
    const { body } = req

    Post.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedPost) => {
        if (!err) {
            res.status(200).json(updatedPost)
        } else {
            res.status(400).json(err)
        }
    })
})

// comment index
router.get('/:post_id/comments', (req, res) => {
    const { id } = req.params;
    Comment.find({}, (err, foundComments) => {
        if (!err) {
            res.status(200).json(foundComments)
        } else {
            res.status(400).json(err)
        }
    })
})



//Create comment
router.post('/:id/comments/', check, async (req, res) => {
    try {
        //get the body from Request
        const { body } = req
        //get the ID from params
        const { id } = req.params
        //Find the post from the ID in params
        const blogPost = await Post.findById(id)
        console.log(`Post is now ${blogPost}`)
        //Make the comment from the form's body
        const comment = new Comment(body)
        //assign comment to user
        // console.log(req.user)
        comment.user = req.user._id
        // console.log("comment is", comment)
        //save comment to DB
        comment.save()
        //push comment to the blogPost
        blogPost.comments.push(comment._id)
        //save Blogpost to DB
        blogPost.save()
        //test output
        // console.log(`Post is now ${blogPost}`)
        res.status(200).json({ message: "Worked!" })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

//DELETE comment
router.delete("/:id/comments/:id", (req, res) => {
    Comment.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Deleted Clue" })
        } else {
            res.status(400).json(err)
        }
    })
})

//UPDATE comment
router.put("/:id/comments/:id", (req, res) => {
    const { body } = req

    Comment.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedComment) => {
        if (!err) {
            res.status(200).json(updatedComment)
        } else {
            res.status(400).json(err)
        }
    })
})

//show comment
router.get('/:id/comments/:id', (req, res) => {
    const query = Comment.findById(req.params.id).populate('user')
    query.exec((err, foundPost) => {
        if (!err) {
            res.status(200).json({ message: "All Good!", foundPost })
        } else {
            res.status(400).json({ err: error.message })
        }
    })
})

//Show post
router.get('/:id', (req, res) => {
    const query = Post.findById(req.params.id).populate(
        {
            path: 'comments',
            populate:
                { path: "user" }
        }
    )
    query.exec((err, foundPost) => {
        if (!err) {
            res.status(200).json({ message: "All Good!", foundPost })
        } else {
            res.status(400).json({ err: error.message })
        }
    })
})

module.exports = router