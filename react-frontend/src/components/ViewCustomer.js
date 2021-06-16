import React, { useEffect, useState } from "react";
import { Table } from "antd";

const axios = require("axios").default;

export const ViewCustomer = () => {
  let id = 0;
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setisLoading] = useState(false);

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
  };

  useEffect(() => fetchData(), []); // eslint-disable-line react-hooks/exhaustive-deps

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
      {isLoading ? (
        "Loading ..........."
      ) : (
        <Table dataSource={dataSource} columns={columns} />
      )}
    </>
  );
};
