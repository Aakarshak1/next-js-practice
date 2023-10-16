import getUser from "@/lib/getUsers";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import getAllUsers from "@/lib/getAllUsers";

import { notFound } from "next/navigation";

// dynamic metdata
export async function generateMetadata({ params: { userId } }: any) {
  const userData = getUser(userId);
  const user = await userData;

  if (!user?.name) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: user.name,
  };
}

export default async function UserPage({ params: { userId } }: any) {
  const userData = getUser(userId);
  const userPostsData = getUserPosts(userId);

  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;
  if (!user?.name) notFound();

  return (
    <>
      <h2> {user.name} </h2>
      <br />
      <Suspense fallback={<h2>Loading..</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function genearateStaticParams() {
  const userData = getAllUsers();
  const users = await userData;

  return users.map((user: any) => ({
    userId: user.id,
  }));
}
