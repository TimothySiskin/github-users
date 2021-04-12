import React, { useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";

const Search = () => {
  //Local State
  const [user, setUser] = useState("");
  //Global Context
  const { requests } = React.useContext(GithubContext);
  console.log(requests);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      //Fetch data
      //Empty user data
      setUser("");
    } else {
      //Error: empty form
    }
  };
  return (
    <section className="section">
      <Wrapper className="section-center">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter github user"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            {requests > 0 && <button type="submit">search</button>}
          </div>
        </form>
        <h3>Request : {requests} / 60</h3>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
`;

export default Search;
