import Link from 'next/link';
import { FaEye, FaCodeBranch, FaStar } from 'react-icons/fa';

export const metadata = {
  title: 'My Github Repos',
};

const fetchRepos = async () => {
  const response = await fetch('https://api.github.com/users/hidayahapriliansyah/repos');

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await response.json();
  return repos;
};

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div>
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
