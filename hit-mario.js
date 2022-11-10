const hole = document.querySelectorAll('.hole');
const mario = document.querySelectorAll('.mario');
const scoreboard = document.querySelector('.scoreboard');

let holePreviosly;
let done;
let score;

function randomHole(hole) {
    const holeRandom = Math.floor(Math.random() * 8); 
    const random = holeRandom;
    if(random == holePreviosly) {
        randomHole(hole);
    }
    holePreviosly = random;
    return random;
}

function timeRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function appearMario() {
    const random = randomHole(hole);
    const time = timeRandom(400, 650)
    hole[random].classList.add('appear');
    setTimeout(() => {
        hole[random].classList.remove('appear');
        if(!done) {
            appearMario();
        }
    }, time);
}

function play() {
    done = false;
    score = 0;
    scoreboard.textContent = 0;
    appearMario();
    setTimeout(() => {
        done = true;
    }, 10000)
}

function hit() {
    score++;
    scoreboard.textContent = score;
}