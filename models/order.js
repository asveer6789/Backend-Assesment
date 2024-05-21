const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        Date_Of_Sale: {
            type: Date,
            default: Date.now,
        },
        Quantity_Sold: {
            type: Number,
            required: [true, "Please add quantity sold"],
        },
        Discount: {
            type: Number,
            required: [true, "Please add discount given"],
        },
        Shipping_Cost: {
            type: Number,
            required: [true, "Please add Shipping Cost"],
        },
        Payment_Method: {
            type: String, // Assuming payment method is a string like "Credit Card", "PayPal", etc.
            required: [true, "Please add Payment Method"],
        },
        Product_ID: {
            type: mongoose.Schema.Types.ObjectId, // Reference to another collection
            ref:'Product',
            required: [true, "Please add Product ID"],
        },
        Customer_ID: {
            type: mongoose.Schema.Types.ObjectId, // Reference to another collection
            ref:'Customer',
            required: [true, "Please add Product ID"],
        },
        Region: {
            type: String,
            required: [true, "Please add Region"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Order", orderSchema);
