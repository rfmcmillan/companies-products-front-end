const { companies, productMap } = require('./data');
const render = require('./render');
const companyList = document.querySelector('#company-list');

//finds the index of the list-item that currently has the '#' and converts it into a number
let curr = window.location.hash.slice(1) * 1;

const _render = () => {
  render({ companies, productMap, companyList, curr });
};

_render();

window.addEventListener('hashchange', () => {
  curr = window.location.hash.slice(1) * 1;
  _render();
});
