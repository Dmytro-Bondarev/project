import React, {Component} from 'react';
import UserSer from "../servise/UserSer";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import PostUser from "../PostUser/PostUser";

class FullUser extends Component {
    state = {user: null};
    userServise = new UserSer();

    async componentDidMount() {
        let {id} = this.props;
        let user = await this.userServise.user(id);
        this.setState({user});
    }

    render() {
        let {user} = this.state
        let {match:{url},userId} = this.props
        return (
            <div>
                    {user && <div>{user.id}-{user.name}-{user.username}-{user.email} <Link to={url + '/posts' } > Posts</Link> </div>}
    <Route path={url+  '/posts'} render={() => {
        return <PostUser userId={userId} key={userId} /> ;
    }}/>

            </div>
        );
    };
};

export default withRouter(FullUser);