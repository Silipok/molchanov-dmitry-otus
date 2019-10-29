import React from 'react';
class InputToDo extends React.Component {
    render() {
        return (React.createElement("form", null,
            React.createElement("label", null,
                "Input your Task:",
                React.createElement("input", { type: "text" }),
                React.createElement("button", null, "Add"))));
    }
}
export default InputToDo;
