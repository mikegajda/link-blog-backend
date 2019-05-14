import * as fs from "fs";
import * as path from "path";

const aws = require("aws-sdk");
const uuid = require('uuid');
require('dotenv').config();


const uploadPhotoToS3 = async (url: string) => {

    // Create unique bucket name
    let bucketName: string = uuid.v4();
    // Create name for uploaded object key
    let keyName: string = uuid.v4();

    let s3: any = new aws.S3({apiVersion: '2006-03-01'});

    let pathToImage: string = "/Users/mikegajda/LargeFiles/link-blog-backend/IMG_8612.JPG";

    let image: Buffer = fs.readFileSync(pathToImage);

    try {
        // Create a promise on S3 service object
        await s3.createBucket({Bucket: bucketName}).promise();
    } catch (e) {
        throw Error(e)
    }

    try {
        let objectParams = {
                ACL: "public-read",
                Bucket: bucketName,
                ContentType: "binary",
                Key: path.basename(pathToImage),
                Body: image
            }
        ;
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