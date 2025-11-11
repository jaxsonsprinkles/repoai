import { Star } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function Page() {
	return (
		<div>
			<Hero7 />
		</div>
	);
}

function Hero7() {
	const reviews = {
		count: 200,
		rating: 5.0,
		avatars: [
			{
				src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
				alt: 'Avatar 1',
			},
			{
				src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
				alt: 'Avatar 2',
			},
			{
				src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
				alt: 'Avatar 3',
			},
			{
				src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp',
				alt: 'Avatar 4',
			},
			{
				src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp',
				alt: 'Avatar 5',
			},
		],
	};
	return (
		<section className='relative py-32 bg-cover bg-center bg-no-repeat overflow-hidden'>
			<img
				src='/hero.png'
				alt='Hero background'
				className='absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none'
				aria-hidden='true'
			/>
			<div className='container mx-auto text-center relative z-10'>
				<div className='mx-auto flex max-w-5xl flex-col gap-6'>
					<h1 className='text-3xl font-semibold lg:text-6xl'>
						A Collection of Components Built With Shadcn & Tailwind
					</h1>
					<p className='text-muted-foreground text-balance lg:text-lg'>
						Finely crafted components built with React, Tailwind and Shadcn UI.
						Developers can copy and paste these blocks directly into their
						project.
					</p>
				</div>
				<Button asChild size='lg' className='mt-10'>
					<a href='/new'>Discover More</a>
				</Button>
				<div className='mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row'>
					<span className='mx-4 inline-flex items-center -space-x-4'>
						{reviews.avatars.map((avatar, index) => (
							<Avatar key={index} className='size-14 border'>
								<AvatarImage src={avatar.src} alt={avatar.alt} />
							</Avatar>
						))}
					</span>
					<div>
						<div className='flex items-center gap-1'>
							{[...Array(5)].map((_, index) => (
								<Star
									key={index}
									className='size-5 fill-yellow-400 text-yellow-400'
								/>
							))}
							<span className='mr-1 font-semibold'>
								{reviews.rating?.toFixed(1)}
							</span>
						</div>
						<p className='text-muted-foreground text-left font-medium'>
							from {reviews.count}+ reviews
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
