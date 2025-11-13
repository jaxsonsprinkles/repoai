import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Spinner } from "./ui/spinner";

export default function RepoForm({ onSubmit, loading }) {
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="bg-neutral-100 h-screen gap-3 flex flex-col py-3 px-2 rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("link", { required: true })}
        type="text"
        placeholder="Enter Github link here..."
        disabled={loading}
      />
      <Input
        {...register("branch", { required: true })}
        type="text"
        placeholder="Branch"
        disabled={loading}
      />

      <Button type="submit">
        {loading ? <Spinner className="size-6" /> : "Submit"}
      </Button>
    </form>
  );
}
