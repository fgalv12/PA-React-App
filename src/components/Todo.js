// Todo List
import React, { useState } from 'react';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleAdd = () => {
        if (text.trim()) {
            // Add the text to the todos array if it is not empty
            setTodos([...todos, text.trim()]);
            setText('');
        }
    };

    const handleRemove = (index) => {
        // Filter out the todo at the specified index
        setTodos(todos.filter((_, i) => i !== index));

    };

    return (
        <div className='task'>
            <input type='text' 
                value={text} 
                onChange={handleChange}
                placeholder='Add a Task'
            />
            <button className='Button' onClick={handleAdd}>Add Todo</button>
            <ul className='text'>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button className='Button' onClick={() => handleRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;