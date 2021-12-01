import { useState, useEffect } from 'react';
import { fetchReadme } from '@varandas/fetch-readme';
import { marked } from 'marked';

function RepoReadme({ projectData }) {
  const [repositoryReadme, setRepositoryReadme] = useState();

  const repoUser = projectData.repository
    .replace('https://github.com/', '')
    .split('/')[0];
  const repoName = projectData.repository
    .replace('https://github.com/', '')
    .split('/')[1];

  useEffect(() => {
    const fetchRepoReadme = async () => {
      const readme = await fetchReadme({
        username: repoUser,
        repository: repoName,
      });
      setRepositoryReadme(marked(readme));
    };

    fetchRepoReadme();
  }, [repoUser, repoName]);

  return (
    <>
      <div className="flex justify-between px-2">
        <h2 className="text-3xl font-thin">README</h2>
        <a
          href={`https://github.com/${repoUser}/${repoName}/edit/main/README.md`}
          rel="noreferrer"
          target="_blank"
        >
          Edit
        </a>
      </div>
      <div className="bg-gray-100 rounded p-10 min-h-screen">
        <div
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: repositoryReadme }}
        ></div>
      </div>
    </>
  );
}

export default RepoReadme;
