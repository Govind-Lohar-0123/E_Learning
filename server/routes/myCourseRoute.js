import express from "express";
import MyCourseController from "../controllers/myCourseController.js";

const router = express.Router();


router.post("/getmyallcoursesbylimit/:page", MyCourseController.getMyAllCoursesByLimit);
router.post("/getmyallcourses", MyCourseController.getMyAllCourses);
router.post("/addmycourse", MyCourseController.addMyCourse);
router.post("/getmycoursedetails", MyCourseController.getMyCourseDetails);



export default router;
