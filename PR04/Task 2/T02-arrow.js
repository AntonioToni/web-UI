let res = (name, points, totalpoints) => {
    let x = points / totalpoints * 100;
    console.log("Iz kolegija", name, "ostvarili ste",x.toFixed(2),"%");
};

res("MUP/PWKS",25,35);