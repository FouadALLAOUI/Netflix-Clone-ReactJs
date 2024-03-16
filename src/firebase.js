import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDK2Lo4FIDIpml2biCAay0UELJgScOv24E",
    authDomain: "netflix-clone-project-fc42e.firebaseapp.com",
    projectId: "netflix-clone-project-fc42e",
    storageBucket: "netflix-clone-project-fc42e.appspot.com",
    messagingSenderId: "689748593836",
    appId: "1:689748593836:web:12f1ac8b5c54407a67a309"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;


