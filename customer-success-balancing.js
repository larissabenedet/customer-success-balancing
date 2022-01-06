/**
 * Returns the id of the CustomerSuccess with the most customers
 * @param {array} customerSuccess
 * @param {array} customers
 * @param {array} customerSuccessAway
 */

const filterCses = (customerSuccess, customerSuccessAway) => {
  return customerSuccess
    .filter(({ id }) => !customerSuccessAway.includes(id))
    .sort((x, y) => x.score - y.score);
};

const filterCsesCustomersList = (avaliableCSes, avaliableCustomers) => {
  return avaliableCSes.map((cs) => {
    let customersQuantity = 0;
    avaliableCustomers.forEach((customer) => {
      if (customer.score <= cs.score) {
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
  let foo = 0;
  let result = "";

  avaliableCSes.forEach((element) => {
    if (foo < element.customersQuantity) {
      foo = element.customersQuantity;
      result = element.id;
    } else if (foo === element.customersQuantity) {
      result = 0;
    }
  });

  return result;
};

export const customerSuccessBalancing = (
  customerSuccess,
  customers,
  customerSuccessAway
) => {
  let avaliableCSes = filterCses(customerSuccess, customerSuccessAway);
  let avaliableCustomers = new Set(customers);

  return getResult(filterCsesCustomersList(avaliableCSes, avaliableCustomers));
};
