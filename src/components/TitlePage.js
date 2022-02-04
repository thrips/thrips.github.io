import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import TitleSubtitle from '../components/TitleSubtitle'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    padding-left: 40px;
`

const TitlePage = (titleProps) => {
    return (
        <React.Fragment>
            <Layout>
                <Content>
                    <TitleSubtitle {...titleProps}/>
                </Content>
            </Layout>
        </React.Fragment>
    )
}

export default TitlePage
