import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex grow flex-col justify-center">
      <div className="grid gap-y-4 p-4">
        <h1 className="font-space-grotesk">Not Found</h1>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
