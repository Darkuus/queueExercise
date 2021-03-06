import React, { useEffect, useState } from 'react';
import { Content } from './style'
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../store';
import { GetPriQueues, DisablePriQueue } from '../../Store/Actions/PriQueueActions';
import { GetNPriQueues, DisableNPriQueue } from '../../Store/Actions/NPriQueueActions';

const PriBox: React.FC = (props) => {
    const [queueToBeRendered, setQueueToBeRendered] = useState(0)

    const priQueueState = useSelector((state: RootStore) => state.priQueue)
    const nPriQueueState = useSelector((state: RootStore) => state.nPriQueue)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(GetPriQueues(1))
        dispatch(GetNPriQueues(1))
    },[])

    useEffect(() => {
        if(priQueueState.priQueue && priQueueState.priQueue.length)
            setQueueToBeRendered(0)
        else
            setQueueToBeRendered(1)
    },[priQueueState.priQueue])

    function dequeue() {
        if(priQueueState.priQueue && priQueueState.priQueue.length)
            dispatch(DisablePriQueue(priQueueState.priQueue[0].Code))
        else if(nPriQueueState.nPriQueue && nPriQueueState.nPriQueue.length)
            dispatch(DisableNPriQueue(nPriQueueState.nPriQueue[0].Code))
    }   

    return (
        <Content className="w-100">
            <div className="container">
                <h1>Priority Box</h1>        
                <button onClick={dequeue} className="btn btn-submit mb-2">Call Next</button>
                <table>
                    <thead>
                        <tr>
                        <th>Code</th>
                        <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        { queueToBeRendered == 0 ? 
                            priQueueState.priQueue.map((queue,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{queue.Code}</td>
                                        <td>{queue.CPF}</td>
                                    </tr>
                                )   
                            })
                            :
                            nPriQueueState.nPriQueue.map((queue,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{queue.Code}</td>
                                        <td>{queue.CPF}</td>
                                    </tr>
                                )   
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Content>
    )
}
export default PriBox;