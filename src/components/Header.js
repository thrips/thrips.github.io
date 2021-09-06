import * as React from 'react'
import styled from 'styled-components'

const NavBar = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
`

const NavBarElement = styled.li`
    font-weight: bold;
    float: right;
    padding: 30px;
    &:focus, &:visited, &:link {
        text-decoration: none;
    }
    &:hover, &:active {
        color: #688D8B;
    }
`

const Header = () => {
    return (
        <NavBar>
            <NavBarElement><a>my stuff</a></NavBarElement>
            <NavBarElement><a>home</a></NavBarElement>
        </NavBar>
    )
}

export default Header