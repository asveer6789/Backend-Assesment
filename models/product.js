const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        Product_Name: {
            type: String,
            required: [true, "Please add date of sale"],
        },
        Product_Category: {
            type: String,
            required: [true, "Please add quantity sold"],
        },
        Product_descriptions: {
            type: String,
            required: [true, "Please add discount given"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Product", ProductSchema);
