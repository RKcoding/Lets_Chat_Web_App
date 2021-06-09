User_Name_Logged_In = localStorage.getItem("UserNameLoggedIn");

document.getElementById("UserNameLoggedIn").innerHTML = "Welcome " + User_Name_Logged_In + "!";

function addRoom() {
    Room_name = document.getElementById("Roomname").value;

    firebase.database().ref("/").child(Room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("Roomname", Room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey =
                    childSnapshot.key;
                Room_names = childKey;
                //Start code
                Result = "<div class = 'room_name' id=" + Room_name + "onclick= 'redirectToRoomName(this.id)'>#" + Room_name + "</div><hr>"; 
                document.getElementById("output").innerHTML = Result
                //End code
            });
        });
}
getData();

function redirecttoroomname(name) {
    console.log(name);
    localStorage.setItem("Roomname", name);
    window.location = "kwitter.html";
}
