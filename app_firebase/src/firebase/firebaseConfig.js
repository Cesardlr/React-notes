import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration, desde la pagina de firebase
var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID

    // aQUI ESTOS DATOS ESTAN ENCRIPTADOS EN EL ARCHIVO .ENV.LOCAL Y SE ESTAN PASANDO PARA ACA
};


//   Esta infromacion deberia de ser personal y privada, por que solamente debe de ser tuya, entonces lo guardaremos dentro de otro archio llamado .env.local


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//   Aqui estamos guardando la base de datos de firebase en el db
const db = firebase.firestore();

//   Exportamos variable db
export default db;