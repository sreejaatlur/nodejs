function myfun(var1) {
  console.log(var1);
  const fs = require('fs');
  fs.writeFile('users.json', JSON.stringify(var1), err => {
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
    const var2 = JSON.stringify(response);
    console.log(typeof var2);
    const var1 = response;
    console.log(typeof var1);
    // console.log(var1);
    myfun(var1);
  });
