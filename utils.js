export function checkForYes(answer) {

    return answer.charAt(0).toUpperCase() === 'Y';
}

export function checkForNo(answer) {

    return answer.charAt(0).toUpperCase() === 'N';
}