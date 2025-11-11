"use client";

import FileTree from "@/components/FileTree";
import RepoForm from "@/components/RepoForm";
import SummaryModal from "@/components/SummaryModal";
import fetchContents from "@/lib/fetchContent";
import fetchTree from "@/lib/fetchTree";
import getAI from "@/lib/getAI";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [tree, setTree] = useState(null);
  const [summary, setSummary] = useState(null);
  const [summaryCache, setSummaryCache] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async ({ link, branch }) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchTree(link, branch);
      const order = ["tree", "blob"];
      result.tree.sort((a, b) => {
        return order.indexOf(a.type) - order.indexOf(b.type);
      });

      setTree(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getSummary = async (file) => {
    setSelectedFile(file);
    setLoading(true);
    setSummary(null);
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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSummary(null);
    setSelectedFile(null);
    setLoading(false);
  };

  return (
    <div className="p-3 space-y-3">
      <h1 className="text-4xl font-bold text-center">RepoAI</h1>
      <RepoForm onSubmit={onSubmit} loading={loading} />
      {error && <p className="alert alert-error max-w-md mx-auto">{error}</p>}
      {tree && <FileTree tree={tree} onFileClick={getSummary} />}
      <SummaryModal
        isOpen={selectedFile != null}
        summary={summary}
        fileName={selectedFile?.path}
        loading={loading}
        onClose={closeModal}
      />
    </div>
  );
}
