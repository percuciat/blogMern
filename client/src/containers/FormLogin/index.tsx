import React, {useState} from 'react';
import {Row, Col, Button, Form, Input, Checkbox, Tabs } from "antd";

const FormLogin = (props: any) => {
    const [formType, setFormType] = useState('login');
    const onFinish = () => {
        if (formType === 'login') {

        } else {

        }
    };

    const onFinishFailed = () => {

    };

    function switchFormType(key) {
        setFormType(key)
    }

    return (
        <Row justify="center">
            <Col span={16}>
                <Tabs defaultActiveKey="1" onChange={switchFormType}>
                    <Tabs.TabPane tab="Login" key="login" />
                    <Tabs.TabPane tab="Register" key="register" />
                </Tabs>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {formType === 'register' && <Form.Item
                      label="Confirm password"
                      name="confirm_password"
                      rules={[
                          {
                              required: true,
                              message: 'Please confirm your password!',
                          },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>}

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default FormLogin;