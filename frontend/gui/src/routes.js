import React from 'react';
import { Route } from 'react-router-dom';
import ArticleDetail from './containers/ArticleDetailView';
import ArticleList from './containers/ArticleListView';
import Login from './containers/Login'
import Signup from './containers/Signup'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList}/>
        <Route exact path='/:articleID/' component={ArticleDetail}/>
        <Route exact path='/login/' component={Login}/>
        <Route exact path='/signup/' component={Signup}/>
    </div>
);

export default BaseRouter;