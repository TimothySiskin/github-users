import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <h2>Navbar</h2>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export default Navbar;
