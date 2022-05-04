const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3, "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25, "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};

function scoreRating(name) {
    let score = 0;
    for (let i = 0; i < name.length; i++) {
        for (k in scores) {
            if (name.charAt(i) == k) {
                score+=scores[k];
            }
        }
    }
    if (score <= 60){
        console.log("NOT TOO GOOD");
    }
    else if (61 <= score <= 300){
        console.log("PRETTY GOOD");
    }
    else if (301 <= score <= 599){
        console.log("VERY GOOD");
    }
    else if (600 <= score){
        console.log("THE BEST");
    }
}

scoreRating("ANTE");