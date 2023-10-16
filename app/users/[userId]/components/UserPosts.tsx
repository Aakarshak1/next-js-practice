export default async function UserPosts({ promise }: any) {
  const posts = await promise;

  const content = posts?.map((post: any) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });

  return content;
}
