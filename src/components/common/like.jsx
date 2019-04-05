import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    render() { 
        let classes = "fa fa-heart";
            if(!this.props.liked) classes+="-o";
        return ( 
            
            <i 
            className={classes} 
            aria-hidden="true"
            onClick={this.props.onClick}
            style={{cursor:"pointer" , color:"red"}}
            
            
            >
            </i>
         );
    }
}
 
export default Like;