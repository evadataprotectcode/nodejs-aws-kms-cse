'use strict';

const Download = require('./download');
const Upload = require('./upload');


exports.upload = async function (filePath, bucketName, s3Key, cseKeyArn) {
  return Upload.upload(filePath, bucketName, s3Key, cseKeyArn);
};

exports.download = async function(filePath, bucketName, s3Key, cseKeyArn) {
  return Download.download(filePath, bucketName, s3Key, cseKeyArn);
};
