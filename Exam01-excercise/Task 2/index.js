function generateCars(wheel, body, doll) {
    let twheel = wheel/4;
    let tdoll = doll/2;
    twheel = Math.floor(twheel)
    tdoll = Math.floor(tdoll)
    let total = Math.min(twheel, body, tdoll)
    console.log(total);
}

generateCars(2, 48, 76)

generateCars(43, 15, 87)

generateCars(88, 37, 17)