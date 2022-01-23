import React from 'react';
import Navbar from './components/navbar.component';
import Posts from './components/posts.component';

class App extends React.Component {
  state = {
    likes: 0,
    dislikes: 0
  }

  likeIncrement = () =>{
    this.setState({ likes: this.state.likes + 1 })
  }
  dislikeIncrement = () =>{
    this.setState({ dislikes: this.state.dislikes + 1 })
  }
  likeDecrement = () =>{
    if(this.state.likes > 0){
      this.setState({ likes: this.state.likes - 1 })
    }
  }
  dislikeDecrement = () =>{
    if(this.state.dislikes > 0){
      this.setState({ dislikes: this.state.dislikes - 1 })
    }
  }
  
  render() {
    return (
      <>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Navbar 
            likes={this.state.likes}  
            dislikes={this.state.dislikes}
          />
          <Posts 
            likes={this.state.likes}
            dislikes={this.state.dislikes}
            likeIncrement={this.likeIncrement}
            dislikeIncrement={this.dislikeIncrement}
            likeDecrement={this.likeDecrement}
            dislikeDecrement={this.dislikeDecrement}

          />
        </div>
      </>
    );
  }
}

export default App;