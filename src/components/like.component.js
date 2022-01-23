import React from 'react';
class Like extends React.Component {
  state = {
    isHovered: false,
  };

  handleMouseOver = () => {
    this.setState({ isHovered: true });
  };

  handleMouseOut = () => {
    this.setState({ isHovered: false });
  };

  getLikeClass = () => {
    const { isLiked } = this.props;
    const { isHovered } = this.state;
    let className = isLiked
      ? 'bi bi-hand-thumbs-up-fill'
      : 'bi bi-hand-thumbs-up';
    className += isHovered ? ' text-info' : ' ';
    return className;
  };

  getDislikeClass = () => {
    const { isDisliked } = this.props;
    const { isHovered } = this.state;

    let className = isDisliked
      ? 'bi bi-hand-thumbs-down-fill'
      : 'bi bi-hand-thumbs-down';
    className += this.state.isHovered ? ' text-info' : ' ';
    return className;
  };

  render() {
    return (
      <>
        <i
          className={this.getLikeClass()}
          type="button"
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onClick={() => this.props.handleLike(this.props.postId)}
        />
        <i
          className={this.getDislikeClass()}
          type="button"
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onClick={() => this.props.handleDislike(this.props.postId)}
        />
      </>
    );
  }
}

export default Like;