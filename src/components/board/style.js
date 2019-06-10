import styled from 'styled-components'

export const BoardStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    border: solid 1px black;
    width: 300px;
    height: 300px;
`

export const SectionStyled = styled.section`
    margin: 0 auto;
    width: max-content;
    text-align: center;
`

export const ResetButtonStyled = styled.span`
    background: #fff;
    border: none;
    padding: .6rem;
    font-size: 1.2rem;
    display: block;
    cursor: pointer;
    text-transform: uppercase;
`