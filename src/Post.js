import React, {Component} from 'react'
// import Posts from './Posts'

export default class Post extends Component {

  render() {
    return (
      <div className="post">
        <p>{this.props.post.user}</p>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
  
}

