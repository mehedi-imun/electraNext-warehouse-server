// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAY8TBEvrkMOijHWQ1XYxK74gy6HJgdu0",
  authDomain: "electranext-6bbbe.firebaseapp.com",
  projectId: "electranext-6bbbe",
  storageBucket: "electranext-6bbbe.appspot.com",
  messagingSenderId: "43309937987",
  appId: "1:43309937987:web:8352930f98618a163eabf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth