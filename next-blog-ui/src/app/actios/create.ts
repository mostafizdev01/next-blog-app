"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => { // data => received the submited form data 
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...blogInfo,
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    authorId: 1,
    isFeatured: Boolean(blogInfo.isFeatured),
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_API}/post`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(modifiedData),

  });

  const result = await res.json();

  if (result?.id) {
    revalidateTag("BLOGS");
    revalidatePath("/blogs");
    redirect("/");
  }
  return result;
};