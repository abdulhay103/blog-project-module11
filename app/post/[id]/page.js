"use client";
import getComents from "@/app/api/getComments";
import getSinglePost from "@/app/api/getSinglePost";
import Comment from "@/app/components/Comment";
import React, { Suspense } from "react";

const page = async ({ params }) => {
  const id = params.id;
  const post = await getSinglePost(id);
  const comments = await getComents(id);

  return (
    <div className=" border">
      <div>
        <h1 className="p-3 bg-slate-400 text-white">{post.title}</h1>
        <p className="p-3">{post.body}</p>
      </div>
      <div className=" py-6 border">
        <h2 className=" text-center">Comments</h2>
        <Suspense fallback={<h3>Loading comments123...</h3>}>
          <Comment comments={comments} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
