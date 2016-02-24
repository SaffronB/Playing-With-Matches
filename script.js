
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var el = document.querySelectorAll(".number");

function updateHTML(){

for (i = 0; i < el.length; i++) {
    el[i].innerHTML = getRandomIntInclusive(1,3);
    }

}
updateHTML();
