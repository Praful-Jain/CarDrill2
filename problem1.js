/* The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer 
find out which car has an id of 33 by calling a function that will return the data for that car.
Then log the car's year, make, and model in the console log in the format of:
"Car 33 is a *car year goes here* *car make goes here* *car model goes here*"   */


const inventory = require("./inventory");
// console.log(inventory);

function findCarById(id) {
    /* find() function will return the item having the required 'id'     
       (car) =>  car.id === id    <--same-->    function abc(car){    return car.id === id;  }    */
    const car33 = inventory.find( (car) =>  car.id === id );
    return car33;
}

module.exports = findCarById;