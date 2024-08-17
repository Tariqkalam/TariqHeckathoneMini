// setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyBCrREDaGV5f92sjvTLFe2b18SD6n7j9uA",
  authDomain: "heckathonemini.firebaseapp.com",
  projectId: "heckathonemini",
  storageBucket: "heckathonemini.appspot.com",
  messagingSenderId: "1025599380840",
  appId: "1:1025599380840:web:7cbb284f97dea439d6cadd"
  });
  
     const db = firebaseApp.firestore();
     const auth = firebaseApp.auth();
  
    //  sign up function
  const signUp  =() => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password);
  
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed Up 
      document.write("You are Signed Up");
      console.log(result);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
  }
  
  // Sign in function
  const signin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // firebase code 
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You are Signed in");
      console.log(result);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  }