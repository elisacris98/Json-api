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
  const {id} = req.params;
  const {name,quirks,heroName} = req.body;
  try {
    const updatedHero = await Hero.findByIdAndUpdate(
        id,
        {name, quriks, heroName},
        {new:true}
    );
    if (!updatedHero) {
        return res.status(404).json({error:"Person Not Found"});
    }
    res.status(201).json({
        message:chalk.green("Person updated successfully"),
        updatedHero: updateHero,
    });
  }catch (error) {
    console.error(chalk.red("Error fetching people"),error.message);
    res.status(500).json({ error:"Internal Server Error"});
  } 
};

export const deleteHero = async (req, res) => {
    const {id} = req.params;
    try{
        const deletedHero = await Hero.findByIdAndUpdate(id);
        if(!deletedHero) {
            return res.status(404).json({error:"Person not found"});
        }
        res.json({message:chalk.green("Hero deleted successfully")});
    }catch(error) {
        console.error(chalk.error("Error deleting person"),error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
};