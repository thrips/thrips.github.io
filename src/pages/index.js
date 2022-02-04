import * as React from 'react'
import TitlePage from '../components/TitlePage'

const IndexPage = () => {
    let titleProps =  {
        title: "yan the ham's meme museum",
        subtitle: "a place for fun.",
    }
    return (
        <React.Fragment>
            <TitlePage {...titleProps}></TitlePage>
        </React.Fragment>
    )
}

export default IndexPage
