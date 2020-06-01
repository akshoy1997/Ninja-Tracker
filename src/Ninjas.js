import React from 'react';
import './Ninjas.css';

function Ninjas({id, name, age, belt, deleteNinja}){
    return age > 20 ? (
        <div className="Ninjas">
            <div>Name: { name }</div>
            <div>Age: { age }</div>
            <div>Belt: { belt }</div>
            <button className="DeleteNinja" onClick={() => {deleteNinja(id)}}> Delete Ninja</button>
        </div>    
    ) : null;
}

export default Ninjas;