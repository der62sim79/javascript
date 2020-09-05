var inputString = "";
var operator = "";
var result = 0;

var calculationString = "";


function insertNumber(input)  {
    inputString = inputString + input;
    console.log("Zahl: " + inputString);
    document.getElementsByName('Display')[0].value = inputString;
 }


 function insertOperator(operator) {
     calculationString = inputString + operator;
     console.log("calculationString: " + calculationString);
     console.log("Operator: " + operator);
     inputString = "";
     document.getElementsByName('Display')[0].value = operator;
 }

 function calculate() {
     calculationString = calculationString + inputString;
     console.log("calculationString: " + calculationString);
     result = eval(calculationString)
     console.log("Result:" + result)
     document.getElementsByName('Display')[0].value = result;
 }

 function reset() {
    inputString = "";
    operator = ""; 
    console.log("Reset");
 }