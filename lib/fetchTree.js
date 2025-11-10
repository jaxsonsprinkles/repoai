"use server";

export default async function fetchTree(l, b) {
  const headers = {
    Authorization: `token ${process.env.GITHUB_KEY}`,
  };
  const link = l.split("/");

  const owner = link[3];
  const repo = link[4];
  const res1 = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/branches/${b}`,
    { headers }
  );
  const branchData = await res1.json();
  const sha = branchData.commit.sha;
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/git/trees/${sha}?recursive=1`,
    { headers }
  );

  return response.json();
}
