function getDay(input) {
    const date = new Date(input);
    switch(date.getDay()){
        case 0: 
            console.log('Nedjelja');
            break;
        case 1:
            console.log('Ponedjeljak');
            break;
        case 2:
            console.log('Utorak');
            break;
        case 3:
            console.log('Srijeda');
            break;
        case 4:
            console.log('Četvrtak');
            break;
        case 5:
            console.log('Petak');
            break;
        case 6:
            console.log('Subota');
            break;
    }
}

getDay("11/07/2006");

getDay("01/01/2022");
