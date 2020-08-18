import React from 'react';
import { Content } from './style'
import HomeButton from '../../Components/HomeButton/Index';

const Home: React.FC = () => {
    return (
        <Content className="w-100">
            <div className="container">
                <h1>Choose your line</h1>
                <div className="content">
                    <HomeButton text="Preferential" className="btn btn-green mb-2" to="PickPriQueue"/>
                    <HomeButton text="Non Preferential" className="btn btn-orange" to="PickNPriQueue"/>
                </div>
            </div>
        </Content>
    )
}

export default Home;