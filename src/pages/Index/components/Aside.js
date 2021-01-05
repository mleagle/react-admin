import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import "./Aside.scss";

import Router from "../../../router";

const { SubMenu } = Menu;

class Aside extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    /**
     * 渲染Menu
     */
    renderMenu = ({title, key, path}) => {
        return <Menu.Item key={ key }> <Link to={ path }>{ title }</Link></Menu.Item>
    }

    /**
     * 渲染SubMenu
     */
    renderSubMenu = ({title, key, children}) => {
        return (
            <SubMenu key={ key } title={ title }>
                {
                   children && children.map(item => {
                        return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item);
                   })
                }
            </SubMenu>
        );
    }

    render() {
        return(
            <Fragment>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['home']} mode="inline">
                   {
                       Router && Router.map(item => {
                            return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item);
                       })
                   }
                </Menu>
            </Fragment>
        )
    }

}

export default Aside;