import React, { Component } from 'react';
import _ from 'lodash';



class TableBody extends Component {

    renderCellContent = (item , column ) => {
        if(column.content) return column.content(item);

        return _.get(item, column.path);


    }
   
    render() { 
        const {data, columns } = this.props;
        return ( 

        
            <tbody>
                {data.map(item =>  (<tr key={item._id}>
                    {columns.map(column => <td key ={item._id + (column.path || column.key)}> {this.renderCellContent(item, column)}</td> )} </tr>
                    
                 ))}
                

            </tbody>
         );
    }
}
 
export default TableBody;