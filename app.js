
import { checkForYes, checkForNo } from './utils.js';


const startButton = document.getElementById('start-quiz');
const showResults = document.getElementById('results-box');



startButton.addEventListener('click', () => {

    alert('Fasten your safety harness, the Quiz is about to launch!');



    const flightCheck = confirm('Are you still sure that you want to take the Quiz?');

    if (flightCheck !== true) {

        return;

    }

    const firstName = prompt('Please enter your first name');
    const lastName = prompt('Please enter your last name');



    let answersCorrect = 0;


    const answerOne = prompt('Is an Astronomical Unit, or AU, equal to the distance between the Earth and the Sun?');

    if (checkForYes(answerOne)) {

        answersCorrect++;

    }



    const answerTwo = prompt('Are the Sun and the Earth always the exact same distance apart?');


    if (checkForNo(answerTwo)) {

        answersCorrect++;

    }



    const answerThree = prompt('Is the AU used to measure the heliocentric distances of asteroids?');

    if (checkForYes(answerThree)) {

        answersCorrect++;
    }

    const percentage = Math.ceil((answersCorrect / 3) * 100);

    const endMessage = `Welcome back to Earth, ${firstName} ${lastName}! You answered ${answersCorrect} questions right out of 3, or ${percentage}% correct.`;
    showResults.textContent = endMessage;

});