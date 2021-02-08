import React, {Component} from 'react';
import AllPost from "./Components/All_post/AllPost";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllCom from "./Components/All_Coment/All_Com";
class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <div>
                <Link to={'/posts'}>
                    posts
                </Link>
                </div>
                <div>
                <Link to={'/coments'}>
                    coments
                </Link>
                </div>
                <Switch>
                    <Route path={'/posts'} component={AllPost}/>
                    <Route path={'/coments'} component={AllCom}/>
                </Switch>
            </div>

            </Router>
        );
    }
}

export default App;