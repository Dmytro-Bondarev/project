import React, {Component} from 'react';
import AllPost from "./Components/All_post/AllPost";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllCom from "./Components/All_Coment/All_Com";
import All_User from "./Components/All_User/All_User";
class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <div>
                <Link to={'/user'}>
                    user
                </Link>
                </div>
            <div>
                <hr/>
                <Switch>
                    <Route path={'/user'} render={()=><All_User/>}/>

                </Switch>
                <hr/>
            </div>
            </div>

            </Router>
        );
    }
}

export default App;