import React, {Component} from 'react';
import PostInfo from "./PostInfo";
import CommentsInfo from "./CommentsInfo";
import {ServiseComments} from "../services/ServiseComments";
import {ServisePost} from "../services/ServisePost";


class Post extends Component {
    GetServiseComments = new ServiseComments()
    GetServisePost = new ServisePost()
    state = {posts:[],comments:[]};

    componentDidMount() {
        this.GetServisePost.getPost().then(postAPI=>this.setState({posts: postAPI}));
        this.GetServiseComments.getCom().then(commentsAPI=>this.setState({comments: commentsAPI}));
    };


    render() {
        let {posts,comments} = this.state;
        return (
            <div>
                <h1>Posts List</h1>

                {
                    posts.map(value => (<PostInfo info={value} key={value.id}/>))
                }
                {
                    comments.map(value => (<CommentsInfo info={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default Post;