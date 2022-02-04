import * as React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const NavBar = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
`

const NavBarElement = styled.li`
    font-weight: bold;
    float: right;
    padding: 30px;

`
const StyledLink = styled(props => <Link {...props}/>)`
    &:focus, &:visited, &:link {
        text-decoration: none;
        color: black;
    }
    &:hover, &:active {
        color: #688D8B;
    }
`
const Header = () => {
    return (
        <NavBar>
            <NavBarElement><StyledLink to="/">home</StyledLink></NavBarElement>
            <NavBarElement><StyledLink to="/stuff/">my stuff</StyledLink></NavBarElement>
        </NavBar>
    )
}

export default Header