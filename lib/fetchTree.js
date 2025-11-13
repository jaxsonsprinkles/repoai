"use server";

import parseGithubUrl from "./parseGithubUrl";

export default async function fetchTree(l, b) {
  const headers = {
    Authorization: `token ${process.env.GITHUB_KEY}`,
  };
  const { owner, repo } = parseGithubUrl(l);
  const res1 = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/branches/${b}`,
    { headers }
  );
  if (!res1.ok) {
    throw new Error(
      `Failed to fetch branch: ${res1.status} ${res1.statusText}`
    );
  }
  const branchData = await res1.json();
  if (!branchData.commit) {
    throw new Error("Invalid branch data received");
  }
  const sha = branchData.commit.sha;
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/git/trees/${sha}?recursive=1`,
    { headers }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch tree: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
