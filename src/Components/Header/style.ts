import styled from 'styled-components'

export const Content = styled.div`
    h1{
        color: #fff;
    }    
    h3{
        font-size: 2rem;
        color: white;
    }
    .header{
        width: 100vw;
        height: 6.5rem;
        text-align: center;
        border-bottom: 2px solid #8378F4;
    }
    .header h1{
        margin-top: 0;
    }
    .content{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
`