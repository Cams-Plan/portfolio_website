//projectsController
const mongoose = require("mongoose");
const Project = require("../models/Project")
const Stack = require("../models/Stack")

const allProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        if (projects.length == 0 ) {
            res.status(404).json({
                success: false,
                response: projects
            })
        } else if (projects.length > 0) {
            res.status(200).json({
                success: true,
                response: projects
            })
        }
    } catch (error) {
        
    }
}

const allStacks = async (req, res) => {
    try {
        const stacks = await Stack.find();
        if (stacks.length == 0 ) {
            res.status(404).json({
                success: false,
                response: stacks
            })
        } else if (stacks.length > 0) {
            res.status(200).json({
                success: true,
                response: stacks
            })
        }
    } catch (error) {
        
    }
}

const previewProjects = async (req, res) => {
    try {
        const projects = await Project.find().limit(3);
        if (projects.length == 0 ) {
            res.status(404).json({
                success: false,
                response: projects
            })
        } else if (projects.length == 3) {
            res.status(200).json({
                success: true,
                response: projects
            })
        }
    } catch (error) {
        
    }
}

module.exports = {allProjects, allStacks, previewProjects}
