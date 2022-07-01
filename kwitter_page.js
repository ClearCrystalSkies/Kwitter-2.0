//YOUR FIREBASE LINKS
var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("User name");
room_name = localStorage.getItem("Room Name");

function getData() { firebase.database().ref("/"+room_name).on('value',
function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
{ childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value=" + like+"onclick='UpdateLike(this.id)' ></button>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }

function UpdateLike(message_id){
      console.log("clicked on button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedLikes = Number(likes) + 1;
      console.log(updatedLikes);

      firebase.database().ref(room_name).child(message_id).update({
            likes: updatedLikes
      });
}
getData();
function logOut(){
      localStorage.removeItem("Room Name");
      localStorage.removeItem("User name");
      window.location = "index.html";
}
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value = "";
}