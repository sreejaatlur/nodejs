function saveFile(response) {
  const fs = require('fs');
  fs.writeFile('users.json', JSON.stringify(response), err => {
    if (err) throw err;

    console.log('Done writing');
  });
}
fetch('https://dummyjson.com/products/1', {
  method: 'GET',
  // headers: {
  //   Accept: 'application/json',
  // },
})
  .then(response => response.json())
  .then(response => {
    console.log(typeof response);

    saveFile(response);
  });
