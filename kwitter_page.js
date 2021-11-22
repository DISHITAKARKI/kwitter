//YOUR FIREBASE LINKS
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
   user_name=localStorage.getItem("user_name")
   room_name=localStorage.getItem("room_name")
   function send(){
   msg= document.getElementById("msg").value 
   firebase.database().ref(room_name).push({
         name:user_name,
         messaing:msg,
         like:0
   });
   document.getElementById("msg").value="";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data ['name'] 
message = message_data ['messaging']
like = message_data ['like']
nametag ="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
messagtag="<h4 class='message_h4'>"+message+"</h4>"
liketag="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>"
spantag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>"
row=nametag+messagtag+liketag+spantag
document.getElementById("output").innerHTML+=row


//End code
      } });  }); }
getData();

function updatelike (messag_id){
      console.log("hi")
buttonid=messag_id
like=document.getElementById(buttonid).value 
update=Number(like)+1

firebase.database().ref(room_name).child(messag_id).update({
like:update
})
}

function logout(){

      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html"
      
      
      }