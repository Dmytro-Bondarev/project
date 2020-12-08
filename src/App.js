import React, {Component} from 'react';
import User from "./component/mas/user";

class App extends Component {
    user =[
         {
           id: 1,
           name: "Graham",
           username: "Bret"
          },
         {
           id: 2,
           name: "Howell",
           username: "Antoinette"
         },
         {
           id: 3,
           name: "Baruch",
           username: "Samantha"
         },
         {
           id: 4,
           name: "Leaseback",
           username: "Karine"
        },
      ];
    render() {
        return (
            <div>
                {
                    this.user.map((value) => {
                        return (<User item={value}/> )
                    } )
                }
            </div>
        );
    }
}

export default App;