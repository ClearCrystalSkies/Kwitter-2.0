// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7I08K2qADN6RZWPdXx_ooGY2BbPlQjTg",
  authDomain: "kwitter2-d65c9.firebaseapp.com",
  databaseURL: "https://kwitter2-d65c9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kwitter2-d65c9",
  storageBucket: "kwitter2-d65c9.appspot.com",
  messagingSenderId: "955404575403",
  appId: "1:955404575403:web:69a78d8d3010989350cdee"
};
const app = initializeApp(firebaseConfig);

userName = localStorage.getItem("User Name");
document.getElementById("username_holder").innerHTML = " Welcome " + userName + " ! ";

function addRoom() {
  room_name = document.getElementById("room_name_input").value;
  console.log(room_name);
  localStorage.setItem("Room Name", room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name" 
  });
}
function getData(){
  firebase.database().ref("/").on('value',
  function(snapshot){
    document.getElementById("output").innerHTML ="";
    snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
      Room_names = childKey;
//Start code
row = "<div class='room_names' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+ "</div><hr>"
//End code
});
});
}
getData();
function redirectToRoomName(){
  localStorage.setItem("Current Room", Room_names);
  window.location = "kwitter.html"
}

// Initialize Firebase