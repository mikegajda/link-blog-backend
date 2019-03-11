const express = require("express");
const {getOpengraphMetadata} = require("../middlewares/opengraph");

const apiRouter = express.Router();

apiRouter.get("/opengraph-metadata", getOpengraphMetadata, (req, res) => (
        res.json(req.opengraphMetadata)
    )
);

// apiRouter.get("/weatherForCoordinates", getWeatherForCoordinates, (req, res) => (
//         res.json(req.weather)
//     )
// );
//
// apiRouter.get("/places", getPlaces, (req, res) => (
//         res.json(req.suggestions)
//     )
// );
//
// apiRouter.get("/coordinates", getCoordinates, (req, res) => (
//         res.json(req.coordinates)
//     )
// );
//
// apiRouter.get("/reverseGeocode", reverseGeocode, (req, res) => (
//         res.json(req.geocode)
//     )
// );


module.exports = apiRouter;