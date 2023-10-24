import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBelUGZKSsObiO8k72SjdQr0ZnmDu5_6AE",
  authDomain: "reactrouterv2lt.firebaseapp.com",
  projectId: "reactrouterv2lt",
  storageBucket: "reactrouterv2lt.appspot.com",
  messagingSenderId: "680165448015",
  appId: "1:680165448015:web:8a406bd32bdfc6d2138d3a",
  measurementId: "G-3J3D57WTH1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
