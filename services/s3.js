const aws = require("aws-sdk");
const uuid = require('uuid');
require('dotenv').config();


const uploadPhotoToS3 = async (url) => {

    // Create unique bucket name
    let bucketName = process.env.s3Bucket;
    // Create name for uploaded object key
    let keyName = 'hello_world.txt';

    let s3 = new aws.S3({apiVersion: '2006-03-01'});

    try {
        // Create a promise on S3 service object
        await s3.createBucket({Bucket: bucketName}).promise();
    } catch (e) {
        throw Error(e)
    }

    try {
        let objectParams = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
        await s3.putObject(objectParams).promise();
    } catch (e) {
        throw Error(e)
    }


    // Handle promise fulfilled/rejected states
    // bucketPromise.then(
    //     function (data) {
    //         // Create params for putObject call
    //         var objectParams = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
    //         // Create object upload promise
    //         var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
    //         uploadPromise.then(
    //             function (data) {
    //                 console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
    //             });
    //     }).catch(
    //     function (err) {
    //         console.error(err, err.stack);
    //     });

};

module.exports = {uploadPhotoToS3};