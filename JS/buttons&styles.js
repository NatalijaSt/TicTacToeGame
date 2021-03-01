/////////////////////////////////////////////////////////////////////
const rules = document.querySelector("#rules");
const divs = document.getElementsByTagName("div");
const head = document.getElementById("head");
const modal = document.querySelector('#modal');
const refresh = document.querySelector("#refresh");
const vsPlayer = document.querySelector("#vsPlayer");
const vsComputer = document.querySelector("#vsComputer");
const polje = document.getElementsByClassName('polje');
const winningRows = [840, 210, 345, 678, 630, 147, 258, 246];
let brojac = 0;

////////////////////////////////////////////////////////////////////
// clicking on the button NEW GAME reloads the page

refresh.addEventListener('click', () => {
    document.location.reload();
})

///////////////////////////////////////////////////////////////////
// These next lines of code define how the Rules of the Game
// would be displayed and/or closed

rules.addEventListener('click', () => {    
    refresh.style.display = 'none';
    rules.style.display = 'none';
    modal.style.display = 'block';
})

let closeModal = () => {
    refresh.style.display = 'block';
    rules.style.display = 'block';
    modal.style.display = 'none';
}

head.addEventListener('click', () => {
    closeModal();
})

for (d of divs) {
    d.addEventListener('click', (e) => {
if ( e.target != rules)
        closeModal();    
    })
}

////////////////////////////////////////////////////////////////////////
// This part of the code is adding some style to the header section,
// a.k.a. it's adding some X's and O's to the background of a headline

let kk1 = document.createElement('div');
let kk2 = document.createElement('div');
kk1.innerText = 'xo';
kk2.innerText = 'xo';
kk1.style.animation = 'animate 7s cubic-bezier(0.1, 0.4, 0.7, 0.1) infinite';
kk2.style.animation = 'animate 8s cubic-bezier(0.1, 0.7, 0.7, 0.1) infinite';
kk1.style.left = '12%';
kk2.style.left = '17%';
//console.log(kk1);
document.getElementById('k1').append(kk1);
document.getElementById('k2').append(kk2);

///////////////////////////////////////////////////////////////////////