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