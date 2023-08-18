import React from 'react';

const Comment = ({ text }) => {
  return (
    <div className="comment">
      <p>{text}</p>
    </div>
  );
};

export default Comment;
