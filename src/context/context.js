import React, { useState, useEffect } from "react";
import axios from "axios";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";

const url = "https://api.github.com";

const GithubContext = React.createContext();

//Provider & Consumer, i need only Provider thanks to useContext hook.

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState({ mockUser });
  const [repos, setRepos] = useState({ mockRepos });
  const [followers, setFollowers] = useState({ mockFollowers });
  //request loading
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);
  //error
  const [error, setError] = useState({ show: false, msg: "" });
  //check rate
  const checkRequests = () => {
    axios(`${url}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "sorry, no more remaining requests");
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
  return (
    <GithubContext.Provider
      value={{ githubUser, repos, followers, requests, error }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
