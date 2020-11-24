import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const formItemLayout = {
    labelCol: {
      span: 1,
    },
    wrapperCol: {
      span: 14,
    },
}

export default class CustomForm extends Component {

    handleFormSubmit = (event, requestType, articleID ) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content,
                })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            default:
                break
        }
        
    }

    render() {
        return (
            <>
              <Form {...formItemLayout} 
              onSubmitCapture={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
                <Form.Item label="Title">
                  <Input name="title" placeholder="Put a title here " />
                </Form.Item>
                <Form.Item label="Content" >
                  <Input name="content" placeholder="Enter some content "/>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                </Form.Item>
              </Form>
            </>
          );
    }
}

