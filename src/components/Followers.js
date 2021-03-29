import React from "react";
import { GithubContext } from "../context/context";

const Followers = () => {
  const { followers } = React.useContext(GithubContext);
  const followersArr = followers.mockFollowers;
  console.log(followersArr);
  return (
    <div className="followers">
      {followersArr.map((follower, index) => {
        const { avatar_url: img, html_url, login } = follower;
        return (
          <article key={index}>
            <img src={img} alt={login} />
            <div>
              <h4>{login}</h4>
            </div>
            <a href={html_url}>{html_url}</a>
          </article>
        );
      })}
    </div>
  );
};

export default Followers;
