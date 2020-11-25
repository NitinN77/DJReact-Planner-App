import React, { Component, useEffect } from 'react'
import axios from 'axios';

import { Card, Button } from 'antd';
import CustomForm from '../components/Form';

export default class ArticleDetail extends Component {

    state = {
        article: {},
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;

        axios.get(`http://127.0.0.1:8000/api/${articleID}/`)
            .then(res => {
                this.setState({
                    article: res.data,
                });
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidUpdate() {
        const articleID = this.props.match.params.articleID;

        axios.get(`http://127.0.0.1:8000/api/${articleID}/`)
            .then(res => {
                this.setState({
                    article: res.data,
                });
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleDelete = (event) => {

        const articleID = this.props.match.params.articleID;

        axios.delete(`http://127.0.0.1:8000/api/${articleID}/`);
        this.props.history.push('/');

    }

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <br />
                <CustomForm 
                requestType="put"
                articleID={this.props.match.params.articleID}
                btnText="Update"/>
                <form onSubmitCapture={this.handleDelete}>
                    <Button htmlType="submit" type="danger">Delete</Button>
                </form>
            </div>
        )
    }
}
