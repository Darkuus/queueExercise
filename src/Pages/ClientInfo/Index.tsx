import React, { useEffect, useState } from 'react';
import api from '../../Services/api';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../store';
import { GetPriQueue } from '../../Store/Actions/PriQueueActions';

const ClientInfo: React.FC = (props) => {

    const priQueueState = useSelector((state: RootStore) => state.priQueue)
    const dispatch = useDispatch()
    const [cpf, setCpf] = useState('')

    useEffect(() => {
        dispatch(GetPriQueue(1))
        const cpf = priQueueState.priQueue[priQueueState.priQueue.length - 1].CPF
        const response = api.get(`/PriQueue/${cpf}`)
        console.log(response)
    })
    return (
        <div className="container">
            <h1>Choose your line</h1>
            <div className="content">
                <h1>Code:</h1>
                <h2>{}</h2>
            </div>
        </div>
    )
}
export default ClientInfo;