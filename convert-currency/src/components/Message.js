import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const MessageInfo = styled.div`
  color : ${ props => props.primary ? "chocolate" : "tomato"}
`;

const Message = ({ message, type }) => {

    return (
        <>
            { type === "error" ? (
                <MessageInfo  >
                    {message}
                </MessageInfo>
            ) :
                <MessageInfo primary >
                    {message}
                </MessageInfo>
            }
        </>
    );
}

Message.propTypes = {
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    type: PropTypes.string
};

export default Message;