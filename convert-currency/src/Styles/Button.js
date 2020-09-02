import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem 1rem;
  margin: 1rem 4rem;
  font-size: 1.8rem;
  background-color: #333344;
  border: none;
  border-radius: 0.35rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  a { 
      text-decoration : none; 
      color : #000; 
  }
  :hover {
    transform: scale(1.05);
  }
`;

export default Button;