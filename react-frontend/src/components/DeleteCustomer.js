import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import swal from "sweetalert";
const axios = require("axios").default;

export const DeleteCustomer = () => {
  const [error, setError] = useState();

  const deleteByPhone = async (values) => {
    if (!values.phoneNo) {
      setError(true);
    } else {
      let response;

      try {
        response = await axios.delete(
          `http://localhost:8000/api/v1/${values.phoneNo}`
        );

        console.log(response);

        if (response) {
          swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover customer with that phone number!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              swal("Poof! Customer has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Customer data is safe!");
            }
          });
        }
        form.resetFields();
        setError(false);
      } catch (err) {
        setError(true);
      }
    }
  };

  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        layout="inline"
        name="nest-messages"
        onFinish={deleteByPhone}
      >
        <Form.Item name="phoneNo" label="Delete By Phone No">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Delete By Phone No
          </Button>
        </Form.Item>
      </Form>

      <br />
      {error ? "No customer found with that phone number." : null}
    </>
  );
};
