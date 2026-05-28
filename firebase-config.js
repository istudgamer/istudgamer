import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyDpKFic9NSYPcF_QC7v8vLEUjpN_1vHm3Q",
  authDomain: "istudgamer.firebaseapp.com",
  projectId: "istudgamer",
  storageBucket: "istudgamer.firebasestorage.app",
  messagingSenderId: "709071546048",
  appId: "1:709071546048:web:142ec11345ed277445af25"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
