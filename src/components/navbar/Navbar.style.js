import styled from "styled-components";

const NavbarDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #aff0eb;
  flex-wrap: wrap;
  font-family: 'Lobster Two', cursive;
`;
export const NavbarUl = styled.ul`
  display: inline-block;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  margin-right: 2rem;
  gap: 2rem;
  list-style-type: none;
`;
export const NavbarLi = styled.li`
display: inline-block;
text-decoration: none;
font-size: 3rem;
list-style-type: none;
&:hover{
    background-color: black;
}
`;

export default NavbarDiv;
