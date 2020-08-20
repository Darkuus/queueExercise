import styled from 'styled-components';

export const Content = styled.div`
    h1{
        color: #ffff55;
    }

    table{
        width: 35%;
        border: 4px solid #ffff55;
        border-radius: 5px;
        border-spacing: 0;
        color: white;
        text-align: left;
    }
    tbody tr:first-child{
        color: black;
        background:#59D9A4;
    }
    thead{
        font-size: 1.5rem;
    }
    tr:first-child,td:first-child,th:first-child{
        border-right: 4px solid #ffff55;
    }
    tr,td,th{
        border-bottom: 4px solid #ffff55;
        border-collapse: collapse;
    }
    tbody tr:last-child td{
        border-bottom:none;
    }
    
`;