import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                <h1>
                    {item.id} - {item.name} - {item.username}
                </h1>

            </div>
        );
    }
}

export default User;