import React from "react";
import { Info, Navbar, Repos, Search, User } from "../components";

const Dashboard = () => {
  return (
    <main>
      <h2>Dashboard</h2>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
