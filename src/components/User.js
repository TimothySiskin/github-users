import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Followers from "./Followers";

const User = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card />
        <Followers />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
`;

export default User;
