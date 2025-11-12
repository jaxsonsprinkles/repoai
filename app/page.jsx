'use client';

import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/ui/code-block';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Home() {
	const codes = [
		{
			quote: (
				<CodeBlock
					language='javascript'
					filename='fetchUserData.js'
					code={`function fetchUserData(id) {
  const response = fetch(\`/api/users/\${id}\`);
  const data = response.json();
  console.log("User loaded:", data.name);
  return data;
  ...}`}
				/>
			),
		},
		{
			quote: (
				<CodeBlock
					language='python'
					filename='calculate_average.py'
					code={`def calculate_average(scores):
    total = sum(scores)
    count = len(scores)
    average = total / count
    print("Average score:", average)
    return average
    ...`}
				/>
			),
		},
		{
			quote: (
				<CodeBlock
					language='java'
					filename='FileReader.java'
					code={`public class FileReader {
  public static void main(String[] args) {
    try {
      File file = new File("data.txt");
      Scanner reader = new Scanner(file);
      while (reader.hasNextLine()) {
        System.out.println(reader.nextLine());
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    ...}`}
				/>
			),
		},
		{
			quote: (
				<CodeBlock
					language='typescript'
					filename='getPosts.ts'
					code={`const getPosts = async (): Promise<Post[]> => {
  const res = await fetch("/api/posts");
  const posts = await res.json();
  posts.forEach(p => console.log(p.title));
  return posts;
  ...}`}
				/>
			),
			name: null,
			title: null,
		},
		{
			quote: (
				<CodeBlock
					language='ruby'
					filename='update_profile.rb'
					code={`def update_profile(user)
  response = Net::HTTP.post(URI('/api/update'), user.to_json)
  result = JSON.parse(response.body)
  puts "Profile updated: \#{result['status']}"
  ...
end`}
				/>
			),
			name: null,
			title: null,
		},
	];
	const summaries = [
		{
			quote: (
				<>
					<h1 className='text-xl mb-2 font-bold'>
						AI Summary of fetchUserData.js
					</h1>
					<p>
						Fetches user data from a REST API using the provided identifier,
						parses the JSON payload, logs key user attributes, and returns the
						structured response object for downstream processing...
					</p>
				</>
			),
			name: null,
			title: null,
		},
		{
			quote: (
				<>
					<h1 className='text-xl mb-2 font-bold'>
						AI Summary of calculate_average.py
					</h1>
					<p>
						Computes the arithmetic mean of numeric input values by summing all
						elements, dividing by the total count, and outputting the result to
						the console before returning the value...
					</p>
				</>
			),
			name: null,
			title: null,
		},
		{
			quote: (
				<>
					<h1 className='text-xl mb-2 font-bold'>
						AI Summary of FileReader.java
					</h1>
					<p>
						Initializes a file reader that iteratively scans a text file line by
						line, streams output to standard console, and implements exception
						handling for I/O operations...
					</p>
				</>
			),
			name: null,
			title: null,
		},
		{
			quote: (
				<>
					<h1 className='text-xl mb-2 font-bold'>AI Summary of getPosts.ts</h1>
					<p>
						Executes an asynchronous network request to retrieve a JSON array of
						posts, type-checks the response as a list of Post objects, logs
						titles for debugging, and returns the parsed dataset...
					</p>
				</>
			),
			name: null,
			title: null,
		},
		{
			quote: (
				<>
					<h1 className='text-xl mb-2 font-bold'>
						AI Summary of update_profile.rb
					</h1>
					<p>
						Implements a profile update routine that performs an HTTP POST with
						serialized user data, decodes the JSON response, and outputs the
						resulting operation status to the console...
					</p>
				</>
			),
			name: null,
			title: null,
		},
	];
	return (
		<div className='relative mx-auto my-5 flex max-w-7xl flex-col items-center justify-center'>
			<Navbar />
			<div className='px-4 py-10'>
				<h1 className='relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold md:text-4xl lg:text-7xl dark:text-slate-300'>
					{'Instantly Understand Code With AI.'
						.split(' ')
						.map((word, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
								animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
								transition={{
									duration: 0.3,
									delay: index * 0.1,
									ease: 'easeInOut',
								}}
								className='mr-2 inline-block'
							>
								{word}
							</motion.span>
						))}
				</h1>
				<motion.p
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.3,
						delay: 0.8,
					}}
					className='relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400'
				>
					RepoAI automatically summarizes files and folders across any
					repository, so you spend less time digging and more time building.
				</motion.p>
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.3,
						delay: 1,
					}}
					className='relative z-10 mt-8 flex flex-wrap items-center justify-center'
				>
					<Button asChild className='w-90 py-6!'>
						<Link href='/new'>Get Started</Link>
					</Button>
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						y: 10,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.3,
						delay: 1.2,
					}}
					className='relative z-10 mt-20 border rounded-md border-neutral-200  p-4 dark:border-neutral-800 dark:bg-neutral-900'
				>
					<div className='w-full overflow-hidden rounded-xl '>
						<h1 className='relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold md:text-4xl lg:text-5xl dark:text-slate-300'>
							Turn this 🥱
						</h1>
						<InfiniteMovingCards items={codes} direction='right' speed='slow' />
						<h1 className='relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold md:text-4xl lg:text-5xl dark:text-slate-300'>
							Into this 👌
						</h1>
						<InfiniteMovingCards
							items={summaries}
							direction='left'
							speed='slow'
							isBorder={true}
						/>
					</div>
				</motion.div>
			</div>
			<p>
				Made with ❤️ by{' '}
				<a
					href='https://github.com/jaxsonsprinkles'
					className='font-bold underline'
				>
					Jaxson
				</a>
			</p>
		</div>
	);
}

const Navbar = () => {
	return (
		<nav className='flex w-full items-center justify-between px-4 py-4'>
			<div className='flex items-center gap-2'>
				<h1 className='text-base font-bold md:text-2xl'>RepoAI</h1>
			</div>
		</nav>
	);
};
