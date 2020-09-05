function newInput (){
    var input = document.getElementById("new").value;
    var toDo = document.getElementById("taskListe");
    toDo.innerHTML += "<li>" + input + "</li>";
    input.value = "";
}



