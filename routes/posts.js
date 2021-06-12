const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

//get all posts
router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        res.json({ post });
    } catch (err) {
        res.json({ messageErr: err });
    }
});


//get specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ mesaageErrSP: err });
    }
});

//delete post 

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ mesaageErrSP: err });

    }
});

//update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, {
            $set: { title: req.body.title, }
        });
        res.json(updatedPost);

    } catch (err) {
        res.json({ mesaageErrSP: err });

    }
})

router.post('/', async (req, res) => {
    const post = Post({
        title: req.body.title,
        desc: req.body.desc

    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);

    } catch (e) {
        res.json({ message: e });
    }
});




module.exports = router;