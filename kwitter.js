function AddUser() {
    UserName = document.getElementById("UserName_Input").value;
    localStorage.setItem("UserName", UserName);
    window.location = "kwitter_room.html";
}
