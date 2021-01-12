

import { checkForYes } from '../utils.js';



const test = QUnit.test;

test('it should take a string and determine whether the first character is the letter y', (assert) => {

    const answer = 'yellow';
    const expected = answer.charAt(0).toUpperCase() === 'Y';
    const actual = checkForYes(answer);

    assert.equal(actual, expected);
});



// export function getLength(word) {
//     // this function should take in a word and return the number of letters in that word
//     return word.length;
// }


// test('it should take in a string and return the length of the string', function (assert) {

//     const myWord = 'texas';
//     const expected = 5;

//     const actual = getLength(myWord);

//     assert.equal(actual, expected);
// });