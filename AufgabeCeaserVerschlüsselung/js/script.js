var inputText = "";
var valueShift = 0;
var charCodeSmallA = "a".charCodeAt(0);
var charCodeSmallZ = "z".charCodeAt(0);
var charCodeBigA = "A".charCodeAt(0);
var charCodeBigZ = "Z".charCodeAt(0);

function encode(){
  choose = "encode";
  inputText = document.getElementById("txtDecode").value;

  var inp = txtTransform();  
  document.getElementById("txtEncode").value = inp;
}

function decode(){
  choose = "decode";
  valueShift *= -1;
  inputText = document.getElementById("txtEncode").value;

  var inp = txtTransform();
  document.getElementById("txtDecode").value = inp;
}

function increaseButton(){
  valueShift++;
  document.getElementById("currentShift").innerHTML = valueShift;
}

function decreaseButton(){
  valueShift--;
  document.getElementById("currentShift").innerHTML = valueShift;
}

function transformChar (charCode, startAsciiCode){
  var indexAlphabet = charCode - startAsciiCode;
  var transformCode = indexAlphabet + valueShift;

  if (transformCode > 25) {
    transformCode -= 26;
  } else if (transformCode < 0){
    transformCode += 26;
  }
  return startAsciiCode + transformCode;
}

function txtTransform(){
  var myNewInput = "";
  for (let i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);
    if (charCode >= charCodeBigA && charCode <= charCodeBigZ) {
      charCode = transformChar(charCode, charCodeBigA);
    }
    else if (charCode >= charCodeSmallA && charCode <= charCodeSmallZ) {
      charCode = transformChar(charCode, charCodeSmallA);
    }
    myNewInput += String.fromCharCode(charCode);
  }
  return myNewInput;
}