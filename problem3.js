/* The marketing team wants the car models listed alphabetically on the website. 
 Execute a function to Sort all the car model names into alphabetical order and
 log the results in the console as it was returned.     */

 const inventory = require('./inventory');

 function sortByModel(){
    // map() will extract only car_model from inventory into carModels array
    const carModels = inventory.map( (car) =>  car.car_model );

    // It will sort the carModels array in ascending order.
    carModels.sort();
    return carModels;
}
 
module.exports = sortByModel;