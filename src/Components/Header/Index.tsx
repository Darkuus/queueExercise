import React from 'react';
import SignOutButton from '../SignOutButton/Index';
import { Content } from  './style';

const Header:React.FC = () => {
    return (
        <Content>
            <div className="header">
                <h1>Queue Manager</h1>
                <SignOutButton/>
            </div>
        </Content>
    )
}
export default Header
            