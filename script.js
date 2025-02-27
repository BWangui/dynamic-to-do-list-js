document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        // Retrieve tasks from Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Iterate through the stored tasks and add them to the list
        storedTasks.forEach(taskText => addTask(taskText, false)); // false prevents re-saving to Local Storage
    }

    // Function to save tasks to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add task
    function addTask(taskText, save = true) {
        if (taskText.trim() === "") {
            alert("Please enter a task!"); // Alert if input is empty
            return;
        }

        // Create new list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Assign onclick event to Remove button
        removeButton.onclick = function() {
            // Remove task from DOM
            taskList.removeChild(li);

            // Remove task from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText); // Remove the task
            saveTasks(updatedTasks); // Save updated list to Local Storage
        };

        // Append Remove button to li
        li.appendChild(removeButton);

        // Append li to task list
        taskList.appendChild(li);

        // Save task to Local Storage if required
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText); // Add new task to array
            saveTasks(storedTasks); // Update Local Storage
        }

        // Clear input field after adding task
        taskInput.value = '';
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', function() {
        addTask(taskInput.value);
    });

    // Event listener for pressing Enter key to add task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks from Local Storage when page is loaded
    loadTasks();
});