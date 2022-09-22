require('dotenv').config();
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
const path = require('path');
// Set the region
AWS.config.update({ region: 'us-west-2' });
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const bucketName = process.env.AWS_BUCKET_NAME;

class AwsSdkS3 {
  static configBucket() {
    // corsConfiguration of the Bucket
    const config = {
      AllowedHeaders: ['Authorization'],
      AllowedMethods: ['POST', 'GET', 'PUT', 'DELETE'],
      AllowedOrigins: ['*'],
      ExposeHeaders: [],
      MaxAgeSeconds: 3000
    };

    const corsRules = new Array(config);

    const corsParams = { Bucket: bucketName, CORSConfiguration: { CORSRules: corsRules } };

    s3.putBucketCors(corsParams, function (err, data) {
      if (err) {
        // display error message
        console.log('Error', err);
        throw new Error(err.message);
      } else {
        // update the displayed CORS config for the selected bucket
        console.log('Success', data);
        return data;
      }
    });
  }

  static getConfig() {
    // Get cors configuration
    s3.getBucketCors({ Bucket: bucketName }, function (err, data) {
      if (err) {
        console.log('Error', err);
        throw new Error(err.message);
      } else if (data) {
        console.log('Success', JSON.stringify(data.CORSRules));
        return data.CORSRules;
      }
    });
  }

  static async uploadLocalObject(filePath) {
    var uploadParams = { Bucket: bucketName, Key: '', Body: '', ACL: 'public-read' };
    var file = filePath;

    // Configure the file stream and obtain the upload parameters
    var fs = require('fs');
    var fileStream = fs.createReadStream(file);
    fileStream.on('error', function (err) {
      console.log('File Error', err);
    });
    uploadParams.Body = fileStream;

    uploadParams.Key = path.basename(file);
    // call S3 to retrieve upload file to specified bucket
    try {
      const result = await s3.upload(uploadParams).promise();
      return result.Location;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  static uploadStream(fileName, stream) {
    const uploadParams = { Bucket: bucketName, Key: fileName, Body: stream };
    s3.upload(uploadParams, function (err, data) {
      if (err) {
        console.log('Error', err);
        throw new Error(err.message);
      }
      if (data) {
        console.log('Upload Success', data.Location);
        return data;
      }
    });
  }

  static listObjects() {
    // Call S3 to obtain a list of the objects in the bucket
    s3.listObjects({ Bucket: bucketName }, function (err, data) {
      if (err) {
        console.log('Error', err);
        throw new Error(err.message);
      } else {
        console.log('Success', data);
        return data;
      }
    });
  }

  static deleteObject(key) {
    s3.deleteObject({ Bucket: bucketName, Key: key }, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        throw new Error(err.message);
      } else {
        console.log(data);
        return data;
      }
    });
  }

  static async getObject(key) {
    s3.getObject({ Bucket: bucketName, Key: key }, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        throw new Error(err.message);
      } else {
        console.log(data);
        console.log(data.Body.toString('utf-8'));
        return data;
      }
    });
  }
}

module.exports = AwsSdkS3;
