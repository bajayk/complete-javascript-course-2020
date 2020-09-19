/*
 * *********************************************
 * Functions - Don't repeat yourself
 * *********************************************
 */

function calculateTravelTime(speedPerHour, distance){
    let timeToTravelOneKM = 60 / speedPerHour;
    let travelTime = timeToTravelOneKM * distance;    
    return travelTime;
}
/*
var timeToTravel = calculateTravelTime(30, 50);
console.log('Need ' + timeToTravel + ' minutes to travel 50 KMs distance with 30KM/h speed.');
*/
function displayUserTravelDistance(username, speedPerHour, distance){
    var timeToTravel = calculateTravelTime(speedPerHour, distance);

    console.log(username + ' Will required ' + timeToTravel + ' Minutes to travel ' + distance + ' KM distance with '+ speedPerHour+'KM/h speed' );
}

displayUserTravelDistance('Manoj', 20, 35);
displayUserTravelDistance('Ajay', 60, 60);