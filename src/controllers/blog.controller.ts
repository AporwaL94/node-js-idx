import { Request, Response } from 'express';

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The post ID
 *         title:
 *           type: string
 *           description: The post title
 *         content:
 *           type: string
 *           description: The post content
 */

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
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
export const getAllBlogPosts = (req: Request, res: Response) => {
  // Your logic to fetch and return blog posts
  const posts = [
    { id: 1, title: 'Post 1', content: 'Content of post 1' },
    { id: 2, title: 'Post 2', content: 'Content of post 2' },
    // ... more posts
  ];

  res.json(posts); 
};