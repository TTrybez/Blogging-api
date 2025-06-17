const express = require('express');
const PostController = require('../controllers/postController');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();
const postController = new PostController();

router.post('/', authMiddleware.verifyToken, postController.createPost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);
router.put('/:id', authMiddleware.verifyToken, postController.updatePost);
router.delete('/:id', authMiddleware.verifyToken, postController.deletePost);
router.get('/user/:userId', authMiddleware.verifyToken, postController.getUserPosts);

module.exports = router;