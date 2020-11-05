import React, { Component } from "react";
import Post from './Post'

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {user: 'Jake', content: 'Post'},
        {user: 'Jake', content: 'Post2'},
        {user: 'Jake', content: 'Post3'},
        {user: 'Jake', content: 'Post4'},
        {user: 'Jake', content: 'Post5'}
      ]
    }
  }

  renderPosts() {
      return this.state.posts.map(post => <Post post={post} />)
  }

  render() {
   return(
    <div className="App">
      {this.renderPosts()}
    </div>
    )
  }
}
export default Posts;