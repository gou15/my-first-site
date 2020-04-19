import React from 'react';
import {Todo} from './TodoList';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

interface TodoAppState {
    data: Todo[],
    id: number;
}

class TodoApp extends React.Component<any, TodoAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            data: [],
            id: 0,
        }
    }
    addTodo(value : string) {
        let id = this.state.id;
        const todo = {text: value, id: id++};
        let data = this.state.data.slice();
        data.push(todo);
        this.setState({data: data, id: id});
    }
    removeTodo(id: number){
        let data = this.state.data.filter(todo => todo.id !== id);
        this.setState({data:data})
    }
    render(){
        return (
            <>
                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList todos={this.state.data} removeTodo={this.removeTodo.bind(this)} />
            </>
        )
    }
}

export default TodoApp;