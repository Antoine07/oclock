import styled from "styled-components";

const Select = styled.select`
    padding: 0.5em;
    margin: 0.5em;
    color: #000;
    background: #64d8cb;
    border: 1px solid #00766c;
    border-radius: 3px;
    &:disabled {
        background-color : #27a69a;
    }
`;

export default Select;