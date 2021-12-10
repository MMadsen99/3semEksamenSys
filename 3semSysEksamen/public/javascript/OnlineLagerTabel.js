let fillTable = (listOfProducts) => {
  let counterForProductList = 0;
  let table = document.getElementById('table');
  console.log('Gustav');
  console.log(listOfProducts[2]);
  for (let row = 0; row < listOfProducts.length; row++) {
    let tableRow = table.insertRow(-1);
    console.log('Row made');
    console.log(listOfProducts[row]);

    for (const [key, val] of Object.entries(listOfProducts[row])) {
      console.log('Cell made');
      console.log(val);
      if (key == '_id' || key == '__v') {
        continue;
      }
      let cell = tableRow.insertCell(-1);
      let text = document.createTextNode(`${key} = ${val}`);
      cell.appendChild(text);
    }
  }
};

async function start() {
  response = await fetch('http://localhost:3000/onlineLager');
  let searchJSON = await response.json();

  let containerDiv = document.getElementById('Gustav');

  for (let index = 0; index < searchJSON.length; index++) {
    console.log(searchJSON[index]);
    let p = document.createElement('p');
    let text = document.createTextNode(JSON.stringify(searchJSON[index]));

    p.appendChild(text);
    containerDiv.appendChild(p);
  }

  fillTable(searchJSON);
}

start();
