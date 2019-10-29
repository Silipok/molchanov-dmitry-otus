import React from 'react';
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [
                { id: 0, label: 'Create base config' },
                { id: 1, label: 'Add babel,ts,linter' },
                { id: 2, label: 'Push all to github' },
                { id: 3, label: 'Drink coffee' },
                { id: 4, label: 'Listen radio-T' }
            ]
        };
    }
    render() {
        return (React.createElement("div", { className: "list" },
            React.createElement("ul", null, this.state.toDos.map((todo) => (React.createElement("li", { key: todo.id }, todo.label))))));
    }
}
export default ToDoList;
