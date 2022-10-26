import styled from "styled-components";

const LoginDiv = styled.div`
  width: 300px;
  margin: 10rem auto;
  background-color: aqua;
  padding: 3rem;
`;
export const LoginButton = styled.button`
  padding: 1rem;
  border-radius: 10px;
  background-color: brown;
  cursor: pointer;
`;
export const LoginLabel = styled.label`
  display: inline-block;
  padding: 1rem 1rem;
  color: brown;
  font-weight: 900;
`;
export const Loginİnput = styled.input`
  display: inline-block;
  padding: 0.5rem;
  color: brown;
  font-weight: 900;
  border-radius: 10px;
  box-shadow: 3px  3px 10px red;
`;
export default LoginDiv;
