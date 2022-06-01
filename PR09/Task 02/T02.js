function amount(word) {
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
        sum += word[i].textContent.split(/\s/).length;
    }
    return sum;
}
var totalwords = amount(document.getElementsByTagName("p"));
console.log(totalwords)

const part = document.getElementById("count")
const text = document.createTextNode(totalwords + " " + "Words")

part.appendChild(text)