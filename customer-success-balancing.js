/**
 * Returns the id of the CustomerSuccess with the most customers
 * @param {array} customerSuccess
 * @param {array} customers
 * @param {array} customerSuccessAway
 */
export const customerSuccessBalancing = (
  customerSuccess,
  customers,
  customerSuccessAway
) => {
  let avaliableCSes = filterCses(customerSuccess, customerSuccessAway);
  let avaliableCustomers = new Set(customers);

  return getResult(filterCsesCustomersList(avaliableCSes, avaliableCustomers));
};

const filterCses = (customerSuccess, customerSuccessAway) => {
  // removes the unavailable cses and sorts the array
  return customerSuccess
    .filter(({ id }) => !customerSuccessAway.includes(id))
    .sort((x, y) => x.score - y.score);
};

const filterCsesCustomersList = (avaliableCSes, avaliableCustomers) => {
  // generates a array of objects with the number of customers for each cs
  return avaliableCSes.map((cs) => {
    let customersQuantity = 0;
    avaliableCustomers.forEach((customer) => {
      if (customer.score <= cs.score) {
        // remove the serviced customer
        avaliableCustomers.delete(customer);
        customersQuantity++;
      }
    });
    return {
      ...cs,
      customersQuantity,
    };
  });
};

const getResult = (avaliableCSes) => {
  // returns the id of the cs that served customers the most
  let foo = 0;
  let result = "";

  avaliableCSes.forEach((element) => {
    if (foo < element.customersQuantity) {
      foo = element.customersQuantity;
      result = element.id;
    } else if (foo === element.customersQuantity) {
      // returns 0 if there is a tie in attendance
      result = 0;
    }
  });

  return result;
};
