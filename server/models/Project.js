const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        project_title: {
            type: String,
            required: true
        },
        project_name: {
            type: String,
            required: true
        },
        project_thumbnail: {
            type: String,
            required: true
        },
        project_stack: {
            type: Array,
            required: true
        },
        deployed: {
            type: Boolean,
            required: true
        },
        progress_status: {
            type: String,
            required: true
        },
        project_type: {
            type: String,
            required: true
        },
        project_url: {
            type: String
        }
    }
)

const Project = mongoose.model("Project", projectSchema)
module.exports = Project;
