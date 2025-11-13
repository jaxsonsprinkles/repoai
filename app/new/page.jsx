"use client";

import FileTree from "@/components/FileTree";
import RepoForm from "@/components/RepoForm";
import SummaryCard from "@/components/SummaryCard";
import fetchContents from "@/lib/fetchContent";
import fetchTree from "@/lib/fetchTree";
import getAI from "@/lib/getAI";

import { useState } from "react";

import toast from "react-hot-toast";

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
      if (!result.tree || result.tree.length === 0) {
        toast.error("Repository is empty");
        return;
      }
      setTree(result);
    } catch (error) {
      toast.error(
        error?.message ||
          "Failed to fetch repository. Please check the link and branch."
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
      "jpg",
      "jpeg",
      "png",
      "gif",
      "bmp",
      "tiff",
      "ico",
      "mp3",
      "wav",
      "flac",
      "aac",
      "ogg",
      "mp4",
      "avi",
      "mkv",
      "mov",
      "wmv",
      "flv",
      "exe",
      "dll",
      "bin",
      "class",
      "so",
      "o",
      "a",
      "zip",
      "rar",
      "7z",
      "tar",
      "gz",
      "bz2",
      "iso",
    ];
    if (
      file.size > 50000 ||
      file.size == null ||
      binaryArray.includes(file.path.split(".").pop().toLowerCase())
    ) {
      toast.error("File is too large or not a sufficient type to summarize.");
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
        toast.error(
          error?.message || "Failed to fetch summary. Please try again."
        );
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
    <div className="p-3 space-y-3 h-screen flex flex-col">
      <h1 className="text-4xl font-bold text-center">RepoAI</h1>

      <div className="flex gap-3 flex-1 overflow-hidden w-full">
        <div className="flex-[2] flex flex-col gap-3 overflow-y-auto">
          <RepoForm onSubmit={onSubmit} loading={loading} />
        </div>

        <div
          className={`bg-neutral-100 rounded-lg flex-[3] overflow-y-auto  ${
            !tree && "p-3 justify-center items-center flex"
          }`}
        >
          {tree ? (
            <FileTree tree={tree} onFileClick={getSummary} />
          ) : (
            <p className="text-sm">
              Your file tree will show up here once you submit a valid repo.
            </p>
          )}
        </div>

        <div
          className={` flex-[2] overflow-y-auto transition-all duration-300 ${
            selectedFile == null &&
            "p-3 justify-center items-center flex bg-neutral-100 rounded-lg"
          }`}
        >
          {selectedFile != null ? (
            <SummaryCard
              isOpen={selectedFile != null}
              summary={summary}
              fileName={selectedFile?.path}
              loading={loading}
              onClose={closeModal}
            />
          ) : (
            <p className="text-sm">
              Your AI Summary will show up here. Try clicking on a file.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
