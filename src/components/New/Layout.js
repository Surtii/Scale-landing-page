import React from 'react'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <section>
            {props.children}
            <Footer/>
        </section>
    )
}

export default Layout
