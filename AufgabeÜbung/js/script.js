let amountOver = 0;

document.getElementById("header").addEventListener("mouseover", function(){
    amountOver++;
    changeContent("du bist " +amountOver+ " über Herzlich Willommen mit der Maus drüber gefahren.")
    color();
});

function changeContent(text){
    document.getElementById("content").innerHTML = text;
};

function color(){
    document.getElementsByTagName('h1')[0].style.color = 'orange';
}