const mongoose = require("mongoose");

const stackSchema = new mongoose.Schema(
    {
        technology_title: {
            type: String,
            required: true
        },
        technology_type: {
            type: String,
            required: true
        },
    }
);

const Stack = mongoose.model("Stack", stackSchema);
module.exports = Stack;
