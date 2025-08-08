const Enrollment = require("../models/enrollmentModel");


exports.enrollInCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    if (!userId || !courseId) {
      return res.status(400).json({ message: "userId and courseId are required" });
    }

    const existing = await Enrollment.findOne({ userId, courseId });
    if (existing) {
      return res.status(400).json({ message: "Already enrolled" });
    }

    const enrollment = new Enrollment({ userId, courseId });
    await enrollment.save();

    res.status(201).json({ message: "Enrolled successfully", enrollment });
  } catch (error) {
    console.error("Enrollment Error:", error);
    res.status(500).json({ message: "Enrollment failed" });
  }
};
