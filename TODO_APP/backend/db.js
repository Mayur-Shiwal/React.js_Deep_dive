const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://course_selling:mayurshiwal@cluster0.fdmae5u.mongodb.net/Todo");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = new mongoose.model("todos", todoSchema);

module.exports = {todo};