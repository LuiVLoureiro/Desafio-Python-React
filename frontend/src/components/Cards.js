import React from "react";
import { Button, Card } from 'react-bootstrap'; 
import { BsCartPlus } from 'react-icons/bs';


const addToCart = (props) => {
    const urlParams = new URLSearchParams(window.location.search);
    const usuarioId  = urlParams.get('id');
    const usuarioNome  = urlParams.get('nome');
    if (usuarioId === null || usuarioNome === null) {
      alert("Você não está logado! Por favor cadastre-se para adicionar produtos ao carrinho.");
      window.location.href = "/cadastro-usuario";
    } else {
      const carrinho = {
        usuarioId: urlParams.get('id'),
        usuarioNome: urlParams.get('nome'),
        produtoId: props.produtoid,
        quantidade: props.quantidade,
        subtotal: props.subtotal,
        frete: props.frete
      }
    
      fetch('http://localhost:8000/api/tasks/carrinhodb/', {
          method: 'POST',
          body: JSON.stringify(carrinho),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
      }
    }

const Cards = (props) => {
    
    return (
    <div>
        <Card 
        style={{ background: 'rgba(000, 000, 000, 0.1)', width: '18rem', textAlign: 'center', height:'auto', display: 'flex'}}
        className={`text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
        <div style={{background: 'rgba(000, 000, 000, 0.1)', height: '15rem', overflow: 'hidden', display:'flex',
        justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit'}}>
            <Card.Img style={{width: '70%', marginTop: '30px', boxShadow: '3px 3px 20px black'}} variant="top" src={props.img} className="img-fluid" />
        </div>
        <Card.Body>
            <Card.Title style={{color:'white', borderBottom: 'solid 1px white', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{props.nome}</Card.Title>
            <Card.Title style={{color:'white'}}>R$ <span className="h3">{props.preco}</span></Card.Title>
            <Button 
                onClick={()=> addToCart(props)}
                variant="primary">
                <BsCartPlus size="1.5rem"
                /> 
                Adicionar ao Carrinho
                
            </Button>
        </Card.Body>
        </Card>
    </div>
    )
};




export default Cards