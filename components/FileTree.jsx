import { File, Folder } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function FileTree({ tree, onFileClick }) {
  const rootFiles = tree.tree.filter((file) => {
    return !file.path.includes("/");
  });
  return (
    <div className="outer-container w-7/8 lg:w-3/4 xl:w-1/2 mx-auto max-h-80 overflow-y-scroll">
      <Table>
        <TableBody>
          {rootFiles.map((file, i) => {
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
    /* <div className="outer-container w-7/8 lg:w-3/4 xl:w-1/2 mx-auto max-h-80 overflow-y-scroll">
      <ul className=" list bg-base-200 rounded-box shadow-md p-6 lg:p-10">
        {rootFiles.map((file, i) => {
          return (
            <FileItem
              key={i}
              file={file}
              onClick={() => {
                onFileClick(file);
              }}
            />
          );
        }) ?? <p>Loading...</p>}
      </ul>
    </div>*/
  );
}

function FileItem({ file, onClick }) {
  return (
    <TableRow
      className="cursor-pointer list-row p-3! transition-transform duration-150 hover:scale-110"
      onClick={onClick}
    >
      <TableCell>
        {file.type == "blob" ? (
          <File className="w-5 h-5" />
        ) : (
          <Folder className="w-5 h-5" />
        )}
      </TableCell>
      <TableCell>{file.path}</TableCell>
    </TableRow>
    /*  <div className="tooltip" data-tip={`Summarize ${file.path} with AI`}>
      <li
        onClick={onClick}
        className="hover:border-2 hover:border-primary cursor-pointer list-row p-3! transition-transform duration-150 hover:scale-110"
      >
        <div>
          
        </div>
        <div>
          <div>{file.path}</div>
        </div>
      </li>
    </div>  */
  );
}
