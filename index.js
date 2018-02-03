let getEl = document.getElementsByClassName("cell");
let y = 1;
let getElId;
let array = [],
  redoArray = [],
  redoArray2 = [],
  array2 = [];

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

function cellClicked() {
  if (array2[0] == undefined) {
    this.setAttribute("class", "cell ch");
    array.push(this.id);
    redoArray2[0] = this.id;
    array2[0] = "cell ch";
    undoBtn[0].removeAttribute("disabled");
    array2[1] = this.id;
  } else {
    if (array2[0] == "cell r") {
      this.setAttribute("class", "cell ch");
      array.push(this.id);
      redoArray2[0] = this.id;
      array2[0] = "cell ch";
      undoBtn[0].removeAttribute("disabled");
      array2[1] = this.id;
      redoArray = redoArray.splice();
      redoBtn[0].disabled = true;
    } else {
      this.setAttribute("class", "cell r");
      array.push(this.id);
      redoArray2[0] = this.id;
      array2[0] = "cell r";
      undoBtn[0].removeAttribute("disabled");
      array2[1] = this.id;
      redoArray = redoArray.splice();
      redoBtn[0].disabled = true;
    }
    y++;
  }
}

function undo() {
  if (array.length !== 0) {
    let a = array.splice(-1);
    let b;
    redoArray.push(a.toString());
    b = document.getElementById(a);
    redoArray.push(b.getAttribute("class"));
    redoArray.push(y);
    b.setAttribute("class", "cell");
    redoBtn[0].removeAttribute("disabled");
    y--;
    if (array2[0] == "cell ch") {
      array2[0] = "cell r";
    } else {
      array2[0] = "cell ch";
    }
    if (array.length == 0) {
      undoBtn[0].disabled = true;
    }
  } else {
    console.log("entered zero lenght array");
    undoBtn[0].disabled = true;
  }
}
function redo() {
  if (redoArray.length !== 0) {
    console.log(redoArray);
    let bufArray = redoArray.splice(-3);
    bufArray = bufArray.reverse();
    let a = bufArray.splice(-1);
    let b;
    b = document.getElementById(a);
    array.push(a);
    a = bufArray.splice(-1);
    b.setAttribute("class", a);
    y = bufArray.splice(-1);
    if (redoArray.length == 0) {
      redoBtn[0].disabled = true;
    }
    undoBtn[0].removeAttribute("disabled");
  } else {
    console.log("entered zero lenght array");
    redoBtn[0].disabled = true;
  }
};

function restart() {
  for (let i = 0; i < getEl.length; i++) {
    let del;
    del = document.getElementById("c-" + i);
    del.setAttribute("class", "cell");
  }
  array = array.splice();
  redoArray = redoArray.splice();
  redoArray2 = redoArray2.splice();
  array2 = array2.splice();
  y = 1;
  let del;
  del = document.body.getElementsByClassName("won-title");
  del[0].setAttribute("class", "won-title hidden");
  del = document.getElementsByClassName("won-message");
  del[0].innerHTML = "";
  intervalID = setInterval(endOfGame, 50);
  for (let i = 0; i < getEl.length; i++) {
    getEl[i].addEventListener("click", cellClicked, false);
  }
  undoBtn[0].addEventListener("click", undo, false);
  redoBtn[0].addEventListener("click", redo, false);
  console.log(array);
  undoBtn[0].disabled = true;
  redoBtn[0].disabled = true;
};

function checkUdo() {
  if (
    getEl[0].getAttribute("class") == "cell" &&
    getEl[1].getAttribute("class") == "cell" &&
    getEl[2].getAttribute("class") == "cell" &&
    getEl[3].getAttribute("class") == "cell" &&
    getEl[4].getAttribute("class") == "cell" &&
    getEl[5].getAttribute("class") == "cell" &&
    getEl[6].getAttribute("class") == "cell" &&
    getEl[7].getAttribute("class") == "cell" &&
    getEl[8].getAttribute("class") == "cell"
  ) {
    undoBtn[0].disabled = true;
  }
  if (array.length > 0) {
    undoBtn[0].removeAttribute("disabled");
  } else {
    undoBtn[0].disabled = true;
  }
};

function checkRedo() {
  let a = redoArray[0];
  let b, c;
  b = document.getElementById(a);
  c = b.getAttribute("class");
  if (c !== "cell" || redoArray[0] !== redoArray2[0]) {
    redoBtn[0].disabled = true;
  } else {
    redoBtn[0].removeAttribute("disabled");
  }
};

function test(text) {
  let buf;
  buf = document.body.getElementsByClassName("won-title hidden");
  buf[0].setAttribute("class", "won-title");
  buf = document.getElementsByClassName("won-message");
  buf[0].innerHTML = text;
};

