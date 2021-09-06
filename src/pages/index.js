import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    padding-left: 40px;
`

const Header = styled.h1`
    margin-top: 100px;
    margin-bottom: 20px;
    font-size: 55px;
    letter-spacing: 3px;
    font-weight: bolder;
`

const Paragraph = styled.p`
    width: 100%;
    font-size: 22px;
    font-weight: bold;
`
const IndexPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <Content>
                    <Header>
                        yan the ham's meme museum
                    </Header>
                    <Paragraph>
                        a place for fun.
                    </Paragraph>
                </Content>
            </Layout>
        </React.Fragment>
    )
}

export default IndexPage
