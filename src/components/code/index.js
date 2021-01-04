import react, { Component } from "react";
import { Button, message } from 'antd';
import { GetSms } from "../../api/account";

//定时器
let timer = null;

//Class组件
class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            buttonDisabled: false,
            codeText: '获取验证码',
            username: '',
            module: props.module
        };
    }

    /**
     * 将要接受父组件传来的props
     * @param {*} param
     */
    componentWillReceiveProps({ username }) {
        this.setState({ username })
    }

    /**
     * 组件销毁前处理事件
     */
    componentWillUnmount() {
        //清除定时器
        clearInterval(timer);
    }

     /**
     * 倒计时
     */
    countDowm = () => {
        let second = 60;

        this.setState({
            loading: false,
            buttonDisabled: true,
            codeText: `${second}S`,
        })

        timer = setInterval(()=>{
            second--;

            if(second <= 0) {
                this.setState({
                    buttonDisabled: false,
                    codeText: '重新获取',
                });
                clearInterval(timer);
                return false;
            }

            this.setState({
                buttonDisabled: true,
                codeText: `${second}S`,
            })
        }, 1000);

    }

    /**
     * 获取验证码
     */
    getCode =() => {
        let username = this.state.username;
        if(!username) {
            message.warning('请输入用户名', 1);
            return;
        }

        this.setState({
            loading: true,
            codeText: '发送中'
        });

        let params = {
            username,
            module: this.state.module
        };

        GetSms(params).then(response => {
            if(response.data.resCode == 0) {
                message.success(response.data.message);
                this.countDowm();
            } else {
                this.setState({
                    loading: false,
                    buttonDisabled: false,
                    codeText: '重新获取'
                });
            }
        }).catch(error => {
            this.setState({
                loading: false,
                buttonDisabled: false,
                codeText: '重新获取'
            });
        });

    }

    render() {
        return <Button type="danger" disabled={this.state.buttonDisabled} loading={this.state.loading} onClick={this.getCode} block>{this.state.codeText}</Button>
    }

}

export default Code;