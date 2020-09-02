import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 1.5em;
`;

const Grid = ({ children }) => {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

Grid.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Grid;