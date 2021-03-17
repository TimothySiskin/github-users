import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.github.com";

const GithubContext = React.createContext();

//Provider & Consumer, i need only Provider thanks to useContext hook.

const GithubProvider = ({ children }) => {
  return <GithubContext.Provider value={}>{children}</GithubContext.Provider>;
};

export { GithubContext, GithubProvider };
