// Uppercase Your Name

var form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", function(e){
  e.preventDefault();
  var outcome = e.target[0].value;
  alert(outcome.toUpperCase());
});


function myButton() {
    document.getElementById("mySubmit").value = "CAPITALIZE!";
};

myButton();
