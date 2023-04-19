function myfun(var1) {
  console.log(var1);
  const fs = require('fs');
  fs.writeFile('users.json', var1, err => {
    if (err) throw err;

    console.log('Done writing');
  });
}
fetch('https://dummyjson.com/products/1', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
})
  .then(response => response.json())
  .then(response => {
    const var1 = JSON.stringify(response);
    // console.log(var1);
    myfun(var1);
  });
