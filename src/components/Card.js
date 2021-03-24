import React from "react";
import { GithubContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser.mockUser;
  return (
    <>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || "no twitter"}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p>{bio}</p>
      <div>
        <p>
          <MdBusiness /> {company || "no company"}
        </p>
        <p>
          <MdLocationOn /> {location || "no location"}
        </p>
        <a href={`https://${blog}`}>
          <MdLink></MdLink>
          {blog || "no blog"}
        </a>
      </div>
    </>
  );
};

export default Card;
