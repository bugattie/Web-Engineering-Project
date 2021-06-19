import React from "react";
import { Form, Input, Button, Select } from "antd";

export const UpdateForm = ({ data, onUpdate }) => {
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 8 },
  };

  const pizzaCategory = [
    { label: "Fajita Large", value: "Fajita Large" },
    { label: "Fajita Regular", value: "Fajita Regular" },
    { label: "Chicken Tikka Large", value: "Chicken Tikka Large" },
    {
      label: "Supreme Extra Cheese Large",
      value: "Supreme Extra Cheese Large",
    },
    { label: "Mashroom Olives Regular", value: "Mashroom Olives Regular" },
    { label: "Lasagne Mashroom Small", value: "Lasagne Mashroom Small" },
    {
      label: "Chicken Tikka Cheese Large",
      value: "Chicken Tikka Cheese Large",
    },
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

  return (
    <>
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={onUpdate}
        initialValues={{
          customerName: data.customerName,
          pizzaName: data.pizzaName,
          salad: data.salad,
          coldDrink: data.coldDrink,
          govtTax: data.govtTax,
          total: data.total,
        }}
      >
        <Form.Item name="customerName" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="pizzaName" label="Pizza Name">
          <Select options={pizzaCategory} />
        </Form.Item>

        <Form.Item name="salad" label="Salad">
          <Select options={saladCategory} />
        </Form.Item>

        <Form.Item name="coldDrink" label="Cold Drink">
          <Select options={drinkCategory} />
        </Form.Item>

        <Form.Item name="govtTax" label="Govt Tax">
          <Input />
        </Form.Item>

        <Form.Item name="total" label="Total">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.labelCol, offset: 3 }}>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
