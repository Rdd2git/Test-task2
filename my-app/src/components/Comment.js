import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="avatar">
          <image href=""></image>
        </div>
        <div className="dateTime"></div>
        <div className="avtor">Comment Avtor</div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          inventore perferendis quo debitis nobis a. Totam, tempore dolor cum
          natus recusandae laudantium harum repudiandae labore molestias quam id
          atque architecto!
        </div>
        <div className="reply"></div>
      </div>
    );
  }
}

export default Comment;
