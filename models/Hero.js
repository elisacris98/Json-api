import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    name: {type:String,required:true},
    quirks: {type:String,required:true},
    heroName: {type:String,required:true}
});

const HeroModel = mongoose.model("HeroModel",heroSchema);

export default HeroModel;
