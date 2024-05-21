const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
    {
        Customer_Name: {
            type: String,
            required: [true, "Please add date of sale"],
        },
        Customer_Email: {
            type: String,
            required: [true, "Please add quantity sold"],
        },
        Customer_Address: {
            type: String,
            required: [true, "Please add discount given"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Customer", customerSchema);
