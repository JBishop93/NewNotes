
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getFirestore, collection, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"



  const firebaseConfig = {
    apiKey: "AIzaSyCi7UIfOWx4qw1zfTpfnWX2q0hm71lXXZI",
    authDomain: "new-notes-9a890.firebaseapp.com",
    projectId: "new-notes-9a890",
    storageBucket: "new-notes-9a890.appspot.com",
    messagingSenderId: "289931776578",
    appId: "1:289931776578:web:e9c2a59e88e8e4761793db",
    measurementId: "G-313GJHMTZ8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  async function getNotes(db) {
    const notesCol = collection(db, "NewNotes");
    const noteSnapshot = await getDocs(notesCol);
    const noteList = noteSnapshot.docs.map((doc) => doc);
    return noteList;
  };

  const notes = getNotes(db).then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log(doc);
    });
  });