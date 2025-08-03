document.addEventListener('DOMContentLoaded', () =>{
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        const taskText = taskInput.ariaValueMax.trim();

        if (taskText === ''){
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        removeButton.onclick = () => {
            taskList.appendChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) =>{
        if (event.key === 'Enter'){
            addTask();
        }
    });

});