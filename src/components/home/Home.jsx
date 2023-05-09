import React from 'react'
import './Home.css'
import '../../assets/home_logo.png'
import '../../assets/home_header_image.png'
import headerbg from '../../assets/background.png'
import '../../assets/home_main_image1.png'
import '../../assets/home_content_person_1.png'
import '../../assets/home_content_person_2.png'
import '../../assets/home_content_person_3.png'
import image8 from '../../assets/home_content_main_bg.png'
import '../../assets/home_content_image8.png'
import '../../assets/home_content_image9.png'
import '../../assets/home_bottom_img.png'
import '../../assets/home_main_image2.png'
import image10 from '../../assets/home_main_image10.png'
import { SlArrowRight } from 'react-icons/sl'

function Home(){

  return (
    <div className='home-content'>
      <div className='home-header'>
        <Header />
      </div>
      <div className='home-main-content'>
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
        <Row6 />
        <Footer />
      </div>
    </div>
  )
}

function Header(){

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <div className='home-header-content' style={{backgroundImage: `url(${headerbg})`}} alt="...">
        <div className='home-head-content1'>
            <img src={require('../../assets/home_logo.png')} width="250"height="50"/>
            <form>
              <input className='home-header-search-input'
              placeholder='Search'
              value={''}/>
            </form>
            <a className='home-header-actions' href='#' onClick={handleClick}>
              <h3 className='home-header-actions-h1'>Help</h3>
              </a>
            <a className='home-header-actions' href='#' onClick={handleClick}>
              <h3 className='home-header-actions-h1'>Wishlist</h3>
              </a>
            <a className='home-header-actions' href='#' onClick={handleClick}>
              <h3 className='home-header-actions-h1'>Cart</h3>
              </a>
            <a className='home-header-actions' href='#' onClick={handleClick}>
              <h3 className='home-header-actions-h1'>Account</h3>
              </a>
            <a className='home-header-actions' href='#' onClick={handleClick}>
              <h3 className='home-header-actions-h1'>Sign In</h3>
              </a>
            <button className='home-header-button'>Register</button>
        </div>
        <div className='home-head-content1'>
        <a className='home-header-actions' href='#' onClick={handleClick}>
              <h4 className='home-header-actions2-h1'>Books</h4>
              </a>
            <a className='home-header-actions' href='#' onClick={handleClick}>
              <h4 className='home-header-actions2-h1'>Study Essentials</h4>
              </a>
            <a className='home-header-actions' href='#' onClick={handleClick}>
              <h4 className='home-header-actions2-h1'>Tutorials</h4>
              </a>
            <a className='home-header-actions' href='#' onClick={handleClick}>
              <h4 className='home-header-actions2-h1'>Consultancy</h4>
              </a>
            <a className='home-header-actions' href='#' onClick={handleClick}>
              <h4 className='home-header-actions2-h1'>Career Assistance</h4>
              </a>
        </div>
        <div className='home-head-content1'>
          <div className='home-head-content1-column1'>
            <h1 className='home-header-h1'>Learn Without<br />Limits And Earn<br />Advanced Skill</h1>
             <form>
              <input className='home-header-mobile-input'
              placeholder='+91 Mobile Number'
              value={''}/>
            </form>
            <h5 className='home-header-h5'>Lorem Ipsum is simply dummy text of the printing<br/>
            and typesetting industry.Lorem Ipsum has been the<br/>
            industry's standard dummy text ever since the 1500s,<br/> 
            when an unknown printer took a galley of </h5>
          </div>
          <div className='home-head-content1-column12'>
            <img src={require('../../assets/home_header_image.png')} width="450"height="480" />
          </div>
        </div>
        </div>
  )
}

function Row1(){

  return(
    <div className='home-main-content-row1'>
      <div className='home-main-content-row1-image'>
        <img src={require('../../assets/home_main_image1.png')} width="400"height="400" alt="" />
      </div>
      <div className='home-main-content-row1-content'>
        <div className='home-main-content-row1-h2'>
          <h2>What is</h2>
          <h2 style={{marginLeft: '4px', color: 'rgba(28, 28, 255, 1)'}}>Tomegrad ?</h2>
        </div>
        <h6 style={{fontWeight: '300', fontSize: '15px'}}>Experience academic excellence like never before with<br/> 
        TomeGrad, the ultimate Ed-tech partner for college,<br /> 
        university students in Kerala. We are dedicated to<br /> 
        empowering grad students by simplifying your<br /> 
        academic journey and providing them with the tools<br /> 
        you need to succeed.<br/><br />
        Based on Kochi , Empowering education ; )</h6>
      </div>
    </div>
  )
}

function Row2(){

  return (
    <div className='home-main-content-row2'>
      <h6 className='home-main-content-row2-h6'>Ready to enhance your learning experience?</h6>
      <center><h4 className='home-main-content-row2-h4'>Tomegrad offers a range of interactive tools<br />
      and resources for you to explore.
      </h4></center>
      <form>
        <input className='home-header-search-input'
          placeholder='Search'
          value={''}/>
      </form>
    </div>
  )
}

