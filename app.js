// import functions and grab DOM elements



const startButton = document.getElementById('start-quiz');
const showResults = document.getElementById('results-box');

// initialize state

// set event listeners to update state and DOM

startButton.addEventListener('click', () => {

    alert('Fasten your safety harness, the Quiz is about to launch!');

    const flightCheck = confirm('Are you sure that you will to take the quiz?');

    if (flightCheck === true) {
        console.log('affirmative');
    } else {
        console.log('negative');
        return;
    }

    const firstName = prompt('Please enter your first name');
    const lastName = prompt('Please enter your last name');

    let answersCorrect = 0;

    const answerOne = prompt('Is an Astronomical Unit equal to the distance between the Earth and the Sun?');

    if (answerOne.charAt(0).toUpperCase() === 'N') {
        console.log('wronggggg');

    } else {
        console.log('yeaha');

        answersCorrect++;
        console.log(answersCorrect);
    }


});