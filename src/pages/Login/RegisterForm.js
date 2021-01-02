import react, { Component, Fragment } from "react";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {};
    }

    onFinish = (values) => {
        console.log(values);
    }

    toggleForm = ()=> {
        this.props.toggleForm('login');
    }

    render() {
        return (
            <Fragment>
                <div className="form-header">
                    <h4>注册</h4>
                    <span onClick={ this.toggleForm }>登录</span>
                </div>
                <div className="form-content">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!', }, ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!', },]}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
                    </Form.Item>
                    <Form.Item
                        name="repassword"
                        rules={
                            [
                                { required: true, message: '请输入密码!'},
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                      if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                      }
                        
                                      return Promise.reject('输入两次密码不一样!');
                                    },
                                  }),
                            ]
                        }
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="重复密码" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" className="login-form-button" block>注册</Button>
                    </Form.Item>
                </Form>
                </div>
            </Fragment>
        )
    } 

}

export default RegisterForm;