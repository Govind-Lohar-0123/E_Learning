import express from "express";
import FeedbackController from "../controllers/FeedbackController.js";
const router = express.Router();


router.post("/addfeedback", FeedbackController.addFeedback);
router.get("/getallfeedback", FeedbackController.getAllFeedback);



export default router;
