export function checkForYes(answer) {
    // this function should take in a user-input string and determine whether the first letter is 'y' (true) or not (false)
    return answer.charAt(0).toUpperCase() === 'Y';
}

export function checkForNo(answer) {
    // this function should take in a user-input string and determine whether the first letter is 'n' (true) or not (false)
    return answer.charAt(0).toUpperCase() === 'N';
}