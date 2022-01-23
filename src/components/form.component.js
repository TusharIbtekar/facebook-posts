import React, { useState } from 'react';

export default function Form({ addPost }) {
  const [post, setPost] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost({
      id: post.id,
      title: post.title,
      date: post.date,
      content: post.content,
    });
  };

  const handleChange = (event) => {
    setPost((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-50">
      <div className="form-group mb-1 mt-2">
        <input
          type="number"
          className="form-control"
          placeholder="ID"
          value={post.id || ''}
          name="id"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-1">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={post.title || ''}
          name="title"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-1">
        <input
          type="date"
          className="form-control"
          placeholder="date"
          value={post.date || ''}
          name="date"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-1">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Content"
          value={post.content || ''}
          name="content"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group mb-1">
        <input
          type="type"
          className="form-control"
          placeholder="Comment"
          value={post.comment || ''}
          name="comment"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}