import React from 'react';
import InputToDo from "../input";
import ToDoList from "../toDoList";
function App() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Hi it's todo app"),
        React.createElement(InputToDo, null),
        React.createElement(ToDoList, null)));
}
export default App;
