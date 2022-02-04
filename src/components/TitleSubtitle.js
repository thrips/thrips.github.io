import * as React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    margin-top: 100px;
    margin-bottom: 20px;
    font-size: 55px;
    letter-spacing: 3px;
    font-weight: bolder;
`

const Subtitle = styled.p`
    width: 100%;
    font-size: 22px;
    font-weight: bold;
`

const TitleSubtitle = (props) => {
    return (
        <React.Fragment>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
        </React.Fragment>
    )
}

export default TitleSubtitle