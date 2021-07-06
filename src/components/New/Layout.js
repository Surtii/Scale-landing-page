import React from 'react'
import Hero from './Hero'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <section>
            <Hero/>
            {props.children}
            <Footer/>
        </section>
    )
}

export default Layout
