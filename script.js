let x = 'X';
let zero = 'O';
const boxes = document.querySelectorAll('.box');
const result = document.querySelector('.result');
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset Game';
let box = 0;
let check = 0;


function computerChoice() {
    let arr = []
    for (let a of boxes) {
        if (a.childElementCount == 1) {

        } else {
            arr.push(a)
        }
    }
    //Creating block to random computer Choice
    let randomNum = Math.floor(Math.random() * arr.length);
    const newpcBlock = document.createElement('div');
    newpcBlock.classList.add('zero');
    newpcBlock.textContent = 0;
    arr[randomNum].append(newpcBlock)
        //checking winning for Computer
    setTimeout(pol1, 500);
    setTimeout(pol2, 500);
    setTimeout(pol3, 500);
    setTimeout(pol4, 500);
    setTimeout(pol5, 500);
    setTimeout(pol6, 500);
    setTimeout(polCross1, 500);
    setTimeout(polCross2, 500);
    setTimeout(draw, 500);
}


for (let a of boxes) {
    check = a.addEventListener('click', () => {
        const newBlock = document.createElement('div');
        newBlock.classList.add('eks');
        newBlock.textContent = x;
        if (a.childElementCount == 1) {

        } else {

            a.append(newBlock);

            setTimeout(() => {
                    computerChoice();
                }, 100)
                //checking all squerts winning for User
            setTimeout(pol1, 500);
            setTimeout(pol2, 500);
            setTimeout(pol3, 500);
            setTimeout(pol4, 500);
            setTimeout(pol5, 500);
            setTimeout(pol6, 500);
            setTimeout(polCross1, 500);
            setTimeout(polCross2, 500);
            setTimeout(draw, 500);
        }

    });
}

//horizontally
function pol1() {
    if (boxes[0].firstChild.className == 'eks' && boxes[1].firstChild.className == 'eks' && boxes[2].firstChild.className == 'eks') {
        result.textContent = 'Player 1 win';
        result.append(resetBtn)
        endOfGame(boxes[0], boxes[1], boxes[2]);

    } else if (boxes[0].firstChild.className == 'zero' && boxes[1].firstChild.className == 'zero' && boxes[2].firstChild.className == 'zero') {
        result.textContent = 'Player 2 win';
        result.append(resetBtn)
        endOfGame(boxes[0], boxes[1], boxes[2]);
    }
}

function pol2() {
    if (boxes[3].firstChild.className == 'eks' && boxes[4].firstChild.className == 'eks' && boxes[5].firstChild.className == 'eks') {
        result.textContent = 'Player 1 win';
        result.append(resetBtn)
        endOfGame(boxes[3], boxes[4], boxes[5]);
    } else if (boxes[3].firstChild.className == 'zero' && boxes[4].firstChild.className == 'zero' && boxes[5].firstChild.className == 'zero') {
        result.textContent = 'Player 2 win';
        result.append(resetBtn)
        endOfGame(boxes[3], boxes[4], boxes[5]);
    }
}

function pol3() {
    if (boxes[6].firstChild.className == 'eks' && boxes[7].firstChild.className == 'eks' && boxes[8].firstChild.className == 'eks') {
        result.textContent = 'Player 1 win';
        result.append(resetBtn)
        endOfGame(boxes[6], boxes[7], boxes[8]);
    } else if (boxes[6].firstChild.className == 'zero' && boxes[7].firstChild.className == 'zero' && boxes[8].firstChild.className == 'zero') {
        result.textContent = 'Player 2 win';
        result.append(resetBtn)
        endOfGame(boxes[6], boxes[7], boxes[8]);
    }
}

