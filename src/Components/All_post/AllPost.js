import React, {Component} from 'react';
import PostSer from "../servise/PostSer";
import Post from "../Post/Post";

class AllPost extends Component {
    state ={post :[]};
    postService = new PostSer()

    async componentDidMount() {
        let post = await this.postService.ServesPost();
        this.setState({post})
    }

    render() {
        let {post} = this.state
        return (
            <div>
                {post.map(value => <Post key={value.id} item={value}/>)}
            </div>
        );
    }
}

export default AllPost;