import React, {useEffect, useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Card from './Cards'


const Home = () => {

    const [taskers, setTasks] = useState([]);

    useEffect(() => {
      const loadData = () => {
      fetch('http://localhost:8000/api/tasks/produtodb/')
      .then(response => response.json())
      .then(data => setTasks(data))
    }
  
    loadData()
  
    }, [])

    return(
        <Container className='py-4'>
            <Row className='justify-content-center'>
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        {taskers.map(tasker => (
                            <Card key={tasker.nome} nome={tasker.nome} preco={tasker.preco} img={tasker.descricao}/>
                    ))}
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home