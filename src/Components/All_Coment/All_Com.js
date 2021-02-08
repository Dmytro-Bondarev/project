import React, {Component} from 'react';
import ComSer from "../servise/ComSer";

class AllCom extends Component {
    state = {coment:[]};
    ComService = new ComSer()

    async componentDidMount() {
        let coment = await this.ComService.ServesCom();
        this.setState({coment});
    }

    render() {

        return (
            <div>
                
            </div>
        );
    }
}

export default AllCom;