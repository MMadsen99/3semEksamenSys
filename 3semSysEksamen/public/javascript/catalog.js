
const pris1 = document.getElementById("pris1");
const pris2 = document.getElementById("pris2");
const pris3 = document.getElementById("pris3");
const pris4 = document.getElementById("pris4");
const pris5 = document.getElementById("pris5");

const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const name3 = document.getElementById("name3");
const name4 = document.getElementById("name4");
const name5 = document.getElementById("name5");



async function addData(){
let items = await fetch('http://localhost:3000/items');
let jsonItems = await items.json();

name1.innerHTML = jsonItems.allItemsInDb[0].title;
name2.innerHTML = jsonItems.allItemsInDb[1].title;
name3.innerHTML = jsonItems.allItemsInDb[2].title;
name4.innerHTML = jsonItems.allItemsInDb[3].title;
name5.innerHTML = jsonItems.allItemsInDb[4].title;

pris1.innerHTML = jsonItems.allItemsInDb[0].price + " kr";
pris2.innerHTML = jsonItems.allItemsInDb[1].price + " kr";
pris3.innerHTML = jsonItems.allItemsInDb[2].price + " kr";
pris4.innerHTML = jsonItems.allItemsInDb[3].price + " kr";
pris5.innerHTML = jsonItems.allItemsInDb[4].price + " kr";


}

addData();