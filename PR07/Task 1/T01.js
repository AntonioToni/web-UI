let date = new Date();
let WeekdayNum = date.getDay();

function getWeekday(date){
    switch(date){
        case 0: 
            return 'Nedjelja';
            break;
        case 1:
            return 'Ponedjeljak';
            break;
        case 2:
            return 'Utorak';
            break;
        case 3:
            return 'Srijeda';
            break;
        case 4:
            return 'Četvrtak';
            break;
        case 5:
            return 'Petak';
            break;
        case 6:
            return 'Subota';
            break;
}}

console.log(getWeekday(WeekdayNum))