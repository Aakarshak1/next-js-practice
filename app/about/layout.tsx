import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <h1>about navbar </h1>
      </nav>
      <main>{children}</main>
    </>
  );
}
