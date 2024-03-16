import { Button, Modal, Form, Input, Select, Divider, Typography } from "antd";
const { Title } = Typography;
export const DishModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Modal
        title={
          <Title
            level={4}
            style={{
              margin: "10px 0px",
            }}
          >
            New Dish
          </Title>
        }
        open={isModalOpen}
        footer={[]}
        // onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        width={520}
      >
        <Divider />

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Dish name"
            name="dishname"
            rules={[{ required: true, message: "Please input dish name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image Url"
            name="imageurl"
            rules={[{ required: true, message: "Please input image url" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please select category" }]}
            initialValue="starters"
          >
            <Select
              style={{ width: "100%" }}
              onChange={handleChange}
              options={[
                { value: "starters", label: "Starters" },
                { value: "salads", label: "Salads" },
                { value: "main dishes", label: "Main Dishes" },
                { value: "beverages", label: "Beverages" },
                { value: "deserts", label: "Deserts" },
              ]}
            ></Select>
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input description" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input price" }]}
          >
            <Input />
          </Form.Item>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              alignItems: "end",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <Button
              onClick={handleCancel}
              htmlType="reset"
              style={{ marginRight: "10px" }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};
