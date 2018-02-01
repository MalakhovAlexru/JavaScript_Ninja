let getEl = document.getElementsByClassName("cell");
let y = 1;
let getElId;
let array = [],
    redoArray = [];
    redoArray2 = [];

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
 
  if (y % 2) {
    this.setAttribute("class", `cell ch`);
    array.push(this.id);
    console.log(y);
    checkUdo();

  } else {
    this.setAttribute("class", `cell r`);
    console.log(y);
    array.push(this.id);
    checkUdo();
    }
  y++;
  }

function undo() {
  let a = array.slice(-1);
  // redoArray.splice(0,3);
  redoArray.push(a.toString());
  getElId = document.getElementById(a);
  redoArray.push(getElId.getAttribute("class"));
  redoArray.push(y);
  getElId.setAttribute("class", `cell`);
  array = array.slice(0, -1);
  checkUdo();
  checkRedo();  
  y--;
  console.log(redoArray);
}

function redo() {
  console.log("befor reverse " + redoArray);
  let b = redoArray.splice(-3);
  b = b.reverse();
  
  let a = b.splice(-1);
  console.log("splice - 1 " + redoArray);
  
  getElId = document.getElementById(a);
  array.push(a);
  a = b.splice(-1);
  console.log("splice - 2 " + redoArray);
  
  getElId.setAttribute("class", a);
  y = b.splice(-1);
  console.log("splice - 3 " + redoArray);
  
  // redoArray.splice(-3);
  checkUdo();
  checkRedo();
  // redoArray = redoArray.reverse();

}

function restart() {

  for (let i = 0; i < getEl.length; i++) {
    let del;
    del = document.getElementById("c-" + i);
    del.setAttribute("class", "cell");
  }
  array.splice(0,getEl.length);;
  redoArray.splice(0,3);;
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

  checkUdo();
  checkRedo();

}


function checkUdo() {
  if (array.length > 0) {
    undoBtn[0].removeAttribute('disabled');
  }
   else {
    undoBtn[0].disabled = true;    
  }
}

function checkRedo() {
if (redoArray.length > 0) {
  redoBtn[0].removeAttribute('disabled');
} 
if (redoArray.length == 0){
  redoBtn[0].disabled = true;  
}
// if(array.length == 0){
//   redoBtn[0].disabled = true;
// }
}

function test(text) {
  let buf;
  buf = document.body.getElementsByClassName("won-title hidden");
  buf[0].setAttribute("class", "won-title");
  buf = document.getElementsByClassName("won-message");
  buf[0].innerHTML = text;
}

function removList(){
  clearInterval(intervalID);
  
    for (let i = 0; i < getEl.length; i++) {
        getEl[i].removeEventListener("click", cellClicked, false);
      }
      checkUdo();
      checkRedo();
      undoBtn[0].removeEventListener("click", undo, false);
      redoBtn[0].removeEventListener("click", redo, false);
   
};

intervalID = setInterval(endOfGame, 50);

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

    // clearInterval(intervalID);
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
    // clearInterval(intervalID);
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
    // clearInterval(intervalID);
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
    // clearInterval(intervalID);
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
    // clearInterval(intervalID);
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
    // clearInterval(intervalID);
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

    // clearInterval(intervalID);
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
    // clearInterval(intervalID);
    return;
  }
}
