import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdjbRfK5GcbmA9BDViXw1SHfSl2zO6VmI",
  authDomain: "netfilx-2173e.firebaseapp.com",
  projectId: "netfilx-2173e",
  storageBucket: "netfilx-2173e.appspot.com",
  messagingSenderId: "1010444056979",
  appId: "1:1010444056979:web:29c35f2e4e77474cd1d066",
  measurementId: "G-JKEY773GZW",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
