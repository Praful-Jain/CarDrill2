/* The accounting team needs all the years from every car on the lot. Execute a function
that will return an array from the dealer data containing only the car years and 
log the result in the console as it was returned.  */

const inventory = require('./inventory');

function getYears(){
    // map() function will return an array containing only the car_year .
    const yearArr=inventory.map( (car) => car.car_year  );
    return yearArr;
}

module.exports = getYears;