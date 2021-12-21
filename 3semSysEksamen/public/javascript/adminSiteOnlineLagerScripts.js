const selector = document.getElementById('ID');



async function setSpinnerID () {

    let items = await fetch('http://localhost:3000/items');
    let jsonItems = await items.json();
 


for (let i = 0; i < jsonItems.allItemsInDb.length; i++) {
    
    let opt = document.createElement('option');
    opt.value = jsonItems.allItemsInDb[i]._id;
    opt.innerHTML = jsonItems.allItemsInDb[i].title;
    selector.appendChild(opt);
    
    
}

}

async function deleteItem() {
    let id = selector.value;
    let items = await fetch(`http://localhost:3000/deleteItem/${id}`);
   // let url = new URL('http://localhost:3000/adminSiteOnlineLager.html');
    //document.location = url;
    location.reload(true);
}
setSpinnerID();

 async function tableFromJson() {

    let items = await fetch('http://localhost:3000/items');
    let jsonItems = await items.json();
    // the json data. (you can change the values for output.)
    

    // Extract value from table header. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < jsonItems.allItemsInDb.length; i++) {
        for (var key in jsonItems.allItemsInDb[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Create a table.
    var table = document.createElement("table");

    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);                   // table row.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // add json data to the table as rows.
    for (var i = 0; i < jsonItems.allItemsInDb.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = jsonItems.allItemsInDb[i][col[j]];
        }
    }

    // Now, add the newly created table with json data, to a container.
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);

}























/*
async function tableCreate() {

    let items = await fetch('http://localhost:3000/items');
    let jsonItems = await items.json();
 
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
                         
    for (let i = 0; i <= jsonItems.allItemsInDb.length; i++) {
      const tr = tbl.insertRow();
                       
      for (let j = 0; j < Object.keys(jsonItems).length; j++) {
        if (i === 2 && j === 1) {
          break;
        } else {
          const td = tr.insertCell();
          td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
          td.style.border = '1px solid black';
          if (i === 1 && j === 1) {
            td.setAttribute('rowSpan', '2');
          }
        }
      }
    }
    body.appendChild(tbl);
  }
  
  tableCreate();
*/
