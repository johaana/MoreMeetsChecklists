
/**
 * @fileOverview Redundant blog-posts path neutralized to favor app/lib/blog-posts.ts.
 * The primary blog post data is located at app/lib/blog-posts.ts.
 */
import { blogPosts as primaryPosts } from '@/lib/blog-posts';
export const blogPosts = primaryPosts;
