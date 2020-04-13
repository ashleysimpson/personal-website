import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';

export default () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/ashleysimpson/repos?type=owner&sort=updated`
    )
      .then((res) => res.json())
      .then((repos) => {
        setRepos(repos);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Layout>
      <h1>Ashley Simpson</h1>
      <p>Here is some information about me!</p>
      <h2>Recently updated code projects:</h2>
      {repos.length === 0 ? (
        <div id="content">Loading...</div>
      ) : (
        <ul>
          {repos.map((repo) => (
            <li>
              <a href={repo.html_url}>{repo.name}</a>
              (⭐️{repo.stargazers_count})
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};
