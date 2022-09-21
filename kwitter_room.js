//YOUR FIREBASE LINKS
var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" };
firebase.initializeApp(firebaseConfig);
function addRoom() {
  room_name = document.getElementById("room_name_input").value;
  console.log(room_name);
  localStorage.setItem("Room Name", room_name);

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name" 
  });
}
userName = localStorage.getItem("User Name");
document.getElementById("username_holder").innerHTML = " Welcome " + userName + " ! ";

function getData(){
  firebase.database().ref("/").on('value',
  function(snapshot){
    document.getElementById("output").innerHTML ="";
    snapshot.forEach(function(childSnapshot)
    {childKey = childSnapshot.key;
      Room_names = childKey;
      row = "<div class='room_names' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+ "</div><hr>"
});
});
}
getData();
function redirectToRoomName(){
  localStorage.setItem("Current Room", Room_names);
  window.location = "kwitter_page.html"
}
function logOut(){
  localStorage.removeItem("User Name");
  localStorage.removeItem("Room Name");
  window.location ="index.html";
}