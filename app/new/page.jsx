'use client';

import FileTree from '@/components/FileTree';
import RepoForm from '@/components/RepoForm';
import SummaryCard from '@/components/SummaryCard';
import fetchContents from '@/lib/fetchContent';
import fetchTree from '@/lib/fetchTree';
import getAI from '@/lib/getAI';

import { useState } from 'react';

import toast from 'react-hot-toast';

export default function Home() {
	const [tree, setTree] = useState(null);
	const [summary, setSummary] = useState(null);
	const [summaryCache, setSummaryCache] = useState({});
	const [selectedFile, setSelectedFile] = useState(null);
	const [loading, setLoading] = useState(false);

	const onSubmit = async ({ link, branch }) => {
		setLoading(true);
		try {
			const result = await fetchTree(link, branch);

			setTree(result);
		} catch (error) {
			toast.error(
				'Failed to fetch repository. Please check the link and branch.'
			);
		} finally {
			setLoading(false);
		}
	};

	const getSummary = async (file) => {
		setSelectedFile(file);
		setLoading(true);
		setSummary(null);
		const binaryArray = [
			'jpg',
			'jpeg',
			'png',
			'gif',
			'bmp',
			'tiff',
			'ico',
			'mp3',
			'wav',
			'flac',
			'aac',
			'ogg',
			'mp4',
			'avi',
			'mkv',
			'mov',
			'wmv',
			'flv',
			'exe',
			'dll',
			'bin',
			'class',
			'so',
			'o',
			'a',
			'zip',
			'rar',
			'7z',
			'tar',
			'gz',
			'bz2',
			'iso',
		];
		if (
			file.size > 50000 ||
			file.size == null ||
			binaryArray.includes(file.path.split('.').pop().toLowerCase())
		) {
			toast.error('File is too large or not a sufficient type to summarize.');
			setLoading(false);
		} else {
			try {
				if (!summaryCache[file.path]) {
					const content = await fetchContents(tree.url, file.path);

					const response = await getAI(file.path, content);
					setSummary(response);
					setSummaryCache((prev) => {
						return { ...prev, [file.path]: response };
					});
				} else {
					setSummary(summaryCache[file.path]);
				}
			} catch (error) {
				toast.error('Failed to fetch summary. Please try again.');
			} finally {
				setLoading(false);
			}
		}
	};

	const closeModal = () => {
		setSummary(null);
		setSelectedFile(null);
		setLoading(false);
	};

	return (
		<div className='p-3 space-y-3'>
			<h1 className='text-4xl font-bold text-center'>RepoAI</h1>
			<RepoForm onSubmit={onSubmit} loading={loading} />

			<div className='lg:w-5/6 mx-auto flex h-screen overflow-hidden transition-all duration-300 gap-3'>
				<div
					className={`h-full overflow-y-auto transition-all duration-300 ${
						selectedFile ? 'w-1/2' : 'w-full'
					}`}
				>
					{tree && <FileTree tree={tree} onFileClick={getSummary} />}
				</div>

				<div
					className={`h-full overflow-y-auto transition-all duration-300 transform ${
						selectedFile
							? 'translate-x-0 opacity-100 w-1/2'
							: 'translate-x-full opacity-0 w-0'
					}`}
				>
					<SummaryCard
						isOpen={selectedFile != null}
						summary={summary}
						fileName={selectedFile?.path}
						loading={loading}
						onClose={closeModal}
					/>
				</div>
			</div>
		</div>
	);
}
