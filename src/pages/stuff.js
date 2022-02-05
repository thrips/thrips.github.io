import * as React from 'react'
import TitlePage from '../components/TitlePage'

const StuffPage = () => {
    let titleProps =  {
        title: "behold!",
        subtitle: "it's empty.",
    }
    return (
        <React.Fragment>
            <TitlePage {...titleProps}></TitlePage>
        </React.Fragment>
    )
}

export default StuffPage