import { useState } from 'react'
import { Button, Modal, Form, Input, Select } from 'antd'

export const DishModal = ({ isModalOpen, handleOk, handleCancel }) => {
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Modal 
        title="New Dish" 
        open={isModalOpen} 
        footer={[]}
        // onOk={handleOk} 
        onCancel={handleCancel}
        closable={false}
      >
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
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image Url"
            name="imageurl"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            // rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select
              defaultValue="starters"
              style={{ width: '100%' }}
              onChange={handleChange}
              options={[
                { value: 'starters', label: 'Starters' },
                { value: 'saladas', label: 'Saladas' },
                { value: 'main dishes', label: 'Main Dishes' },
                { value: 'beverages', label: 'Beverages' },
                { value: 'deserts', label: 'Deserts' },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item style={{textAlign: 'end'}} wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={handleCancel} htmlType="reset" style={{marginRight: '10px'}}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}