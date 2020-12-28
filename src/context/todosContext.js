import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
];

export const TodosContext = createContext()

export const TodosProvider = (props) => {
    const todosStuff = useTodoState(defaultTodos);
    return (
        <TodosContext.Provider value={ todosStuff }>
            { props.children }
        </TodosContext.Provider>
    )
};