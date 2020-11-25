import React, { Component } from "react";
import { Form, Input, Button, Spin } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class NormalLoginForm extends Component {


  onFinish = values => {
    this.props.onAuth(values.username, values.password);
    this.props.history.push('/');
  };

  

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>
    }

    return (
      <div>
      {errorMessage}
      {
        this.props.loading ? 
        <Spin indicator={antIcon} />
        :
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "10px" }}
            >
              Submit
            </Button>
            Or
            <NavLink style={{ marginRight: "10px" }} to="/signup"> Sign Up
            </NavLink>
          </Form.Item>
        </Form>
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);