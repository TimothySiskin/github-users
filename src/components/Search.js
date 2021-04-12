import React, { useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";

const Search = () => {
  //Local State
  const [user, setUser] = useState("");
  //Global Context
  const handleSubmit = (e) => {
    //placeholder code
    console.log(e);
  };
  return (
    <section className="section">
      <Wrapper className="section-center">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input type="text" placeholder="enter github user" />
            <button type="submit">search</button>
          </div>
        </form>
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
