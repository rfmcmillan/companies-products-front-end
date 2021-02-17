const express = require('express');
const app = express();
const path = require('path');
const faker = require('faker');

console.log(faker.company.companyName());
console.log(faker.commerce.productName());

//the below sets up the server to use the dist folder, along with the main.js file within, that contains a transpiled version of your code that Webpack has created (using your code from your index.js file) to help show the front end of the web site. (this is as much as I understand at this point)
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port: ${port}`));
