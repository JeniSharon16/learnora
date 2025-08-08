const express = require("express");
const router = express.Router();
const { enrollInCourse } = require("../controllers/enrollmentController");

router.post("/", enrollInCourse);

module.exports = router;
