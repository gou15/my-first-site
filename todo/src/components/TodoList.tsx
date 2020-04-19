import React from 'react';
import {Row} from 'antd';

export interface Todo {
    text: string;
    id: number;
}

interface TodoListProps {
    todos: Array<Todo>;
    removeTodo: (value: number) => void;
}

const TodoList = (props : TodoListProps) =>{
    const todos = props.todos;
    const remove = props.removeTodo;

    const renderTodos = todos.map(todo => (
        <li onClick={()=> remove(todo.id)} key = {todo.id}>{todo.text}</li>
    ))

    return(
        <Row justify = "center">
            <ul>{renderTodos}</ul>
        </Row>
    )
}

export default TodoList;