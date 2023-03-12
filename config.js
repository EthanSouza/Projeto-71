import firebase from "firebase";
require("@firebase/firestore");


  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyCLw0ecJ_082NMcGGFGxiEOuFOWU4LYjTw",
    authDomain: "projeto-71-a70e3.firebaseapp.com",
    projectId: "projeto-71-a70e3",
    storageBucket: "projeto-71-a70e3.appspot.com",
    messagingSenderId: "437987895669",
    appId: "1:437987895669:web:7b1f103346a437ca074b3c"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
