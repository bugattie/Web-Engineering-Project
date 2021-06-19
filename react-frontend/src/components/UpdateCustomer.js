import React, { useState } from "react";
import { UpdateForm } from "./UpdateForm";
import swal from "sweetalert";

import { Form, Input, Button } from "antd";
const axios = require("axios").default;

export const UpdateCustomer = () => {
  const [error, setError] = useState(false);
  const [isLoading, setisLoading] = useState();
  const [data, setData] = useState();

  const searchByPhone = async (values) => {
    setError(false);
    if (!values.phoneNo) {
      setError(true);
    } else {
      setisLoading(true);
      let response;
      try {
        response = await axios.get(
          `http://localhost:8000/api/v1/${values.phoneNo}`
        );
        setData(response.data.data.message);
        setisLoading(false);
      } catch (err) {
        setError(true);
      }
    }
  };

  const onUpdate = async (values) => {
    console.log(values.customerName);
    await axios.patch(`http://localhost:8000/api/v1/${data.phoneNo}`, {
      customerName: values.customerName,
      pizzaName: values.pizzaName,
      salad: values.salad,
      coldDrink: values.coldDrink,
      govtTax: Number(values.govtTax),
      total: Number(values.total),
    });

    swal({
      title: "Good job!",
      text: "Customer updated successfully..",
      icon: "success",
      button: "Aww yiss!",
    });

    setisLoading(undefined);
  };

  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        layout="inline"
        name="nest-messages"
        onFinish={searchByPhone}
      >
        <Form.Item name="phoneNo" label="Search By Phone No">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>

      <br />
      {isLoading && !error ? (
        "Loading..."
      ) : error ? (
        "No customer found with that phone number."
      ) : isLoading === false ? (
        <UpdateForm data={data} onUpdate={onUpdate} />
      ) : null}
    </>
  );
};
