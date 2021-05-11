import React from "react";
import { Info, Navbar, Repos, Search, User } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const { loading } = React.useContext(GithubContext);
  if (loading) {
    return (
      <main>
        <Search />
        <img src={loadingImage} className="loading-img" alt="loading" />
      </main>
    );
  }

  return (
    <main>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
