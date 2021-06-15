const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, "A customer must have a name"],
    unique: true,
    trim: true,
  },
  phoneNo: {
    type: String,
    required: [true, "Customer must have a phone number"],
    trim: true,
    unique: true,
  },
  pizzaName: {
    type: String,
    required: [true, "A pizza must have a name"],
    trim: true,
    enum: {
      values: [
        "Fajita Large",
        "Fajita Regular",
        "Chicken Tikka Large",
        "Supreme Extra Cheese Large",
        "Mashroom Olives Regular",
        "Lasagne Mashroom Small",
        "Chicken Tikka Cheese Large",
      ],
      message:
        "We only have following Pizza Flavors: Fajita Large, Fajita Regular, Chicken Tikka Large, Supreme Extra Chees Large, Mashroom Olives Regular, Lasagne Mashroom Small, Chicken Tikka Cheese Large",
    },
  },
  salad: {
    type: String,
    default: "NO",
    trim: true,
    enum: {
      values: ["Large", "Small", "No", "NO"],
      message: "Salad could either be Large, Small or No",
    },
  },
  coldDrink: {
    type: String,
    required: [true, "Customer must choose a cold drink"],
    trim: true,
    enum: {
      values: [
        "Pepsi Pitcher",
        "7up Regular",
        "Fanta Pitcher",
        "7up Pitcher",
        "DEW Can",
        "Pepsi Regular",
      ],
      message:
        "We only have following ColdDrinks available: Pepsi Pitcher, 7up Regular, Fanta Pitcher, 7up Pitcher, DEW Can, Pepsi Regular",
    },
  },
  govtTax: {
    type: Number,
    required: [true, "Tax must be included."],
    default: 80,
  },
  total: {
    type: Number,
    required: [true, "Total price must be there."],
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
