import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
// import Badge from 'react-bootstrap';
function Header1() {
  // to access data inside store : useSelector hook
  const WishlistArray = useSelector((state)=>state.wishlistReducer);
  const cartList =useSelector((state)=>state.cartReducer);
  console.log("===wishlist array for header===");
  console.log(WishlistArray);
  return (
   <>
      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100 " style={{zIndex:"1"}}>
      <Container>
        <Link to={'/'}>
        <Navbar.Brand href="#home">
          <img
          height={'40px'}
          className='me-3'
          src='https://cdn-icons-png.flaticon.com/512/3081/3081840.png'
          alt=''/>
          E KART
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-3' style={{width:"75px"}}>
              <Link to={'/wishlist'} style={{color:"white", textDecoration:'none'}}>Wishlist <Badge bg="secondary">{WishlistArray.length}
              </Badge></Link></Nav.Link>
            
            
            <Nav.Link className='btn border rounded' style={{width:"75px"}}>
            <Link to={'/cart'} style={{color:"white", textDecoration:'none'}}>
              Cart <Badge bg="secondary">{cartList.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default Header1