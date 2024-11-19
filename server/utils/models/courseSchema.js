import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    crs_name: { type: String, unique: true, required: true },
    crs_desc: { type: String, required: true },
    crs_org_price: { type: Number, required: true },
    crs_sell_price: { type: Number, required: true },
    crs_duration: { type: String, required: true },
    crs_img: { type: String, required: true },
    crs_author: { type: String, required: true },
    crs_document:{type:String,required:true},
    crs_list:{type:Array,required:true}

})

const courseModel = mongoose.model("course", courseSchema);









export default courseModel;