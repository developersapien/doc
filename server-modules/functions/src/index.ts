import * as functions from "firebase-functions";
import * as express from "express";
import { storageRouter } from "./routes/storage.routes";
import * as cors from "cors";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();
app.use(cors({ origin: true }));
app.use("/v1", storageRouter);
exports.api = functions.https.onRequest(app);
