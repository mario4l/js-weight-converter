// console.log('hello')

// var x = document.getElementById('kg').checked = true;
// console.log(x);

function unitCheck() {
  var lbs = document.getElementById("lbs");
  var kg = document.getElementById("kg");

  var weight = document.getElementById("entered-weight");

  if (lbs.checked) {
    console.log('Weight in Kg: ' + weight.value);
  }

  if (kg.checked) {
    console.log('Weight in lbs: ' + weight.value);
  }

}

document.getElementById("main-form").addEventListener("submit", function (e) {
  e.preventDefault();

  unitCheck();
});
