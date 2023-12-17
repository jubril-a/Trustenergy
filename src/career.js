import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import navigation from "./navigation";
import footer from "./footer";

"use strict";


// create reusable transporter object using the default SMTP transport


document.addEventListener('DOMContentLoaded', function(){
    navigation()
    footer()
})

document.getElementById('sendEmail').addEventListener('click', async () => {
    console.log("click")
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Additional request options
      });
  
      if (response.ok) {
        const result = await response.text();
        console.log(result);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
    }
  });


const firebaseConfig = {
  apiKey: "AIzaSyBCmEKdmXuqNxrVuQbD_n1ErqNXu2TpjUk",
  authDomain: "trustenergybackend.firebaseapp.com",
  projectId: "trustenergybackend",
  storageBucket: "trustenergybackend.appspot.com",
  messagingSenderId: "409188412513",
  appId: "1:409188412513:web:2ccc6584f5f43c5ac1ce20",
  measurementId: "G-M1K3N92ET8"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const storageRef = ref(storage);

// const cvRef = ref(storage, 'cv')

// uploadBytes(cvRef, file).then((snapshot) => {
//     console.log("Uploaded a file")
// })

const submitForm =()=>{
    const cvUpload = document.getElementById('cv')
    const role = document.getElementById('jobrole')
    console.log(cvUpload.files[0])
    console.log(role.value)
    const storage = getStorage();
    const storageRef = ref(storage, `${role.value}CV`);
    uploadBytes(storageRef, cvUpload.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
}

const upload = document.getElementById('upload')

upload.addEventListener('click', (e)=>{
   e.preventDefault()
   submitForm()
})