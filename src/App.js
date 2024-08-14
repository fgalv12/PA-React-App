import React from 'react';
import Counter from './components/Counter';
import Form from './components/Form';
import Todo from './components/Todo';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="task">
        <p>React State and Hooks Test</p>
      </header>
      <header className="App-header">
        <p>Counter App</p>
      </header>
      <p> <Counter /> </p>
      <header className="App-header">
        <p>Form App</p>
      </header>
      <p> <Form /> </p>
      <header className="App-header">
        <p>Todo App</p>
      </header>
      <p> <Todo /> </p>
    </div>
  );
}

export default App;
