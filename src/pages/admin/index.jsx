import { useState } from "react";

import {
  Layout,
  theme,
  Typography,
  Table,
  Space,
  Button,
  Card,
  Tag,
  Breadcrumb,
} from "antd";
const { Content } = Layout;
const { Title, Text } = Typography;

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { IconPencil, IconTrash, IconPlus } from "@tabler/icons-react";

import { FooterComponent } from "@/components/ui";
import { NavbarComponent } from "@/components/Navbar";
import Image from "next/image";
import { DishModal } from "../../components/modals/DishModal";
import Link from "next/link";

const categories = {
  0: "Starters",
  1: "Saladas",
  2: "Main Dishses",
  3: "Beverages",
  4: "Deserts",
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (text) => (
      <Image
        style={{ objectFit: "cover" }}
        src={text}
        width={150}
        height={150}
        alt="img"
      />
    ),
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text) => <Tag color="magenta">{categories[text]}</Tag>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button
          type="text"
          icon={<EditOutlined />}
          shape="circle"
        />
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          shape="circle"
        />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "Zimon Timon",
    image:
      "https://images.unsplash.com/photo-1593545086735-abe33205bd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: 0,
    description:
      "Lorem Ipsum is leap into electronic typesetting, remaining essentially unchanged",
    price: 23,
  },
  {
    key: "2",
    name: "Jim Green",
    image:
      "https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: 1,
    description:
      "Lorem Ipsum is simply but also the leap into electronic typesetting, remaining essentially unchanged",
    price: 44,
  },
  {
    key: "3",
    name: "Leo Miranda",
    image:
      "https://images.pexels.com/photos/6310077/pexels-photo-6310077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 1,
    description:
      "Lorem Ipsum is simply but also Ipsum is simply but the leap into electronic typesetting, remaining essentially unchanged",
    price: 15,
  },
  {
    key: "4",
    name: "Joe Black",
    image:
      "https://images.pexels.com/photos/6310077/pexels-photo-6310077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 2,
    description:
      "Lorem Ipsum is simply but also Ipsum is simply but the leap into electronic typesetting, remaining essentially unchanged",
    price: 15,
  },
  {
    key: "5",
    name: "Michale Steph",
    image:
      "https://images.pexels.com/photos/3491211/pexels-photo-3491211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 3,
    description:
      "Lorem Ipsum is simply but also Ipsum is simply but the leap into electronic typesetting, remaining essentially unchanged",
    price: 15,
  },
];

const adminPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <NavbarComponent />
      <Content
        style={{
          padding: "0px 24px",
          borderRadius: "10px",
          width: "100vw",
        }}
      >
        <main
          style={{
            // paddingTop: '15px',
            display: "flex",
            flexDirection: "column",
            // alignItems: 'center',
          }}
        >
          <Breadcrumb
            separator=">"
            items={[
              {
                title: <Link href="/">Menu</Link>,
              },
              {
                title: <Text type="primary">Admin page</Text>,
              },
            ]}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // width: "100%",
            }}
          >
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                marginTop: "10px",
              }}
            >
              AdminPage
            </Title>

            <Card style={{ width: "auto" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "0px 0px 30px 0px",
                }}
              >
                {/* <Button type="primary" icon={<IconPlus stroke={2} size={20}/>}/> */}
                <Title
                  style={{ color: token.colorPrimary, margin: 0 }}
                  level={3}
                >
                  Dishes
                </Title>

                <Button onClick={showModal}>New dish</Button>
              </div>

              <Table
                size="small"
                columns={columns}
                dataSource={data}
                // style={{ width: "1100px" }}
                scroll={{ y: 400 }}
                // pagination={{ pageSize: 3 }}
              />
            </Card>
          </div>
        </main>

        <DishModal
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </Content>

      <FooterComponent />
    </Layout>
  );
};
export default adminPage;
