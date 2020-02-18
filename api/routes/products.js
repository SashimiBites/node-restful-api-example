const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message : "handling GET reqest to /products"
    });
});

router.post("/", (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        message : "handling GET reqest to /products",
        createdProduct: product
    });
});

router.get("/:productId", (req, res, next) => {
    const id = req.params.productId;
    if(id === "special") {
        res.status(200).json({
            message : "You discovered the special id",
            id : id
        });
    } else {
        res.status(200).json({
            message : "You passed an id"
        });
    }
});

router.patch("/:productId", (req, res, next) => {
    res.status(200).json({
        message : "updated Product"
    });
});

router.delete("/:productId", (req, res, next) => {
    res.status(200).json({
        message : "deleted Product"
    });
});

module.exports = router;