import react, { Component, Fragment } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Login } from "../../api/account";

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {};
    }

    onFinish = (values) => {
        Login().then(response => {
            console.log("success", response)
        }).catch(error => {
            console.log("error", error)
        });
    }

    toggleForm = ()=> {
        this.props.toggleForm('register');
    }

    render() {
        return (
            <Fragment>
                <div className="form-header">
                    <h4>登录</h4>
                    <span onClick={this.toggleForm}>注册账号</span>
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
                        rules={[
                            { required: true, message: '请输入用户名!', }, 
                            { type: 'email', message: '请输入正确的邮箱!',},
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!', },]}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
                    </Form.Item>
                    <Form.Item>
                        <Row gutter={6}>
                            <Col span={16}>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="验证码" />
                            </Col>
                            <Col span={8}>
                                <Button type="danger" block>获取验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
                    </Form.Item>
                </Form>
                </div>
            </Fragment>
        )
    } 

}

export default LoginForm;