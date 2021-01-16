import React, { Component } from "react";
import { connect } from "react-redux";
import { Select } from "antd";

const { Option } = Select;
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Select style={{ width: 120 }}>
        {
          this.props.status.map(item => {
            return <Option key={item.value} value={item.value}>{item.label}</Option>
          })
        }
      </Select>
    )
  }
}

// 将state映射到组件的props
function mapStateToProps(state) {
  return {
    status: state.global.status,
  };
}

// 将action映射到组件的props
function mapDispatchToProps(dispatch) {
  return {};
}

// 传入上面两个函数参数，将Counter组件变为App组件
export default connect(mapStateToProps, mapDispatchToProps)(User);
