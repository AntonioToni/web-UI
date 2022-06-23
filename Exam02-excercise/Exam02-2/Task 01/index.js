function generateNumeronyms(str) {
    let strSplit = str.split(" ")
    let arraynew = [];
    for (i in strSplit) {
        if (strSplit[i].length > 3) {
            len = strSplit[i].length
            let temp = "";
            temp += strSplit[i][0]
            temp += len - 2
            temp += strSplit[i][len - 1]
            arraynew.push(temp);
        } else {
            arraynew.push(strSplit[i])
        }
    }
    newstr = arraynew.toString()
    newstr = newstr.replaceAll(",", " ")
    console.log(newstr)
}

generateNumeronyms("Every developer likes to mix kubernetes and javascript")