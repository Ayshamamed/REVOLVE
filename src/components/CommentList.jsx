import React, { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: 'This is the first comment.' },
    { id: 2, text: 'Another comment here.' },
  ]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} text={comment.text} />
      ))}
      <CommentForm onAddComment={addComment} />
    </div>
  );
};

export default CommentList;
