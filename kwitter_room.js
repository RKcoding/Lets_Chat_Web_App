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


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = user_name;

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      room_names = childKey;
      row = "<div class = 'room_name' id = "+ room_names+" onclick = 'redirecttoroomname(this.id)'>#"+ room_names + "</div>"
      document.getElementById("output").innerHTML += row;
    })
  })
}
getData();
      function addRoom() {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
      }

      function redirecttoroomname(name) {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
      }

      function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
          window.location = "kwitter.html";
      }

     
