import React from 'react'
import { SquareStyled, MarkStyled } from './style'
import xMark from '../../images/x-mark.svg'
import oMark from '../../images/o-mark.svg'

export default class Square extends React.Component {

    render() {
        return (
            <SquareStyled onClick={() => this.props.onClick()} winner={this.props.winner}>
                {this.props.value != null ? (
                    this.props.value === 'X' ? (
                        <MarkStyled src={xMark} />
                    ) : (
                            <MarkStyled src={oMark} />
                        )
                ) : <></>}
            </SquareStyled>
        );
    }
}