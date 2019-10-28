import React from 'react'

export interface Props {

}
interface State {
    toDos: object[]
}

class ToDoList extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state={
            toDos: [
                { id:0,label:'Create base config'},
                { id:1,label:'Add babel,ts,linter'},
                { id:2,label:'Push all to github'},
                { id:3,label:'Drink coffee'},
                { id:4,label:'Listen radio-T'}
            ]
        }
    }

    render() {
        return (
            <div className="list">
                <ul>
                    {this.state.toDos.map((todo)=>(<li key={todo.id}>{todo.label}</li>))}
                </ul>
            </div>
        )
    }
}

export default ToDoList