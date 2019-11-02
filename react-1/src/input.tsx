import React from 'react'

export class InputToDo extends React.Component{

    render() {
        return (<form>
            <label>
                Input your Task:
                <input type="text"/>
                <button>Add</button>
            </label>
        </form>)
    }
}