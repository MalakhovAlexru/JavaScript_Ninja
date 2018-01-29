// var a = 'c-1';

// a.onclick = function() { 
//     alert( 'hello' ); 
//   };

let getEl = document.getElementsByClassName('cell');
let y = 1;
let getElId, getBtn = document.getElementsByClassName('btn');
let array = [], undoArray = [], redoArray = [];



function cellClicked() {
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
console.log(array);
    
}

function undo(){
    console.log("hello Undo");
    let a = array.slice(-1);
    getElId = document.getElementById(a);
    getElId.setAttribute('class', `cell`);

    
    //  undoArray = array.splice(array.length,1);
     console.log(getElId);

}

for (let i =0 ; i<getEl.length ; i++){
//     getEl[i].setAttribute('onClick', `cellClicked()`);
getEl[i].addEventListener("click", cellClicked, false);

    
}

getBtn.addEventListener("click", undo, false);


        // console.log( articles )
