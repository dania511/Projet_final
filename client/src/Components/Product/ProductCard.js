import React from 'react'
import {Button}  from 'react-bootstrap'
import { useDispatch } from 'react-redux'


function ProductCard({produit}) {
     const dispatch = useDispatch();

    return (
        <div>       
        <div className="card" style={{width:" 336px", height:"550px", marginBottom:"20px" }}>
  <img style={{width:" 335px", height:"200px" }} src={produit.image} />
  <div className="card-body">
    <h5 style={{color: "darkred", font:"16px"}} className="card-title">{produit.catégorie}</h5>
    <p className="card-text">{produit.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{produit.meuble}</li>
    <li className="list-group-item">Adresse:  {produit.adresse}</li>
    <li className="list-group-item">Gouvernorat:   {produit.gouvernerat}</li>
    <li className="list-group-item">Prix:   {produit.prix}</li>
    <li className="list-group-item">Bailleur:   {produit.bailleur}</li>
    <li className="list-group-item">Tél:   {produit.tel}</li>
  </ul>
  <div className="card-body">
     {/* <Button style={{backgroundColor:'rgb(143, 145, 21)',borderColor:'rgb(143, 145, 21)',marginLeft:10}} onClick={()=>dispatch(editProduct(product))}>Modifier </Button>
     <Button variant="primary" style={{backgroundColor:'rgb(143, 145, 21)',borderColor:'rgb(143, 145, 21)',marginLeft:20}}  onClick={()=>dispatch(deleteProduct(product._id))} >Supprimer</Button> */}
  </div>
</div>

        </div>
    )
}

export default ProductCard
