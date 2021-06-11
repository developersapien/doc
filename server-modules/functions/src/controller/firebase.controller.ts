import firebase from "firebase/app";
import * as admin from "firebase-admin";
import "firebase/storage";
import firebaseConfig from "../config/config";
const serviceAccount = require("../../serviceKey/serviceKey.json");

class FirebaseController {
  static admin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: firebaseConfig.storageBucket,
  });
  static firebaseInit = firebase.initializeApp(firebaseConfig);
  static bucket = admin.storage().bucket();
}

export default FirebaseController;
