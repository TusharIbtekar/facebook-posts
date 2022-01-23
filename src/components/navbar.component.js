import React from 'react';
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light w-75">
          <span className="navbar-brand mb-0 h1">Facebook</span>
          <span className="navbar-brand mb-0 h1">Likes: {this.props.likes} Dislikes: {this.props.dislikes}</span>
        </nav>
      </>
    );
  }
}

export default Navbar;