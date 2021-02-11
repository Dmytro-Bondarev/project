import React, {Component} from 'react';

class PostUser extends Component {
    state = {posts: []}
 componentDidMount() {
     let {userId}= this.props;
     fetch('https://jsonplaceholder.typicode.com/posts?usersId='+ userId)
         .then(value => value.json())
         .then(value => {this.setState({posts: value})})
 }


        render() {
            const {posts} = this.state
        return (
            <div>
                {
                    posts.map(value => <div> {value.title} - {value.body}
                    <hr/> </div>)
                }
            </div>

        );
    }
}

export default PostUser;