'use server';

import parseGithubUrl from './parseGithubUrl';

export default async function fetchTree(l, b) {
	const headers = {
		Authorization: `token ${process.env.GITHUB_KEY}`,
	};
	const { owner, repo } = parseGithubUrl(l);
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
