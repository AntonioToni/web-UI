function mergeObjects(par1, par2) {
    x = Object.assign({}, par1, par2);
    return x;
}

console.log(mergeObjects({a:1, b:2}, {c:3, d:4}))