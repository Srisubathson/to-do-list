window.addEventListener("load",function(){
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

form.addEventListener("submit",function(event){
event.preventDefault();

const task = input.value;
if (!task){
    alert("Please fill out the tasks");
    return;
}

const task_el = document.createElement("div");
task_el.classList.add("task");
list_el.appendChild(task_el);


const task_content_el = document.createElement("div");
task_content_el.classList.add("content");
task_el.appendChild(task_content_el);

const task_input_el = document.createElement("input");
task_input_el.classList.add("text")
task_input_el.type = "text";
task_input_el.value = task;
task_input_el.setAttribute("readonly", "readonly");
task_content_el.appendChild(task_input_el);

const task_action_el = document.createElement("div");
task_action_el.classList.add("action");
task_el.appendChild(task_action_el)


const task_edit_el = document.createElement("button");
task_edit_el.classList.add("edit");
task_edit_el.innerHTML = "Edit";
task_action_el.appendChild(task_edit_el);

const task_delete_el = document.createElement("button");
task_delete_el.classList.add("delete");
task_delete_el.innerHTML = "delete";
task_action_el.appendChild(task_delete_el);

input.value = "";

task_edit_el.addEventListener("click", function(){
if (task_edit_el.innerText.toLowerCase() == "edit"){
    task_input_el.removeAttribute("readonly");
    task_input_el.focus();
    task_edit_el.innerText = "Save";
}else{
    task_input_el.setAttribute("readonly","readonly");
    task_edit_el.innerText = "Edit";
}
});

task_delete_el.addEventListener("click", function(){
    list_el.removeChild(task_el);
});

});

});