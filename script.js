function openMenu() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
function closeMenu() {
      document.getElementById("mySidenav").style.width = "0";
}

function likes(){
  const likebtn=document.getElementById("likeb");
  likebtn.addEventListener('click',function(){
  likebtn.classList.toggle('clicked');
  });
}

function thanks(){
  alert("Thank you for your feedback!");
}