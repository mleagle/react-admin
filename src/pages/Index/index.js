import React, { Component } from "react";
import { Layout } from "antd";
import Aside from "./components/Aside";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';
import "./Layout.scss";

const { Header, Sider, Content } = Layout;

class Index extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return(
            <Layout className="layout-wrap">
                <Sider className="sider" width="250px" trigger={null} collapsible collapsed={this.state.collapsed}><Aside /></Sider>
                <Layout>
                    <Header className="layout-header">
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                    })}
                    </Header>
                    <Content className="layout-content">Content</Content>
                </Layout>
            </Layout>
        )
    }

}

export default Index;