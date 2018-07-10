import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentList from './CommentList';

export default class Articles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    };

    toggleText = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody = () => {
        if (!this.state.isOpen) return null;
        const { article } = this.props;
        return <div>
                {article.text}
                <CommentList comments={article.commentItems}/>
            </div>
    };

    render() {
        const { article } = this.props;
        const { isOpen } = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleText}>
                    {
                        isOpen ? 'close' : 'open'
                    }
                </button>
                {
                    this.getBody()
                }
            </div>
        )
    };
}

Articles.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};