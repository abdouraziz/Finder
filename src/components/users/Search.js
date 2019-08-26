import React, { useState, useContext } from "react";
import GithubContent from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const [text, setText] = useState("");
  const githubContent = useContext(GithubContent);
  const alertContext = useContext(AlertContext);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.showAlert("please enter a user", "ligth");
    } else {
      githubContent.searchUsers(text);
      setText("");
    }
  };
  const onChange = e => {
    setText(e.target.value);
  };
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search user ..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContent.users.length > 0 && (
        <button className="btn btn-block" onClick={githubContent.clearUsers}>
          clear
        </button>
      )}
    </div>
  );
};

export default Search;
