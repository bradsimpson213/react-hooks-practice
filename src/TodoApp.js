import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid';
import TodoList from "./TodoList";
import TodoForm from"./TodoForm";

const TodoApp = () =>{
    const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || "";
    // const initialTodos = [
    //     { id: 1, task: "Clean Fishtank", completed: false },
    //     { id: 2, task: "Wash Car", completed: true },
    //     { id: 3, task: "Grow Beard", completed: false }
    // ];
    const [todos, setTodos] = useState(initialTodos);
    
    useEffect( ()=> {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

    const addTodo = (newTodoText) => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false}]);
    };

    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter( todo => todo.id !== todoId );
        setTodos(updatedTodos);
    };

    const toggleTodo = (todoId) => {
        const updatedTodos = todos.map( todo => 
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map( todo => 
            todo.id === todoId ? { ...todo, task: newTask } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <Paper 
        style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
            <AppBar color="primary" position='static' style={{ height: "64px" }}>
                <ToolBar>
                    <Typography colors="inherit">TODOS WITH HOOKS</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={ addTodo }/>
                    <TodoList 
                        todos={ todos }
                        removeTodo={ removeTodo }
                        toggleTodo={ toggleTodo }
                        editTodo={ editTodo }
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;