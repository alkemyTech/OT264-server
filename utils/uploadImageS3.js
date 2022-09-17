const { uploadLocalObject } = require('./awsSdkS3');

async function uploadImages(file) {
  const uploadFile = await uploadLocalObject(file);
  return uploadFile;
}

module.exports = uploadImages;
