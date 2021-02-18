

import { checkForYes, checkForNo } from '../utils.js';



const test = QUnit.test;


// Tests for checkForYes function:

test('if the first letter of the input string is y, the fuction should return true', (assert) => {

    const answer = 'yellow';
    const expected = true;
    const actual = checkForYes(answer);

    assert.equal(actual, expected);

    if (answer.charAt(0).toUpperCase() === 'Y') {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
});


test('if the first letter of the input string is not y, the fuction should return false', (assert) => {

    const answer = 'october';
    const expected = false;
    const actual = checkForYes(answer);

    assert.equal(actual, expected);


    if (answer.charAt(0).toUpperCase() === 'Y') {
        console.log('correct');
    } else {
        console.log('incorrect');
    }

});



// Tests for checkForNo function:

test('if the first letter of the input string is n, the fuction should return true', (assert) => {

    const answer = 'north';
    const expected = true;
    const actual = checkForNo(answer);

    assert.equal(actual, expected);

    if (answer.charAt(0).toUpperCase() === 'N') {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
});


test('if the first letter of the input string is not n, the fuction should return false', (assert) => {

    const answer = 'kangaroo';
    const expected = false;
    const actual = checkForNo(answer);

    assert.equal(actual, expected);

    if (answer.charAt(0).toUpperCase() === 'N') {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
});