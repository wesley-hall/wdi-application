console.log('it works');

document.getElementById('aboutButton').onclick = displayAbout;
document.getElementById('reservationButton').onclick = displayReservation;
document.getElementById('breakfastButton').onclick = displayBreakfast;
document.getElementById('lunchButton').onclick = displayLunch;
document.getElementById('dinnerButton').onclick = displayDinner;


function displayAbout() {
  clearAll();
  document.getElementById('about').classList.add("is-visible");
}

function displayReservation() {
  clearAll();
  document.getElementById('reservation').classList.add("is-visible");
}

function displayBreakfast() {
  clearAll();
  document.getElementById('breakfast').classList.add("is-visible");
}

function displayLunch() {
  clearAll();
  document.getElementById('lunch').classList.add("is-visible");
}

function displayDinner() {
  clearAll();
  document.getElementById('dinner').classList.add("is-visible");
}

function clearAll() {
document.getElementById('about').classList.remove("is-visible");
document.getElementById('about').classList.add("is-hidden");
document.getElementById('reservation').classList.remove("is-visible");
document.getElementById('reservation').classList.add("is-hidden");
document.getElementById('breakfast').classList.remove("is-visible");
document.getElementById('breakfast').classList.add("is-hidden");
document.getElementById('lunch').classList.remove("is-visible");
document.getElementById('lunch').classList.add("is-hidden");
document.getElementById('dinner').classList.remove("is-visible");
document.getElementById('dinner').classList.add("is-hidden");
}
