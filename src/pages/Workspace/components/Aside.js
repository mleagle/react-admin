import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from 'antd';
import "./Aside.scss";

import Router from "@/router";

const { SubMenu } = Menu;

class Aside extends Component {
    constructor() {
        super();
        this.state = {
            openKeys: [], //当前展开的 SubMenu 菜单项 key 数组
            selectedKeys: []  //当前选中的菜单项 key 数组
        };
    }

    /**
     * 组件渲染后执行
     */
    componentDidMount() {
        //获取路由
        var pathname = this.props.location.pathname;
        //获取当前所在的目录层级
        const rank = pathname.split('/');
        //rank = ["","policy-engine","nas-client"]
        switch (rank.length) {
            case 2:  //一级目录
                this.setState({
                    selectedKeys: [pathname]
                })
                break;
            case 4: //二级目录，要展开一个subMenu
                this.setState({
                    selectedKeys: [pathname],
                    openKeys: [rank.slice(0, 3).join('/')]
                })
                break;
            case 5: //三级目录，要展开两个subMenu
                this.setState({
                    selectedKeys: [pathname],
                    openKeys: [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
                })
                break; 
        }
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

    /**
     * 点击 MenuItem
     * @param {*} param0 
     */
    onMenuSelect = ({ item, key, keyPath, domEvent }) => {
        this.setState({
            selectedKeys: [key],
            openKeys: keyPath.slice(1)
        });
    }

    /**
     * 展开/关闭 触发
     */
    onOpenChange = (openKeys) => {
        this.setState({openKeys})
    }

    render() {
        return(
            <Fragment>
                <div className="logo" />
                <Menu theme="dark" 
                    onOpenChange={this.onOpenChange}
                    onClick={this.onMenuSelect}
                    selectedKeys={ this.state.selectedKeys } 
                    openKeys={ this.state.openKeys }
                    mode="inline"
                >
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

export default withRouter(Aside);