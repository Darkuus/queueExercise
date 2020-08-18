import React, { useEffect } from 'react';
import { Content } from './style'
import HomeButton from '../../Components/HomeButton/Index';
import { useSelector, useDispatch, connect, ConnectedProps } from "react-redux";
import { RootState } from "../../Store/combinedReducer";
import { getPriQueue } from '../../Store/actions'
import { Dispatch, bindActionCreators, AnyAction } from 'redux';


const mapState = (state: RootState) => ({ data: state.priQueue.data })
const mapDispatch = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ getPriQueue }, dispatch)

const connector = connect(
    mapState,
    mapDispatch
)
type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
}


const Home: React.FC<Props> = (props: Props) => {

    async function handleClick(){
        props.getPriQueue(1)
    }

    return (
        <Content className="w-100">
            <div className="container">
                <button onClick={(e) => handleClick()}>clique aqui</button>
            </div>
        </Content>
    )
}
{/* <Content className="w-100">
    <div className="container">
        <h1>Choose your line</h1>
        <div className="content">
            <HomeButton text="Preferential" className="btn btn-green mb-2" to="PickPriQueue"/>
            <HomeButton text="Non Preferential" className="btn btn-orange" to="PickNPriQueue"/>
        </div>
    </div>
</Content> */}
export default Home;