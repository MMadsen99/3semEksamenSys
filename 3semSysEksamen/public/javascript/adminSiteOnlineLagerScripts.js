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
    location.reload(true);
}
setSpinnerID();

 async function tableFromJson() {
    //json data. 
    let items = await fetch('http://localhost:3000/items');
    let jsonItems = await items.json();
   
    

    // Extract value from table header. 
    // ('title', 'material', 'Category' and 'Price' osv)
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
