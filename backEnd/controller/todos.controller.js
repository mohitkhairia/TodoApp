const mongoose = require('mongoose');
const Todo = require('../db/todos.model');


async function fetchTodos({count, page}){
    const skip = (page -1 )* count;

        const todosData = await Todo.find().limit(count).skip(skip);

       const documentCount = await Todo.countDocuments()
       const data = {todosData, documentCount}
        return data;
}

async function addTodos(title){
 
    try{
 
    
      let todo = await Todo.create({
         title: title, 
         completed: false,
      });
      return todo
    }
    catch(err){
        console.log(err)
    }
 }

 async function updateTodo(id, title, done) {
    const todo = await Todo.findOne({_id: id}); // Use findById(id) instead of findById({ 
  
    if (!todo) {
      throw new Error('todo does not exist');
    }
  
    const updatedTodo = await Todo.updateOne({ _id: id }, {title: title, completed: done}); // Use _id: id instead of id
  
    return updatedTodo; // Return updatedTodo instead of updateTodo
  }
  
  async function deleteTodo(id) {
    const todo = await Todo.findOne({ _id: id }); // Find the document using the "id" field
  
    if (!todo) {
      throw new Error('todo does not exist');
    }
  
    const query = { _id: id }; // Use the "id" directly in the query
    const deletedTodo = await Todo.deleteOne(query);
  
    return deletedTodo;
  }


 module.exports = {
    fetchTodos,
    addTodos,
    updateTodo,
    deleteTodo,
}