import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK-s4TOAMxVkloUHidyuJAQnYjnhRuBSk",
  authDomain: "go-blog-react-hooks.firebaseapp.com",
  projectId: "go-blog-react-hooks",
  storageBucket: "go-blog-react-hooks.appspot.com",
  messagingSenderId: "724315895086",
  appId: "1:724315895086:web:0eac6ba53c841e1715b6bf",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
