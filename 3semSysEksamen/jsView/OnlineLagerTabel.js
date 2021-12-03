async function start() {
response = await fetch(
    'http://localhost:3000/admin/onlineLagerData'
  );
  let searchJSON = await response.json();

  for (let index = 0; index < searchJSON.length; index++) {
    console.log(searchJSON[index])
  }};

  start();