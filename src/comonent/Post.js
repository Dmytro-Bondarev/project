import React, {Component} from 'react';
import PostInfo from "./PostInfo";
import CommentsInfo from "./CommentsInfo";


class PostsArr extends Component {
    state = {posts:[],comments:[]};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsAPI =>{
                this.setState({posts:postsAPI});
            });
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsAPI =>{
                this.setState({comments:commentsAPI});
            });
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

export default PostsArr;