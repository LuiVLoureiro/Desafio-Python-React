import React, {useEffect, useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Card from './Cards'
const Home = () => {
    return(
        <Container className='py-4'>
            <Row className='justify-content-center'>
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col>
                        <Card/>
                    </Col>
                ))};
            </Row>
        </Container>
    );
};

export default Home