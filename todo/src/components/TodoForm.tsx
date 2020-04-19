import React from 'react';
import {Row, Col, Input, Button} from 'antd';

interface TodoFormProps {
    addTodo: (value: string) => void;
}

const TodoForm = (props: TodoFormProps) => {
    let input : any;
    let value = props.value;

    return (
        <Row justify ="center" style = {{paddingTop: "20px"}}>
            <Col>
                <Input value = {value} onChange = {(event) => {input = event.currentTarget}} ref = {node => {
                    input = node;
                }} size = "large" />
            </Col>
            <Col>
                <Button size = "large" type = "primary" onClick ={() => {
                    props.addTodo(input.value)
                    input.value = '';
                }}> + 
                </Button>
            </Col>
        </Row>
    )
}

export default TodoForm;