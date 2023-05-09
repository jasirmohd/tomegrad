import React from 'react'
import './Cart.css'
import '../../assets/book.png'

function Cart(){
  return (
    <div className='cart-content'>
        <Header />
        <h2>Shopping Cart</h2>
        <div className='cart-main-content'>
            <CartItemList />
            <PaymentColumn />
        </div>
        <Footer />
    </div>
  )
}

///header
function Header(){

    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return(
  <div className='cart-header'>
          <div className='cart-head-content1'>
              <img src={require('../../assets/book_logo.png')} width="250"height="50"/>
              <form>
                <input className='cart-header-search-input'
                placeholder='Search'
                value={''}/>
              </form>
              <a className='cart-header-actions' href='#' onClick={handleClick}>
                <h3 className='cart-header-actions-h1'>Help</h3>
                </a>
              <a className='cart-header-actions' href='#' onClick={handleClick}>
                <h3 className='cart-header-actions-h1'>Wishlist</h3>
                </a>
              <a className='cart-header-actions' href='#' onClick={handleClick}>
                <h3 className='cart-header-actions-h1'>Cart</h3>
                </a>
              <a className='cart-header-actions' href='#' onClick={handleClick}>
                <h3 className='cart-header-actions-h1'>Account</h3>
                </a>
              <a className='cart-header-actions' href='#' onClick={handleClick}>
                <h3 className='cart-header-actions-h1'>Sign In</h3>
                </a>
              <button className='cart-header-button'>Register</button>
          </div>
          {/* <div className='cart-head-content1'>
          <a className='cart-header-actions' href='#' onClick={handleClick}>
                <h4 className='cart-header-actions2-h1'>Books</h4>
                </a>
              <a className='cart-header-actions' href='#' onClick={handleClick}>
                <h4 className='cart-header-actions2-h1'>Study Essentials</h4>
                </a>
              <a className='cart-header-actions' href='#' onClick={handleClick}>
                <h4 className='cart-header-actions2-h1'>Tutorials</h4>
                </a>
              <a className='cart-header-actions' href='#' onClick={handleClick}>
                <h4 className='cart-header-actions2-h1'>Consultancy</h4>
                </a>
              <a className='cart-header-actions' href='#' onClick={handleClick}>
                <h4 className='cart-header-actions2-h1'>Career Assistance</h4>
                </a>
          </div> */}
          </div>
    );
  }

function CartItemList(){
    return (
        <div className='cart-main-content-column1'>
            <h4>Items in Cart</h4>
            <div className='cart-main-content-column1-list'>
                <div className='cart-main-container-divider'></div>
                <CartItem title={'MBA'} price={'₹ 99/-'}/>
                <div className='cart-main-container-divider'></div>
                <CartItem title={'BBA'} price={'₹ 199/-'}/>
                <div className='cart-main-container-divider'></div>
            </div>
        </div>
    )
}

function CartItem({title,price}){
    return(
        <div className='cart-main-content-column1-list-card'>
            <img src={require('../../assets/book.png')} width="100" height="70" alt="" />
            <div className='cart-main-content-column1-list-card-content'>
                <h2 className='cart-main-content-column1-list-card-content-h2'>{title}</h2>
                <h2 className='cart-main-content-column1-list-card-content-h2'>{price}</h2>
            </div>
        </div>
    )
}

function PaymentColumn(){
    return(
        <div className='cart-main-content-column2'>
            <h3 className='cart-main-content-column2-h3'>Total</h3>
            <h2>₹ 499/-</h2>
            <button className='cart-main-content-column2-button'>Checkout</button>
        </div>
    )
}

///footer
function Footer(){
    return(
      <div className='cart-footer'>
        <div className='cart-main-footer-content'>
            <img src={require('../../assets/book_footer_logo.png')} width="250"height="250"/>
            </div>
            <div className='cart-main-footer-content'>
              <h3 className='cart-main-footer-content-h2'>Get to Know Us</h3>
              <h4 className='cart-main-footer-content-h4'>About</h4>
              <h4 className='cart-main-footer-content-h4'>Pricing</h4>
              <h4 className='cart-main-footer-content-h4'>Contact</h4>
              <h4 className='cart-main-footer-content-h4'>Careers</h4>
              <h4 className='cart-main-footer-content-h4'>Partnership Enquiry</h4>
            </div>
            <div className='cart-main-footer-content'>
            <h3 className='cart-main-footer-content-h2'>Conntect With Us</h3>
              <h4 className='cart-main-footer-content-h4'>Instagram</h4>
              <h4 className='cart-main-footer-content-h4'>Facebook</h4>
              <h4 className='cart-main-footer-content-h4'>Website</h4>
            </div>
            <div className='cart-main-footer-content'>
            <h3 className='cart-main-footer-content-h2'>Services</h3>
              <h4 className='cart-main-footer-content-h4'>Books</h4>
              <h4 className='cart-main-footer-content-h4'>Tuition</h4>
              <h4 className='cart-main-footer-content-h4'>Hostel</h4>
              <h4 className='cart-main-footer-content-h4'>Placement</h4>
            </div>
            <div className='cart-main-footer-content'>
            <h3 className='cart-main-footer-content-h2'>Make Money With Us</h3>
              <h4 className='cart-main-footer-content-h4'>Affiliate Program</h4>
              <h4 className='cart-main-footer-content-h4'>Sell On TomeGrad</h4>
              <h4 className='cart-main-footer-content-h4'>Tuition Partnership</h4>
            </div>
            </div>
    )
  }

export default Cart