import React, { Component } from 'react';





class UserApp extends Component {
    state = {
      todos: []
    }
    componentDidMount() {
      fetch('http://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data) => {
        this.setState({ todos: data })
        console.log(this.state.todos)
      })
      .catch(console.log)
    }

    render() {

        return (
        <React.Fragment>
         <h1>My Todos</h1>
           <table>
               
            <tr>
                <th>userId</th>
                <th>Title</th>
                <th>completed</th>
                       
            </tr> 
            {this.state.todos.map((todo) => (
        
            <tr>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.Completed}</td>
            
            </tr>            
              
            ))}
            </table>
                <p></p>
               <button> <a href ="https://jsonplaceholder.typicode.com/todos">Click here to see the end point</a></button>
           
        </React.Fragment>
            
                  
            
        );
    }


}
export default UserApp;