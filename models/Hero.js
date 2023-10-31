import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    name: {type:String,},
    quirks: {type:String,},
    heroName: {type:String}
});

const HeroModel = mongoose.model("HeroModel",heroSchema);

export default HeroModel;
