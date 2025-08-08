const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  videos: [
    {
      title: String,
      url: String
    }
  ],
  quizzes: [
    {
      question: String,
      options: [String],
      answer: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Course", courseSchema);
