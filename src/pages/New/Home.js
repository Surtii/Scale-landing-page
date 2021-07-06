import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import Layout from '../../components/New/Layout'

const Home = () => {
    return (
        <Layout>
            <section className="scalex-home">
                <Container>
                    <Row>
                        <Col>
                            <p> Hi </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default Home