//verticaly
function pol4() {
    if (boxes[0].firstChild.className == 'eks' && boxes[3].firstChild.className == 'eks' && boxes[6].firstChild.className == 'eks') {
        result.textContent = 'Player 1 win';
        result.append(resetBtn)
        endOfGame(boxes[0], boxes[3], boxes[6]);

    } else if (boxes[0].firstChild.className == 'zero' && boxes[3].firstChild.className == 'zero' && boxes[6].firstChild.className == 'zero') {
        result.textContent = 'Player 2 win';
        result.append(resetBtn)
        endOfGame(boxes[0], boxes[3], boxes[6]);
    }
}

function pol5() {
    if (boxes[1].firstChild.className == 'eks' && boxes[4].firstChild.className == 'eks' && boxes[7].firstChild.className == 'eks') {
        result.textContent = 'Player 1 win';
        result.append(resetBtn)
        endOfGame(boxes[1], boxes[4], boxes[7]);

    } else if (boxes[1].firstChild.className == 'zero' && boxes[4].firstChild.className == 'zero' && boxes[7].firstChild.className == 'zero') {
        result.textContent = 'Player 2 win';
        result.append(resetBtn)
        endOfGame(boxes[1], boxes[4], boxes[7]);
    }

}

function pol6() {
    if (boxes[2].firstChild.className == 'eks' && boxes[5].firstChild.className == 'eks' && boxes[8].firstChild.className == 'eks') {
        result.textContent = 'Player 1 win';
        result.append(resetBtn)
        endOfGame(boxes[2], boxes[5], boxes[8]);

    } else if (boxes[2].firstChild.className == 'zero' && boxes[5].firstChild.className == 'zero' && boxes[8].firstChild.className == 'zero') {
        result.textContent = 'Player 2 win';
        result.append(resetBtn)
        endOfGame(boxes[2], boxes[5], boxes[8]);
    }
}
//cross
function polCross1() {
    if (boxes[0].firstChild.className == 'eks' && boxes[4].firstChild.className == 'eks' && boxes[8].firstChild.className == 'eks') {
        result.textContent = 'Player 1 win';
        result.append(resetBtn)
        endOfGame(boxes[0], boxes[4], boxes[8]);

    } else if (boxes[0].firstChild.className == 'zero' && boxes[4].firstChild.className == 'zero' && boxes[8].firstChild.className == 'zero') {
        result.textContent = 'Player 2 win';
        result.append(resetBtn)
        endOfGame(boxes[0], boxes[4], boxes[8]);
    }
}

function polCross2() {
    if (boxes[2].firstChild.className == 'eks' && boxes[4].firstChild.className == 'eks' && boxes[6].firstChild.className == 'eks') {
        result.textContent = 'Player 1 win';
        result.append(resetBtn)
        endOfGame(boxes[2], boxes[4], boxes[6]);

    } else if (boxes[2].firstChild.className == 'zero' && boxes[4].firstChild.className == 'zero' && boxes[6].firstChild.className == 'zero') {
        result.textContent = 'Player 2 win';
        result.append(resetBtn)
        endOfGame(boxes[2], boxes[4], boxes[6]);
    }

}

//if draw
function draw() {
    for (let x of boxes) {
        if (boxes[0].firstChild && boxes[1].firstChild && boxes[2].firstChild && boxes[3].firstChild && boxes[4].firstChild && boxes[5].firstChild && boxes[6].firstChild && boxes[7].firstChild && boxes[8].firstChild) {
            result.textContent = 'Draw';
            result.append(resetBtn)
            resetBtn.addEventListener('click', refreshPage);
        }
    }
}
//refreshPage
function refreshPage() {
    window.location.reload();
}

function endOfGame(box1, box2, box3) {
    for (let a of boxes) {
        if (a == box1 || a == box2 || a == box3) {

        } else {
            a.style.border = '1px solid black'
            a.textContent = '';
            a.style.cursor = 'none';
            a.style.fontSize = '0px'
        }
    }
    box1.style.border = '1px solid red';
    box2.style.border = '1px solid red';
    box3.style.border = '1px solid red';
    resetBtn.addEventListener('click', refreshPage);
}