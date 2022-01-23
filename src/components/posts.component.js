import React from 'react';
import Post from './post.component';
import Form from './form.component';

class Posts extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        title: '1st post',
        date: '01-12-2021',
        content:
          'content1',
        isLiked: false,
        isDisliked: false,
      },
      {
        id: 2,
        title: '2nd post',
        date: '01-12-2021',
        content:
          'content2',
        isLiked: false,
        isDisliked: false,
        
      },
      {
        id: 3, 
        title: '3rd post',
        date: '01-12-2021',
        content:
          'content3',
        isLiked: false,
        isDisliked: false,
      },
      {
        id: 4, 
        title: '4th post',
        date: '01-12-2021',
        content:
          'content4',
        isLiked: false,
        isDisliked: false,
      },
      {
        id: 5,
        title: '5th post',
        date: '01-12-2021',
        content:
          'content5',
        isLiked: false,
        isDisliked: false,
      },
      
    ],
    appearButton: false,
  };

  // addButton = () => {
  //   console.log('addbutton clicked');
  //   const posts = [...this.state.posts]
  //   const lastPost = posts[posts.length-1]
  //   const dummyPost = {
  //     id: lastPost.id + 1,
  //     title: lastPost.id + 1 +'th post',
  //     date: '01-12-2021',
  //     content:
  //       'content6',
  //     isLiked: false,
  //     isDisliked: false,
  //   }
  //   this.setState({ posts: [ ...posts, dummyPost ]})
  // };
  addPost = post => {
    this.setState({ appearButton: false });
    const posts = [...this.state.posts];
    posts.push(post);
    this.setState({ posts });
  };

  handleRemove = postId =>{
    const posts = [...this.state.posts];
    const post = posts.find(post => post.id === postId)
    if(post.isLiked) this.props.likeDecrement();
    if(post.isDisliked) this.props.dislikeDecrement();

    const updatedPosts = posts.filter(post => post.id != postId)

    this.setState({ posts : updatedPosts })
  }

  handleLike = postId =>{
    const posts = [...this.state.posts]
    const post = posts.find(post => post.id === postId)
    post.isLiked = !(post.isLiked)
    if(post.isDisliked){
      post.isDisliked = !post.isDisliked
      this.props.dislikeDecrement()
    }

    if(post.isLiked){
      this.props.likeIncrement();
    }
    else{
      this.props.likeDecrement();
    }
    this.setState({ posts })
  }

  handleDislike = postId =>{
    const posts = [...this.state.posts]
    const post = posts.find(post => post.id === postId)
    post.isDisliked = !(post.isDisliked)
    if(post.isLiked){
      post.isLiked = !post.isLiked
      this.props.likeDecrement()
    } 

    if(post.isDisliked){
      this.props.dislikeIncrement();
    }
    else{
      this.props.dislikeDecrement();
    }
    this.setState({ posts })
  }
  onAdd = () => {
    this.setState({ appearButton: true });
  };

  render() {
    return (
      <>
        <button onClick={this.onAdd} className="btn btn-primary" >
          Add new post
        </button>
        {this.state.appearButton ? <Form addPost={this.addPost} /> : null}
        {this.state.posts.map((post) => {
          return (
            <Post
              key={post.title}
              postId={post.id}
              title={post.title}
              date={post.date}
              content={post.content}
              isLiked={post.isLiked}
              isDisliked={post.isDisliked}
              handleRemove={this.handleRemove}
              handleLike={this.handleLike}
              handleDislike={this.handleDislike}
            />
          );
        })}
      </>
    );
  }
}

export default Posts;