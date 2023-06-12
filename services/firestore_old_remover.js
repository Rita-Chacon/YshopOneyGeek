//Conexión a firebase

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js'

const firebaseConfig = {
    apiKey: "AIzaSyB5IiCOvUVeSICnDL_LRX7qyfX_Atk-V3k",
    authDomain: "YshopOney-573eb.firebaseapp.com",
    projectId: "YshopOney-573eb",
    storageBucket: "YshopOney-573eb.appspot.com",
    messagingSenderId: "912876753800",
    appId: "1:912876753800:web:3e2b328f83493439c2603d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

export async function insert(item){
    try{
        const response = await db.collection("YshopOney").add(item);
        return response;
    }catch(error){
        throw new Error(error);
    }
}