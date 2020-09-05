//JSON javascript object notation, objekte werden mit dieser {} klammer generiert

const tasks = [];
printTaskList();





document.getElementById("addTask").addEventListener("click", function(){
   addTask();
});

function markTask(element){
    let index = element.attributes["data-index"].value;
    let isChecked = element.checked;
    
    tasks[index].isDone = isChecked;
    printTaskList();
};

function getHTMLTasks(){
    let html = "";
    let index = 0;
    tasks.forEach(element => {
        let checked = "";
        if(element.isDone){
            checked = "checked";
        }
        html += "<li> <input onClick = 'markTask(this)'name = 'checkbox' data-index='" + index + "' type= 'checkbox'" + checked + ">" + element.name + " " + element.responsible + " " + index + "</li>" 
        index ++;
    });
    return html;
}

function printTaskList(){
    document.getElementById("taskList").innerHTML = getHTMLTasks();
};

function addTask(){
    let taskName = document.getElementById("txtNewTask").value;
    let taksResponsible = document.getElementById("txtResponsible").value;
    let task = {name: taskName, responsible: taksResponsible, isDone: false};
    tasks.push(task);
    printTaskList();
};