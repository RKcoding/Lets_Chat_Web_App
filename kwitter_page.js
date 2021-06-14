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

user_name = localStorage.getItem("UserNameLoggedIn");
room_name = localStorage.getItem("Roomname");

function send() { 
      msg = document.getElementById("message_input").value; 
      firebase.database().ref(room_name).push({ name: user_name, message: msg, like: 0 }); 
      document.getElementById("message_input").value = ""; 
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
                document.getElementById("messages").innerHTML = "";
                snapshot.forEach(function (childSnapshot) {
                            childKey = childSnapshot.key;
                            childData = childSnapshot.val();
                            if (childKey != "purpose") {
                                firebase_message_id = childKey;
                                message_data = childData; //Start code
                                console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4>" + name + "</h4>";
                        message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
                        like_button = "<button class = 'btn btn-warning' id =" + firebase_message_id + " value =" + like + " onclick = 'updateLike(this.id)'>";
                        span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";

                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                                //End code } }); }); } getData();

function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({ like: updated_likes });
}
                                
function logOut() {
    localStorage.removeItem("User_Name_Logged_In");
     localStorage.removeItem("Roomname");
     window.location.replace("kwitter.html");

}