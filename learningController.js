const Progress = require("../models/learningProgressModel");

exports.markAsCompleted = async (req, res) => {
  try {
    const { userId, courseId } = req.body;
    const existing = await Progress.findOne({ userId, courseId });

    if (existing) {
      existing.completed = true;
      existing.completedAt = new Date();
      await existing.save();
      return res.json({ message: "Progress updated", progress: existing });
    }

    const newProgress = new Progress({ userId, courseId, completed: true, completedAt: new Date() });
    await newProgress.save();
    res.status(201).json({ message: "Marked as completed", progress: newProgress });
  } catch (err) {
    res.status(500).json({ message: "Error updating progress" });
  }
};
