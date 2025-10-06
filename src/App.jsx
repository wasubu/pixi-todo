import React, { useState } from 'react';

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (!input.trim()) return;
        setTasks([...tasks, { text: input, done: false }]);
        setInput('');
    };

    const toggleTask = (i) => {
        const copy = [...tasks];
        copy[i].done = !copy[i].done;
        setTasks(copy);
    };

    return (
        <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
            <h1>React To-Do</h1>
            <h1> Nice </h1>
            <h1> Nice </h1>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((t, i) => (
                    <li
                        key={i}
                        style={{
                            textDecoration: t.done ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                        onClick={() => toggleTask(i)}
                    >
                        {t.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
