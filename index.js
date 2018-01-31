let getEl = document.getElementsByClassName("cell");
let y = 1;
let getElId;
let array = [],
    redoArray = [];

let undoBtn = document.getElementsByClassName("undo-btn btn");
let restarBtn = document.getElementsByClassName("restart-btn");
let redoBtn = document.getElementsByClassName("redo-btn btn");

let intervalID = 0;

undoBtn[0].addEventListener("click", undo, false);
restarBtn[0].addEventListener("click", restart, false);
redoBtn[0].addEventListener("click", redo, false);

for (let i = 0; i < getEl.length; i++) {
  getEl[i].addEventListener("click", cellClicked, false);
}
setInterval(checkUdo, 100);
// setInterval(checkRedo, 100);

console.log(undoBtn);
function cellClicked() {
  checkUdo();
//   checkRedo();
  if (y % 2) {
    this.setAttribute("class", `cell ch`);
    array.push(this.id);
    console.log(y);
  } else {
    this.setAttribute("class", `cell r`);
    console.log(y);
    array.push(this.id);
  }
  y++;
  checkUdo();
//   checkRedo();
}

function checkUdo() {
  if (array.length > 0) {
    // undoBtn[0].disabled = false;
    undoBtn[0].removeAttribute('disabled');
  }
   else {
    // undoBtn[0].disabled = true;
    undoBtn[0].setAttribute('disabled', 'true');
    
  }
}

function checkRedo() {
    // redoBtn[0].removeAttribute('disabled');
  if (redoArray.length != 0) {
    // redoBtn[0].disabled = false;
    redoBtn[0].removeAttribute('disabled');
  } 
//   else {
//     // redoBtn[0].disabled = true;
//     redoBtn[0].setAttribute('disabled', 'true');
    
//   }
}

function undo() {
  let a = array.slice(-1);
  redoArray[0] = a.toString();
  getElId = document.getElementById(a);
  redoArray[1] = getElId.getAttribute("class");
  getElId.setAttribute("class", `cell`);
  array = array.slice(0, -1);
  checkUdo();
  checkRedo();
 
  console.log(redoArray);
  y--;
}

function redo() {
  let a = redoArray[0];
  getElId = document.getElementById(a);
  array.push(a);
  a = redoArray[1];
  getElId.setAttribute("class", a);

  redoArray = [];
  y--;
}

function restart() {
  console.log("restart works");
  for (let i = 0; i < getEl.length; i++) {
    let del;
    del = document.getElementById("c-" + i);
    del.setAttribute("class", "cell");
  }
  checkUdo();
  array = [];
  redoArray = [];
  y = 1;

  let del;
  del = document.body.getElementsByClassName("won-title");

  // console.log(buf);

  del[0].setAttribute("class", "won-title hidden");
  del = document.getElementsByClassName("won-message");
  del[0].innerHTML = "";

  intervalID = setInterval(endOfGame, 250);

  for (let i = 0; i < getEl.length; i++) {
    getEl[i].addEventListener("click", cellClicked, false);
  }
  
}

function test(text) {
  let buf;
  buf = document.body.getElementsByClassName("won-title hidden");

  console.log(buf);

  buf[0].setAttribute("class", "won-title");
  buf = document.getElementsByClassName("won-message");
  buf[0].innerHTML = text;

  console.log(buf);
}


function removList(){
    for (let i = 0; i < getEl.length; i++) {
        getEl[i].removeEventListener("click", cellClicked, false);
      }
   
};

intervalID = setInterval(endOfGame, 250);

