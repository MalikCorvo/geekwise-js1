// Addition

var form = document.querySelector("form");
form.addEventListener("submit", function(e){
  e.preventDefault();
  var x =  new Number(e.target[0].value);
  var y = new Number(e.target[1].value);
  var z = x + y;
  alert(z);
})
