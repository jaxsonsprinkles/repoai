import { File, Folder, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function FileTree({ tree, onFileClick }) {
  return (
    <div className="outer-container mx-auto overflow-y-scroll border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">
              {tree.url.match(/repos\/[^/]+\/([^/]+)\/git\/trees\//)[1]}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tree.tree.map((file, i) => {
            return (
              <FileItem
                key={i}
                file={file}
                onClick={() => {
                  onFileClick(file);
                }}
              />
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

function FileItem({ file, onClick }) {
  const depth = file.path.split("/").length - 1;
  const indent = depth * 16;
  return (
    <TableRow className="cursor-pointer list-row p-3!" onClick={onClick}>
      <TableCell style={{ paddingLeft: `${indent}px` }}>
        {file.type == "blob" ? (
          <File className="size-5" />
        ) : (
          <Folder className="size-5" />
        )}
      </TableCell>
      <TableCell>{file.path}</TableCell>
    </TableRow>
  );
}
