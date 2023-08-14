import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAEkXfCfx4WkzKiMZILmVqcWcdwkx6uBWw",
    authDomain: "my-personal-project-4c5ec.firebaseapp.com",
    projectId: "my-personal-project-4c5ec",
    storageBucket: "my-personal-project-4c5ec.appspot.com",
    messagingSenderId: "202486838031",
    appId: "1:202486838031:web:1b0db56bbfa3573fccc47a",
    measurementId: "G-1W3L4J7P16"
}

const fire = firebase.initializeApp(config);
export default fire;
