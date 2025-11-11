'use server';

import parseGithubUrl from './parseGithubUrl';

export default async function fetchContents(l, p) {
	const headers = {
		Authorization: `token ${process.env.GITHUB_KEY}`,
	};

	const { owner, repo } = parseGithubUrl(l);
	const content = await fetch(
		`https://api.github.com/repos/${owner}/${repo}/contents/${p}`,
		{ headers }
	);

	const json = await content.json();
	const response = Buffer.from(json.content, 'base64').toString('utf-8');

	return response;
}
