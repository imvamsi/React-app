import React, { Component } from 'react';

//Columns: array
//sortColumn: object
//onSort: function
class TableHeader extends Component {


    renderSortIcon = column => {
        if (column.path !== this.props.sortColumn.path ) return null;

        if(this.props.sortColumn.order==='asc') return <i className="fa fa-sort-alpha-asc"></i>;
        return <i className="fa fa-sort-alpha-desc"></i>;
    }


    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};

        if(sortColumn.path===path){
            sortColumn.order=(sortColumn.order==='asc')?'desc':'asc';
        }else{
            sortColumn.path=path;
            sortColumn.order='asc'; 
        }
        this.props.onSort(sortColumn);
    }
    render() { 
        return ( <thead>
            <tr>
                { this.props.columns.map(column => (<th key={column.path || column.key} 
                onClick={()=>this.raiseSort(column.path)}>{column.label} {this.renderSortIcon(column)}</th> ))  }
            </tr>
        </thead> );
    }
}
 
export default TableHeader;