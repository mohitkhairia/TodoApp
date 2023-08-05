const express = require('express');
const TodoRoute = require('./routes/todo.route');
const  connect  = require('./db/connectDatabase');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
app.use(bodyParser.json()); // To parse JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/todos', TodoRoute);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(express.static('public'))
// app.use(express.json())


app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html',));
})

connect().then(()=>{
    app.listen(3000, ()=>{
        console.log("Server started on http://localhost:3000")
    })
    }
    )