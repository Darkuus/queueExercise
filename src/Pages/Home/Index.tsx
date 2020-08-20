import React, { useEffect } from 'react';
import { Content } from './style'
import HomeButton from '../../Components/HomeButton/Index';

const Home: React.FC = (props) => {
    return (
        <Content className="w-100">
            <div className="container">
                <div className="content">
                    <h3>Manager</h3>
                    <HomeButton text="Preferential Queue" className="btn btn-green mb-2" to="PriBox"/>
                    <HomeButton text="Non Preferential Queue" className="btn btn-orange" to="NPriBox"/>
                </div>
                
                <div className="content">
                    <h3>Client</h3>
                    <HomeButton text="Preferential" className="btn btn-green mb-2" to="PickPriQueue"/>
                    <HomeButton text="Non Preferential" className="btn btn-orange" to="PickNPriQueue"/>
                </div>
            </div>
        </Content>
    )
}
export default Home;