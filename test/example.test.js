

import { checkForYes } from '../utils.js';



const test = QUnit.test;

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
