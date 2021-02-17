const faker = require('faker');

let companies, productMap;

//localStorage is an API that's available automatically in the browser
companies = JSON.parse(window.localStorage.getItem('companies'));
productMap = JSON.parse(window.localStorage.getItem('productMap'));

// if companies or productMap don't have values yet, the below sets a localStorage item equal the JSON-stringified version of their corresponding aray
if (!companies || !productMap) {
  companies = new Array(50).fill('').map((_) => faker.company.companyName());
  window.localStorage.setItem('companies', JSON.stringify(companies));

  productMap = companies.reduce((acc, company) => {
    acc[company] = new Array(1 + faker.random.number(2))
      .fill('-')
      .map((_) => faker.commerce.productName());
    return acc;
  }, {});
  window.localStorage.setItem('productMap', JSON.stringify(productMap));
}
console.log(window.localStorage);
module.exports = {
  companies,
  productMap,
};
