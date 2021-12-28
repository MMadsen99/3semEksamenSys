
 const pris =document.getElementById("pris");
 const information = document.getElementById("information");
 const potteName = document.getElementById("name");

 const buttonPrice = sessionStorage.getItem("price") + " kr.";
 document.getElementById("productPrice").innerHTML = buttonPrice; 

 const buttonName = sessionStorage.getItem("name");
 document.getElementById("productName").innerHTML = buttonName;  

 const buttonDescription = sessionStorage.getItem("description");
 document.getElementById("productDescription").innerHTML = buttonDescription;  