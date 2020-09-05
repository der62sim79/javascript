const emailControl = "ali@gmx.at"
const passwordControl = "ali111"

function checkFunction(){
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   console.log(email + password);

   if(emailControl === email && passwordControl === password){
    this.window.location="./html/start.html"
    }else{
        alert("Eingabe wahr Falsch bitte schaue nochmal nach")
    }
}

