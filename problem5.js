/* The car lot manager needs to find out how many cars are older than the year 2000. 
Using the array you just obtained from the previous problem,
find out how many cars were made before the year 2000 and return the array of older cars and log its length.*/

const getYears = require('./problem4');

function carsBuildBeforeTwoK(){
    const yearArr = getYears();
    // filter() function will return the years which satisfy the condition.
    const oldCars = yearArr.filter( (year) => year<2000  );
    return oldCars;
}

module.exports = carsBuildBeforeTwoK;