function Row3(){

  return (
    <div className='home-main-content-row3'>
      <h6 className='home-main-content-row3-h6'>Elevate Your Academic Game</h6>
      <h4 className='home-main-content-row3-h4'>Learn university Subjects Within Weeks</h4>
      <div className='home-main-content-row3-content3'>
        <h4>Affordable and Structured Classes Tailored to<br /> 
        Your Exam Success by Experienced Teachers.</h4>
        <img style={{marginLeft: '10px', marginRight: '10px'}} src={require('../../assets/home_content_person_1.png')} width="40"height="40" alt="" />
        <img style={{marginLeft: '10px', marginRight: '10px'}} src={require('../../assets/home_content_person_2.png')} width="40"height="40" alt="" />
        <img style={{marginLeft: '10px', marginRight: '10px'}} src={require('../../assets/home_content_person_3.png')} width="40"height="40" alt="" />
      </div>
    </div>
  )
}

function Row4(){

  return (
    <div className='home-main-content-row4'>
      <div className='home-main-content-row4-background' style={{backgroundImage: `url(${image8})`}}>
      {/* <img src={require('../../assets/home_content_main_bg.png')} width="40"height="40" alt="" /> */}
        <div className='home-main-content-row4-column1'>
        <h2>Start Learning your<br /> university Subjects with us!</h2>
        <h5 className='home-main-content-row4-column1-h5'>(B.com and Engineering)</h5>
        <h6>Providing the best tuition services for grad students through<br /> 
        recorded tutoring session, Online and offline mode.</h6>
        <button className='home-main-content-row4-column1-button'>Click Here</button>
        <img className='home-main-content-row4-column1-image' src={require('../../assets/home_content_image9.png')} width="300"height="200" alt="" />
        </div>
        </div>
        <div className='home-main-content-row4-column2'>
          <img src={require('../../assets/home_content_image8.png')} width="400"height="250" alt="" />
          <div className='home-main-content-row4-column2-content'>
          <div className='home-main-content-row4-column2-h2'>
          <h2 className='home-main-content-row4-column2-h2.content'>Find</h2>
          <h2 className='home-main-content-row4-column2-h2.content' style={{marginLeft: '4px',marginRight: '4px', color: 'rgba(28, 28, 255, 1)'}}>courses</h2>
          <h2 className='home-main-content-row4-column2-h2.content' >that match</h2>
          </div>
          <h2 className='home-main-content-row4-column2-h2.content'>your career and aspiration!</h2>
          </div>
          <h5 className='home-main-content-row4-column2-h5'>Join courses that are curated for the students who are aspiring<br />
           to pursue career in top regional and Multi-national companies</h5>
          <h6>Eg; Taxation Courses for EY India</h6>
          <button className='home-main-content-row4-column1-button'>Click Here</button>
        </div>
    </div>
  )
}

function Row5(){
  return (
    <div className='home-main-content-row5-background' style={{backgroundImage: `url(${image10})`}}>
      <h2>All ready for a perfect career?</h2>
      <h6>Providing the best tuition services for grad students through<br /> 
        recorded tutoring session, Online and offline mode.</h6>
        <button className='home-main-content-row4-column1-button'>Click Here</button>
    </div>
  )
}

function Row6(){
  return (
    <div className='home-main-content-row6'>
      <div className='home-main-content-row6-column1'>
      <img src={require('../../assets/home_bottom_img.png')} width="600"height="250" alt="" />
      <h2>Advertisements & Offers</h2>
      </div>
      <div className='home-main-content-row6-column2'>
      <img src={require('../../assets/home_main_image2.png')} width="400"height="200" alt="" />
      <center>
      <h2>“Write Customers Testimonials<br/>
      with rating here”-<br/>
      Manikandan</h2>
      </center>
      </div>
    </div>
  )
}

function Footer(){
  return (
    <div className='home-main-footer'>
          <div className='home-main-footer-content'>
          <img src={require('../../assets/footer_logo.png')} width="250"height="250"/>
          </div>
          <div className='home-main-footer-content'>
            <h3 className='home-main-footer-content-h2'>Get to Know Us</h3>
            <h4 className='home-main-footer-content-h4'>About</h4>
            <h4 className='home-main-footer-content-h4'>Pricing</h4>
            <h4 className='home-main-footer-content-h4'>Contact</h4>
            <h4 className='home-main-footer-content-h4'>Careers</h4>
            <h4 className='home-main-footer-content-h4'>Partnership Enquiry</h4>
          </div>
          <div className='home-main-footer-content'>
          <h3 className='home-main-footer-content-h2'>Conntect With Us</h3>
            <h4 className='home-main-footer-content-h4'>Instagram</h4>
            <h4 className='home-main-footer-content-h4'>Facebook</h4>
            <h4 className='home-main-footer-content-h4'>Website</h4>
          </div>
          <div className='home-main-footer-content'>
          <h3 className='home-main-footer-content-h2'>Services</h3>
            <h4 className='home-main-footer-content-h4'>Books</h4>
            <h4 className='home-main-footer-content-h4'>Tuition</h4>
            <h4 className='home-main-footer-content-h4'>Hostel</h4>
            <h4 className='home-main-footer-content-h4'>Placement</h4>
          </div>
          <div className='home-main-footer-content'>
          <h3 className='home-main-footer-content-h2'>Make Money With Us</h3>
            <h4 className='home-main-footer-content-h4'>Affiliate Program</h4>
            <h4 className='home-main-footer-content-h4'>Sell On TomeGrad</h4>
            <h4 className='home-main-footer-content-h4'>Tuition Partnership</h4>
          </div>
        </div>
  )
}

export default Home