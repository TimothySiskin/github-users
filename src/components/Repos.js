import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  const reposArr = repos.mockRepos;
  console.log(reposArr);
  return (
    <section className="section">
      <Wrapper className="section-center">
        <ExampleChart />;
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 2rem;
`;

export default Repos;
