import React, { Component } from 'react';
import ArticleList from './ArticleList';
import { articles, comments } from '../data/mockdata';
import CommentHelper from '../helpers/CommentHelper';

export default class App extends Component {
    render() {
        const article = CommentHelper(articles, comments);

        return (
            <ArticleList articles={article}/>

        )
    }
};