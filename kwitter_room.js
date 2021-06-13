var firebaseConfig = {
    apiKey: "AIzaSyDxl9ZGUWtjm0FUDiQdpF-pacuY63RcqGY",
    authDomain: "social-media-b9528.firebaseapp.com",
    databaseURL: "https://social-media-b9528-default-rtdb.firebaseio.com",
    projectId: "social-media-b9528",
    storageBucket: "social-media-b9528.appspot.com",
    messagingSenderId: "990573833228",
    appId: "1:990573833228:web:848556a105f355f4d2d229",
    measurementId: "G-MFNWLSTNXF"
};
firebase.initializeApp(firebaseConfig);

User_Name_Logged_In = localStorage.getItem("UserNameLoggedIn");

UserName = localStorage.getItem("UserName");

document.getElementById("UserNameLoggedIn").innerHTML = "Welcome " + UserName + "!";

function addroom() {
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
                Result = "<div class = 'room_name' id=" + Room_names + "onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
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

function logout() {
    window.location = "kwitter.html";
}
