import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    
    const commentObj = {
      id: Date.now(),
      text: newComment,
    };

    onAddComment(commentObj);
    setNewComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
        rows="4"
        cols="50"
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
