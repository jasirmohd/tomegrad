import React from 'react'
import './Bundle.css'
import { BiLeftArrow,BiRightArrow } from "react-icons/bi"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import '../../assets/book_image.png'
import '../../assets/replace_book.png'
import '../../assets/home_content_person_1.png'
import '../../assets/home_content_person_2.png'
import '../../assets/home_content_person_3.png'
import bottombg from '../../assets/bundle_bottom_bg.png'
import '../../assets/bundle_stationary_image1.png'
import '../../assets/bundle_stationary_image2.png'
import '../../assets/bundle_stationary_image3.png'
import '../../assets/bundle_bottom_image1.png'
import '../../assets/bundle_bottom_image2.png'

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

    const getResultItems = () =>
  Array(5)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Bundle() {
  return (
    <div className='bundle-content'>
        <div className='bundle-header'>
          <Header />
        </div>
        <div className='bundle-main-row1'>
          <Row1 />
        </div>
        <Row2 />
        <h2 className='bundle-main-row1-h2'>Curated For You</h2>
        <Row3 />
        <div className='bundle-main-row3'></div>
        <div className='bundle-main-row4'></div>
        <div className='bundle-footer'>
          <Footer />
        </div>
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
<div className='bundle-header'>
        <div className='bundle-head-content1'>
            <img src={require('../../assets/book_logo.png')} width="250"height="50"/>
            <form>
              <input className='bundle-header-search-input'
              placeholder='Search'
              value={''}/>
            </form>
            <a className='bundle-header-actions' href='#' onClick={handleClick}>
              <h3 className='bundle-header-actions-h1'>Help</h3>
              </a>
            <a className='bundle-header-actions' href='#' onClick={handleClick}>
              <h3 className='bundle-header-actions-h1'>Wishlist</h3>
              </a>
            <a className='bundle-header-actions' href='#' onClick={handleClick}>
              <h3 className='bundle-header-actions-h1'>Cart</h3>
              </a>
            <a className='bundle-header-actions' href='#' onClick={handleClick}>
              <h3 className='bundle-header-actions-h1'>Account</h3>
              </a>
            <a className='bundle-header-actions' href='#' onClick={handleClick}>
              <h3 className='bundle-header-actions-h1'>Sign In</h3>
              </a>
            <button className='bundle-header-button'>Register</button>
        </div>
        <div className='bundle-head-content1'>
        <a className='bundle-header-actions' href='#' onClick={handleClick}>
              <h4 className='bundle-header-actions2-h1'>Books</h4>
              </a>
            <a className='bundle-header-actions' href='#' onClick={handleClick}>
              <h4 className='bundle-header-actions2-h1'>Study Essentials</h4>
              </a>
            <a className='bundle-header-actions' href='#' onClick={handleClick}>
              <h4 className='bundle-header-actions2-h1'>Tutorials</h4>
              </a>
            <a className='bundle-header-actions' href='#' onClick={handleClick}>
              <h4 className='bundle-header-actions2-h1'>Consultancy</h4>
              </a>
            <a className='bundle-header-actions' href='#' onClick={handleClick}>
              <h4 className='bundle-header-actions2-h1'>Career Assistance</h4>
              </a>
        </div>
        </div>
  );
}

///row1
function Row1() {
    return (
      <div className='bundle-main-container'>
        <div className='bundle-main-container-row1'>
        <div>
          <img className='bundle-main-container-image' src={require('../../assets/bundle.png')} width="350"height="450"/>
          </div>
          <div className='bundle-main-container-details'>
            <h2>Book Bundle 1 of 5</h2>
            <h6>fnngb gbnggb bgkggn bgkgbmgk gbbgkb gbmbg bnngu bnbbtntub tbnbnbntnb tbnutbntb bnitbn binbnb binbibn
              bjbbngbn gbgnbgbkgnbk bkmkbgmbk ffbknbknbk fkbngbkbk fkbnfbkbk fkbmgkbgk kbmkbmgk kfbmgkbmgkb kbmgkbmgk
              bmgbkgbmgk fkbmgkbmg fkbmgkbm kbmfkbmfk fbmkfbmk fkbmbkgm fkbmfgkbmg fkbmibmer fbmfkbmgfk erimekbm kbmkbmgkbn
              bngkbg bkg bkmgbkgmbkg kbmgkbmgfk kfbmgfkbmgk kbmgkbmgkb kbmgkbmgkm fkbmgkbmgfbk gkbmgfkbmgfkbm kfmbgfk
            </h6>
            <h2>₹ 1999</h2>
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
        <h4>Bundle Content</h4>
        <div className='bundle-main-container-row2'>
        {/* <MainBookListRow1 /> */}
        <BookGridList />
        <div className='bundle-main-container-divider'></div>
        <h2>Replace With Alternatives</h2>
        <ReplaceGridList />
        <div className='bundle-main-container-divider'></div>
        <h2>Customer Review</h2>
        <CustomerReview />
        </div>
      </div>
    )
}


