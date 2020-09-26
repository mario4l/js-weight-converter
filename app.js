// formula
// kg / 0.45
// lbs * 0.45
function unitCheck() {
  var lbs = document.getElementById('lbs');
  var kg = document.getElementById('kg');
  var weight = document.getElementById('entered-weight');
  var displayMessage = document.getElementById('display-message');

  if (lbs.checked) {
    // console.log('Weight in Kg: ' + weight.value);
    var message = 'Weight in Kg: ' + weight.value * 0.45;
    displayMessage.innerHTML = message;
  }

  if (kg.checked) {
    // console.log('Weight in lbs: ' + weight.value);
    var message = 'Weight in lbs: ' + weight.value / 0.45;
    displayMessage.innerHTML = message;
  }

  // TODO: add fall back to UI
  // if (!lbs.checked || kg.checked) {
  //   console.log('Please select (L)lbs or (K)g');
  // }
}

document.getElementById('main-form').addEventListener('submit', function (e) {
  e.preventDefault();

  unitCheck();
});
