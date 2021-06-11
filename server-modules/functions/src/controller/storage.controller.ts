import { firebaseConfig } from "./../config/config";

import { Storage } from "@google-cloud/storage";

const bucketName = firebaseConfig.storageBucket;
const origin: string = "http://localhost:3002";
const responseHeader = "Content-Type";
const maxAgeSeconds = 3600;
const method = "GET";

const storage = new Storage();

async function configureBucketCors() {
  await storage.bucket(bucketName).setCorsConfiguration([
    {
      maxAgeSeconds: maxAgeSeconds,
      method: [method],
      origin: [origin],
      responseHeader: [responseHeader],
    },
  ]);
  console.log(`Bucket ${bucketName} was updated with a CORS config
      to allow ${method} requests from ${origin} sharing 
      ${responseHeader} responses across origins`);
}

async function getBucketMetadata() {
  const [metadata] = await storage.bucket(bucketName).getMetadata();

  for (const [key, value] of Object.entries(metadata)) {
    console.log(`${key}: ${value}`);
  }
}

export { configureBucketCors, getBucketMetadata };
