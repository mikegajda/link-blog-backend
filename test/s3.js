const {uploadPhotoToS3} = require("../services/s3");
const assert = require('assert');

describe("s3", () => {
    uploadPhotoToS3("test")
});

