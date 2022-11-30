import React, { useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProductThunk } from '../store/slices/cartProducts.slice';

const Sidebar = ({handleClose,show}) => {

        const dispatch = useDispatch()
        const getCartProducts = useSelector(state => state.cartProducts)
        useEffect(()=>{
            dispatch(getCartProductThunk())
        },[])


    return (
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    );
};

export default Sidebar;