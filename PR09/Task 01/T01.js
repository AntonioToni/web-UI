function highlightWords() {
    const tekst = document.getElementById("textt").innerText;
    let empty = "";
    let words = tekst.split(" ");
    let wordLen = 8  
    let color = ""; 
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length >= wordLen) {  
            color = "<mark>" + word + "</mark>"; 
        } 
        else {
            color = word;  
        }
        empty = empty + " " + color + " ";  
    }
    return empty;
}
document.getElementById("textt").innerHTML = highlightWords(); 