function generateCombinations(str) {
    var lenStr = str.length;
    var result = [];
    var indexCurrent = 0;

    while(indexCurrent < lenStr){
        var char = str.charAt(indexCurrent);
        var x;
        var arrTemp = [char];

        for(x in result) {
            arrTemp.push(""+result[x]+char);
        }
        result = result.concat(arrTemp);

        indexCurrent++;
    }

    return result;
}

console.log(generateCombinations("dog"))