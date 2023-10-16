import Link from "next/link";

export default function About() {
  // throw new Error("not today");  to check error.tsx
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>About page </h1>

      <Link href="/"> Home </Link>
    </main>
  );
}
