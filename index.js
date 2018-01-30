// var a = 'c-1';

// a.onclick = function() { 
//     alert( 'hello' ); 
//   };

    let getEl = document.getElementsByClassName('cell');
    let y = 1;
    let getElId, getBtn = document.getElementsByClassName('btn');
    let array = [], undoArray = {}, redoArray = [];


    let undoBtn = document.getElementsByClassName('undo-btn btn');
    let restarBtn = document.getElementsByClassName('restart-btn');
    let redoBtn = document.getElementsByClassName('redo-btn btn');

    undoBtn[0].addEventListener("click", undo, false);
    restarBtn[0].addEventListener("click", restart, false);
    redoBtn[0].addEventListener("click", redo, false);


    for (let i =0 ; i<getEl.length ; i++){

        getEl[i].addEventListener("click", cellClicked, false);
            
    }
    setInterval(checkUdo,100);
    setInterval(checkRedo,100);

    console.log(undoBtn);
    function cellClicked() {
        checkUdo();
        checkRedo();
        if (y%2){
            
            this.setAttribute('class', `cell ch`);
            array.push(this.id)
            console.log(y);
            
    } else {
    
        this.setAttribute('class', `cell r`);
        console.log(y);
        array.push(this.id)
        }
        y++;
        checkUdo();
        checkRedo();

    }

function checkUdo(){
if(array.length > 0){
    undoBtn[0].disabled = false;
           
}
else{
    undoBtn[0].disabled = true;
}
}

function checkRedo(){
    if(redoArray.length != 0){
        redoBtn[0].disabled = false;
     } else {
        redoBtn[0].disabled = true;
    }
}

function undo(){
    let a = array.slice(-1);
    redoArray[0] = a.toString();
    getElId = document.getElementById(a);
    redoArray[1] = getElId.getAttribute('class');
    getElId.setAttribute('class', `cell`);
    array = array.slice(0,-1);
   console.log (redoArray);
};

function redo(){
    // console.log (redoArray);
    let a = redoArray[0];
    getElId = document.getElementById(a);
    array.push(a);
    a = redoArray[1];                
    getElId.setAttribute('class', a);
    
    redoArray = [];

};

function restart(){
    console.log ('restart works');
                      

};

function endOfGame(){
    let rowWins = 0;
    let colWins = 0;
    let rldiag = 0;
    let lrdiag = 0;

    for (let i = 0 ; i<getEl.length ; i++){
        let etalon = getEl[i].getAttribute('class');
        let buf = getEl[i].getAttribute('class');   
    }
    if (buf == etalon){
        rowWins++;
        if (rowWins == 3){
            console.log('game over!');
            getElId = document.getElementsByClassName('won-title hidden');
            getElId.setAttribute('class', `won-title`);
            getElId = document.getElementsByClassName('won-message');
            getElId.appendChild('Hello');

            // .appendChild(http.responseXML);
        }
    }
}