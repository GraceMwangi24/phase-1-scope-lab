// Write your solution in this file!

var customerName = 'bob'; // Declared globally

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Modify global variable to uppercase
}

function setBestCustomer() {
  window.bestCustomer = 'not bob'; // Set a new global variable bestCustomer
}

function overwriteBestCustomer(newCustomer) {
  window.bestCustomer = newCustomer; // Overwrite the bestCustomer global variable
}

const leastFavoriteCustomer = 'somebody';
 
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'anybody else'; // Trying to reassign a constant will throw an error
}
