document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.querySelector("#taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");


    // Check if there are tasks in the local storage and display them on web page
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks();
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if(taskText != ""){
            tasks.push({ text : taskText, completed : false });
            localStorage.setItem("tasks",JSON.stringify(tasks))
            renderTasks();
            taskInput.value = "";
        }
    })

    //function to render tasks on the page
    function renderTasks(){
        taskList.innerHTML = "";
        tasks.forEach((task,index)=> {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
            <input type = "checkbox" data-index = ${index} ${task.completed ? "checked" : ""}>
            <span>${task.text} </span>
            <button data-index = "${index}">Delete</button> 
            `;
            taskList.appendChild(taskItem);
        });   
    }
    //function to handle checkboxes clicks
    taskList.addEventListener("click",(event) => {
        if(event.target.tagName === "INPUT" && event.target.type === "CHECKBOX"){
            const index = event.target.dataset.index;
            tasks[index].completed = event.target.checked;  // This thing is not working  
            localStorage.getItem("tasks",JSON.stringify(tasks));
            renderTasks();
        }
    })
    //function to handle delete clicks on the page
    taskList.addEventListener("click",(event) => {
        if(event.target.tagName === "BUTTON"){
            const index = event.target.dataset.index;
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            renderTasks();
        }
    })

});


// event.target.checked: The checked property of a checkbox is a boolean property that indicates whether the checkbox is checked or not. 
// If the checkbox is checked, event.target.checked will be true; otherwise, it will be false.


