function extractUnique(str) {
    var str1 = str;
    var unique="";
    for (var x = 0; x < str.length; x++)
    {
        if(unique.indexOf(str.charAt(x))==-1){
            unique += str1[x];  
        }
    }
    return unique;  
}

console.log(extractUnique("thequickbrownfoxjumpsoverthelazydog"))