import React from 'react';
import PropTypes from 'prop-types';


export default function Comment(props) {
    return (
        <div>
            <div>{props.comment.text}</div>
            <div>{props.comment.user}</div>
        </div>
    )
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        user: PropTypes.string
    })
};