export default async function getUser(userId: any) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  // if (!res.ok) throw new Error("failed to fetch data");
  if (!res.ok) return undefined;
  return res.json();
}
