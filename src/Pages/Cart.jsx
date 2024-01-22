import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { emptyCart, removeFromCart } from '../redux/slices/cartslices';

function Cart() {
  const [total, setTotal]=useState(0)

  const cartItems = useSelector((state) => state.cartReducer);
  let totalprice =0;
  cartItems?.forEach(item=>{
    totalprice=totalprice+item.price
  })
  // const getTotal=()=>{
  //   for (let i=0; i<cartItems.length;i++){
  //     totalprice=totalprice+ Number(cartItems[i].price);
  //   }
  //   setTotal(totalprice);
  // }
  // useEffect(()=>{
  //   getTotal();
  // },[cartItems])
  const dispatch = useDispatch()
  const navigate =useNavigate();
  const handleCheckout =()=>{
    alert("successfully placed the order")
    dispatch(emptyCart())
    navigate('/')
  }
  return (
    <>
      <button style={{ marginTop: "150px" }} className='btn btn-success ms-5'>
        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
          <i class="fa-solid fa-arrow-left me-2"></i>Back to Home </Link>
      </button>
      <div className='row w-100'>
        <div className=' col-lg-6 col-md-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td><img height={'50px'} src={item.thumbnail} alt="" /></td>
                    <td>&#8377;{item.price}</td>
                    <td>
                      <Button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        variant="outline-danger"><i class="fa-solid fa-trash"></i>
                      </Button></td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
        <div className='col-lg-4 col-md-4 mt-5 f-flex justify-content-center align-items-center'>

          <div className='border shadow p-5'>
            <h3 className='text-primary text-center'>Cart Summary</h3>
            <h5 className='mt-4'>Total number of products : <span className='fw-bolder text-warning ms-2'>{cartItems.length}</span> </h5>
            <h5>Total Price : <span className='fw-bolder text-warning ms-2'>{totalprice}</span></h5>
            <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>Checkout</button>

          </div>

        </div>
      </div>
      {/* <Row className='ms-5 me-5 mt-5' > 
        {
          cartItems?.length > 0 ?
            cartItems.map((item) => (
              <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button onClick={()=>dispatch(removeFromCart(item.id))}
                        variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
                      <Button variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )) :
            <p>No items in Cart</p>
        }
      </Row> */}
    </>
  )
}

export default Cart