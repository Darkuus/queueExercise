import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { persistor } from '../..';

const HomeButton:React.FC = () => {

    function handleClick(){
        persistor.purge()
    }

    return (
        <Link to="/" onClick={handleClick}>
            SignOut
        </Link>
    )
}

export default HomeButton;