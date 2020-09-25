// console.log('hello')

// var x = document.getElementById('kg').checked = true;
// console.log(x);

function unitCheck() {
  var lbs = document.getElementById("lbs");
  var kg = document.getElementById("kg");
  var weight = document.getElementById("entered-weight");
  var displayMessage = document.getElementById("display-message");

  if (lbs.checked) {
    console.log('Weight in Kg: ' + weight.value);
        var message = 'Weight in Kg: ' + weight.value;
    displayMessage.innerHTML = message;
  }

  if (kg.checked) {
    console.log('Weight in lbs: ' + weight.value);
    var message = 'Weight in lbs: ' + weight.value;
    displayMessage.innerHTML = message;
  }

}

document.getElementById("main-form").addEventListener("submit", function (e) {
  e.preventDefault();

  unitCheck();
});
