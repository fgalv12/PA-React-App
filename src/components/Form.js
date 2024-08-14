// Form Input
import React, { useState } from 'react';

function Form() {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        // Update the text state with the value of the input
        setText(e.target.value);
    };

    return (
        <div className='task'>
            <input type='text' 
                value={text} 
                onChange={handleChange}
                placeholder='Enter Text' 
            />
            <p>{text}</p>
        </div>
    )
}

export default Form;