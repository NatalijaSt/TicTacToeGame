////////////////////////////////////////////////////////////////////
// This function defines which text will be displayed in which 
// section of the page at the end of the game, 
// for example, information who won the game 
// will be displayed in a lower right corner of the page

let stopGame = (text, place) => {
    document.querySelectorAll(".polje").forEach(el =>
        el.style.pointerEvents = 'none');
    document.getElementById(place).innerText = text;
}

///////////////////////////////////////////////////////////////
// This is a counter function

let brojacb = () => {
    brojac++
    //console.log('brojac ' + brojac);
}

///////////////////////////////////////////////////////////////////
// There are only 9 fields to play in, so if a counter
// is equal to nine => game is finished, you have no more moves

let brojacKontrolor = () => {
    brojacb();
    if (brojac == 9) {
        stopGame('NOONE WINS!', 'c3Span2');
        document.querySelectorAll(".polje").forEach(el =>
            el.style.pointerEvents = 'none');
    }
}

///////////////////////////////////////////////////////////////////
// This function defines winning combinations and it's adding 
// winningStyle class to them

let winningCombos = () => {

    for (let wi of winningRows) {
        // console.log('wi '+ typeof(wi));
        let win = wi.toString();
        //console.log('win '+ typeof(win));
       // console.log('win ' + win);
        let splitWin = win.split("");
        // console.log('splitwin '+ typeof(splitWin));//array
       // console.log('splitwin ' + splitWin);
        let xArray = [];
        let oArray = [];

        for (s of splitWin) {

            if (polje[s].innerHTML == 'X') {
                xArray.push(s);
              //  console.log('xaaray ' + xArray);
              //  console.log('bblb ' + win + '' + xArray.join(''));
            }
            if (win == xArray.join('')) {
                splitWin.forEach(el => {
                    polje[el].classList.add("winningStyle"),
                        stopGame('X WINS!', 'c3Span2');
                });
            }
            if (polje[s].innerHTML == 'O') {
                oArray.push(s);
              //  console.log('oaaray ' + oArray);
              //  console.log('bblb ' + win + '' + oArray.join(''));

            }
            if (win == oArray.join('')) {
                splitWin.forEach(el => {
                    polje[el].classList.add("winningStyle"),
                        stopGame('O WINS!', 'c3Span2');
                });
            }
        }
    }
}

////////////////////////////////////////////////////////////////////
// When you choose to play against another player, first player 
// plays with X and the second player plays with O

let brojacXO = (e) => {

    if (e.target.innerText != 'O' &&
        e.target.innerText != 'X') {
        brojacKontrolor();

        if (brojac % 2 == 0) {
           // console.log('brojac je paran broj ' + brojac);
           // console.log(e.target.innerText);
            e.target.innerText = 'O';

        } else {
           // console.log('brojac je neparan broj ' + brojac);
            e.target.innerText = 'X';
        }
    }

    winningCombos();

}

////////////////////////////////////////////////////////////////////
// When you choose to play against the computer you play first
// with X, and the computer will pick 
// randomly chosen number of the field to play O in it

let posebanIndex = (unos) => {
    let posebanBroj = Math.floor(Math.random() * 9);
    if (brojac == 9) {
        stopGame('NOONE WINS!', 'c3Span2');
    }
    if (brojac < 9) {
        if ([1, 3, 5, 7].includes(brojac)) {

            if (polje[posebanBroj].innerText != 'O' &&
                polje[posebanBroj].innerText != 'X') {
                polje[posebanBroj].innerText = unos;
                brojacb();
               // console.log('pb1 ' + posebanBroj);

            } else if (polje[posebanBroj].innerText == 'O' ||
                polje[posebanBroj].innerText == 'X') {
                // setTimeout(posebanIndex, 300);
                posebanIndex(unos);
                //console.log('pb2 ' + posebanBroj);
            }
        }
    }
}

/////////////////////////////////////////////////////////////////
// When you play against the computer this function is 
// checking winning combinations and who won the game

let compPlays = (e) => {

    if (brojac == 9) {
        stopGame('NOONE WINS!', 'c3Span2');

    } else if (brojac < 9) {
        if (e.target.innerText != 'O' &&
            e.target.innerText != 'X') {
            e.target.innerText = 'X';
            brojacb();
            // console.log(true);
            //console.log(brojac);
            for (let wi of winningRows) {
                let win = wi.toString();
                let splitWin = win.split("");
                let xArray = [];
                for (s of splitWin) {
                    if (polje[s].innerHTML == 'X') {
                        xArray.push(s);
                    }
                    if (win == xArray.join('')) {
                        posebanIndex('');
                    }
                }
            }
        }
    }

    posebanIndex('O');
    winningCombos();
   // console.log(brojac);
}

//////////////////////////////////////////////////////////////////////
// When you choose to play against another player this function
// is being called

vsPlayer.addEventListener('click', () => {
    vsComputer.disabled = "true";
    document.querySelector('#c3Span2').innerHTML = 'Game is on !';
    for (let p of polje) {
        p.addEventListener('click', brojacXO);
    };
})

///////////////////////////////////////////////////////////////////////
// When you choose to play against computer this function
// is being called

vsComputer.addEventListener('click', () => {
    vsPlayer.disabled = "true";
    document.querySelector('#c3Span2').innerHTML = 'Game is on !';
    for (let p of polje) {
        p.addEventListener('click', compPlays);
    };
})

////////////////////////////////////////////////////////////////////////////
//////// THE END //////////////// Made By Natalija Stanimirovic ///////////
//////////////////////////////////////////////////////////////////////////