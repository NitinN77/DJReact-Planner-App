import React, { Component } from 'react'
import axios from 'axios';

import Articles from '../components/Article'
import CustomForm from '../components/Form';


export default class ArticleList extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data,
                });
            })
    }

    render() {
        return (
            <div>
                <Articles data={this.state.articles}/>
                <br />
                <h2>Create An Article</h2>
                <CustomForm 
                requestType="post"
                articleID={null}
                btnText="Create"
                author={localStorage.getItem('user')}/>
            </div>
        )
    }
}
