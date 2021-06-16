import { useState } from "react";

import { ViewCustomer } from "./components/ViewCustomer";
import { CreateCustomer } from "./components/CreateCustomer";
import { UpdateCustomer } from "./components/UpdateCustomer";
import { DeleteCustomer } from "./components/DeleteCustomer";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  TeamOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";

import "./App.css";

const { Content, Footer, Sider } = Layout;

function App() {
  const list = [
    "View Customer",
    "Create Customer",
    "Update Customer",
    "Delete Customer",
  ];

  const [menuNumber, changeMenuNumber] = useState(1);

  const menuClick = (index) => {
    changeMenuNumber(index);
  };

  return (
    <>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo-container">
            <div className="logo">Pizza Hut</div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            {list.map((item, i) => (
              <Menu.Item
                key={i}
                icon={
                  i === 0 ? (
                    <TeamOutlined />
                  ) : i === 1 ? (
                    <PlusSquareOutlined />
                  ) : i === 2 ? (
                    <EditOutlined />
                  ) : (
                    <DeleteOutlined />
                  )
                }
                onClick={() => menuClick(i + 1)}
              >
                {item}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Pizza Hut</Breadcrumb.Item>
              <Breadcrumb.Item>
                {menuNumber === 1
                  ? "Our Customers"
                  : menuNumber === 2
                  ? "Create Customer"
                  : menuNumber === 3
                  ? "Update Customer"
                  : "Delete Customer"}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              {menuNumber === 1 ? (
                <ViewCustomer />
              ) : menuNumber === 2 ? (
                <CreateCustomer />
              ) : menuNumber === 3 ? (
                <UpdateCustomer />
              ) : (
                <DeleteCustomer />
              )}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            &copy; Web Engineering Semester Project | Pizza Hut
          </Footer>
        </Layout>
      </Layout>
      ,
    </>
  );
}

export default App;
