'use client';

import fetchData from '@/lib/fetchData';
import { File, Folder } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
	const [tree, setTree] = useState(null);
	const { register, handleSubmit } = useForm();

	const onSubmit = async (data) => {
		const result = await fetchData(data.link, data.branch);
		const order = ['tree', 'blob'];
		result.tree.sort((a, b) => {
			return order.indexOf(a.type) - order.indexOf(b.type);
		});
		setTree(result.tree);
		console.log(result.tree);
	};

	return (
		<div className='p-3 space-y-3'>
			<h1 className='text-4xl font-bold text-center'>RepoAI</h1>
			<form
				className='space-x-2 flex justify-center'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='flex gap-2'>
					<input
						{...register('link')}
						type='text'
						className='input input-primary w-3/4'
						placeholder='Enter Github link here...'
					/>
					<input
						{...register('branch')}
						type='text'
						className='input input-primary w-1/4'
						placeholder='Branch'
					/>
				</div>
				<button className='btn btn-primary' type='submit'>
					Submit
				</button>
			</form>

			{tree && (
				<ul className='list bg-base-200 rounded-box shadow-md overflow-y-scroll max-h-1/2 w-7/8 lg:w-3/4 xl:w-1/2 mx-auto'>
					{tree.map((file, i) => {
						if (file.path.includes('/')) {
							return;
						}
						return (
							<li key={i} className='list-row p-3!'>
								<div>
									{file.type == 'blob' ? (
										<File className='w-5 h-5' />
									) : (
										<Folder className='w-5 h-5' />
									)}
								</div>
								<div>
									<div>{file.path}</div>
								</div>
							</li>
						);
					}) ?? <p>Loading...</p>}
				</ul>
			)}
		</div>
	);
}
