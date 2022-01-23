import React from 'react';
import Like from './like.component';

class Post extends React.Component {

  render() {
    const { postId, title, date, content, isLiked, isDisliked, handleLike, handleDislike, handleRemove } = this.props;

    return (
      <>
        <div className="container w-50 mt-4 ">
          <div className="card border border-dark rounded-2 ">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <h6 className="card-subtitle mb-3">{date}</h6>
              <img
                src="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
                width="100"
                height="100"
                alt="random"
              />
              <p className="card-text">{content}</p>
            </div>
            <form className="mb-3 p-2">
              <div className="form-group">
                <label className="m-3 mt-0 mb-0">Comments</label>
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <input className="form-control m-3 mt-0 mb-0" />
                  <Like
                    isLiked={isLiked}
                    isDisliked={isDisliked}
                    postId={postId}
                    handleLike={handleLike}
                    handleDislike={handleDislike}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={() => handleRemove(postId)}
              className='btn btn-danger'>Remove</button>
          </div>
        </div>
      </>
    );
  }
}

export default Post;