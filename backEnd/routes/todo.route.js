const express = require('express');
const {fetchTodos, updateTodo ,deleteTodo, addTodos}= require('../controller/todos.controller');


const TodoRoute = express.Router();



TodoRoute.get('/', async (req,res)=>{
    try{
        let{count =10 , page= 1} = req.query;

        count = parseInt(count);
        page= parseInt(page);
        
        const {todosData, documentCount} = await fetchTodos({
            count, page
        });

        return res.send({
          todosData, documentCount
        })
      }
      catch(err){
        console.log(err)

        return res.status(500).send({
            error : 'something went wrong'
        })
      }
})

TodoRoute.post('/', async (req,res)=>{
  try{

    
    let {title} = req.body;

    const todo = await addTodos(title);

    return res.send(todo)
    }
 catch(err){
      console.log(err)

      return res.status(500).send({
          error : 'something went wrong'
      })
    }
})

TodoRoute.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id; // Access "id" from params, not query
    const {title, completed} = req.body;

    const todo = await updateTodo(id, title, completed);

    res.send(todo);
  } catch (err) {
    console.log(err);
    res.send({
      err: 'something went wrong',
    });
  }
});

TodoRoute.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id; // Access "id" from params, not que

    const todo = await deleteTodo(id);
    res.send(todo);
  } catch (err) {
    console.log(err);
    res.send({
      err: 'something went wrong',
    });
  }
});



module.exports = TodoRoute;