const mongoose = require("mongoose");
//import models for seeding
const Project = require("../models/Project");
const Stack = require("../models/Stack");
const User = require("../models/User");

const connectDB = require("./setup");

const seedDB = async () => {
    try {
        console.log("Planting Seeds 🌱")
        await connectDB();
        //Stack seed
        console.log("Planting Stack Seed")
        await Stack.insertMany([
            {
                technology_title: "JavaScript",
                technology_type: "frontend"
            },
            {
                technology_title: "HTML",
                technology_type: "frontend"
            },
            {
                technology_title: "NodeJS",
                technology_type: "frontend"
            },
            {
                technology_title: "React",
                technology_type: "frontend"
            },
            {
                technology_title: "React Native",
                technology_type: "frontend"
            },
            {
                technology_title: "ExpressJS",
                technology_type: "frontend"
            },
            {
                technology_title: "Jest",
                technology_type: "testing"
            },
            {
                technology_title: "Vitest",
                technology_type: "testing"
            },
            {
                technology_title: "Docker",
                technology_type: "devops"
            },
            {
                technology_title: "AWS",
                technology_type: "cloud"
            },
            {
                technology_title: "Terraform",
                technology_type: "devops"
            },
            {
                technology_title: "Python",
                technology_type: "backend"
            },
            {
                technology_title: "Flask",
                technology_type: "backend"
            },
            {
                technology_title: "SQL",
                technology_type: "backend"
            },
            {
                technology_title: "MongoDB",
                technology_type: "backend"
            }
            
        ])

        console.log("Planting Project Seed")
        await Project.insertMany([
            {
                project_title: "Study App Project",
                project_name: "Study Buddy",
                project_thumbnail: "sample",
                project_stack: ["React", "MongoDB", "NodeJS", "ExpressJS", "Jest", "Docker"],
                deployed: true,
                progress_status: "Done",
                project_type: "Full Stack",
                project_url: "https://github.com/Cams-Plan/LAP3-study-buddy-app/tree/main#mern-project-collaborative---study-buddy-app"
            },
            {
                project_title: "100 Days of Code Projects",
                project_name: "100 Days of Code Collection",
                project_thumbnail: "daysOfCodeThumbnail",
                project_stack: ["Python"],
                deployed: false,
                progress_status: "In Progress",
                project_type: "Backend",
                project_url: "https://github.com/Cams-Plan/Programming-Projects/blob/main/README.md#100-days-of-code-main-programming-projects"
            },
            {
                project_title: "Basketball Training Mobile App",
                project_name: "BasketNow Mobile Training App",
                project_thumbnail: "basketNowThumbnail",
                project_stack: ["React Native"],
                deployed: false,
                progress_status: "In Progress",
                project_type: "Full Stack",
                project_url: "https://github.com/Cams-Plan/BasketNow-React-Native-App"
            },
            {
                project_title: "AWS Hosted Tech Blog",
                project_name: "Cam In Tech Blog",
                project_thumbnail: "camInTech",
                project_stack: ["AWS", "Linux CLI", "WordPress"],
                deployed: true,
                progress_status: "On-Going",
                project_type: "Cloud",
                project_url: "https://camintech.co.uk"
            },
            {
                project_title: "React Native Todo List App",
                project_name: "React Native Todo List App",
                project_thumbnail: "reactNativeTodo",
                project_stack: ["React Native"],
                deployed: false,
                progress_status: "Done",
                project_type: "Frontend",
                project_url: "https://github.com/Cams-Plan/React-Native_Todo_App/tree/progression#react-native-todo-list-mobile-app-"
            },
            {
                project_title: "React & Flask Mental Wellbeing App",
                project_name: "WellSpace Wellbeing Web App",
                project_thumbnail: "wellSpaceThumbnail",
                project_stack: ["React", "Python", "Flask", "0Auth", "Vitest", "SQL"],
                deployed: false,
                progress_status: "On-Going",
                project_type: "Full Stack",
                project_url: "https://github.com/Cams-Plan/connect_four/tree/main#connect-4"
            },
            {
                project_title: "React Native Game Reviews App",
                project_name: "React Native Game Reviews App",
                project_thumbnail: "reactNativeGameReviews",
                project_stack: ["React Native"],
                deployed: false,
                progress_status: "Done",
                project_type: "Frontend",
                project_url: "https://github.com/Cams-Plan/React-Native_Reviews_App/tree/progression#react-native-game-review--app"
            },
            {
                project_title: "Educational Game Project",
                project_name: "Game Theory Economics Web App",
                project_thumbnail: "gameTheoryThumbnail",
                project_stack: ["HTML", "JavaScript", "NodeJS", "ExpressJS"],
                deployed: false,
                progress_status: "Done",
                project_type: "Full Stack",
                project_url: "https://github.com/Cams-Plan/lap1-project-game-theory#game-of-theory"
            },
            {
                project_title: "Connect 4 GUI Project",
                project_name: "Connect 4 GUI",
                project_thumbnail: "connect4Thumbnail",
                project_stack: ["HTML", "JavaScript", "CSS"],
                deployed: false,
                progress_status: "Done",
                project_type: "Frontend",
                project_url: "https://github.com/Cams-Plan/connect_four/tree/main#connect-4"
            },
            {
                project_title: "Rock Paper Scissors CLI",
                project_name: "Rock Paper Scissors CLI",
                project_thumbnail: "rockPaperScissors",
                project_stack: ["Python"],
                deployed: false,
                progress_status: "Done",
                project_type: "Backend",
                project_url: "https://github.com/Cams-Plan/player-vs-computer-rock-paper-scissors/blob/main/README.md#player-vs-computer-rock-paper-scissors"
            }
        ])

        console.log("DB Seeded 🌾")
        await mongoose.disconnect()

    } catch (error) {
       console.log(error) 
    }
}

seedDB()
