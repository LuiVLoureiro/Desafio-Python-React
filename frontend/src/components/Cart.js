import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import Card from './Cards'


const Cart = (props) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
      const loadData = () => {
      fetch('http://localhost:8000/api/tasks/produtodb/')
      .then(response => response.json())
      .then(data => setCart(data))
    }
  
    loadData()
  
    }, [])

    return(
        <Container className='py-4'>
            <Row className='justify-content-center'>
                <ListGroup>
                    {cart.map(produto => (
                        <ListGroup.Item key={produto.UsuarioId}>
                            <Row>
                                <Col>
                                    <Card key={produto.ProdutoId} nome={produto.Nome} preco={produto.Preco} img={produto.Descricao}/>
                                </Col>
                                <Col>
                                    <Button variant="primary">Remover do Carrinho</Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Row>
        </Container>
    );
};

export default Cart