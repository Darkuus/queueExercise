import React, { useEffect } from 'react';
import { Content } from './style'
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../store';
import { GetPriQueues, DisablePriQueue } from '../../Store/Actions/PriQueueActions';

const PriBox: React.FC = (props) => {
    const priQueueState = useSelector((state: RootStore) => state.priQueue)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(GetPriQueues(1))
    },[])

    function dequeue() {
        dispatch(DisablePriQueue(priQueueState.priQueue[0].Code))
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
                        {priQueueState.priQueue.map((queue,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{queue.Code}</td>
                                    <td>{queue.CPF}</td>
                                </tr>
                            )   
                        })}
                    </tbody>
                </table>
            </div>
        </Content>
    )
}
export default PriBox;