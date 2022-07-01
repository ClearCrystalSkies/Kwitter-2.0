// Your web app's Firebase configuration
//var firebaseConfig = {
  //    apiKey: "AIzaSyA-_mL6p2pZwj6sdyCE2t-yJO4wLqEtT4c",
    //  authDomain: "kwitter-ed6e3.firebaseapp.com",
      //databaseURL: "https://kwitter-ed6e3-default-rtdb.asia-southeast1.firebasedatabase.app",
      //projectId: "kwitter-ed6e3",
     // storageBucket: "kwitter-ed6e3.appspot.com",
      //messagingSenderId: "618876624983",
   //   appId: "1:618876624983:web:9380de9898a27a71a0c312"
    //};
    // Initialize Firebase
var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name;
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name" 
      });
      localStorage.setItem("Room Name", room_name);
      window.location = "kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names: " + Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("Room Name", name);
      window.location = "kwitter_page.html"
}
function logOut(){
      localStorage.removeItem("Room Name");
      localStorage.removeItem("User name");
      window.location = "index.html";
}