import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Example = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('/posts')
    .then(resp => setPosts(resp.data))
  }, [])
  return <div>
    {posts.map(post => {
      console.log(post)
      return <p key={'post-list-' + post.post_id}>{post.title} by {post.first_name} {post.last_name}</p>
    })}
  </div>
}