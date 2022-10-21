import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const LeftNavBar = () => {
    const {user} = useContext(AuthContext);
    const [catagorys, setCatagorys] = useState([]);
    // console.log(catagorys);
    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res => res.json())
        .then( data => setCatagorys(data))
    },[]);

    const loginAlred = () =>{
        if(!user){
            toast.error('Please lgoin, befor read')
        }
    }

    return (
        <div>
            <h3>All Catagory {catagorys.length}</h3>
            {
                catagorys.map(catagory => <p className='mb-1' key={catagory.id}><Link onClick={loginAlred} className='text-decoration-none fs-5' to={`catagory${catagory.id}`}>{catagory.name}</Link></p>)
            }
        </div>
    );
};

export default LeftNavBar;