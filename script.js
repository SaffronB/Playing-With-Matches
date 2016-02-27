var msg = '';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numbers = document.querySelectorAll(".number");

function updateHTML() {
  for (i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = getRandomIntInclusive(1, 3);
  }
}
updateHTML();


var displayMessage = function(text) {
  var message = document.querySelector(".displaybox");
  message.innerHTML = text;
}


var whatNumbers = "You've hit ";
var howManyMatches = "It's a Match!";
var matchedNumber = "";
console.log(matchedNumber);



function addHighlight(low, high) {
  if (numbers[low].innerHTML === numbers[low + 1].innerHTML) {
    numbers[low].classList.add("highlight");
    numbers[low + 1].classList.add("highlight");
    matchedNumber = numbers[low].innerHTML;
    console.log(matchedNumber);
    msg = msg + matchedNumber + ' ';

  }

  if (numbers[high].innerHTML === numbers[high - 1].innerHTML) {
    numbers[high].classList.add("highlight");
    numbers[high - 1].classList.add("highlight");
    matchedNumber = numbers[high].innerHTML;
    console.log(matchedNumber);
    msg = msg + matchedNumber + ' ';
  }

}

function isRowMatched(low, high) {
  var match = false;
  if (numbers[low].innerHTML === numbers[low + 1].innerHTML) {
    match = true;

  }
  if (numbers[high].innerHTML === numbers[high - 1].innerHTML) {
    match = true;

  }
  return match;

}

addHighlight(0, 2);
addHighlight(3, 5);
addHighlight(6, 8);

var matchRow1 = isRowMatched(0, 2);
var matchRow2 = isRowMatched(3, 5);
var matchRow3 = isRowMatched(6, 8);

function generateRowMessage() {
  var whatRows = 'A match has been found in';
  if (matchRow1) {
    whatRows = whatRows + ' row 1';
  }
  if (matchRow2) {
    whatRows = whatRows + ' row 2';
  }
  if (matchRow3) {
    whatRows = whatRows + ' row 3';
  }
  return whatRows;
}
var whatRows = generateRowMessage();




displayMessage(whatNumbers + msg + "<br>" + whatRows + "<br>" + howManyMatches);


function refreshbutton() {
  location.reload();
}


//
// function displaywhichnumbers() {
//   if (addHighlight(low,high)) {
//     whatNumbers = whatNumbers + addHighlight(0, 2);

// whatNumbers = whatNumbers + addHighlight(3,5);
//     // whatNumbers = whatNumbers + addHighlight(6,8);
//   }
// }

// function displaywhatrow() {
//   if (matched) {
//     if matchRow1 {
//       whatRows = whatRows + "row 1";
//     }
//     if matchRow2 {
//       whatRows = whatRows + "row 2";
//     }
//     if matchRow3 {
//       whatRows = whatRows + "row 3";
//     }
//
//   }
// }






// // displaywhatrow();
// console.log(matched);
// displaywhichnumbers();




//
// function displaywhatrow() {
//   if (rowisMatched) {
//     if (matchRow1) {
//       whatRows = whatRows + " row 1";
//       howManyMatches = howManyMatches + 1;
//     }
//     if (matchRow2) {
//       whatRows = whatRows + " row 2";
//       howManyMatches = howManyMatches + 1;
//     }
//     if (matchRow3) {
//       whatRows = whatRows + " row 3";
//       howManyMatches = howManyMatches + 1;
//     }
//
// //   }
// // }
//
// displaywhatrow();
