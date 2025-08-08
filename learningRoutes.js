const express = require("express");
const router = express.Router();
const { markAsCompleted } = require("../controllers/learningController");

router.post("/complete", markAsCompleted);

module.exports = router;
