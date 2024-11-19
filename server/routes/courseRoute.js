import express from "express";
import CourseController from "../controllers/courseController.js";
const router = express.Router();


router.get("/getallcourses", CourseController.getAllCourse);
router.get("/course-detail/:course_id", CourseController.getCourseDetail);



export default router;
