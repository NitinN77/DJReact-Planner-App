import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

import './Layout.css'

const { Header, Content } = Layout;

class CustomLayout extends Component{
  render() {
    return(
      <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {this.props.isAuthenticated 
          ? 
          <Menu.Item key="1" onClick={this.props.logout}>Logout</Menu.Item>
          :
          <Menu.Item key="1"><Link to='/login'>Login</Link></Menu.Item>
          }
          <Menu.Item key="2"><Link to='/'>Tasks</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', height: '100vh'}}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/">Task List</Link></Breadcrumb.Item>
        </Breadcrumb>
          <div className="site-layout-content">
            {this.props.children}
          </div>
      </Content>
    </Layout>
    );
  }
  
}


const mapDispatchToProps = (dispatch) => {
  return {
   logout: () => dispatch(actions.logout())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));