import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { Content } from './style';

const ClientInfo: React.FC = (props) => {
    const clientInfoState = useSelector((state: RootStore) => state.clientInfo.clientInfo)
    return (
        <Content>
            <div className="container">
                <div className="ticket-container">
                    <h3>Your ticket is:</h3>
                    <h2>{clientInfoState.Code}</h2>
                    <span><b>CPF</b>: {clientInfoState.CPF}</span>
                </div>
            </div>
        </Content>
    )
}
export default ClientInfo;