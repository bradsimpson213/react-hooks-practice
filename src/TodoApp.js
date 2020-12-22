import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid';
import App from "./App";

const TodoApp = () =>{
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
        </Paper>
    )
}

export default TodoApp;