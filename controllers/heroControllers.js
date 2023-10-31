import chalk from "chalk";
import Hero from "../models/Hero.js";

export const getHero = async (req,res) => {
    try {
        const hero = await Hero.find();
        res.json(hero);
    }catch(error) {
    console.error(chalk.red("Error fetching hero"), error.message);
    res.status(500).json({error:"Internal Service Error"});
    }
};

export const createHero = async (req,res) => {
    const { name, quirks, heroName} = req.body;
    try {
        const newHero = await Hero.create({name,quirks,heroName});
        res.status(201).json(newHero);
    }catch(error) {
    console.error(chalk.red("Error updating hero"),error.message);
    res.status(500).json({error:"Internal Service Error"});
    }
};

export const updateHero = async (req, res) => {
    
}