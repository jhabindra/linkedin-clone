import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCctCNb7FL_ljFv_NWjGxW8wsKIdvrhfuU",
  authDomain: "linkedin-clone-20aae.firebaseapp.com",
  projectId: "linkedin-clone-20aae",
  storageBucket: "linkedin-clone-20aae.appspot.com",
  messagingSenderId: "103990525437",
  appId: "1:103990525437:web:a785f6a1ac4cd5b557ad94",
  measurementId: "G-CLQ6KVEF4L",
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);

const db = fireBaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
