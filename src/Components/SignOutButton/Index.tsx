import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { persistor } from '../..';

const SignOutButton:React.FC = () => {

    function handleClick(){
        persistor.purge()
    }

    return (
        <Link to="/" onClick={handleClick} className="btn-red">
            SignOut
        </Link>
    )
}

export default SignOutButton;