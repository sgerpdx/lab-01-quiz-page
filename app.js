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





});