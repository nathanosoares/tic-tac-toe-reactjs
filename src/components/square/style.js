import styled from 'styled-components'

export const SquareStyled = styled.div`
    background: ${props => props.winner ? "#28a745" : "#fff"};
    width: calc(100% / 3);
    height: calc(100% / 3);
    box-sizing: border-box;
    padding: .5rem;
    border: solid 1px black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MarkStyled = styled.img`
    width: 30px;
`