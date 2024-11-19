import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    feed_stu_content: { type: String, required: true },
    feed_stu_name: { type: String, required: true },
    feed_stu_img: { type: String, required: true },

})

const feedbackModel = mongoose.model("feedback", feedbackSchema);









export default feedbackModel;