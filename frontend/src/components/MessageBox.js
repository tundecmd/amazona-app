import React from 'react'

const MessageBox = (props) => {
    return (
        <div className={`alert alert-${props.variant} || 'info'git`}>
            {props.children}
        </div>
    )
}

export default MessageBox;
