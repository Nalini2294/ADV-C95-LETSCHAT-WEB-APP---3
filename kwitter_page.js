//YOUR FIREBASE LINKS

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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code



//End code
      } });  }); }
getData();

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

function send()
{
  msg  = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name : user_name , 
        message : msg , 
        like : 0
  });
      document.getElementById("msg").value = "";
}

