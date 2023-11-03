import React, { useState } from 'react'

const ToDoApp = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const addList = () =>{
        setTaskList([...taskList, task]);
        setTask("");
    }

    const editTask = (index) =>{
        setEditIndex(index);
        setTask(taskList[index]);
    }

    const saveEdit = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList[index] = task;
        setTaskList(updatedTaskList);
        setEditIndex(-1); 
        setTask(''); 
    };
      

    const deleteTask = (index) =>{
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index,1);
        setTaskList(updatedTaskList);
    }

    return (
        <div>
            <h1>To Do App</h1>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addList}>Add</button>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <input
                                type="text"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                        ) : (
                            task
                        )}
                        <button onClick={() => editTask(index)}>Edit</button>
                        <button onClick={() => saveEdit(index)}>Save</button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))};
            </ul>
        </div>
    );
};

export default ToDoApp