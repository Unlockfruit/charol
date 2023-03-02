
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBf3LLuu2h8Jxbdq5EV-CXIEzCjAK627Kw",
      authDomain: "kwitter-4dbf7.firebaseapp.com",
      databaseURL: "https://kwitter-4dbf7-default-rtdb.firebaseio.com",
      projectId: "kwitter-4dbf7",
      storageBucket: "kwitter-4dbf7.appspot.com",
      messagingSenderId: "146677503267",
      appId: "1:146677503267:web:2d2a22e63be9d758566896"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


room_name = localStorage.getItem("Roomname");
user_name = localStorage.getItem("Username");

console.log("room name "+room_name);
console.log("user name "+user_name);

function logout() {
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location.replace("index.html");
}
function send() {
      msg = document.getElementById("msg").value;
      console.log("Message "+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
  
//End code
  } });  }); }
getData();
