import React from "react";
import { Button, Card } from 'react-bootstrap'; 

const Cards = (props) => {
    return (
    <div>
        <Card 
        style={{ background: 'rgba(000, 000, 000, 0.1)', width: '18rem', textAlign: 'center', height:'auto', display: 'flex'}}
        className={`text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
        <div style={{background: 'rgba(000, 000, 000, 0.1)', height: '15rem', overflow: 'hidden', display:'flex',
        justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit'}}>
            <Card.Img style={{width: '70%', marginTop: '30px', boxShadow: '3px 3px 20px black'}} variant="top" src="https://m.media-amazon.com/images/I/71v0AfAn2qL._AC_SX342_.jpg" className="img-fluid" />
        </div>
        <Card.Body>
            <Card.Title style={{color:'white', borderBottom: 'solid 1px white', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>FIFA 18</Card.Title>
            <Card.Title style={{color:'white'}}>R$ <span className="h3">400</span></Card.Title>
            <Button variant="primary">Adicionar ao Carrinho</Button>
        </Card.Body>
        </Card>
    </div>
    )
};

export default Cards