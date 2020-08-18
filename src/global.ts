import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    body{
        background-color: #262D37;
    }
    .w-100{
        width: 100% !important;
    }
    .mb-2{
        margin-bottom:2rem;
    }
    .mb-1{
        margin-bottom: 1rem;
    }
    .container{
        height: calc(92vh - 4rem);
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
    }
    .btn{
        width: 18rem;
        height: 4rem;
        border-radius: 8px;
        color: #fff;
        font-size: 1.6rem;
    }
    .btn-green{
        background-color: #38414E;
        border: 2px solid #59D9A4;
        font-weight: bold;
        color:#59D9A4;
    }
    .btn-orange{
        background-color: #38414E;
        border: 2px solid #ED6325;
        font-weight: bold;
        color: #ED6325;
    }
    .btn-submit{
        width: 12rem;
        height: 2.6rem;
        background-color: #8378F4;
        border:none;
        border-radius: 5px;
        color: #fff;
        font-size: 1.4rem;
        font-weight: bold;
    }
    .input{
        height: 2rem;
        width: 18rem;
        border:none;
        border-radius: 5px;
    }
`;