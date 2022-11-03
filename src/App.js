import { Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";

function App() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      
    </div>
  );
}

export default App;


/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0gQ30EkUKspwAjdOM4gQsE1Xgki5gOiw",
  authDomain: "fir-auth-9af82.firebaseapp.com",
  projectId: "fir-auth-9af82",
  storageBucket: "fir-auth-9af82.appspot.com",
  messagingSenderId: "384037070653",
  appId: "1:384037070653:web:92ccb6b9b04b69eb45c754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


*/