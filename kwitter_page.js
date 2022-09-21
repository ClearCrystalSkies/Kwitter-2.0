var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User Name");
room_name = localStorage.getItem("Room Name");
console.log("User Name : " + user_name);
console.log("Room Name : " + room_name);

function send() {
    message = document.getElementById("message_input").value;
    console.log("Message : " + message);
    firebase.database().ref(room_name).push({
        Message : message,
        Name : user_name,
        Likes : 0
    });
    document.getElementById("message_input").value ="";
}
function logOut(){
    localStorage.removeItem("User Name");
    localStorage.removeItem("Room Name");
    window.location ="index.html";
  }

