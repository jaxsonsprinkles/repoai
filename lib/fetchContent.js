"use server";

import parseGithubUrl from "./parseGithubUrl";

export default async function fetchContents(l, p) {
  const headers = {
    Authorization: `token ${process.env.GITHUB_KEY}`,
  };

  const { owner, repo } = parseGithubUrl(l);
  const content = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${p}`,
    { headers }
  );
  if (!content.ok) {
    throw new Error(
      `Failed to fetch file content: ${content.status} ${content.statusText}`
    );
  }

  const json = await content.json();
  if (!json.content) {
    throw new Error("File content not available");
  }
  const response = Buffer.from(json.content, "base64").toString("utf-8");

  return response;
}
