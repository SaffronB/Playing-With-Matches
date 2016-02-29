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
var locationofmatch = 'in '
var howManyMatches = "You've matched up ";
var matchedNumber = "";
var howMany = [];
var anyMatch = false;


function addHighlightToRow(low, high) {
  if (numbers[low].innerHTML === numbers[low + 1].innerHTML) {
    numbers[low].classList.add("highlight");
    numbers[low + 1].classList.add("highlight");
    matchedNumber = numbers[low].innerHTML;
    msg = msg + matchedNumber + ' ';
    howMany.push(numbers[low].innerHTML);

  }

  if (numbers[high].innerHTML === numbers[high - 1].innerHTML) {
    numbers[high].classList.add("highlight");
    numbers[high - 1].classList.add("highlight");
    matchedNumber = numbers[high].innerHTML;
    msg = msg + matchedNumber + ' ';
    howMany.push(numbers[high].innerHTML);

  }
  console.log(howMany);
  return howMany;
}

function isRowMatched(low, high) {
  var match = false;
  if (numbers[low].innerHTML === numbers[low + 1].innerHTML) {
    match = true;
    anyMatch = true;

  }
  if (numbers[high].innerHTML === numbers[high - 1].innerHTML) {
    match = true;
    anyMatch = true;
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
  var whatRows = "";

  if (matchRow1) {
    whatRows = whatRows + ' row 1, ';
  }
  if (matchRow2) {
    whatRows = whatRows + ' row 2, ';
  }
  if (matchRow3) {
    whatRows = whatRows + ' row 3, ';
  } else {
    whatRows = whatRows + "";
  }
  return whatRows;
}

var whatRows = generateRowMessage();

function addHighlightToColoumn(a, b, c) {
  if (numbers[a].innerHTML === numbers[b].innerHTML) {
    numbers[a].classList.add("highlightcolumn");
    numbers[b].classList.add("highlightcolumn");
    howMany.push(numbers[a].innerHTML);
    matchedNumber = numbers[a].innerHTML;
    msg = msg + matchedNumber + ' ';
  }

  if (numbers[b].innerHTML === numbers[c].innerHTML) {
    numbers[b].classList.add("highlightcolumn");
    numbers[c].classList.add("highlightcolumn");
    howMany.push(numbers[b].innerHTML);
    matchedNumber = numbers[b].innerHTML;
    msg = msg + matchedNumber + ' ';
  }
  return howMany;
}

function isColumnMatched(a, b, c) {
  var match = false;
  if (numbers[a].innerHTML === numbers[b].innerHTML) {
    match = true;
    anyMatch = true;

  }
  if (numbers[b].innerHTML === numbers[c].innerHTML) {
    match = true;
    anyMatch = true;

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
  var whatColumn = "";
  if (matchColumn1) {
    whatColumn = whatColumn + ' column 1, ';
  }
  if (matchColumn2) {
    whatColumn = whatColumn + ' column 2, ';
  }
  if (matchColumn3) {
    whatColumn = whatColumn + ' column 3, ';
  } else {
    whatColumn = whatColumn + "";
  }

  return whatColumn;
}

var whatColumn = generateColumnMessage();

function addHighlightToDiagonal(top, middle, bottom) {
  if (numbers[top].innerHTML === numbers[middle].innerHTML) {
    numbers[top].classList.add("highlightdiagonal");
    numbers[middle].classList.add("highlightdiagonal");
    matchedNumber = numbers[top].innerHTML;
    msg = msg + matchedNumber + ' ';
    howMany.push(numbers[top].innerHTML);

  }

  if (numbers[middle].innerHTML === numbers[bottom].innerHTML) {
    numbers[middle].classList.add("highlightdiagonal");
    numbers[bottom].classList.add("highlightdiagonal");
    matchedNumber = numbers[bottom].innerHTML;
    console.log(matchedNumber);
    msg = msg + matchedNumber + ' ';
    howMany.push(numbers[middle].innerHTML);
  }
  return howMany;
}

addHighlightToDiagonal(0, 4, 8);
addHighlightToDiagonal(2, 4, 6);

function isDiagonalMatched(top, middle, bottom) {
  var match = false;
  if (numbers[top].innerHTML === numbers[middle].innerHTML) {
    match = true;
    anyMatch = true;


  }
  if (numbers[middle].innerHTML === numbers[bottom].innerHTML) {
    match = true;
    anyMatch = true;

  }
  return match;

}


function generateDiagonalMessage() {
  var whatDiagonal = "";
  if (matchDiagonal1) {
    whatDiagonal = whatDiagonal + ' a diagonal line, ';
  }
  if (matchDiagonal2) {
    whatDiagonal = whatDiagonal + ' a diagonal line, ';
  } else {
    whatDiagonal = whatDiagonal + "";
  }

  return whatDiagonal;
}

var matchDiagonal1 = isDiagonalMatched(0, 4, 8);
var matchDiagonal2 = isDiagonalMatched(2, 4, 6);


var whatDiagonal = generateDiagonalMessage();

var manyMatches = howMany.length


if (anyMatch) {
  displayMessage(whatNumbers + msg + "<br>" + locationofmatch + whatRows + whatColumn + whatDiagonal + "<br>" + howManyMatches + manyMatches + " times");
} else {
  displayMessage("No matches. Better luck next time!")
}



function refreshbutton() {
  location.reload();
}
