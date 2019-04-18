import React from 'react';

const Input = ({value, name, onChange, label}) => {
    return ( 
        <div className="form-group">
        <label htmlFor="">{label}</label>
        <input value ={value} id={ name } name={name} onChange={onChange} type="text" className="form-control"/>
      </div>
     );
}
 
export default ;