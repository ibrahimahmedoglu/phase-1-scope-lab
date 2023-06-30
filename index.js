var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob'; // This will throw an error because you cannot change the value of a constant variable
}
