const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPostsByAuthor,
  searchPosts,
  createPost,
  getAllAuthors,
} = require("../Controllers/ControllersPage");

// Routes for posts
router.get("/", getAllPosts); // Route to get all posts
router.get("/author/:author", getPostsByAuthor); // Route to search posts by author
router.get("/search/:keyword", searchPosts); // Route to search posts by keyword
router.post("/", createPost);
router.get("/authors", getAllAuthors);
module.exports = router;
