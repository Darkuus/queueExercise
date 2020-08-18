import styled from 'styled-components';

export const Content = styled.div`
    h1,span{
        color: #59D9A4;
    }
    span{
        font-weight: bold;
        font-size: 1.2rem;
    }
    input{
        margin-top: .4rem;
        display: flex;
    }
    form{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .button-container{
        position: absolute;
        bottom: 0;
        margin-bottom: 3rem;
    }
`;