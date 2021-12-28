
 const pris =document.getElementById("pris");
 const information = document.getElementById("information");
 const potteName = document.getElementById("name");
 //const button1 = document.getElementById("button1");


  function test(){

  /*
  let items = await fetch('http://localhost:3000/items');
    let jsonItems = await items.json();

    

    if(button1.onclick == true){
    potteName.innerHTML = jsonItems.allItemsInDb[0].title;
    information.innerHTML = jsonItems.allItemsInDb[0].description;
    pris.innerHTML = "Det virker";
    } */
 }

 test();

 const buttonPrice = sessionStorage.getItem("price") + " kr.";
 document.getElementById("productPrice").innerHTML = buttonPrice; 

 const buttonName = sessionStorage.getItem("name");
 document.getElementById("productName").innerHTML = buttonName;  

 const buttonDescription = sessionStorage.getItem("description");
 document.getElementById("productDescription").innerHTML = buttonDescription;  