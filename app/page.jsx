"use client";

import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  const codes = [
    {
      quote: (
        <CodeBlock
          language="javascript"
          filename="fetchUserData.js"
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
          language="python"
          filename="calculate_average.py"
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
          language="java"
          filename="FileReader.java"
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
          language="typescript"
          filename="getPosts.ts"
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
          language="ruby"
          filename="update_profile.rb"
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
          <h1 className="text-xl mb-2 font-bold">
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
          <h1 className="text-xl mb-2 font-bold">
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
          <h1 className="text-xl mb-2 font-bold">
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
          <h1 className="text-xl mb-2 font-bold">AI Summary of getPosts.ts</h1>
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
          <h1 className="text-xl mb-2 font-bold">
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
    <div className="relative mx-auto my-5 flex max-w-7xl flex-col items-center justify-center">
      <Navbar />
      <div className="px-4 py-10">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Instantly Understand Code With AI."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
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
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
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
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center"
        >
          <Button asChild className="w-90 py-6!">
            <Link href="/new">Get Started</Link>
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
          className="relative z-10 mt-20 border rounded-md border-neutral-200  p-4 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl ">
            <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold md:text-4xl lg:text-5xl dark:text-slate-300">
              Turn this
            </h1>
            <InfiniteMovingCards items={codes} direction="right" speed="slow" />
            <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold md:text-4xl lg:text-5xl dark:text-slate-300">
              Into this
            </h1>
            <InfiniteMovingCards
              items={summaries}
              direction="left"
              speed="slow"
              isBorder={true}
            />
          </div>
        </motion.div>
        <h1 className="mt-10 relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold md:text-4xl dark:text-slate-300">
          {"So what are you waiting for?".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
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
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          No sign up required.
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
          className=" mb-10 relative z-10 mt-8 flex flex-wrap items-center justify-center"
        >
          <Button asChild className="w-90 py-6!">
            <Link href="/new">Get Started</Link>
          </Button>
        </motion.div>
      </div>

      <p>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/jaxsonsprinkles"
          className="font-bold underline"
        >
          Jaxson
        </a>
      </p>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-4 py-4">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={25}
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          height={25}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <g />
            <clipPath id="76d4650b9d">
              <rect x={0} width={110} y={0} height={327} />
            </clipPath>
            <clipPath id="2820bb0af7">
              <path
                d="M 0 0 L 375 0 L 375 375 L 0 375 Z M 0 0 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="8f9adbec55">
              <path
                d="M 75 0 L 300 0 C 341.421875 0 375 33.578125 375 75 L 375 300 C 375 341.421875 341.421875 375 300 375 L 75 375 C 33.578125 375 0 341.421875 0 300 L 0 75 C 0 33.578125 33.578125 0 75 0 Z M 75 0 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="69d7566a1c">
              <path
                d="M 0 0 L 375 0 L 375 375 L 0 375 Z M 0 0 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="b64564536d">
              <path
                d="M 75 0 L 300 0 C 341.421875 0 375 33.578125 375 75 L 375 300 C 375 341.421875 341.421875 375 300 375 L 75 375 C 33.578125 375 0 341.421875 0 300 L 0 75 C 0 33.578125 33.578125 0 75 0 Z M 75 0 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="3798ec60bc">
              <rect x={0} width={375} y={0} height={375} />
            </clipPath>
            <clipPath id="0f67a97fc8">
              <rect x={0} width={306} y={0} height={265} />
            </clipPath>
            <clipPath id="75eebf2ba7">
              <rect x={0} width={375} y={0} height={375} />
            </clipPath>
            <clipPath id="6791f16dcf">
              <path
                d="M 126.109375 126.046875 L 248.730469 126.046875 L 248.730469 248.667969 L 126.109375 248.667969 Z M 126.109375 126.046875 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="c40fd71de5">
              <path
                d="M 196.15625 133.574219 L 196.167969 133.625 C 201.523438 155.945312 218.945312 173.375 241.261719 178.746094 C 245.304688 179.722656 248.15625 183.339844 248.15625 187.5 C 248.15625 191.660156 245.304688 195.277344 241.261719 196.253906 C 218.945312 201.625 201.523438 219.054688 196.167969 241.375 L 196.15625 241.425781 C 195.1875 245.464844 191.574219 248.316406 187.417969 248.316406 C 183.265625 248.316406 179.648438 245.464844 178.679688 241.425781 L 178.667969 241.375 C 173.3125 219.054688 155.894531 201.625 133.578125 196.253906 C 129.535156 195.277344 126.683594 191.660156 126.683594 187.5 C 126.683594 183.339844 129.535156 179.722656 133.578125 178.746094 C 155.894531 173.375 173.3125 155.945312 178.667969 133.625 L 178.679688 133.574219 C 179.648438 129.535156 183.265625 126.683594 187.417969 126.683594 C 191.574219 126.683594 195.1875 129.535156 196.15625 133.574219 Z M 196.15625 133.574219 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="1d0d5a0696">
              <path
                d="M 0.480469 0.480469 L 122.160156 0.480469 L 122.160156 122.398438 L 0.480469 122.398438 Z M 0.480469 0.480469 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="a0fd5d1497">
              <path
                d="M 70.15625 7.574219 L 70.167969 7.625 C 75.523438 29.945312 92.945312 47.375 115.261719 52.746094 C 119.304688 53.722656 122.15625 57.339844 122.15625 61.5 C 122.15625 65.660156 119.304688 69.277344 115.261719 70.253906 C 92.945312 75.625 75.523438 93.054688 70.167969 115.375 L 70.15625 115.425781 C 69.1875 119.464844 65.574219 122.316406 61.417969 122.316406 C 57.265625 122.316406 53.648438 119.464844 52.679688 115.425781 L 52.667969 115.375 C 47.3125 93.054688 29.894531 75.625 7.578125 70.253906 C 3.535156 69.277344 0.683594 65.660156 0.683594 61.5 C 0.683594 57.339844 3.535156 53.722656 7.578125 52.746094 C 29.894531 47.375 47.3125 29.945312 52.667969 7.625 L 52.679688 7.574219 C 53.648438 3.535156 57.265625 0.683594 61.417969 0.683594 C 65.574219 0.683594 69.1875 3.535156 70.15625 7.574219 Z M 70.15625 7.574219 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="0bc593e333">
              <rect x={0} width={123} y={0} height={123} />
            </clipPath>
          </defs>
          <g transform="matrix(1, 0, 0, 1, 133, 0)">
            <g clipPath="url(#76d4650b9d)">
              <g fill="#ffffff" fillOpacity={1}>
                <g transform="translate(0.485655, 217.94884)">
                  <g>
                    <path d="M 53.859375 -66.234375 C 63.765625 -66.234375 72.171875 -62.773438 79.078125 -55.859375 C 85.992188 -48.953125 89.453125 -40.546875 89.453125 -30.640625 C 89.453125 -20.941406 85.992188 -12.632812 79.078125 -5.71875 C 72.171875 1.1875 63.765625 4.640625 53.859375 4.640625 C 44.160156 4.640625 35.851562 1.1875 28.9375 -5.71875 C 22.03125 -12.632812 18.578125 -20.941406 18.578125 -30.640625 C 18.578125 -40.546875 22.03125 -48.953125 28.9375 -55.859375 C 35.851562 -62.773438 44.160156 -66.234375 53.859375 -66.234375 Z M 53.859375 -66.234375 " />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g clipPath="url(#75eebf2ba7)">
              <g clipPath="url(#2820bb0af7)">
                <g clipPath="url(#8f9adbec55)">
                  <g transform="matrix(1, 0, 0, 1, 0, 0)">
                    <g clipPath="url(#3798ec60bc)">
                      <g clipPath="url(#69d7566a1c)">
                        <g clipPath="url(#b64564536d)">
                          <rect
                            x={-136.5}
                            width={648}
                            fill="#000000"
                            y={-136.499997}
                            height={647.999984}
                            fillOpacity={1}
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g transform="matrix(1, 0, 0, 1, 34, 54)">
                <g clipPath="url(#0f67a97fc8)">
                  <g fill="#ffffff" fillOpacity={1}>
                    <g transform="translate(2.307666, 189.757595)">
                      <g>
                        <path d="M 12.609375 -53.1875 L 12.609375 -72.953125 C 22.421875 -72.953125 27.328125 -77.503906 27.328125 -86.609375 L 27.328125 -142.734375 C 27.328125 -147.503906 27.816406 -151.953125 28.796875 -156.078125 C 29.773438 -160.210938 31.457031 -164.242188 33.84375 -168.171875 C 36.226562 -172.097656 39.695312 -175.179688 44.25 -177.421875 C 48.800781 -179.660156 54.300781 -180.78125 60.75 -180.78125 L 81.140625 -180.78125 L 81.140625 -153.875 L 72.734375 -153.875 C 68.953125 -153.875 65.796875 -152.539062 63.265625 -149.875 C 60.742188 -147.21875 59.484375 -143.785156 59.484375 -139.578125 L 59.484375 -85.5625 C 59.484375 -75.050781 55.210938 -67.550781 46.671875 -63.0625 C 55.210938 -58.582031 59.484375 -51.085938 59.484375 -40.578125 L 59.484375 13.453125 C 59.484375 17.660156 60.742188 21.09375 63.265625 23.75 C 65.796875 26.414062 68.953125 27.75 72.734375 27.75 L 81.140625 27.75 L 81.140625 54.65625 L 60.75 54.65625 C 54.300781 54.65625 48.800781 53.535156 44.25 51.296875 C 39.695312 49.054688 36.226562 45.972656 33.84375 42.046875 C 31.457031 38.117188 29.773438 34.085938 28.796875 29.953125 C 27.816406 25.816406 27.328125 21.367188 27.328125 16.609375 L 27.328125 -39.515625 C 27.328125 -48.628906 22.421875 -53.1875 12.609375 -53.1875 Z M 12.609375 -53.1875 " />
                      </g>
                    </g>
                  </g>
                  <g fill="#ffffff" fillOpacity={1}>
                    <g transform="translate(96.080815, 189.757595)">
                      <g />
                    </g>
                  </g>
                  <g fill="#ffffff" fillOpacity={1}>
                    <g transform="translate(153.468846, 189.757595)">
                      <g />
                    </g>
                  </g>
                  <g fill="#ffffff" fillOpacity={1}>
                    <g transform="translate(210.88778, 189.757595)">
                      <g>
                        <path d="M 81.140625 -72.953125 L 81.140625 -53.1875 C 71.328125 -53.1875 66.421875 -48.628906 66.421875 -39.515625 L 66.421875 16.609375 C 66.421875 21.367188 65.929688 25.816406 64.953125 29.953125 C 63.972656 34.085938 62.289062 38.117188 59.90625 42.046875 C 57.53125 45.972656 54.0625 49.054688 49.5 51.296875 C 44.945312 53.535156 39.445312 54.65625 33 54.65625 L 12.609375 54.65625 L 12.609375 27.75 L 21.015625 27.75 C 24.804688 27.75 27.960938 26.414062 30.484375 23.75 C 33.003906 21.09375 34.265625 17.660156 34.265625 13.453125 L 34.265625 -40.578125 C 34.265625 -51.085938 38.539062 -58.582031 47.09375 -63.0625 C 38.539062 -67.550781 34.265625 -75.050781 34.265625 -85.5625 L 34.265625 -139.578125 C 34.265625 -143.785156 33.003906 -147.21875 30.484375 -149.875 C 27.960938 -152.539062 24.804688 -153.875 21.015625 -153.875 L 12.609375 -153.875 L 12.609375 -180.78125 L 33 -180.78125 C 39.445312 -180.78125 44.945312 -179.660156 49.5 -177.421875 C 54.0625 -175.179688 57.53125 -172.097656 59.90625 -168.171875 C 62.289062 -164.242188 63.972656 -160.210938 64.953125 -156.078125 C 65.929688 -151.953125 66.421875 -147.503906 66.421875 -142.734375 L 66.421875 -86.609375 C 66.421875 -77.503906 71.328125 -72.953125 81.140625 -72.953125 Z M 81.140625 -72.953125 " />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g clipPath="url(#6791f16dcf)">
            <g clipPath="url(#c40fd71de5)">
              <g transform="matrix(1, 0, 0, 1, 126, 126)">
                <g clipPath="url(#0bc593e333)">
                  <g clipPath="url(#1d0d5a0696)">
                    <g clipPath="url(#a0fd5d1497)">
                      <rect
                        x={-208.5}
                        width={540}
                        fill="#ffffff"
                        height={539.999987}
                        y={-208.499998}
                        fillOpacity={1}
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <h1 className="text-base font-bold md:text-2xl">RepoAI</h1>
      </div>
    </nav>
  );
};
