import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function RepoForm({ onSubmit, loading }) {
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="space-x-2 flex justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-2">
        <Input
          {...register("link", { required: true })}
          type="text"
          placeholder="Enter Github link here..."
          disabled={loading}
        />
        <Input
          {...register("branch", { required: true })}
          type="text"
          className="w-1/4"
          placeholder="Branch"
          disabled={loading}
        />
      </div>
      <Button type="submit">
        {loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}
