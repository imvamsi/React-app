import React, { Component } from 'react';

class Login extends Component {
    state = { 
        account:{username:'', password:''}
     }

    
    
    handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name]=e.currentTarget.value;
        this.setState({account:account});
    }
    
    
    
    
    handleSubmit = e => {
        e.preventDefault();
        console.log("Submitted");
    }
    render() { 
        return ( 
            
           <div className="container">
               <h1> Login </h1>
               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                     <label htmlFor="">Username</label>
                     <input value ={this.state.username} name="username" onChange={this.handleChange} type="text" className="form-control"/>
                   </div>

                   <div className="form-group">
                     <label htmlFor="">Password</label>
                     <input value={this.state.password} name="password" onChange={this.handleChange} type="text" className="form-control"/>
                   </div>
                   <button className = "btn btn-primary">Login</button>
               </form>    


               
           </div>
                    


         );
    }
}
 
export default Login;