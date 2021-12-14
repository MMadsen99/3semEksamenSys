

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


/*
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('table').appendChild(table);





// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "ID";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Kategori";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Titel";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Antal";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "Materiale";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "Klima";


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');

for (let i = 0; i < jsonItems.allItemsInDb.length; i++) {
    
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.value = jsonItems.allItemsInDb[i]._id;
    row_2_data_1.innerHTML = jsonItems.allItemsInDb[i]._id;
    row_2_data_1.appendChild(row_2_data_1);
    
    }




let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "";

let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "";

let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "";

let row_2_data_5 = document.createElement('td');
row_2_data_5.innerHTML = "";

let row_2_data_6 = document.createElement('td');
row_2_data_6.innerHTML = "";





row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
row_2.appendChild(row_2_data_6);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);
*/
setSpinnerID();