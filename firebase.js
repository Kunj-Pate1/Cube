import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    //Enter your own Firebase API key here
 };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;
