import react, { Component } from "react";
import "./index.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            formType: 'login'
        };
    }

    toggleForm = (type) => {
        this.setState({
            formType: type
        });
    }

    render() {
        return (
            <div className="form-wrap">
                <div>
                    { 
                        this.state.formType === 'login' 
                        ? <LoginForm toggleForm={ this.toggleForm } /> 
                        : <RegisterForm toggleForm={ this.toggleForm } /> 
                    }
                </div>
            </div>
        )
    } 

}

export default Login;