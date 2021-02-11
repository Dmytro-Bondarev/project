import React, {Component} from 'react';
import UserSer from "../servise/UserSer";
import User from "../User/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    withRouter
} from "react-router-dom";
import FullUser from "../FullUser/FullUser";

class AllUser extends Component {
    userServise= new UserSer()
    state= {users: []}

     async componentDidMount() {
        let users = await this.userServise.ServesUser();
         this.setState({users});
    }

    render() {
        let {users}= this.state;
        let {match:{url}}= this.props;
        return (
            

            <div>
                {
                    users.map(value => <User item={value} key={value.id} />)
                }
                <hr/>
                <Switch>
                    <Route path={url +'/:id'} render={(props) => {
                       let {match:{params:{id}}}= props;

                        return <FullUser id={id} key={id} /> ;
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(AllUser);