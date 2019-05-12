const metascraper = require('metascraper')([
    require('metascraper-image')(),
    require('metascraper-title')(),
    require('metascraper-date')(),
    require('metascraper-url')(),
    require('metascraper-description')(),
    require('metascraper-publisher')(),
    require('metascraper-author')(),
]);

const got = require("got");

async function getMetadata(targetUrl) {
    const {body: html, url} = await got(targetUrl);
    return await metascraper({html, url});
}

const getOpengraphMetadata = async (req, res, next) => {

    const {body: html, url} = await got(req.query.url);
    const metadata = await metascraper({html, url});

    req.opengraphMetadata = metadata;
    next();
};

module.exports = {getOpengraphMetadata};