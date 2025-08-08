const Course = require("../models/courseModel");

exports.createCourse = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    if (!req.file) return res.status(400).json({ message: "Video is required" });

    const videoInfo = {
      title: req.file.originalname,
      url: `/uploads/videos/${req.file.filename}`
    };

    const newCourse = new Course({
      title,
      description,
      price,
      videos: [videoInfo]
    });

    const saved = await newCourse.save();
    res.status(201).json({ message: "Course created", course: saved });
  } catch (err) {
    console.error("Course creation error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Failed to get courses" });
  }
};
