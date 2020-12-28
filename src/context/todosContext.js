import React, { createContext } from "react";
import todoReducer from "../reducers/todoReducer";
import useLocalStorageReducer from "../reducers/useLocalStorageReducer";

const defaultTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer );
    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                { props.children }
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
};