
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAipRb6GiIvUy7w4Dz7XdPXWswTw9a67ZA",
    authDomain: "notes-manager-app-b26c4.firebaseapp.com",
    projectId: "notes-manager-app-b26c4",
    storageBucket: "notes-manager-app-b26c4.appspot.com",
    messagingSenderId: "341415800655",
    appId: "1:341415800655:web:414597be7315ef90035f3a",
    measurementId: "G-XWRNVCQLJL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // const analytics = getAnalytics(app);
 
  export default app;