import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../Layout'

function about() {
    return (
        <div>
            <Layout pageTitle={'About'}>
                This is page about me

                <p> Let's go <Link to='/'> <a>Back</a> </Link> home </p>
            </Layout>
        </div>
    )
}

export default about
