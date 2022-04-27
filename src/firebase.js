import { firebase } from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDK-s4TOAMxVkloUHidyuJAQnYjnhRuBSk",
  authDomain: "go-blog-react-hooks.firebaseapp.com",
  projectId: "go-blog-react-hooks",
  storageBucket: "go-blog-react-hooks.appspot.com",
  messagingSenderId: "724315895086",
  appId: "1:724315895086:web:0eac6ba53c841e1715b6bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
