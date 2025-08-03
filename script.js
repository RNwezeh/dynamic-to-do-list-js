document.addEventListener('DOMContentLoaded', () =>{
    // Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Define the function to add a new task
    function addTask(){
        const taskText = taskInput.value.trim();
        // Check if input is empty
        if (taskText === ''){
            alert('Please enter a task');
            return;
        }
        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
         // Add event listener to remove the task when clicked
        removeButton.onclick = () => {
            taskList.appendChild(li);
        };

         // Append the remove button to the list item, and the list item to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

         // Clear the input field
        taskInput.value = '';
    }
     // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
    
      // Add event listener to allow adding task with "Enter" key
    taskInput.addEventListener('keypress', (event) =>{
        if (event.key === 'Enter'){
            addTask();
        }
    });

});

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});