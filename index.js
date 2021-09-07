function masacorporal(){
  var peso=pasefloat(document.getElementById("peso").value);
  var altura=pasefloat(document.getElementById("altura").value);
  var IMC;
  IMC = (peso/(altura)altura);
  document.getElementById('IMC').innerHTML=IMC;
}
