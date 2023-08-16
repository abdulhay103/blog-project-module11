export default async function getComents(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!res.ok) {
    throw new Error("There was an error!");
  }
  return res.json();
}
