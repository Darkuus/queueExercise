import React, { useEffect, useState } from 'react';
import { Content } from './style'
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../store';
import { GetNPriQueues, DisableNPriQueue } from '../../Store/Actions/NPriQueueActions';
import { GetPriQueues, DisablePriQueue } from '../../Store/Actions/PriQueueActions';

const NPriBox: React.FC = (props) => {
    const [queueToBeRendered, setQueueToBeRendered] = useState(0)

    const nPriQueueState = useSelector((state: RootStore) => state.nPriQueue)
    const priQueueState = useSelector((state: RootStore) => state.priQueue)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(GetNPriQueues(1))
        dispatch(GetPriQueues(1))
    },[])

    useEffect(() => {
        if(nPriQueueState.nPriQueue && nPriQueueState.nPriQueue.length)
            setQueueToBeRendered(0)
        else
            setQueueToBeRendered(1)
    },[nPriQueueState.nPriQueue])

    function dequeue() {
        if(nPriQueueState.nPriQueue && nPriQueueState.nPriQueue.length)
            dispatch(DisableNPriQueue(nPriQueueState.nPriQueue[0].Code))
        else if(priQueueState.priQueue && priQueueState.priQueue.length)
            dispatch(DisablePriQueue(priQueueState.priQueue[0].Code))
    }   

    return (
        <Content className="w-100">
            <div className="container">
                <h1>Non Priority Box</h1>        
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
                            nPriQueueState.nPriQueue.map((queue,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{queue.Code}</td>
                                        <td>{queue.CPF}</td>
                                    </tr>
                                )   
                            })
                            :
                            priQueueState.priQueue.map((queue,i)=>{
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
export default NPriBox;