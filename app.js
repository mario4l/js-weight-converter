// console.log('hello')

// var x = document.getElementById('kg').checked = true;
// console.log(x);

function unitCheck() {
  var lbs = document.getElementById("lbs");
  var kg = document.getElementById("kg");
  // console.log('lbs: ' + lbs);
  // console.log('kg: ' + kg);
  if (lbs.checked) {
    console.log('lbs');
  }

  if (kg.checked) {
    console.log('kg');
  }
}

document.getElementById("main-form").addEventListener("submit", function (e) {
  e.preventDefault();

  unitCheck();
});
