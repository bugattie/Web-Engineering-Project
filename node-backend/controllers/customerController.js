const Customer = require("../models/customerModel");
const factory = require("./handlerFactory");

exports.getAllCustomer = factory.getAll(Customer);
exports.getCustomer = factory.getOne(Customer);
exports.createPizza = factory.createOne(Customer);
exports.updateCustomer = factory.updateOne(Customer);
exports.deleteCustomer = factory.deleteOne(Customer);
