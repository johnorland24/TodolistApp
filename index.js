//functionality

const inputBox = document.getElementById('input-box');
const addButton = document.getElementById('Add');
const listContainer = document.getElementById('list-container');
let lastAction = null;
let lastTask = null;

// ang task function
function addTask() {
    if (inputBox.value !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = inputBox.value + ' ';

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', function() {
            newTask.style.backgroundColor = 'lightgreen';
            
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            lastAction = 'delete';
            lastTask = newTask;
            newTask.style.display = 'none';
            
        });

        lastAction = 'add';
        lastTask = newTask;

        newTask.appendChild(doneButton);
        newTask.appendChild(deleteButton);

        listContainer.appendChild(newTask);
        inputBox.value = '';
    } else {
        alert('type mona poge!');
    }
}

// Undo function
function undo() {
    if (lastAction === 'add') {
        lastTask.remove();
    } else if (lastAction === 'delete') {
        lastTask.style.display = 'block';
    }
    lastAction = null;
    lastTask = null;
    
}
// to save data on local storage
// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();

// Event listeners
addButton.addEventListener('click', addTask);
document.querySelector('.Undo').addEventListener('click', undo);












// const inputBox = document.getElementById('input-box');
// const addButton = document.getElementById('Add');
// const listContainer = document.getElementById('list-container');

// // Add task function
// function addTask() {
//     if (inputBox.value !== '') {
//         const newTask = document.createElement('li');
//         newTask.textContent = inputBox.value + ' ';

//         const doneButton = document.createElement('button');
//         doneButton.textContent = 'Done';
//         doneButton.addEventListener('click', function() {
//             newTask.style.backgroundColor = 'lightgreen';
//         });

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.addEventListener('click', function() {
//             newTask.style.display = 'none';
//         });

//         newTask.appendChild(doneButton);
//         newTask.appendChild(deleteButton);

//         listContainer.appendChild(newTask);
//         inputBox.value = '';
//     } else {
//         alert('Please enter a task!');
//     }
// }

// // Event listeners
// addButton.addEventListener('click', addTask);

// function undo() {
//     if (lastAction === 'add') {
//         lastTask.remove();
//     } else if (lastAction === 'delete') {
//         lastTask.style.display = 'block';
//     }
//     lastAction = null;
//     lastTask = null;
// }

// // Event listeners
// addButton.addEventListener('click', addTask);
// document.querySelector('.Undo').addEventListener('click', undo);























// JavaScript for To-Do List functionality

// Variables
// const inputBox = document.getElementById('input-box');
// const addButton = document.getElementById('Add');
// const listContainer = document.getElementById('list-container');
// const undoButton = document.querySelector('.Undo');

// // Add task function
// function addTask() {
//     if(inputBox.value !== '') {
//         const newTask = document.createElement('li');
//         newTask.textContent = inputBox.value + ' ';
        
//         const doneButton = document.createElement('button');
//         doneButton.textContent = 'Done';
//         doneButton.addEventListener('click', toggleTaskStatus);
        
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.addEventListener('click', deleteTask);
        
//         newTask.appendChild(doneButton);
//         newTask.appendChild(deleteButton);
        
//         listContainer.appendChild(newTask);

//         inputBox.value = '';
//     } else {
//         alert('Please enter a task!');
//     }
// }

// // Toggle task status function
// function toggleTaskStatus() {
//     this.parentElement.classList.toggle('active');
// }

// // Delete task function
// function deleteTask() {
//     this.parentElement.remove();
// }

// // Undo function
// function undo() {
//     listContainer.removeChild(listContainer.lastElementChild);
// }

// // Event listeners
// addButton.addEventListener('click', addTask);
// undoButton.addEventListener('click', undo);