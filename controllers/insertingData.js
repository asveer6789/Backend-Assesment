const { response } = require("express");
const asynchandler = require("express-async-handler");
const Customer = require("../models/customer"); 
const Order = require("../models/order"); 
const Product = require("../models/product"); 
const { Error } = require("mongoose");

const insertCustomer = asynchandler(async function(req, res) {
    const { Customer_Name, Customer_Email, Customer_Address } = req.body;  // corrected naming
    console.log("Name:", Customer_Name);
    console.log("Email:", Customer_Email);
    console.log("Address:", Customer_Address);  // corrected field name
    if (!Customer_Name || !Customer_Email || !Customer_Address) {
        console.log("Error");
        throw new Error("All fields are mandatory");
    } 
  
    const contact = await Customer.create({
        Customer_Name, 
        Customer_Email, 
        Customer_Address
    });
    console.log("Data Inserted");
    console.log(req.body);
    res.status(201).json(contact);
});


const insertProducts = asynchandler(async function(req, res) {
    const { Product_Name, Product_Category, Product_descriptions } = req.body;  // corrected naming
    console.log("Name:", Product_Name);
    console.log("Email:", Product_Category);
    console.log("Address:", Product_descriptions);  // corrected field name
    if (!Product_Name || !Product_Category || !Product_descriptions) {
        console.log("Error");
        throw new Error("All fields are mandatory");
    } 
  
    const items = await Product.create({
        Product_Name, 
        Product_Category, 
        Product_descriptions
    });
    console.log("Data Inserted");
    console.log(req.body);
    res.status(201).json(items);
});

const insertOrder = asynchandler(async function(req, res) {
    const { 
        Quantity_Sold, 
        Discount, 
        Shipping_Cost, 
        Payment_Method, 
        Product_ID, 
        Customer_ID, 
        Region 
    } = req.body;

    console.log("Quantity Sold:", Quantity_Sold);
    console.log("Discount:", Discount);
    console.log("Shipping Cost:", Shipping_Cost);
    console.log("Payment Method:", Payment_Method);
    console.log("Product ID:", Product_ID);
    console.log("Customer ID:", Customer_ID);
    console.log("Region:", Region);

    if (!Quantity_Sold || !Discount || !Shipping_Cost || !Payment_Method || !Product_ID || !Customer_ID || !Region) {
        console.log("Error: All fields are mandatory");
        throw new Error("All fields are mandatory");
    } 

    const order = await Order.create({
        Quantity_Sold, 
        Discount, 
        Shipping_Cost, 
        Payment_Method, 
        Product_ID, 
        Customer_ID, 
        Region
    });

    console.log("Data Inserted");
    console.log(req.body);
    res.status(201).json(order);
});

module.exports = {insertCustomer,insertProducts,insertOrder};