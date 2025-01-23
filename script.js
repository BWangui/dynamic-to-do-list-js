// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Get and trim input value

        if (taskText === "") {
            alert('Please enter a task'); // Alert if input is empty
            return;
        }

        // Create list item for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add event listener to remove the task
        removeButton.onclick = () => taskList.removeChild(taskItem);

        // Append remove button to the list item
        taskItem.appendChild(removeButton);

        // Add the list item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    };

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});