"use client";

import fetchContents from "@/lib/fetchContent";
import fetchTree from "@/lib/fetchTree";
import getAI from "@/lib/getAI";
import { File, Folder } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [tree, setTree] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ link, branch }) => {
    const result = await fetchTree(link, branch);
    const order = ["tree", "blob"];
    result.tree.sort((a, b) => {
      return order.indexOf(a.type) - order.indexOf(b.type);
    });

    setTree(result);
  };

  const getSummary = async ({ link, path }) => {
    document.getElementById("my_modal_3").showModal();
    setLoading(true);
    const result = await fetchContents(link, path);

    const response = await getAI(path, result);
    setSummary(response);
    console.log(response);
  };

  return (
    <div className="p-3 space-y-3">
      <h1 className="text-4xl font-bold text-center">RepoAI</h1>
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

      {tree && (
        <div className="outer-container w-7/8 lg:w-3/4 xl:w-1/2 mx-auto max-h-1/2">
          <ul className="list bg-base-200 rounded-box shadow-md p-4 inner-scroll-wrapper">
            {tree.tree.map((file, i) => {
              if (file.path.includes("/")) {
                return;
              }
              return (
                <div
                  key={i}
                  className="tooltip"
                  data-tip={`Summarize ${file.path} with AI`}
                >
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button
                          onClick={() => {
                            setSummary(null);
                            setLoading(false);
                          }}
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                          ✕
                        </button>
                      </form>
                      <div className="flex flex-col gap-3 p-3">
                        {!summary ? (
                          <div>
                            <h2 className="text-xl font-semibold mb-3">
                              Your AI summary is loading...
                            </h2>
                            <div className="skeleton h-4"></div>
                            <div className="skeleton h-4"></div>
                            <div className="skeleton h-4"></div>
                            <div className="skeleton h-4"></div>
                            <div className="skeleton h-4"></div>
                            <div className="skeleton h-4"></div>
                            <div className="skeleton h-4"></div>
                            <div className="skeleton h-4"></div>
                            <div className="skeleton h-4 w-1/2"></div>
                          </div>
                        ) : (
                          <div>
                            <h2 className="text-xl font-semibold">
                              AI Summary of Your File
                            </h2>
                            <p>{summary}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </dialog>
                  <div
                    onClick={() => {
                      getSummary({
                        link: tree.url,
                        path: file.path,
                      });
                    }}
                  >
                    <li className="hover:border-2 hover:border-primary cursor-pointer list-row p-3! transition-transform duration-150 hover:scale-110">
                      <div>
                        {file.type == "blob" ? (
                          <File className="w-5 h-5" />
                        ) : (
                          <Folder className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <div>{file.path}</div>
                      </div>
                    </li>
                  </div>
                </div>
              );
            }) ?? <p>Loading...</p>}
          </ul>
        </div>
      )}
    </div>
  );
}
