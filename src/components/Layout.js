import * as React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Maze from './Maze'

const GlobalStyle = createGlobalStyle`
    * {
        font-family:  'Courier New', Courier, monospace;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
const Content = styled.div`
    position: fixed;
    width: 100%;
`
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Maze />
            <Content>
                <Header />
                {children}
            </Content>
        </React.Fragment>

    )
}

export default Layout