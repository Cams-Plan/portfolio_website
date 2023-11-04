// projects 
const express = require("express");
const projectsRouter = express.Router();

const { allProjects, allStacks, previewProjects } = require("../controllers/projectsController")

projectsRouter.get("/details", allProjects)
projectsRouter.get("/stacks", allStacks)
projectsRouter.get("/preview", previewProjects)

module.exports = projectsRouter;
