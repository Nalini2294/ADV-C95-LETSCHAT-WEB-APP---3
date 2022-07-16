// Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCQx0VFgo5i_nAsV1H_NINtE-gqnOGH3Sk",
      authDomain: "chatprisha-a2de0.firebaseapp.com",
      databaseURL: "https://chatprisha-a2de0-default-rtdb.firebaseio.com",
      projectId: "chatprisha-a2de0",
      storageBucket: "chatprisha-a2de0.appspot.com",
      messagingSenderId: "432449944372",
      appId: "1:432449944372:web:a187ed6fae6938ee614361"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);



//ADD YOUR FIREBASE LINKS HERE

function addRoom() 
{
      room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
             
          console.log("Room name-"+ Room_names);
          row = "<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)'>#" +Room_names+ "</div><hr>"
          document.getElementById("output").innerHTML = row;

      //End code
      });});}
getData();

 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name" , name);
   window.location = "kwitter_page.html";
 }

