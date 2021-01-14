import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import SecurityRouter from "../SecurityRouter";

import User from "@/pages/System/User";
import Dept from "@/pages/System/Dept";

//自动化工程
//第一个参数：目录
//第二个参数：是否查找子目录
//第三个参数：查找文件类型
const files = require.context("../../pages", true, /\.js$/);

const components = [];
files.keys().map(key => {
  if(key.toLowerCase().includes('./workspace/') || key.toLowerCase().includes('./login/')) {
    return false;
  }

  const splits = key.split('.');
  const pathTmp = splits[1].toLowerCase();
  
  let path = pathTmp;
  if(pathTmp.indexOf('/index') != -1) {
    let index = pathTmp.indexOf('/index');
    path = '/workspace' + pathTmp.substring(0, index);
  }

  const component = files(key).default;
  
  components.push({
    path: path,
    component: component
  });
});
class ContentRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <Switch>
          <SecurityRouter exact path="/workspace/system/user" component={User} />
          <SecurityRouter exact path="/workspace/system/dept" component={Dept} />
          {/* {
            components.map(item => {
                <SecurityRouter exact key={item.path} path={item.path} component={item.component} />
            })
          } */}
        </Switch>
    )
  }
}

export default ContentRouter;
