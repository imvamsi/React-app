import React, { Component } from 'react';

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            
           <div className="container">
               <h1> Login </h1>
               <form>
                   <div className="form-group">
                     <label htmlFor="">Username</label>
                     <input type="text" className="form-control"/>
                   </div>

                   <div className="form-group">
                     <label htmlFor="">Password</label>
                     <input type="text" className="form-control"/>
                   </div>
                   <button className = "btn btn-primary">Login</button>
               </form>    


               
           </div>
                    


         );
    }
}
 
export default Login;