import connectDB from "./connection.js";
import HeroModel from "../models/Hero.js";

import seedData from "../seed/data.json" assert { type: "json"};

const seedDB = async () => {
    try {
        //pulled from up top
        await connectDB();
        //clear data
        await HeroModel.deleteMany();
        //inserting seed data
        await HeroModel.insertMany(seedData);

        console.log("Database seeded successfully");

    } catch (err) {
        console.error("Error seeding the db", err.message);
    }
};

seedDB();