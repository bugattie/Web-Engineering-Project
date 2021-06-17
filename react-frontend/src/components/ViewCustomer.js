import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Form, Input, Button } from "antd";

const axios = require("axios").default;

export const ViewCustomer = () => {
  let id = 0;
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    setisLoading(true);

    const response = await axios.get("http://localhost:8000/api/v1");

    const data = response.data.data.customers.map((customer) => {
      id++;
      return {
        oid: id,
        customerName: customer.customerName,
        phoneNo: customer.phoneNo,
        pizzaName: customer.pizzaName,
        salad: customer.salad,
        coldDrink: customer.coldDrink,
        govtTax: customer.govtTax,
        total: customer.total,
      };
    });

    setDataSource(data);
    setisLoading(false);
    setError(false);
  };

  useEffect(() => fetchData(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const findByPhone = async (values) => {
    setisLoading(true);
    let response;

    try {
      response = await axios.get(
        `http://localhost:8000/api/v1/${values.phoneNo}`
      );
      const data = response.data.data.message;
      setDataSource([
        {
          oid: id,
          customerName: data.customerName,
          phoneNo: data.phoneNo,
          pizzaName: data.pizzaName,
          salad: data.salad,
          coldDrink: data.coldDrink,
          govtTax: data.govtTax,
          total: data.total,
        },
      ]);
      form.resetFields();
      setError(false);
      setisLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  const [form] = Form.useForm();

  const columns = [
    {
      title: "OID",
      dataIndex: "oid",
      key: "oid",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "name",
    },
    {
      title: "Phone No",
      dataIndex: "phoneNo",
      key: "phoneno",
    },
    {
      title: "Pizza Name",
      dataIndex: "pizzaName",
      key: "pizzaname",
    },
    {
      title: "Salad",
      dataIndex: "salad",
      key: "salad",
    },
    {
      title: "Cold Drink",
      dataIndex: "coldDrink",
      key: "colddrink",
    },
    {
      title: "Govt Tax",
      dataIndex: "govtTax",
      key: "tax",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];

  return (
    <>
      <Form
        form={form}
        layout="inline"
        name="nest-messages"
        onFinish={findByPhone}
      >
        <Form.Item name="phoneNo" label="Find By Phone No">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Find By Phone No
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={fetchData}>
            View All Customers
          </Button>
        </Form.Item>
      </Form>
      <br />

      {isLoading && !error ? (
        "Loading ..........."
      ) : error ? (
        "No customer found with that phone number."
      ) : (
        <Table dataSource={dataSource} columns={columns} />
      )}
    </>
  );
};
