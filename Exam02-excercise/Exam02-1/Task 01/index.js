function formatLetters(str) {
    const firstLetters = str
        .split(' ')
        .map(word => word[0])
        .join('');
    return firstLetters
}

console.log(formatLetters("George Raymond Richard Martin"))