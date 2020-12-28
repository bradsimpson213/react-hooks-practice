import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";

const defaultTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                { props.children }
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
};