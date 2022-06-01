function doubleAndReturnArgs(par1, ...par2) {
    return([...par1, ...par2.map(v => v*2)])
}

console.log(doubleAndReturnArgs([1,2,3],4,4))