const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId: Number,
    id: Number,
    title: String,
    completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;