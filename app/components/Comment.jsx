import React from "react";

export default function Comment({ comments }) {
  return (
    <>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="p-4">
            <h3 className="text-sky-700">{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </>
  );
}
