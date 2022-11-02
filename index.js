// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  //Điền thông tin Firebase config của cá nhân vào đây
  apiKey : "AIzaSyDDHJ7d7sx1NNMXvbzkK57UObMNkwdjOq0" , 
  authDomain : "kc326-884a7.firebaseapp.com" , 
  databaseURL : "https://kc326-884a7-default-rtdb.asia-southeast1.firebasedatabase.app" , 
  projectId : "kc326-884a7" , 
  storageBucket : "kc326-884a7.appspot.com" , 
  messagingSenderId : "1007994113797" , 
  appId : "1:1007994113797:web:6554c95376966a6045b16c" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

send.addEventListener('click',(e) =>{ 
Sends();
});
read.addEventListener('click',(e) =>{ 
Getval();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'Number/'), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