function removList() {
  clearInterval(intervalID);

  for (let i = 0; i < getEl.length; i++) {
    getEl[i].removeEventListener("click", cellClicked, false);
  }
  undoBtn[0].disabled = true;
  redoBtn[0].disabled = true;
  undoBtn[0].removeEventListener("click", undo, false);
  redoBtn[0].removeEventListener("click", redo, false);
};

intervalID = setInterval(endOfGame, 1);

function endOfGame() {
  //first line
  if (
    getEl[0].getAttribute("class") == getEl[1].getAttribute("class") &&
    getEl[1].getAttribute("class") == getEl[2].getAttribute("class") &&
    getEl[1].getAttribute("class") !== "cell"
  ) {
    removList();
    if (getEl[1].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[0].getAttribute("class");
    buff = buff + " win horizontal";
    getEl[0].setAttribute("class", buff);
    getEl[1].setAttribute("class", buff);
    getEl[2].setAttribute("class", buff);
    return;
  }
  //second line
  if (
    getEl[3].getAttribute("class") == getEl[4].getAttribute("class") &&
    getEl[4].getAttribute("class") == getEl[5].getAttribute("class") &&
    getEl[4].getAttribute("class") !== "cell"
  ) {
    removList();
    if (getEl[4].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[3].getAttribute("class");
    buff = buff + " win horizontal";
    getEl[3].setAttribute("class", buff);
    getEl[4].setAttribute("class", buff);
    getEl[5].setAttribute("class", buff);
    return;
  }
  //third line
  if (
    getEl[6].getAttribute("class") == getEl[7].getAttribute("class") &&
    getEl[7].getAttribute("class") == getEl[8].getAttribute("class") &&
    getEl[7].getAttribute("class") !== "cell"
  ) {
    removList();
    if (getEl[7].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[6].getAttribute("class");
    buff = buff + " win horizontal";
    getEl[6].setAttribute("class", buff);
    getEl[7].setAttribute("class", buff);
    getEl[8].setAttribute("class", buff);
    return;
  }
  //cols
  //col one
  if (
    getEl[0].getAttribute("class") == getEl[3].getAttribute("class") &&
    getEl[3].getAttribute("class") == getEl[6].getAttribute("class") &&
    getEl[3].getAttribute("class") !== "cell"
  ) {
    removList();
    if (getEl[3].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[0].getAttribute("class");
    buff = buff + " win vertical";
    getEl[0].setAttribute("class", buff);
    getEl[3].setAttribute("class", buff);
    getEl[6].setAttribute("class", buff);
    return;
  }
  //col two
  if (
    getEl[1].getAttribute("class") == getEl[4].getAttribute("class") &&
    getEl[4].getAttribute("class") == getEl[7].getAttribute("class") &&
    getEl[4].getAttribute("class") !== "cell"
  ) {
    removList();
    if (getEl[4].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[1].getAttribute("class");
    buff = buff + " win vertical";
    getEl[1].setAttribute("class", buff);
    getEl[4].setAttribute("class", buff);
    getEl[7].setAttribute("class", buff);
    return;
  }
  //col tree
  if (
    getEl[2].getAttribute("class") == getEl[5].getAttribute("class") &&
    getEl[5].getAttribute("class") == getEl[8].getAttribute("class") &&
    getEl[5].getAttribute("class") !== "cell"
  ) {
    removList();
    if (getEl[5].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[2].getAttribute("class");
    buff = buff + " win vertical";
    getEl[2].setAttribute("class", buff);
    getEl[5].setAttribute("class", buff);
    getEl[8].setAttribute("class", buff);
    return;
  }
  //diam l-r
  if (
    getEl[6].getAttribute("class") == getEl[4].getAttribute("class") &&
    getEl[4].getAttribute("class") == getEl[2].getAttribute("class") &&
    getEl[4].getAttribute("class") !== "cell"
  ) {
    removList();
    if (getEl[4].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[4].getAttribute("class");
    buff = buff + " win diagonal-left";
    getEl[6].setAttribute("class", buff);
    getEl[4].setAttribute("class", buff);
    getEl[2].setAttribute("class", buff);
    return;
  }
  //diam r-l
  if (
    getEl[0].getAttribute("class") == getEl[4].getAttribute("class") &&
    getEl[4].getAttribute("class") == getEl[8].getAttribute("class") &&
    getEl[4].getAttribute("class") !== "cell"
  ) {
    removList();
    if (getEl[4].getAttribute("class") == `cell ch`) test("Crosses won!");
    else test("Toes won!");
    let buff = getEl[4].getAttribute("class");
    buff = buff + " win diagonal-right";
    getEl[0].setAttribute("class", buff);
    getEl[4].setAttribute("class", buff);
    getEl[8].setAttribute("class", buff);
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
    removList();
    //draw!
    test("'It's a draw!");
    return;
  }
};
