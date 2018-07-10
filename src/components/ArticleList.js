import React from 'react';
import Articles from './Articles';

export default function ArticleList ({articles}) {
    const articleElement = articles.map(article => <li><Articles article={article}/></li>);
    return(
        <ul>
            {articleElement}
        </ul>
    )
}