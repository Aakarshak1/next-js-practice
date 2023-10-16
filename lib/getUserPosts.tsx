export default async function getUserPosts(userId: any) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      next: {
        // revalidate and refresh data after 60 sec, prevent stale data on revisiting page
        // ISR
        revalidate: 60,
      },
    },
  );

  // if (!res.ok) throw new Error("failed to fetch data");
  if (!res.ok) return undefined
  return res.json();
}
