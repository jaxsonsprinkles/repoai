import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function SummaryCard({ isOpen, summary, loading, fileName }) {
  if (!isOpen) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          {loading ? `Analyzing ${fileName}` : `AI Summary of ${fileName}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div>
            <div className="flex flex-col gap-2 p-3">
              {[...Array(9)].map((_, i) => {
                return (
                  <Skeleton
                    key={i}
                    className={`skeleton h-4 ${i == 8 ? "w-1/2" : ""}`}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <p className="py-3">{summary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
