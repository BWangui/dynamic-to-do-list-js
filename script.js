
document.addEventListener('DOMContentLoaded', () => {
    // Select the DOM elements for interaction
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Input field for new tasks
    const taskList = document.getElementById('task-list');     // Task list container

    // Function to add a new task to the list
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Get and trim input value

        // Validate that the task input is not empty
        if (taskText === "") {
            alert('Please enter a task'); // Prompt user to enter a task
            return;
        }

        // Create a new list item (li) element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add event listener to remove the task when the button is clicked
        removeButton.onclick = () => {
            taskList.removeChild(taskItem); // Remove the task item from the list
        };

        // Append the remove button to the list item
        taskItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field for the next task
        taskInput.value = '';
    };

    // Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing the Enter key inside the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Check if the key pressed is Enter
            addTask(); // Call addTask to add a new task
        }
    });
});