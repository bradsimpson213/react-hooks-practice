import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
];

export const TodosContext = createContext()

export const TodosProvider = (props) => {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            { props.children }
        </TodosContext.Provider>
    )
};