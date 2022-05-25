function freeShipping(dict) {
    let br = 0;
    for (key in dict) {
        br += dict[key];
    }
    if (br >= 50) 
        console.log(true);
    else console.log(false);
}

freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 });

freeShipping({ "Flatscreen TV": 399.99 });

freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 });