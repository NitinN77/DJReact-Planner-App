import React from 'react';
import { Route } from 'react-router-dom';
import ArticleDetail from './containers/ArticleDetailView';
import ArticleList from './containers/ArticleListView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList}/>
        <Route exact path='/:articleID' component={ArticleDetail}/>
    </div>
);

export default BaseRouter;