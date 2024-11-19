import mongoose from "mongoose";

const myCourseSchema = new mongoose.Schema({

    stu_email: { type: String, required: true },
    myCourses:[{type:mongoose.Schema.Types.ObjectId,unique:true,ref:"course"}]

})

const myCourseModel = mongoose.model("myCourse", myCourseSchema);









export default myCourseModel;