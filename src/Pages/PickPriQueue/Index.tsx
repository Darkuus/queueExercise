import React, { useState } from 'react';
import { Content } from './style'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { PickPriQueue as PickPriQueueAction } from '../../Store/Actions/PriQueueActions'

const PickPriQueue: React.FC = () => {
    const [cpf, setCpf] = useState<string>('')
    const dispatch = useDispatch()
    let history = useHistory();

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        try{
            if(!cpf || cpf.length < 11){
                alert('Invalid Cpf :/')
                return
            }
            dispatch(PickPriQueueAction(cpf))
            history.push('/ClientInfo')
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