function BookGridList(){
  return (
    <div className='bundle-main-books-grid-list'>
      <BookGrid title={'MBA'} />
      <BookGrid title={'MBA'} />
      <BookGrid title={'MBA'} />
      <BookGrid title={'MBA'} />
      <BookGrid title={'MBA'} />
    </div>
  )
}

function BookGrid({title}){
  return(
    <div className='bundle-main-books-grid-list-card'>
      <img src={require('../../assets/book_image.png')} width="90" height="100" alt="" />
      <h5>{title}</h5>
    </div>
  )
}

function ReplaceGridList(){
  return(
    <div className='bundle-main-container-replace-grid-list'>
      <ReplaceGrid title={'Accounting'}/>
      <ReplaceGrid title={'Business'}/>
      <ReplaceGrid title={'Language'}/>
    </div>
  )
}

function ReplaceGrid({title}){
  return(
    <div className='bundle-main-container-replace-grid-list-card'>
      <img src={require('../../assets/replace_book.png')} width="230" height="130" alt="" />
      <h2 className='bundle-main-container-replace-grid-list-card-h2'>{title}</h2>
      <p className='bundle-main-container-replace-grid-list-card-p'>
        Lorem Ipsum is simply dummy text of the<br /> 
      printing and typesetting industry. Lorem<br /> 
      Ipsum has been the industry's standard<br /> 
      dummy text ever since the 1500s, when an<br /> 
      unknown printer took a galley of type and<br /> 
      scrambled it to make a type specimen book.<br /> 
      Lorem Ipsum is simply dummy text of the<br /> 
      printing and typesetting industry. </p>
      <button className='bundle-main-container-replace-grid-list-card-button'>Replace</button>
    </div>
  )
}

function CustomerReview(){
  return (
    <div className='bundle-main-container-customer-review-list'>
      <CustomerReviewCard image={require('../../assets/home_content_person_1.png')} title="James Daniel"/>
      <CustomerReviewCard image={require('../../assets/home_content_person_2.png')} title="John"/>
      <CustomerReviewCard image={require('../../assets/home_content_person_3.png')} title="Daniel"/>
    </div>
  )
}

function CustomerReviewCard({image,title}){
  return(
    <div className='bundle-main-container-customer-review-list-card'>
      <div className='bundle-main-container-customer-review-list-card-title'>
        <img src={image} width="40" height="40" alt="" />
        <h2>{title}</h2>
      </div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy<br /> 
        text ever since the 1500s, when an 
        unknown printer took a galley of type and scrambled it to make a type specimen book. 
        Lorem<br /> 
        Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </div>
  )
}

///row2
function Row2() {
    return (
      <div style={{backgroundImage: `url(${bottombg})`}} className='bundle-main-row2'>
        <h2 className='bundle-main-row2-h2'>Bought Together</h2>
        <h5 className='bundle-main-row2-h5'>Tuition Subscription</h5>
          <div className='bundle-main-row2-grid-list1'>
            <SubscriptionCard price={'₹ 99/-'} validity={'1 Month'}/>
            <SubscriptionCard price={'₹ 299/-'} validity={'3 Month'}/>
            <SubscriptionCard price={'₹ 599/-'} validity={'6 Month'}/>
            <SubscriptionCard price={'₹ 999/-'} validity={'12 Month'}/>
          </div>
          <h6 className='bundle-main-row2-h6'>(Add tuition Subscription and get 5% off on all purchases)</h6>
          <div className='bundle-main-row2-divider'></div>
          <div className='bundle-main-row2-grid-list2'>
            <StationaryCard image={require('../../assets/bundle_stationary_image1.png')} title={"NoteBook"} price={"₹ 99/-"}/>
            <StationaryCard image={require('../../assets/bundle_stationary_image2.png')} title={"Basic Essential Bundle"} price={"₹ 89/-"}/>
            <StationaryCard image={require('../../assets/bundle_stationary_image3.png')} title={"Exam Guide"} price={"₹ 149/-"}/>
          </div>
      </div>
    )
}

