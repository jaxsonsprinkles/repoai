export default function parseGithubUrl(url) {
  const regex = /github\.com\/([^\/]+)\/([^\/]+)(?:\/([^\/]+))?\/?/;
  const match = url.match(regex);

  if (match[1] == "repos") {
    match.splice(1, 1);
  }

  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/, ""),
  };
}
