

function navToOrderconfirmation () {
   var button = document.getElementById("click");
   let url = new URL('http://localhost:3000/orderConfirmation.html');
 
 button.addEventListener('click', function() { document.location = url; })};

 navToOrderconfirmation();
