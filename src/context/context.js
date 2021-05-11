import React, { useState, useEffect } from "react";
import axios from "axios";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";

const url = "https://api.github.com";

const GithubContext = React.createContext();

//Provider & Consumer, i need only Provider thanks to useContext hook.

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  //request loading
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);
  //error
  const [error, setError] = useState({ show: false, msg: "" });

  //************************************************************************ */

  const searchGithubUser = async (user) => {
    toggleError();
    setLoading(true);
    const response = await axios(`${url}/users/${user}`).catch((err) => {
      console.log(err);
    });
    if (response) {
      setGithubUser(response.data);

      //repos
      const { login, followers_url } = response.data;

      await Promise.allSettled([
        axios(`${url}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((response) => {
          const [repos, followers] = response;
          const status = "fulfilled";
          if (repos.status === status) {
            setRepos(repos.value.data);
          }
          if (followers.status === status) {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      toggleError(true, "There is no user with that name!");
    }
    checkRequests();
    setLoading(false);
  };

  //check rate
  const checkRequests = () => {
    axios(`${url}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(
            true,
            "Sorry, no more remaining requests. Try again one hour later!"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //error
  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }
  //SideEffects
  useEffect(() => {
    checkRequests();
  }, []);

  //Rendering
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
