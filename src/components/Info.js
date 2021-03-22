import React from "react";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { GithubContext } from "../context/context";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const Info = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { publick_repos, followers, following, publick_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "Repos",
      value: publick_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "Gists",
      value: publick_gists,
      color: "yellow",
    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((element) => {
          return <p>element</p>;
        })}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  .icon {
    font-size: 1.5rem;
  }

  .pink {
    background: #ffe0f0;
    color: #da4a91;
  }
`;

export default Info;
