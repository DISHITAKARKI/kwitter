
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDV1u3W0TbVETtiZSwMBxcz0IItSg5Q5G0",
      authDomain: "room-cb972.firebaseapp.com",
      databaseURL: "https://room-cb972-default-rtdb.firebaseio.com",
      projectId: "room-cb972",
      storageBucket: "room-cb972.appspot.com",
      messagingSenderId: "197699123556",
      appId: "1:197699123556:web:c1c29867aae4878ebca271",
      measurementId: "G-YTWMRCGVD8"
    };
    
   firebase.initializeApp(firebaseConfig)
    user_name= localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="WELCOME  "+user_name+"!"

    function addroom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name "
      });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html"
          }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name"+ Room_names);
      row= "<div class = 'room_name' id="+Room_names+"onclick='redrectToroomname(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redrectToroomname(name){
console.log("Hi");               
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"
}

function logout(){

localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location="index.html"


}
