
var firebaseConfig = {
      apiKey: "AIzaSyASiKU92WoOOsac-kGKl1IRc3o8Z-GoYro",
      authDomain: "fear-f3b72.firebaseapp.com",
      databaseURL: "https://fear-f3b72-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "fear-f3b72",
      storageBucket: "fear-f3b72.appspot.com",
      messagingSenderId: "107250097743",
      appId: "1:107250097743:web:075d664c6aa6fed51b943a"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
