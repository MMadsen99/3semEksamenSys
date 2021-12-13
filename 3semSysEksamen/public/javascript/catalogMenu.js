const selector = document.getElementById('material');

async function setMaterialSpinner () {

    let items = await fetch('http://localhost:3000/items');
    let jsonItems = await items.json();
 


for (let i = 0; i < jsonItems.allItemsInDb.length; i++) {
    
    let opt = document.createElement('option');
    opt.value = jsonItems.allItemsInDb[i]._id;
    opt.innerHTML = jsonItems.allItemsInDb[i].material;
    selector.appendChild(opt);
    
}

}