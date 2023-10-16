import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      Hello World
      <Link href="/about"> about </Link>
      <Link href="/users"> users </Link>
    </main>
  );
}
