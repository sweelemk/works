import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

export default class CommentList extends Component {
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

    getBody = (comments) => {
        if (!this.state.isOpen) return null;
        const commentElement = comments.map(comment => {
            return(
                <Comment comment={comment}/>
            )
        });
        return <div>
            {commentElement}
        </div>
    };

    render() {
        const { isOpen } = this.state;
        return(
            <div>
                <button onClick={this.toggleText}>
                    {
                        isOpen ? 'close' : 'open'
                    }
                </button>
                {
                    this.getBody(this.props.comments)
                }
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array
};