function reverseSpecific(string, char) {
    let word = string.split(" ");
    let newstr = "";
    for (let i = 0; i < word.length; i++) {
        let b = word[i][0]; //get first letter
        if (b === char) {
            let e = word.indexOf(word[i]);
            let c = "";
            for (let j = word[i].length - 1; j >= 0; j--) { //reverse
                c += word[i][j];
        }
        c += "";
        word.splice(e, 1, c); //at index 1, delete 1, insert c
        }
    }
    for (let i = 0; i < word.length; i++) {
        newstr += word[i] + " ";
    }
    console.log(newstr);
}

reverseSpecific("word searches are super fun", "s");

reverseSpecific("first man to walk on the moon", "m");

reverseSpecific("peter piper picked pickled peppers", "p");