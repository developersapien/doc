import FirebaseController from "../controller/firebase.controller";

const getStorageImage = () => {
  return FirebaseController.bucket.file("/assets/images/logo.png").makePublic();
};

export { getStorageImage };
