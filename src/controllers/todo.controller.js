import mongoose, { Mongoose } from "mongoose";
import todos from '../models/todo.model.js'

const addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title, !description) {
            return res.status(400).json({
                message: "Title and descriptin are Required"
            })
        }
        const todo = await todos.create({
            title,
            description,
        })
        return res.status(201).json({
            message: "Todo Added Successfully"
        })
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            message: "Internal server error"
        })
    }
}

const getAllTodo = async (req, res) => {
    const todo = await todos.find({})
    res.status(200).json({
        todos: todo,
    })
}

const getSingleTodo = async (req, res) => {
    const { id } = req.params
 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  const todo = await todos.findById(id)
  if(!todo){
    res.status(404).json({
        message: 'From This ID Not Found'
    });
    return
  }
  res.status(200).json(todo)
}

const deleteTodo = async (req , res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: 'no Todo Found'
        })
    }
    const todo = await todos.findOneAndDelete({_id: id})
    if(!todo){
        return res.status(400).json({
            error: 'no Todo Found'
        })
    }
    res.status(200).json({
        message: 'Todo Deleted successFully'
    })
}

const updateTodo = async (req , res) => {
    const {id} = req.params
    const {title , description} = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'not a valid id'})
    }
    const todo = await todos.findOneAndReplace(
        {_id: id},
        {title , description},
        {new: true}
        
    )
    if(!todo){
        res.status(400).json({error: 'not a valid ID'})
    }
    res.status(200).json({
        message: 'Todo Updated Successfully'  
    })
}

export { addTodo, getAllTodo, getSingleTodo, deleteTodo, updateTodo}   