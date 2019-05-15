import * as path from "path";

const aws = require("aws-sdk");
const uuid = require('uuid');
require('dotenv').config();
const axios = require('axios')

const uploadPhotoToS3 = async (url: string) => {

    // Create unique bucket name
    let bucketName: string = "endeavor-mgajda-test-bucket";
    // Create name for uploaded object key
    let keyName: string = uuid.v4();

    let s3: any = new aws.S3({apiVersion: '2006-03-01'});

    // let pathToImage: string = "";
    //
    // let image: Buffer = fs.readFileSync(pathToImage);

    try {
        // Create a promise on S3 service object
        await s3.createBucket({Bucket: bucketName}).promise();
    } catch (e) {
        throw Error(e)
    }

    let response;
    try {
        response = await axios({
            method: "GET",
            url: url,
            responseType: 'arraybuffer'
        });
    } catch (e) {
        throw Error(e)
    }


    try {
        let objectParams = {
                ACL: "public-read",
                Bucket: bucketName,
                ContentType: response.contentType,
                Key: path.basename(url),
                Body: response.data
            }
        ;
        let s3response = await s3.putObject(objectParams).promise();
        console.log(s3response)
    } catch (e) {
        throw Error(e)
    }

};

module.exports = {uploadPhotoToS3};