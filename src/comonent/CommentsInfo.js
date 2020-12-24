import React, {Component} from 'react';
import './ComentsInfoStyle.css'

class CommentsInfo extends Component {
    state = {cmtOn:"off"}
    no = true;

    hidenCmt =()=>{
        if (this.no){
            this.setState({cmtOn:'on'})
        }else {
            this.setState({cmtOn:'off'})
        }
        this.no = !this.no
    }

    render() {
        let {info} = this.props;
        console.log(this.props)
        let {cmtOn} = this.state;
        return (
            <div>
                {info.postId}-{info.name}
                <br/>
                {info.email}
                <button onClick={this.hidenCmt}>Read</button>
                <br/>
                <div className={cmtOn}>
                    {info.body}
                </div>

            </div>
        );
    }
}

export default CommentsInfo;