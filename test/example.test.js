

import { checkForYes } from '../utils.js';



const test = QUnit.test;

test('it should take a string and determine whether the first character is the letter y', (assert) => {

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


test('it should take a string and determine whether the first character is the letter y', (assert) => {

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
