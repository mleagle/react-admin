import react, { Component, Fragment } from "react";
import { Form, Input, Button, Row, Col } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Login } from "../../api/account";
import Code from "../../components/code";

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            buttonDisabled: false,
            codeText: '获取验证码',
            username: ''
        };
    }

    /**
     * 登录
     * @param {*} values 
     */
    onFinish = (values) => {
        Login(values).then(response => {
            console.log("success", response)
        }).catch(error => {
            console.log("error", error)
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
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} onChange={this.inputChange} placeholder="邮箱" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!', },]}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
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
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="验证码" />
                            </Col>
                            <Col span={8}>
                                <Code username={ this.state.username } />
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