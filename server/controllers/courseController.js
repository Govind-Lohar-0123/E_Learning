import courseModel from "../utils/models/courseSchema.js"

class CourseController {
    static addCourses = async (course) => {
        try {
            await courseModel.insertMany(course);
            console.log("Courses Added...")
            return;
        }
        catch (err) {
           
            return;
        }
    }
    static getAllCourse = async (req, res) => {
        try {
            let result = await courseModel.find();
            res.status(200).send({ status: true, courses: result });

        }
        catch (err) {
            res.status(200).send({ status: false, courses: [] });
        }
    }
    static getCourseDetail = async (req, res) => {

        let { course_id } = req.params;

        try {
            let result = await courseModel.findOne({ _id: course_id });
            res.status(200).send({ status: true, course: result });

        }
        catch (err) {
            res.status(200).send({ status: false, course: {} });
        }
    }
}
export default CourseController;