function endOfGame() {
  //first line
  if (
    getEl[0].getAttribute("class") == getEl[1].getAttribute("class") &&
    getEl[1].getAttribute("class") == getEl[2].getAttribute("class") &&
    getEl[1].getAttribute("class") !== "cell"
  ) {
    removList()
    if (getEl[1].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[0].getAttribute("class");
    buff = buff + " win horizontal";
    getEl[0].setAttribute("class", buff);
    getEl[1].setAttribute("class", buff);
    getEl[2].setAttribute("class", buff);

    clearInterval(intervalID);
    return;
  }
  //second line
  if (
    getEl[3].getAttribute("class") == getEl[4].getAttribute("class") &&
    getEl[4].getAttribute("class") == getEl[5].getAttribute("class") &&
    getEl[4].getAttribute("class") !== "cell"
  ) {
    removList()
    if (getEl[4].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[3].getAttribute("class");
    buff = buff + " win horizontal";
    getEl[3].setAttribute("class", buff);
    getEl[4].setAttribute("class", buff);
    getEl[5].setAttribute("class", buff);
    clearInterval(intervalID);
    return;
  }
  //third line
  if (
    getEl[6].getAttribute("class") == getEl[7].getAttribute("class") &&
    getEl[7].getAttribute("class") == getEl[8].getAttribute("class") &&
    getEl[7].getAttribute("class") !== "cell"
  ) {
    removList()
    if (getEl[7].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[6].getAttribute("class");
    buff = buff + " win horizontal";
    getEl[6].setAttribute("class", buff);
    getEl[7].setAttribute("class", buff);
    getEl[8].setAttribute("class", buff);
    clearInterval(intervalID);
    return;
  }
  //cols
  //col one
  if (
    getEl[0].getAttribute("class") == getEl[3].getAttribute("class") &&
    getEl[3].getAttribute("class") == getEl[6].getAttribute("class") &&
    getEl[3].getAttribute("class") !== "cell"
  ) {
    removList()
    if (getEl[3].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[0].getAttribute("class");
    buff = buff + " win vertical";
    getEl[0].setAttribute("class", buff);
    getEl[3].setAttribute("class", buff);
    getEl[6].setAttribute("class", buff);
    clearInterval(intervalID);
    return;
  }
  //col two
  if (
    getEl[1].getAttribute("class") == getEl[4].getAttribute("class") &&
    getEl[4].getAttribute("class") == getEl[7].getAttribute("class") &&
    getEl[4].getAttribute("class") !== "cell"
  ) {
    removList()
    if (getEl[4].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[1].getAttribute("class");
    buff = buff + " win vertical";
    getEl[1].setAttribute("class", buff);
    getEl[4].setAttribute("class", buff);
    getEl[7].setAttribute("class", buff);
    clearInterval(intervalID);
    return;
  }
  //col tree
  if (
    getEl[2].getAttribute("class") == getEl[5].getAttribute("class") &&
    getEl[5].getAttribute("class") == getEl[8].getAttribute("class") &&
    getEl[5].getAttribute("class") !== "cell"
  ) {
    removList()
    if (getEl[5].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[2].getAttribute("class");
    buff = buff + " win vertical";
    getEl[2].setAttribute("class", buff);
    getEl[5].setAttribute("class", buff);
    getEl[8].setAttribute("class", buff);
    clearInterval(intervalID);
    return;
  }
  //diam l-r
  if (
    getEl[6].getAttribute("class") == getEl[4].getAttribute("class") &&
    getEl[4].getAttribute("class") == getEl[2].getAttribute("class") &&
    getEl[4].getAttribute("class") !== "cell"
  ) {
    removList()
    if (getEl[4].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[4].getAttribute("class");
    buff = buff + " win diagonal-left";
    getEl[6].setAttribute("class", buff);
    getEl[4].setAttribute("class", buff);
    getEl[2].setAttribute("class", buff);
    clearInterval(intervalID);
    return;
  }
  //diam r-l
  if (
    getEl[0].getAttribute("class") == getEl[4].getAttribute("class") &&
    getEl[4].getAttribute("class") == getEl[8].getAttribute("class") &&
    getEl[4].getAttribute("class") !== "cell"
  ) {
    removList()
    if (getEl[4].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[4].getAttribute("class");
    buff = buff + " win diagonal-right";

    getEl[0].setAttribute("class", buff);
    getEl[4].setAttribute("class", buff);
    getEl[8].setAttribute("class", buff);

    clearInterval(intervalID);
    return;
  } else if (
    getEl[0].getAttribute("class") !== "cell" &&
    getEl[1].getAttribute("class") !== "cell" &&
    getEl[2].getAttribute("class") !== "cell" &&
    getEl[3].getAttribute("class") !== "cell" &&
    getEl[4].getAttribute("class") !== "cell" &&
    getEl[5].getAttribute("class") !== "cell" &&
    getEl[6].getAttribute("class") !== "cell" &&
    getEl[7].getAttribute("class") !== "cell" &&
    getEl[8].getAttribute("class") !== "cell"
  ) {
    removList()
    //draw!
    test("'It's a draw!'");
    clearInterval(intervalID);
    return;
  }
}
