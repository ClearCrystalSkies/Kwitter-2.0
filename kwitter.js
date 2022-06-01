function addUser(){
    User_name = document.getElementById("user_name").value;
    localStorage.setItem("User Name", User_name);
    window.location = "kwitter_room.html";
}