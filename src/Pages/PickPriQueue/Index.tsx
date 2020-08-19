import React, { useState } from 'react';
import { Content } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store';
import api from '../../Services/api';
import { GetPriQueue } from '../../Store/Actions/PriQueueActions';
import { PriQueue } from '../../Types/PriQueue';

const PickPriQueue: React.FC = () => {
    const [cpf, setCpf] = useState<string>('')
    const priQueueState = useSelector((state: RootStore) => state.priQueue)
    const [priQueue, setPriQueue] = useState<PriQueue[]>([])
    const dispatch = useDispatch()

    console.log('priQueue state', priQueueState)

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        try{

            if(!cpf || cpf.length < 11){
                alert('Invalid Cpf :/')
                return
            }
            var request = {
                cpf: cpf
            }
            const response = await api.post('/PriQueue/save/', request)
            dispatch(GetPriQueue(1))
            setPriQueue(priQueueState.priQueue)
            console.log('pri queue state:', priQueue)
        }
        catch(ex){
            alert(`Internal Error: ${ex}`)
        }
    }

    return (
        <Content className="w-100">
            <div className="container">
                <h1>Preferential</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span className="mb-1">
                            CPF:
                        </span>
                        <input type="text" className="input" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    </div>
                    <div className="button-container">
                        <button className="btn-submit" type="submit">
                            Submit
                        </button>
                    </div>
                    <div>
                        <h1>codes:</h1>
                            <div>
                                {priQueue.map(queue => {
                                    console.log('ph hey')
                                    return (
                                        <h1 key={queue.CPF}>{queue.CPF}</h1>
                                    )
                                })}
                            </div>
                    </div>
                </form>
            </div>
        </Content>
    )
}

export default PickPriQueue;