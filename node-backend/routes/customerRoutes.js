const express = require("express");
const customerController = require("../controllers/customerController");

const router = express.Router();

router
  .route("/")
  .get(customerController.getAllCustomer)
  .post(customerController.createPizza);

router
  .route("/:id")
  .get(customerController.getCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;
