import { client } from "./sanity";

export async function getPost() {
  return await client.fetch(
    `
    *[_type == "post"] {
  _id,
  title,
  slug,
  body
}
      `,
  );
}
