// Zdefiniuj zmienne 
var taskInput = document.getElementById("new-task");
var addButton = document.getElementById("button-dodaj");
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

// Utwórz nowy task 
var createNewTaskElement = function (taskString) {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var deleteButton = document.createElement("button");

    checkBox.type = "checkbox";
    deleteButton.className = "delete fas fa-check";
    label.innerText = taskString;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    return listItem;
}

// When the user clicks on <div>, open the popup
function showPopUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function hidePopUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("hide");
}

// Dodaj zadanie
var addTask = function () {
    if (taskInput.value === "") {
        showPopUp();
    } else {
        var listItem = createNewTaskElement(taskInput.value);
        incompleteTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);
        hidePopUp();
    }
    taskInput.value = "";

}

// Usuń zadanie
var deleteTask = function () {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}

// Przenień wykonane zadanie do "Zrobione"
var taskCompleted = function () {
    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

// Oznacz zadanenie jako niewykonane
var taskIncomplete = function () {
    // When checkbox is unchecked
    // Append the task list item #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    //select taskListItem's children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var deleteButton = taskListItem.querySelector("button.delete");

    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;

    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}

addButton.addEventListener("click", addTask);

// Cycle over the incompleteTaskHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
    // bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
// Cycle over the completeTaskHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
    // bind events to list item's children (taskIncompleted)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
