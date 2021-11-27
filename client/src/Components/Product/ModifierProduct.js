import { useState } from "react";
import {Modal,Button} from "react-bootstrap"
import {  editProduct } from "../../JS/actions/Product";
import { useDispatch, useSelector } from 'react-redux'

function ModifierProduct({id}) {
    const dispatch = useDispatch();

    const prod = useSelector((state) => state.productReducer.product);
    const [product, setProduct] = useState({ catégorie: "", image: "", meuble: "", adresse: "", gouvernerat: "", prix: "", bailleur: "", tel: "", description: "" });
  
    //handle contact
    const handleProduct = (id,product) => {
  
      dispatch( editProduct(id,product));
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
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
             <label>  Catégorie : <input type="text" name="catégorie"onChange={handleChange} /></label>
             <label>  Image : <input type="text" name="image"  onChange={handleChange}/></label>
             <label>  Meublé : <input type="text" name="meublé" onChange={handleChange} /></label>
             <label>  Adresse : <input type="text" name="adresse" onChange={handleChange}/></label>
             <label>  Gouvernerat : <input type="text" name="gouvernerat" onChange={handleChange}/></label>
             <label>  Prix : <input type="number" name="prix"onChange={handleChange} /></label>
             <label>  Bailleur : <input type="text" name="bailleur"onChange={handleChange} /></label>
             <label>  Tél : <input type="number" name="tel" onChange={handleChange} /></label>
        </form>
          </Modal.Body>
          <Modal.Footer>
            
          <Button style={{backgroundColor:'rgb(143, 145, 21)',borderColor:'rgb(143, 145, 21)',marginLeft:10}} onClick={()=>{dispatch(editProduct(id,product));handleClose()}}>Confirmer les modificatios </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default ModifierProduct