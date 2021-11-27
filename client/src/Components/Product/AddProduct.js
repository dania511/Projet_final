import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap'
import { addProduct} from "../../JS/actions/Product";
function AddProduct() {
  const dispatch = useDispatch();
  
  const prod = useSelector((state) => state.productReducer.product);
  const [product, setProduct] = useState({ catégorie: "", image: "", meuble: "", adresse: "", gouvernerat: "", prix: "", bailleur: "", tel: "", description: "" });

  //handle contact
  const handleProduct = () => {

    dispatch( addProduct(product));
    handleClose()


  };
  //handle change 
  const handleChange = (e) => {
    e.preventDefault();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };






  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ajouter votre offre
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remplir les champs</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <label>Catégorie</label> <input  name='catégorie' onChange={handleChange} type="text" placeholder="studio,garage,villa,appartement,maison..."></input><br></br>
          <label>Image</label> <input  name='image' onChange={handleChange} type="url" placeholder="descrption or summary.."></input><br></br>
          <label>Meuble</label><input  name='meuble' onChange={handleChange} type="text" placeholder="meublé ou non"></input><br></br>
          <label>Adresse</label><input  name='adresse' onChange={handleChange} type="text" placeholder="Adresse"></input><br></br>
          <label>Gouvernerat</label> <input  name='gouvernerat' onChange={handleChange} type="text" placeholder="Gouvernerat"></input><br></br>
          <label>Prix</label> <input  name='prix' onChange={handleChange} type="text" placeholder="prix par mois, semaine ou jour"></input><br></br>
          <label>Bailler</label><input  name='bailleur' onChange={handleChange} type="text" placeholder="Nom du bailleur"></input><br></br>
          <label>Tél</label><input  name='tel' onChange={handleChange} type="number" placeholder="Num. du tél."></input><br></br>
          <label>Description</label><input  name='description' onChange={handleChange} type="text" placeholder="ecrire les détails (surface,nbr de chambres,...)"></input><br></br>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(addProduct(product));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AddProduct