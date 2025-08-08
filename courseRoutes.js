const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { createCourse, getAllCourses } = require("../controllers/courseController");

router.post("/create", upload.single("video"), createCourse);
router.get("/", getAllCourses);

module.exports = router;
