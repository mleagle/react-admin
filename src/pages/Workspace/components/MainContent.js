import React, { Component } from 'react';
import ContentRouter from "@/components/ContentRouter";

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <ContentRouter />
  }
}

export default MainContent;
