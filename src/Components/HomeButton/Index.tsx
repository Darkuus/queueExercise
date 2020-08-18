import React, {useState} from 'react';
import { Content } from  './styles';
import { Link } from 'react-router-dom';

interface HomeButtonProps{
    text: string
    className: string
    to: string
}

const HomeButton:React.FC<HomeButtonProps> = (props) => {

    return (
        <Content>
            <Link to={props.to} className={props.className}>
                {props.text}
            </Link>
        </Content>
    )
}

export default HomeButton;