function SubscriptionCard({price,validity}){
  return(
    <div className='bundle-main-row2-grid-list1-card'>
      <h2>{price}</h2>
      <h4>{validity}</h4>
    </div>
  )
}

function StationaryCard({image,title,price}){
  return(
    <div className='bundle-main-row2-grid-list2-card'>
      <img src={image} width="200" height="130" alt="" />
      <h2 className='bundle-main-row2-grid-list2-card-h2'>{title}</h2>
      <h2>{price}</h2>
      <button className='bundle-main-row2-grid-list2-card-button'>Add</button>
    </div>
  )
}

///row3
function Row3() {
    return (
      <div className='bundle-main-row3'>
        <div className='bundle-main-row3-column1'>
          <h2 className='bundle-main-row3-column1-h2'>Tomegrad Tuition</h2>
          <h3 className='bundle-main-row3-column1-h3'>Subscription Benefit</h3>
          <h5 className='bundle-main-row3-column1-h5'>Get 5% Off on all Products<br />
          Free Delivery<br />
          Access to Placement Assistance and Support<br />
          (Final year + 1 year)</h5>
        </div>
        <div className='bundle-main-row3-column2'>
          <img src={require('../../assets/bundle_bottom_image1.png')}  alt="" />
          <img src={require('../../assets/bundle_bottom_image2.png')} alt="" />
        </div>
      </div>
    )
}

///row4
function Row4() {
    return (
      <div>Bundle</div>
    )
}

///footer
function Footer(){
  return(
    <div className='bundle-footer'>
      <div className='bundle-main-footer-content'>
          <img src={require('../../assets/book_footer_logo.png')} width="250"height="250"/>
          </div>
          <div className='bundle-main-footer-content'>
            <h3 className='bundle-main-footer-content-h2'>Get to Know Us</h3>
            <h4 className='bundle-main-footer-content-h4'>About</h4>
            <h4 className='bundle-main-footer-content-h4'>Pricing</h4>
            <h4 className='bundle-main-footer-content-h4'>Contact</h4>
            <h4 className='bundle-main-footer-content-h4'>Careers</h4>
            <h4 className='bundle-main-footer-content-h4'>Partnership Enquiry</h4>
          </div>
          <div className='bundle-main-footer-content'>
          <h3 className='bundle-main-footer-content-h2'>Conntect With Us</h3>
            <h4 className='bundle-main-footer-content-h4'>Instagram</h4>
            <h4 className='bundle-main-footer-content-h4'>Facebook</h4>
            <h4 className='bundle-main-footer-content-h4'>Website</h4>
          </div>
          <div className='bundle-main-footer-content'>
          <h3 className='bundle-main-footer-content-h2'>Services</h3>
            <h4 className='bundle-main-footer-content-h4'>Books</h4>
            <h4 className='bundle-main-footer-content-h4'>Tuition</h4>
            <h4 className='bundle-main-footer-content-h4'>Hostel</h4>
            <h4 className='bundle-main-footer-content-h4'>Placement</h4>
          </div>
          <div className='bundle-main-footer-content'>
          <h3 className='bundle-main-footer-content-h2'>Make Money With Us</h3>
            <h4 className='bundle-main-footer-content-h4'>Affiliate Program</h4>
            <h4 className='bundle-main-footer-content-h4'>Sell On TomeGrad</h4>
            <h4 className='bundle-main-footer-content-h4'>Tuition Partnership</h4>
          </div>
          </div>
  )
}


export default Bundle