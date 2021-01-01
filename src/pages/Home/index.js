import React, {Component} from 'react';
import './index.scss'
import { Button } from "antd";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <a>home</a>
        <Button type="primary">按钮</Button>
      </div>
    )
  }
}

export default Home;