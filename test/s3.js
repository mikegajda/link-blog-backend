const {uploadPhotoToS3} = require("../dist/s3");
const assert = require('assert');

describe("s3", () => {
    uploadPhotoToS3("https://cdn.vox-cdn.com/thumbor/78eLaVQdVViXWGgISQcxhJEFm4Q=/0x0:2040x1360/1820x1213/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63835958/jbareham_170417_1617_0001.0.jpg")
});

