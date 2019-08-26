import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../Repos/Repos";
import GithubContext from "../../context/github/githubContext";
const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, getUserRepos, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    hireable,
    login,
    avatar_url,
    html_url,
    bio,
    compagny,
    website,
    followers,
    following,
    public_gists,
    public_repos,
    location
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-default">
        Back to Search
      </Link>
      hireable:{""}
      {hireable ? <i className="fas fa-" /> : <i className="fas " />}
      <div className="card grid-2">
        <div>
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: "250px" }}
            alt=""
          />
          <h3>{name}</h3>
          <h4>{location}</h4>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h4>Bio</h4>
              <p>{bio}</p>
            </Fragment>
          )}
          <div>
            <a href={html_url} className="btn btn-dark">
              Visite Github Profile
            </a>
          </div>
          Username:{login}
          <br />
          {compagny && <Fragment>compagny:{compagny}</Fragment>}
          {website && <Fragment>website:{website}</Fragment>}
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-danger">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public_Gist: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
