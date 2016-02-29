var msg = '';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numbers = document.querySelectorAll(".number");

function updateHTML() {
  for (i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = getRandomIntInclusive(1, 9);
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


function addHighlightToRow(low, high) {
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

addHighlightToRow(0, 2);
addHighlightToRow(3, 5);
addHighlightToRow(6, 8);

var matchRow1 = isRowMatched(0, 2);
var matchRow2 = isRowMatched(3, 5);
var matchRow3 = isRowMatched(6, 8);

function generateRowMessage() {
  var whatRows = "You've hit a match in";
  var whatRowAddition = ' no rows';

  if (matchRow1) {
    whatRows = whatRows + ' row 1 ';
  }
  if (matchRow2) {
    whatRows = whatRows + ' row 2 ';
  }
  if (matchRow3) {
    whatRows = whatRows + ' row 3 ';
  }
  return whatRows;
}

var whatRows = generateRowMessage();

function addHighlightToColoumn(a, b, c) {
  if (numbers[a].innerHTML === numbers[b].innerHTML) {
    numbers[a].classList.add("highlightcolumn");
    numbers[b].classList.add("highlightcolumn");
  }

  if (numbers[b].innerHTML === numbers[c].innerHTML) {
    numbers[b].classList.add("highlightcolumn");
    numbers[c].classList.add("highlightcolumn");
  }
}

function isColumnMatched(a, b, c) {
  var match = false;
  if (numbers[a].innerHTML === numbers[b].innerHTML) {
    match = true;

  }
  if (numbers[b].innerHTML === numbers[c].innerHTML) {
    match = true;

  }
  return match;

}

addHighlightToColoumn(0, 3, 6);
addHighlightToColoumn(1, 4, 7);
addHighlightToColoumn(2, 5, 8);

var matchColumn1 = isColumnMatched(0, 3, 6);
var matchColumn2 = isColumnMatched(1, 4, 7);
var matchColumn3 = isColumnMatched(2, 5, 8);

function generateColumnMessage() {
  var whatColumn = "You've hit a match in";
  if (matchColumn1) {
    whatColumn = whatColumn + ' column 1 ';
  }
  if (matchColumn2) {
    whatColumn = whatColumn + ' column 2 ';
  }
  if (matchColumn3) {
    whatColumn = whatColumn + ' column 3 ';
  }

  return whatColumn;
}

var whatColumn = generateColumnMessage();

function addHighlightToDiagonal(top, middle, bottom) {
  if (numbers[top].innerHTML === numbers[middle].innerHTML) {
    numbers[top].classList.add("highlightdiagonal");
    numbers[middle].classList.add("highlightdiagonal");
    matchedNumber = numbers[0].innerHTML;
    msg = msg + matchedNumber + ' ';

  }

  if (numbers[middle].innerHTML === numbers[bottom].innerHTML) {
    numbers[middle].classList.add("highlightdiagonal");
    numbers[bottom].classList.add("highlightdiagonal");
    matchedNumber = numbers[4].innerHTML;
    console.log(matchedNumber);
    msg = msg + matchedNumber + ' ';
  }

}

addHighlightToDiagonal(0, 4, 8);
addHighlightToDiagonal(2, 4, 6);


displayMessage(whatNumbers + msg + "<br>" + whatRows + "<br>" + whatColumn + "<br>" + howManyMatches);


function refreshbutton() {
  location.reload();
}
