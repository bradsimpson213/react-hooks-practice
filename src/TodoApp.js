import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid';
import TodoList from "./TodoList";
import TodoForm from"./TodoForm";
import useTodoState from "./hooks/useTodoState";
import { TodosProvider } from "./context/todosContext";

const TodoApp = () =>{
    const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || "";
    // const initialTodos = [
    //     { id: 1, task: "Clean Fishtank", completed: false },
    //     { id: 2, task: "Wash Car", completed: true },
    //     { id: 3, task: "Grow Beard", completed: false }
    // ];
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);
    
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
                    <TodosProvider>
                        <TodoForm addTodo={ addTodo }/>
                        <TodoList 
                            todos={ todos }
                            removeTodo={ removeTodo }
                            toggleTodo={ toggleTodo }
                            editTodo={ editTodo }
                        />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;