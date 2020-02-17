const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message : "handling GET request to /orders"
    });
});

router.post("/", (req, res, next) => {
    res.status(200).json({
        message : "handling POST request to /orders"
    });
});

module.exports = router;