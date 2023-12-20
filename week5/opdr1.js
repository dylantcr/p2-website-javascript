let startTime;
let reactionTime;

function startGame() {

    document.getElementById('start-button').style.display = 'none';


    document.getElementById('red-box').style.display = 'block';


    const randomTime = Math.floor(Math.random() * 8000) + 2000;
    setTimeout(changeToGreen, randomTime);
}

function changeToGreen() {

    startTime = new Date().getTime();


    document.getElementById('red-box').style.display = 'none';


    document.getElementById('green-box').style.display = 'block';


    document.getElementById('green-box').addEventListener('click', calculateReactionTime);
}

function calculateReactionTime() {

    const endTime = new Date().getTime();
    reactionTime = endTime - startTime;


    alert('Je reactietijd is: ' + reactionTime + ' milliseconden');

    document.getElementById('green-box').style.display = 'none';

    document.getElementById('start-button').style.display = 'block';

    document.getElementById('green-box').removeEventListener('click', calculateReactionTime);
}