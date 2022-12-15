import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyC8VVF5BMaeSfEXa94CnRYZ_thpMhlLzhQ",
  authDomain: "mock-test-jc.firebaseapp.com",
  projectId: "mock-test-jc",
  storageBucket: "mock-test-jc.appspot.com",
  messagingSenderId: "794008677439",
  appId: "1:794008677439:web:4a02ce18bc129bda3b5c8a",
  databaseURL:
    "https://mock-test-jc-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  return currentUser;
}

export function logOut() {
  return signOut(auth);
}

export function getDb() {
  return getDatabase(app);
}
