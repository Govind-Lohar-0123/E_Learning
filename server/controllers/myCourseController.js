import myCourseModel from "../utils/models/myCoursesSchema.js"
import mongoose from "mongoose";
class MyCourseController {


   
    static addMyCourse = async (req, res) => {
        const { myCourseId, stu_email } = req.body;

        try {
            // Ensure myCourseId is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(myCourseId)) {
                return res.status(400).send({ status: false, msg: "Invalid course ID format." });
            }

            // Convert myCourseId to ObjectId using `new mongoose.Types.ObjectId()`
            const courseObjectId = new mongoose.Types.ObjectId(myCourseId);

            // Find the student by email
            let student = await myCourseModel.findOne({ stu_email });

            // If student record does not exist, create a new one
            if (!student) {
                student = new myCourseModel({ stu_email, myCourses: [] });
            }

            // Check if the course is already in the student's myCourses array
            if (student.myCourses.includes(courseObjectId)) {
                return res.status(200).send({ status: false, msg: "You have already bought this course." });
            }

            // Add the course ID to the student's myCourses array
            student.myCourses.push(courseObjectId);
            await student.save();

            res.status(200).send({ status: true, msg: "You have bought your course." });
        } catch (err) {
           
            res.status(500).send({ status: false, msg: "Server Error: " + err.message });
        }
    };




    static getMyAllCourses = async (req, res) => {
        let { stu_email } = req.body;
        try {
            const result = await myCourseModel.aggregate([
                {
                    $match: { stu_email: stu_email }
                },

                { $count: "myCourses" },





            ]).exec();
           
          
            res.status(200).send({ status: true, len: (result.length == 0) ? { myCourses: 0 } : result[0] });

        }
        catch (err) {
            res.status(200).send({ status: false, len: { myCourses: 0 } });
        }
    }
    static getMyAllCoursesByLimit = async (req, res) => {
        let { page } = req.params;
        let { stu_email } = req.body;
        let limit = 6;
        let skip = (page - 1) * limit;
      
        try {
            // Perform the aggregation with $lookup
            const result = await myCourseModel.aggregate([
                {
                    $match: { stu_email: stu_email } // Match the student by ID
                },
                {
                    $lookup://it is used to add join feature
                    {
                        from: 'courses', // Join with the "courses" collection
                        localField: 'myCourses', // The array of course IDs in the myCoursesSchema
                        foreignField: '_id', // The course IDs in the "courses" collection
                        as: 'myCourses' // The alias for the resulting array of course details
                    }
                },




            ]);
          
            if (result.length != 0)
                res.status(200).send({ status: true, myCourses: result[0].myCourses });
            else res.status(200).send({ status: false, myCourses: [] });


        }
        catch (err) {
         
            res.status(200).send({ status: false, myCourses: [] });
        }
    }
    static getMyCourseDetails = async (req, res) => {

        
        const { stu_email, courseId } = req.body;
              try {
            // Perform the aggregation with $lookup
            const result = await myCourseModel.aggregate([
                {
                    $match: { stu_email: stu_email } // Match the student by ID
                },
                {
                    $lookup://it is used to add join feature
                    {
                        from: 'courses', // Join with the "courses" collection
                        localField: 'myCourses', // The array of course IDs in the myCoursesSchema
                        foreignField: '_id', // The course IDs in the "courses" collection
                        as: 'myCourseDetails' // The alias for the resulting array of course details
                    }
                },
                {
                    $unwind: {
                        path: '$myCourseDetails', // Flatten the array of courseDetails
                        preserveNullAndEmptyArrays: false // Only keep records where the course exists
                    }
                },
                {
                    $match: {
                        'myCourseDetails._id': new mongoose.Types.ObjectId(courseId) // Filter by the course ID
                    }
                },
                {
                    $limit: 1 // Get only one record (student with course)
                }
            ]);
            
            // Check if a result was found
            if (result.length === 0) {
                return   res.json({ status: false, myCourse:{} });
            }

            // Respond with the student and the matched course
            res.json({ status: true, myCourse: result[0] });
        } catch (err) {
            
            res.status(500).json({ message: 'Server error' });
        }



    }


}
export default MyCourseController;