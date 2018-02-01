let getEl = document.getElementsByClassName("cell");
let y = 1;
let getElId;
let array = [],
    redoArray = [],
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
    // redoArray2 = [];
    this.setAttribute("class", `cell ch`);
    array.push(this.id);
    console.log(y);
    checkUdo();
    checkRedo();

  } else {
    this.setAttribute("class", `cell r`);
    console.log(y);
    array.push(this.id);
    checkUdo();
    checkRedo();
    }
  y++;
  }

function undo() {
  let a = array.splice(-1);
  // redoArray2.push(a);
  // redoArray.splice();
  redoArray[0] = a.toString();
  getElId = document.getElementById(a);
  redoArray[1] = getElId.getAttribute("class");
  redoArray[2] = y;
  getElId.setAttribute("class", `cell`);
  // array = array.splice(0, -1);
  checkUdo();
  checkRedo();  
  y--;
}

function redo() { 
  if(redoArray.length !== 0){
    let a = redoArray[0];
    getElId = document.getElementById(a);
    array.push(a);
    a = redoArray[1];
    getElId.setAttribute('class', a);
    y = redoArray[2];
    redoArray.splice();
    checkUdo();
    checkRedo();
  }
  else {
    console.log ('entered zero lenght array')
  }
      
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
  if(array.length > 0){
    console.log(redoArray);
    
    if (redoArray.length !== 0){
    let a = redoArray[0];
    let b,c;
    b = document.getElementById(a);
    c = b.getAttribute("class");
    console.log(c);
    // if (redoArray.length == 0){
    //     redoBtn[0].disabled = true;  
    //   }
    if (c == "cell"){
      // redoArray.splice(0);
      redoBtn[0].removeAttribute('disabled');
    }
    else {
      redoBtn[0].disabled = true; 
      
    }
  }
  else console.log('redoArray is zero lenght')
}

// if (redoArray.length == 0){
//   redoBtn[0].disabled = true;  
// }
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
