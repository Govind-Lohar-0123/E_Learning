import feedbackModel from "../utils/models/feedbackSchema.js"

class FeedbackController {
    static addFeedback = async (req, res) => {
        const { feedback } = req.body;
        
        try {
            await feedbackModel.insertMany(feedback);
            console.log("Feedback is Added...");
            res.status(200).send({ status: true, msg: "Feedback Successfully Added..." });
            return;
        }
        catch (err) {
            res.status(200).send({ status: true, msg: "Server Error" +err});

            return;
        }
    }
    static getAllFeedback = async (req, res) => {
        try {
            let result = await feedbackModel.find();
            res.status(200).send({ status: true, feedback: result });

        }
        catch (err) {
            res.status(200).send({ status: false, feedback: [] });
        }
    }
   
}
export default FeedbackController;