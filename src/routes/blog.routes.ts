import express from 'express';
import * as blogController from '../controllers/blog.controller';

const router = express.Router();

/**
 * @swagger
 * /blog/posts:
 *   get:
 *     summary: Get all posts
 *     description: Retrieves a list of all blog posts.
 *     responses:
 *       200:
 *         description: A list of blog posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array // Corrected formatting
 *               items:
 *                 $ref: '#/components/schemas/Post' // Assuming you have a 'Post' schema defined
 */

router.get('/posts', blogController.getAllBlogPosts);

export default router;