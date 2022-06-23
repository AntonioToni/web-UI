function sortLetters(str) {
    const sorted = str
        .split('')
        .sort()
        .join('');
    return sorted;
}

console.log(sortLetters("webmaster"))