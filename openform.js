function openForm() {
  document.getElementById("modalOne").style.display = "block";
}
function closeForm() {
  document.getElementById("modalOne").style.display = "none";
}
function changename(){
      var username = document.getElementById("name").value;
      var button = document.getElementById("button");
      button.value = username;
}
