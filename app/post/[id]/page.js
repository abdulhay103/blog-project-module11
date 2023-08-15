import getSinglePost from "@/app/api/getSinglePost";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const post = await getSinglePost(id);
  console.log(post);
  return (
    <div className=" border">
      <h1 className="p-3 bg-slate-400 text-white">{post.title}</h1>
      <p className="p-3">{post.body}</p>
    </div>
  );
};

export default page;
