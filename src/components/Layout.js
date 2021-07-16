import React from 'react'
import Footer from './Footer'

import ErrorBoundary from './ErrorBoundary'

const Layout = (props) => {
    return (
        <>
            <ErrorBoundary>
                {props.children}
                <Footer/>
            </ErrorBoundary>
        </>
    )
}

export default Layout
