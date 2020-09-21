const fs = require('fs');
const posthtml = require('posthtml');

const html = fs.readFileSync('./index.html', 'utf-8');

posthtml(
  [
    require('posthtml-extend')(),
  ])
  .process(html/*, options */)
  .then((result) =>  console.log(result.html))