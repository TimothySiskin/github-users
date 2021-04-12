import React, { useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";

const Search = () => {
  //Local State
  const [user, setUser] = useState("");
  //Global Context
  const { requests, error } = React.useContext(GithubContext);

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
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
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

const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;

export default Search;
