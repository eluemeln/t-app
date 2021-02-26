import React, { Component } from 'react';




class Users extends Component {
    state = {
      users: []
    }
    componentDidMount() {
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ users: data })
        console.log(this.state.users)
      })
      .catch(console.log)
    }

    render() {

        return (
        <React.Fragment>
           <table>
               <h1>Users</h1>
            <tr>
                <th>userId</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                       
            </tr> 
            
            {this.state.users.map((user) => (
        
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.addess}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
            
            </tr>            
              
            ))}
            </table>
                <p></p>
               <button> <a href ="http://jsonplaceholder.typicode.com/users">Click here to see the end point</a></button>
           
        </React.Fragment>
            
                  
            
        );
    }


}
export default Users;