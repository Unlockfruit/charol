
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



user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });

      localStorage.setItem("Roomname",room_name);
  
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "index.html";
}