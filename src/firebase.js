import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBeqsl_l76uHvoqlqmEmlkP7oIQuEWTTB4",
  authDomain: "disney-plus-clone-af06f.firebaseapp.com",
  projectId: "disney-plus-clone-af06f",
  storageBucket: "disney-plus-clone-af06f.appspot.com",
  messagingSenderId: "58505216447",
  appId: "1:58505216447:web:3c238fce6058000499610a",
  measurementId: "G-H3DTB07TS1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
