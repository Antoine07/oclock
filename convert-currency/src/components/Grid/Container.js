import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: .5rem;
`;

const Container = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Container;
