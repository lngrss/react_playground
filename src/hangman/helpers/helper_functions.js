import { words } from './words';

export function secretWord() {
    const random = words[Math.floor((words.length + 1) * Math.random())];
    return random;
} 

export function guessChecksOut(value, word) {
    return word.toUpperCase().includes(value.toUpperCase())
}

export function moveValid(str, guesses) {
    var result = true; 
    if (guesses.includes(str) || !str.match('^[a-zA-Z]$')) {
        result = false;
    }
    return result;
}

