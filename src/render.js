const render = ({ companyList, companies, productMap, curr }) => {
  const html = `
      ${companies
        .map(
          (company, idx) => `
        <li>
          <a href='#${idx}'>${company}</a>
          ${
            curr === idx
              ? `
            <ul>
            ${productMap[company]
              .map(
                (product) => `
              <li>
                ${product}
              </li>
            `
              )
              .join('')}
          </ul>
            `
              : ''
          }
        </li>
      `
        )
        .join('')}
   `;
  companyList.innerHTML = html;
};

module.exports = render;
