import react, { Component, Fragment } from "react";
import { Form, Input, Button, Row, Col, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Code from "../../components/code";
import { Register } from "../../api/account";
import CryptoJS from "crypto-js";

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            module: 'register'
        };
    }

    /**
     * 注册
     * @param {*} values 
     */
    onFinish = (values) => {
        values.password = CryptoJS.MD5(values.password).toString();
        Register(values).then(response => {
            message.success(response.data.message);
            if(response.data.resCode == 0) {
                this.toggleForm();
            }
        }).catch(error => {
            message.error(error.data.message);
        });
    }

     /**
     * 输入change事件
     * @param {*} e 
     */
    inputChange = (e) => {
        this.setState({
            username: e.target.value
        });
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
                        rules={[
                            { required: true, message: '请输入邮箱!', }, 
                            { type: 'email', message: '请输入正确的邮箱!',},
                    ]}
                    >
                        <Input onChange={this.inputChange} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!', },]}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码" />
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
                        
                                      return Promise.reject('两次密码不一致!');
                                    },
                                  }),
                            ]
                        }
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请再次输入密码" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={
                            [
                                { required: true, message: '请输入验证码!'},
                            ]
                        }
                    >
                        <Row gutter={6}>
                            <Col span={16}>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入验证码" />
                            </Col>
                            <Col span={8}>
                                <Code username={ this.state.username } module={this.state.module} />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>注册</Button>
                    </Form.Item>
                </Form>
                </div>
            </Fragment>
        )
    } 

}

export default RegisterForm;