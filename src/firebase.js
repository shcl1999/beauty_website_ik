// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8UtjAExIFCyivJ148TfM8BllQS_NMRsY",
  authDomain: "foot-massage-cupping.firebaseapp.com",
  projectId: "foot-massage-cupping",
  storageBucket: "foot-massage-cupping.appspot.com",
  messagingSenderId: "1011999035756",
  appId: "1:1011999035756:web:3b062cb294671bfd53e349",
  measurementId: "G-Q3N7SS6SDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;