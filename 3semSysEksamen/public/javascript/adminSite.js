
document.getElementById('btn_click').addEventListener('click', () => {
  document.location = 'http://localhost:3000/';
});

document.getElementById('deleteFromDB').addEventListener('click', () => {
  deleteFromDB()
});

async function deleteFromDB(){
  let id = document.getElementById('deletionField').value;
  let response = await fetch(`http://localhost:3000/onlineLager/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log(response)
 if (response.status==410) {
    alert(` ${response} has been deleted`)
 }
}


let button = document.getElementById('newCategoryButton');

button.addEventListener('click', addNewCategory);

function addNewCategory() {
  let categorySelect = document.getElementById('categories');

  let option = document.createElement('option');

  let newCategoryValue = document.getElementById('newCategory');

  option.text = newCategoryValue.value;
  
  categorySelect.add(option);
}

async function addProductToDB() {
  let product = JSON.stringify({
    productNameForm: document.getElementById('nameOnProduct').value,
    quantityForm: document.getElementById('quantity').value,
    materialForm: document.getElementById('material').value,
    klimaForm: document.getElementById('klimaSelection').value,
    categoriesForm: document.getElementById('categories').value,
  });

  console.log(product);

  let response = await fetch('http://localhost:3000/onlineLager', {
    method: 'POST',
    body: product,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
}
