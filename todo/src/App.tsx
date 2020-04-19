import React from 'react';
import {Layout} from 'antd';
import TodoForm from './components/TodoForm'
import TodoApp from './components/TodoApp';

function App() {
  return (
    <Layout>
      <Layout.Header>
        <h1>To-Do List</h1>
      </Layout.Header>
      <Layout.Content>
        <TodoApp />
      </Layout.Content>
    </Layout>
  );
}

export default App;
