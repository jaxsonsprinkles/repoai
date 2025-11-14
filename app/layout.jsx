import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RepoAI - AI Code Summarizer for GitHub Repositories",
  description:
    "Instantly understand any GitHub repository with AI-powered summaries. Analyze code files and get instant insights without reading through thousands of lines.",
  keywords: [
    "AI code summarizer",
    "repository summarizer",
    "GitHub AI summaries",
    "codebase documentation tool",
    "folder summarizer AI",
  ],
  openGraph: {
    title: "RepoAI - Understand Code Instantly with AI",
    description:
      "Paste a GitHub link and get AI-powered summaries of any file. No signup required.",
    type: "website",
    url: "getrepoai.vercel.app", // Update with your domain
  },
  twitter: {
    card: "summary_large_image",
    title: "RepoAI - AI Code Summarizer",
    description: "Instantly understand GitHub repositories with AI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
