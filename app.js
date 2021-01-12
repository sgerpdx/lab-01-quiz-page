import { checkForYes } from './utils.js';


const startButton = document.getElementById('start-quiz');
const showResults = document.getElementById('results-box');



startButton.addEventListener('click', () => {

    alert('Fasten your safety harness, the Quiz is about to launch!');


    const flightCheck = confirm('Are you sure that you will to take the quiz?');

    if (flightCheck === true) {
        console.log('fly');
    } else {

        return;
    }

    const firstName = prompt('Please enter your first name');
    const lastName = prompt('Please enter your last name');


    let answersCorrect = 0;


    const answerOne = prompt('Is an Astronomical Unit, or AU, equal to the distance between the Earth and the Sun?');

    if (checkForYes(answerOne)) {

        answersCorrect++;
        console.log('succeed');

    } else {
        console.log('fail');

    }


    // if (answerOne.charAt(0).toUpperCase() === 'Y') {
    //     console.log('that is right');
    //     answersCorrect++;
    //     console.log(answersCorrect);

    // } else {
    //     console.log('sorry, that is wrong');
    //     console.log(answersCorrect);
    // }


    const answerTwo = prompt('Are the Sun and the Earth always the exact same distance apart?');

    if (answerTwo.charAt(0).toUpperCase() === 'N') {
        console.log('that is right');
        answersCorrect++;
        console.log(answersCorrect);

    } else {
        console.log('sorry, that is wrong');
        console.log(answersCorrect);
    }


    const answerThree = prompt('Is the AU used to measure the heliocentric distances of asteroids?');

    if (answerThree.charAt(0).toUpperCase() === 'Y') {
        console.log('that is right');
        answersCorrect++;
        console.log(answersCorrect);

    } else {
        console.log('sorry, that is wrong');
        console.log(answersCorrect);
    }


    const endMessage = `Welcome back to Earth, ${firstName} ${lastName}! You answered ${answersCorrect} questions right out of 3.`;
    showResults.textContent = endMessage;

});