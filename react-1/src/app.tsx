import React from 'react';
import {InputToDo} from "./input";
import {ToDoList} from "./todolist";

export function App() {
    return (
        <div>
            <h1>Hi it's todo app</h1>
            <InputToDo/>
            <ToDoList/>
        </div>
    )
}

