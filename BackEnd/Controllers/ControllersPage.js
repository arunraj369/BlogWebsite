const Post = require("../Models/ModelsPage");

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
    // console.log(req);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search posts by author
exports.getPostsByAuthor = async (req, res) => {
  const authorName = req.params.author;
  console.log(authorName);
  try {
    const posts = await Post.find({ author: authorName });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search posts by keyword
exports.searchPosts = async (req, res) => {
  const keyword = req.params.keyword;
  console.log(keyword);
  try {
    const posts = await Post.find({ title: keyword });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// new post
exports.createPost = async (req, res) => {
  try {
    const { title, author, content, imageUrl } = req.body;
    const newPost = new Post({ title, author, content, imageUrl });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Post.distinct("author");
    res.json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
