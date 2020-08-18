import React, { useState } from 'react';
import { Content } from './style'
import api from '../../Services/api';
import { useDispatch } from 'react-redux';

const PickPriQueue: React.FC = () => {
    const [cpf, setCpf] = useState<string>('');
    const dispatch = useDispatch()

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
            const PriQueueResponse = await api.get('/PriQueue/1')

            dispatch({
                type: "ADD_PRIQUEUE",
                payload: PriQueueResponse
            })

            console.log(PriQueueResponse)
            alert('nice')
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
                    
                </form>
            </div>
        </Content>
    )
}

export default PickPriQueue;