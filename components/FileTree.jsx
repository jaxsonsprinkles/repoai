import { File, Folder, FolderOpen, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useState } from "react";

export default function FileTree({ tree, onFileClick }) {
  const [expandedFolders, setExpandedFolders] = useState({});

  const toggleFolder = (folderPath) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderPath]: !prev[folderPath],
    }));
  };

  const renderItems = (items, parentPath = "") => {
    return items
      .filter((file) => {
        if (parentPath === "") {
          return !file.path.includes("/");
        }
        return (
          file.path.startsWith(parentPath + "/") &&
          file.path.split("/").length === parentPath.split("/").length + 1
        );
      })
      .sort((a, b) => {
        if (a.type === b.type) {
          return a.path.localeCompare(b.path);
        }
        return a.type === "tree" ? -1 : 1;
      })
      .map((file, i) => (
        <FileItem
          key={i}
          file={file}
          depth={file.path.split("/").length - 1}
          isExpanded={expandedFolders[file.path]}
          onToggleFolder={toggleFolder}
          onFileClick={onFileClick}
          isFolder={file.type === "tree"}
          renderChildren={() => {
            if (file.type === "tree" && expandedFolders[file.path]) {
              return renderItems(items, file.path);
            }
            return null;
          }}
        />
      ));
  };

  return (
    <div className="p-2 bg-background outer-container mx-auto overflow-y-scroll border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">
              {tree.url.match(/repos\/[^/]+\/([^/]+)\/git\/trees\//)[1]}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{renderItems(tree.tree)}</TableBody>
      </Table>
    </div>
  );
}

function FileItem({
  file,
  depth,
  isExpanded,
  onToggleFolder,
  onFileClick,
  isFolder,
  renderChildren,
}) {
  const indent = depth * 16;
  const fileName = file.path.split("/").pop();

  const handleFolderClick = (e) => {
    e.stopPropagation();
    onToggleFolder(file.path);
  };

  const handleFileClick = () => {
    onFileClick(file);
  };

  return (
    <>
      <TableRow className="cursor-pointer list-row p-3!">
        <TableCell style={{ paddingLeft: `${indent}px` }}>
          {isFolder ? (
            <div
              onClick={handleFolderClick}
              className="flex items-center gap-2"
            >
              <span>
                {isExpanded ? (
                  <FolderOpen className="size-5" />
                ) : (
                  <Folder className="size-5" />
                )}
              </span>
            </div>
          ) : (
            <File className="size-5" />
          )}
        </TableCell>
        <TableCell
          style={{ paddingLeft: `${indent}px` }}
          onClick={isFolder ? handleFolderClick : handleFileClick}
        >
          {fileName}
        </TableCell>
      </TableRow>
      {renderChildren()}
    </>
  );
}
