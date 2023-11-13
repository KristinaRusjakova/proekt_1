var cartCount=document.getElementById("cart-count");
var count=0;

var addtocartbtn=document.getElementsByClassName("add-to-cart");

for(var i=0;i<addtocartbtn.length;i++){
    addtocartbtn[i].addEventListener("click",addtocart)
}

function addtocart(event){
    count++;
    cartCount.innerText=count;
}




