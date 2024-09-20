const multer = require('multer');
const { bucket } = require('../util/storage');
const { v4: uuidv4 } = require('uuid');
const HttpError = require('../models/http-error');
require('dotenv').config();

const bucketName = process.env.BUCKET_NAME;

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg'
};

const fileUpload = multer({
  limits: 5 * 1024 * 1024,
  storage: multer.memoryStorage(), // Store files in memory
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error('Invalid mime type!');
    cb(error, isValid);
  }
});

const uploadFileToGCS = async file => {
  if (!file) {
    throw new HttpError('No file provided', 400);
  }

  console.log('File found, trying to upload');
  const blob = bucket.file(`${uuidv4()}.${MIME_TYPE_MAP[file.mimetype]}`);
  const blobStream = blob.createWriteStream({
    resumable: false, // false Suitable for simpler scenarios where you don’t expect interruptions and want a straightforward upload process.
    gzip: true // true  Reduces the amount of data transferred and stored by compressing it, which can save on bandwidth and storage costs. Suitable for larger files where compression would be beneficial.
  });

  try {
    return new Promise((resolve, reject) => {
      blobStream.on('error', err => {
        console.log('Blob Stream Error', err);
        reject(
          new HttpError('Failed to upload file to Google Cloud Storage', 500)
        );
      });
      blobStream.on('finish', () => {
        console.log('Upload finished successfully');
        resolve(`https://storage.googleapis.com/${bucketName}/${blob.name}`);
      });
      blobStream.end(file.buffer); // Upload the file buffer
    });
  } catch (error) {
    throw new HttpError('Fileupload failed', 500);
  }
};

module.exports = { fileUpload, uploadFileToGCS };
