import React from "react";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";
import swal from "sweetalert";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const pizzaCategory = [
  { label: "Fajita Large", value: "Fajita Large" },
  { label: "Fajita Regular", value: "Fajita Regular" },
  { label: "Chicken Tikka Large", value: "Chicken Tikka Large" },
  { label: "Supreme Extra Cheese Large", value: "Supreme Extra Cheese Large" },
  { label: "Mashroom Olives Regular", value: "Mashroom Olives Regular" },
  { label: "Lasagne Mashroom Small", value: "Lasagne Mashroom Small" },
  { label: "Chicken Tikka Cheese Large", value: "Chicken Tikka Cheese Large" },
];

const saladCategory = [
  { label: "Large", value: "Large" },
  { label: "Small", value: "Small" },
  { label: "No", value: "No" },
];

const drinkCategory = [
  { label: "Pepsi Pitcher", value: "Pepsi Pitcher" },
  { label: "7up Regular", value: "7up Regular" },
  { label: "Fanta Pitcher", value: "Fanta Pitcher" },
  { label: "7up Pitcher", value: "7up Pitcher" },
  { label: "DEW Can", value: "DEW Can" },
  { label: "Pepsi Regular", value: "Pepsi Regular" },
];

export const CreateCustomer = () => {
  const onFinish = async (values) => {
    await axios.post("http://localhost:8000/api/v1", {
      customerName: values.customerName,
      phoneNo: values.phoneNo,
      pizzaName: values.pizzaName,
      salad: values.salad,
      coldDrink: values.coldDrink,
      govtTax: Number(values.govtTax),
      total: Number(values.total),
    });
    form.resetFields();

    swal({
      title: "Good job!",
      text: "Customer created successfully..",
      icon: "success",
      button: "Aww yiss!",
    });
  };

  const [form] = Form.useForm();
  return (
    <>
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="customerName"
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="phoneNo" label="Phone No" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="pizzaName"
          label="Pizza Name"
          rules={[{ required: true, message: "Pizza Name is required" }]}
        >
          <Select options={pizzaCategory} />
        </Form.Item>

        <Form.Item
          name="salad"
          label="Salad"
          rules={[{ required: true, message: "Salad is required" }]}
        >
          <Select options={saladCategory} />
        </Form.Item>

        <Form.Item
          name="coldDrink"
          label="Cold Drink"
          rules={[{ required: true, message: "Cold Drink is required" }]}
        >
          <Select options={drinkCategory} />
        </Form.Item>

        <Form.Item name="govtTax" label="Govt Tax" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="total" label="Total" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
