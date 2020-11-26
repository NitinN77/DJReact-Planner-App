import React, { Component } from 'react'
import axios from 'axios';

import Articles from '../components/Article'
import CustomForm from '../components/Form';
import { Button } from 'antd';

export default class ArticleList extends Component {

    state = {
        articles: [],
        formactivated: false,
    }
    

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data.filter((article) => article.author === localStorage.getItem('user')),
                });
            })
    }

    handleClick = () => {
        this.setState({formactivated: !this.state.formactivated});
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>Add Task</Button>
                {
                    this.state.formactivated 
                    ?
                    <div>
                        <br />
                        <CustomForm 
                        requestType="post"
                        articleID={null}
                        btnText="Create"
                        author={localStorage.getItem('user')}/>
                    </div>
                    :
                    null
                }
                <br />
                <br />
                <Articles data={this.state.articles}/>
            </div>
        );
    }
}
