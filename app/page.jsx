"use client";

import fetchData from "@/lib/fetchData";
import { File, Folder } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [data, setData] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const result = await fetchData(data.link, data.branch);
    setData(result);
    console.log(result);
  };

  return (
    <div className="text-center p-3 space-y-3">
      <h1 className="text-2xl font-bold">Github AI</h1>
      <form
        className="space-x-2 flex justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-2">
          <input
            {...register("link")}
            type="text"
            className="input input-primary w-3/4"
            placeholder="Enter Github link here..."
          />
          <input
            {...register("branch")}
            type="text"
            className="input input-primary w-1/4"
            placeholder="Branch"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {data && (
        <ul className="list bg-base-100 rounded-box shadow-md">
          {data?.tree?.map((file, i) => {
            return (
              <div key={i}>
                <li className="list-row">
                  <div>{file.type == "blob" ? <File /> : <Folder />}</div>
                  <div>
                    <div>{file.path}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Remaining Reason
                    </div>
                  </div>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 3L20 12 6 21 6 3z"></path>
                      </g>
                    </svg>
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </li>

                {/*  {file.path} */}
              </div>
            );
          }) ?? <p>Loading...</p>}
        </ul>
      )}
    </div>
  );
}
