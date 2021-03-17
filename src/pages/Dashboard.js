import React from "react";
import { Info, Navbar, Repos, Search, User } from "../components";

const Dashboard = () => {
  return (
    <main>
      <h2>Dashboard</h2>
      <Navbar />
      <Repos />
      <User />
      <Search />
      <Info />
    </main>
  );
};

export default Dashboard;
