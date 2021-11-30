import { useState, useEffect } from 'react';
import { fetchReadme } from '@varandas/fetch-readme';
import { marked } from 'marked';

function RepoReadme({ repoUrl }) {
  const [repositoryReadme, setRepositoryReadme] = useState();

  const repoUser = repoUrl.replace('https://github.com/', '').split('/')[0];
  const repoName = repoUrl.replace('https://github.com/', '').split('/')[1];

  useEffect(() => {
    const fetchRepoReadme = async () => {
      const readme = await fetchReadme({
        username: repoUser,
        repository: repoName,
      });

      setRepositoryReadme(marked(readme));
    };

    fetchRepoReadme();
  }, []);

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

// import { useState, useEffect } from 'react';

// import { marked } from 'marked';

// function RepoReadme({ repoUrl }) {
//   const [repositoryReadme, setRepositoryReadme] = useState();

//   const repoUser = repoUrl.replace('https://github.com/', '').split('/')[0];
//   const repoName = repoUrl.replace('https://github.com/', '').split('/')[1];

//   useEffect(() => {
//     // const response = fetch(
//     //   `https://raw.githubusercontent.com/${repoUser}/${repoName}/main/README.md`
//     // )
//     //   .then((response) => response.text())
//     //   .then((result) => setRepositoryReadme(marked(result)));
//     // WATCH GITHUB API TUTORIALS

//     const getRepo = async () => {
//       const response = await fetch(
//         'https://api.github.com/repos/nicolasg02/Project-Manager'
//       );
//       const data = await response.json();
//       console.log(data);
//     };
//   }, []);
//   return (
//     <div
//       className="prose lg:prose-xl"
//       dangerouslySetInnerHTML={{ __html: repositoryReadme }}
//     ></div>
//   );
// }

// export default RepoReadme;
