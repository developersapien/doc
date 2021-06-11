import { Router } from "express";
import { configureBucketCors } from "../controller/storage.controller";
const router = Router();
router.get("/storage/logo", (req, res) => {
  res.send("ssa");
});

router.get("/storage/meta", configureBucketCors);

export { router as storageRouter };
