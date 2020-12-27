import React from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";

const TodoList = ({todos, removeTodo, toggleTodo, editTodo }) =>{
    if (todos.length) {
        return (
        <Paper>
            <List>
            {todos.map((todo,i)  =>(
                <>
                    <Todo
                        id ={ todo.id } 
                        task={ todo.task } 
                        keys={ todo.id } 
                        completed={ todo.completed }
                        removeTodo={ removeTodo }
                        toggleTodo={ toggleTodo } 
                        editTodo={ editTodo }
                    />
                    { i < todos.length - 1 && <Divider/> }
                </>
            ))}
            </List>
        </Paper>
        );
    }
    else return null;
}

export default TodoList;