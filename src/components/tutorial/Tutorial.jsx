import React from 'react'
import headerbg from '../../assets/tutorial_header_image.png'
import '../../assets/home_logo.png'
import '../../assets/video_record_icon.png'
import '../../assets/online_tution_icon.png'
import '../../assets/offline_tution_icon.png'
import '../../assets/tutorial_main_image1.png'
import gridCard1 from '../../assets/tutorial_category_card1.png'
import '../../assets/tutorial_category_card1_person.png'
import gridCard2 from '../../assets/tutorial_category_card2.png'
import '../../assets/tutorial_category_card2_person.png'
import gridCard3 from '../../assets/tutorial_category_card3.png'
import '../../assets/tutorial_category_card3_person.png'
import '../../assets/tutorial1.png'
import '../../assets/tutorial2.png'
import '../../assets/tutorial3.png'
import '../../assets/home_content_person_1.png'
import '../../assets/home_content_person_2.png'
import '../../assets/home_content_person_3.png'
import '../../assets/tutorial_rating_icon.png'
import './Tutorial.css'

function Tutorial(){
  return (
    <div className='tutorial-content'>
        <Header />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
        <Row6 />
        <Footer />
    </div>
  )
}

function Header(){

    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
        <div className='tutorial-header'>
        <div className='tutorial-header-content' style={{backgroundImage: `url(${headerbg})`}} alt="...">
          <div className='tutorial-head-content1'>
              <img src={require('../../assets/home_logo.png')} width="250"height="50"/>
              <form>
                <input className='tutorial-header-search-input'
                placeholder='Search'
                value={''}/>
              </form>
              <a className='tutorial-header-actions' href='#' onClick={handleClick}>
                <h3 className='tutorial-header-actions-h1'>Help</h3>
                </a>
              <a className='tutorial-header-actions' href='#' onClick={handleClick}>
                <h3 className='tutorial-header-actions-h1'>Wishlist</h3>
                </a>
              <a className='tutorial-header-actions' href='#' onClick={handleClick}>
                <h3 className='tutorial-header-actions-h1'>Cart</h3>
                </a>
              <a className='tutorial-header-actions' href='#' onClick={handleClick}>
                <h3 className='tutorial-header-actions-h1'>Account</h3>
                </a>
              <a className='tutorial-header-actions' href='#' onClick={handleClick}>
                <h3 className='tutorial-header-actions-h1'>Sign In</h3>
                </a>
              <button className='tutorial-header-button'>Register</button>
          </div>
          <div className='tutorial-head-content1'>
          <a className='tutorial-header-actions' href='#' onClick={handleClick}>
                <h4 className='tutorial-header-actions2-h1'>Books</h4>
                </a>
              <a className='tutorial-header-actions' href='#' onClick={handleClick}>
                <h4 className='tutorial-header-actions2-h1'>Study Essentials</h4>
                </a>
              <a className='tutorial-header-actions' href='#' onClick={handleClick}>
                <h4 className='tutorial-header-actions2-h1'>Tutorials</h4>
                </a>
              <a className='tutorial-header-actions' href='#' onClick={handleClick}>
                <h4 className='tutorial-header-actions2-h1'>Consultancy</h4>
                </a>
              <a className='tutorial-header-actions' href='#' onClick={handleClick}>
                <h4 className='tutorial-header-actions2-h1'>Career Assistance</h4>
                </a>
          </div>
          <div className='tutorial-head-content1'>
            <div className='tutorial-head-content1-column1'>
              <h1 className='tutorial-header-h1'>Learn Without<br />Limits And Earn</h1>
              <h1 className='tutorial-header-content-h1'>Advanced Skill</h1>
              <h5 className='tutorial-header-h5'>Provides you with latest online learning system<br /> 
              and material that help your knowledge growing</h5>
              <div className='tutorial-header-content-button'>
                <button className='tutorial-header-content-button1'>What do you want to learn</button>
                <button className='tutorial-header-content-button2'>Explore More</button>
              </div>
              <div className='tutorial-header-content-bottom' >
                <div className='tutorial-header-content-bottom-card'>
                   <h1 className='tutorial-header-content-bottom-h1'>2K+</h1>
                   <h4 style={{color:'white'}}>Video Courses</h4>
                </div>
                <div className='tutorial-header-content-bottom-card'>
                   <h1 className='tutorial-header-content-bottom-h1'>5K+</h1>
                   <h4 style={{color:'white'}}>Online Courses</h4>
                </div>
                <div className='tutorial-header-content-bottom-card'>
                   <h1 className='tutorial-header-content-bottom-h1'>250+</h1>
                   <h4 style={{color:'white'}}>Video Courses</h4>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    )
}

function Row1(){
    return(
        <div className='tutorial-main-content-row1'>
            <h2>University Curriculum Based Tutoring</h2>
            <div className='tutorial-main-content-row1-grid-list'>
                <div className='tutorial-main-content-row1-grid-card'>
                    <img src={require('../../assets/video_record_icon.png')} width="40"height="40" />
                    <div className='tutorial-main-content-row1-grid-card-content'>
                        <h4 className='tutorial-main-content-row1-grid-card-h4'>Recorded  Video<br/> Sessions</h4>
                        <h6 className='tutorial-main-content-row1-grid-card-h6'>Learn More</h6>
                    </div>
                </div>
                <div className='tutorial-main-content-row1-grid-card'>
                    <img src={require('../../assets/online_tution_icon.png')} width="40"height="40" />
                    <div className='tutorial-main-content-row1-grid-card-content'>
                        <h4 className='tutorial-main-content-row1-grid-card-h4'>Online Tuition</h4>
                        <h6 className='tutorial-main-content-row1-grid-card-h6'>Learn More</h6>
                    </div>
                </div>
                <div className='tutorial-main-content-row1-grid-card'>
                    <img src={require('../../assets/offline_tution_icon.png')} width="40"height="40" />
                    <div className='tutorial-main-content-row1-grid-card-content'>
                        <h4 className='tutorial-main-content-row1-grid-card-h4'>Offline Tuition</h4>
                        <h6 className='tutorial-main-content-row1-grid-card-h6'>Learn More</h6>
                    </div>
                </div>
            </div>
            <h4>Curriculum based tuition for students persuing degree from 
                <span style={{color: 'rgba(123, 89, 253, 1)', marginLeft:'4px',marginRight:'4px'}}>MGU</span>and 
                <span style={{color: 'rgba(123, 89, 253, 1)', marginLeft:'4px',marginRight:'4px'}}>KETU.</span></h4>
        </div>
    )
}

function Row2(){
    return(
        <div className='tutorial-main-content-row2'>
            <div className='tutorial-main-content-row2-column1'>
                <img src={require('../../assets/tutorial_main_image1.png')} width="420"height="400" alt="" />
            </div>
            <div className='tutorial-main-content-row2-column2'>
                <h2>Our Efficient Network Of<br/>
                <span style={{color: 'rgba(181, 16, 157, 1)'}}>Experienced Teacher</span> Is Here For<br /> 
                You To Teach Your University<br /> 
                Subjects In <span style={{color: 'rgba(181, 16, 157, 1)'}}>Your Regional<br /> Language.</span> </h2>
                <h4 className='tutorial-main-content-row2-column2-h4'>Let it be the start of the semester or  last few<br/> 
                weeks of  exams , Our teachers are here to help<br/> you out.</h4>
            </div>
        </div>
    )
}

function Row3(){
    return(
        <div className='tutorial-main-content-row3'>
            <h6>TOP CATEGORIES</h6>
            <div className='tutorial-main-content-row3-grid-list'>
                <div className='tutorial-main-content-row3-grid-list-card' style={{backgroundImage:`url(${gridCard1})`}}>
                    <div className='tutorial-main-content-row3-grid-list-card-column1'>
                        <h3 className='tutorial-main-content-row3-grid-list-card-column1-h3'>Tution</h3>
                        <h6 className='tutorial-main-content-row3-grid-list-card-column1-h6'>Lessons on design<br/> that cover the most<br /> recent developments</h6>
                    </div>
                    <div className='tutorial-main-content-row2-grid-list-card-column2'>
                        <img src={require('../../assets/tutorial_category_card1_person.png')} width="200"height="130" alt="" />
                    </div>
                </div>
                <div className='tutorial-main-content-row3-grid-list-card' style={{backgroundImage:`url(${gridCard2})`}}>
                    <div className='tutorial-main-content-row3-grid-list-card-column1'>
                    <h3 className='tutorial-main-content-row3-grid-list-card-column1-h3'>Tomegrad <br />Courses</h3>
                        <h6 className='tutorial-main-content-row3-grid-list-card-column1-h6'>Lessons on design<br/> that cover the most<br /> recent developments</h6>
                    </div>
                    <div className='tutorial-main-content-row2-grid-list-card-column2'>
                        <img src={require('../../assets/tutorial_category_card2_person.png')} width="200"height="130" alt="" />
                    </div>
                </div>
                <div className='tutorial-main-content-row3-grid-list-card' style={{backgroundImage:`url(${gridCard3})`}}>
                    <div className='tutorial-main-content-row3-grid-list-card-column1'>
                    <h3 className='tutorial-main-content-row3-grid-list-card-column1-h3'>Affiliated<br />Courses</h3>
                        <h6 className='tutorial-main-content-row3-grid-list-card-column1-h6'>Lessons on design<br /> that cover the most<br /> recent developments</h6>
                    </div>
                    <div className='tutorial-main-content-row2-grid-list-card-column2'>
                        <img src={require('../../assets/tutorial_category_card3_person.png')} width="200"height="130" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Row4(){
    return(
        <div className='tutorial-main-content-row4'>
            <div className='tutorial-main-content-row4-heading'>
            <h5 className='tutorial-main-content-row4-h5'>COURSES</h5>
            <h2 className='tutorial-main-content-row4-h2'>Find a top course that fits your life</h2>
            <h4 className='tutorial-main-content-row4-h4'>Curated By TomeGrad</h4>
            </div>
            <div className='tutorial-main-content-row4-grid-list'>
                <TutorialCard title={'Cost Accounting'} image={require('../../assets/tutorial1.png')}/>
                <TutorialCard title={'Financial Accounting'} image={require('../../assets/tutorial2.png')}/>
                <TutorialCard title={'Business Law'} image={require('../../assets/tutorial3.png')}/>
            </div>
            <div className='tutorial-main-content-row4-heading'>
                <h4 className='tutorial-main-content-row4-h4'>Featured Course By <span style={{color:'rgba(234, 84, 0, 1)'}}>Coursera</span></h4>
            </div>
            <div className='tutorial-main-content-row4-grid-list'>
                <TutorialCard title={'Cost Accounting'} image={require('../../assets/tutorial1.png')}/>
                <TutorialCard title={'Financial Accounting'} image={require('../../assets/tutorial2.png')}/>
                <TutorialCard title={'Business Law'} image={require('../../assets/tutorial3.png')}/>
            </div>
            <div className='tutorial-main-content-row4-bottom'>
                <button className='tutorial-main-content-row4-button'>Explore All Courses</button>
            </div>
        </div>
    )
}

function TutorialCard({image, title}){
    return(
        <div className='tutorial-main-content-row4-card'>
            <img src={image} alt="" width="300" height="150"  />
            <h4 className='tutorial-main-content-row4-card-h4'>{title}</h4>
            <h6 className='tutorial-main-content-row4-card-h6' style={{color:'green'}}>Free</h6>
            <div className='tutorial-main-content-row4-card-content1'>
                <img src={require('../../assets/home_content_person_1.png')} width="30" height="30" alt="" />
                <div className='tutorial-main-content-row4-card-column1'>
                    <h6 className='tutorial-main-content-row4-card-column1-h6'>David Travis</h6>
                    <h6 className='tutorial-main-content-row4-card-column1-h6'>Senior UX Mentor</h6>
                </div>
            </div>
            <div className='tutorial-main-content-row4-card-content2'>
                <div className='tutorial-main-content-row4-card-column2'>
                    <h6 className='tutorial-main-content-row4-card-column2-h6'>4.5</h6>
                    <img src={require('../../assets/tutorial_rating_icon.png')} alt="" width="50" height="10" />
                    <h6 className='tutorial-main-content-row4-card-column2-h6'>(2,156)</h6>
                </div>
                <div className='tutorial-main-content-row4-card-column2'>
                    <h5 className='tutorial-main-content-row4-card-column2-h5'>$19.99</h5>
                </div>
            </div>
        </div>
    )
}

function Row5(){
    return(
        <div className='tutorial-main-content-row5'>
            <h5>COURSES</h5>
            <h3>Meet Our Popular Instructors</h3>
            <h6>when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br />
            It has survived not only five centuries, but also the leap into electronic typesetting</h6>
            <div className='tutorial-main-content-row5-grid-list'>
                <InstructorCard title={'Daniel walter Scott'} image={require('../../assets/home_content_person_1.png')}/>
                <InstructorCard title={'John David'} image={require('../../assets/home_content_person_2.png')}/>
                <InstructorCard title={'David Brown'} image={require('../../assets/home_content_person_3.png')}/>
                <InstructorCard title={'Anthony Marcus'} image={require('../../assets/home_content_person_1.png')}/>
            </div>
        </div>
    )
}

function InstructorCard({image,title}){
    return(
        <div className='tutorial-main-content-row5-card'>
            <img src={image} width="80" height="80" alt="" />
            <h2 className='tutorial-main-content-row5-card-h2'>{title}</h2>
            <h5 className='tutorial-main-content-row5-card-h5'>User Experience Design,User<br /> Interface Design</h5>
            <div className='tutorial-main-content-row5-card-row1'>
                <h6 className='tutorial-main-content-row5-card-row1-h6'>544,294 Students</h6>
                <h6 className='tutorial-main-content-row5-card-row1-h6'>32 Courses</h6>
            </div>
            <div className='tutorial-main-content-row5-card-row2'>
                <h6 className='tutorial-main-content-row5-card-row2-h6'>4.7</h6>
                <h6 className='tutorial-main-content-row5-card-row2-h6'>Instructor Rating</h6>
            </div>
        </div>
    )
}

function Row6(){
    return(
        <div className='tutorial-main-content-row6'>
            <div className='tutorial-main-content-row6-column1'>
                <h2 style={{fontWeight: 'bold'}}>Not Looking for<br/> Higher Education?</h2>
                <h2 className='tutorial-main-content-row6-column1-h2'>Try Our Career Assistance.</h2>
            </div>
            <div className='tutorial-main-content-row6-column2'>
                <TutionCard />
            </div>
        </div>
    )
}

function TutionCard(){
    return(
        <div className='tutorial-main-content-row6-column2-card'>
            <div className='tutorial-main-content-row6-column2-card-head'>
                <h5>Fill The Form For Online And OFFline Tutuion </h5>
            </div>
            <div className='tutorial-main-content-row6-column2-card-content'>
            <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <div class="form-group mt-2 d-inline-block" style={{backgroundColor:'white', borderRadius: '20px'}}>
                <span class="border-end country-code px-2">+91</span>
                <input type="text" class="form-control" id="ec-mobile-number" aria-describedby="emailHelp" placeholder="Mobile Number" />
            </div>
            </div>
            <input className='tutorial-main-content-row6-column2-card-input' placeholder='Name' value={''}/>
            <input className='tutorial-main-content-row6-column2-card-input' placeholder='Search Your Institution Here' value={''}/>
            <input className='tutorial-main-content-row6-column2-card-input' placeholder='City' value={''}/>
            <div className='tutorial-main-content-row6-column2-card-checkbox'>
                <label className='tutorial-main-content-row6-column2-card-checkbox-label'>
                    <input type="checkbox" />
                     By signing up, you agree to our <span style={{color:'rgba(3, 125, 208, 1)'}}>T&C</span> and <span style={{color:'rgba(3, 125, 208, 1)'}}>Privacy Policy</span>
                </label>
            </div>
            <button className='tutorial-main-content-row6-column2-card-button'>Register</button>
            </div>
        </div>
    )
}

function Footer(){
    return(
      <div className='tutorial-footer'>
        <div className='tutorial-main-footer-content'>
            <img src={require('../../assets/book_footer_logo.png')} width="250"height="250"/>
            </div>
            <div className='tutorial-main-footer-content'>
              <h3 className='tutorial-main-footer-content-h2'>Get to Know Us</h3>
              <h4 className='tutorial-main-footer-content-h4'>About</h4>
              <h4 className='tutorial-main-footer-content-h4'>Pricing</h4>
              <h4 className='tutorial-main-footer-content-h4'>Contact</h4>
              <h4 className='tutorial-main-footer-content-h4'>Careers</h4>
              <h4 className='tutorial-main-footer-content-h4'>Partnership Enquiry</h4>
            </div>
            <div className='tutorial-main-footer-content'>
            <h3 className='tutorial-main-footer-content-h2'>Conntect With Us</h3>
              <h4 className='tutorial-main-footer-content-h4'>Instagram</h4>
              <h4 className='tutorial-main-footer-content-h4'>Facebook</h4>
              <h4 className='tutorial-main-footer-content-h4'>Website</h4>
            </div>
            <div className='tutorial-main-footer-content'>
            <h3 className='tutorial-main-footer-content-h2'>Services</h3>
              <h4 className='tutorial-main-footer-content-h4'>Books</h4>
              <h4 className='tutorial-main-footer-content-h4'>Tuition</h4>
              <h4 className='tutorial-main-footer-content-h4'>Hostel</h4>
              <h4 className='tutorial-main-footer-content-h4'>Placement</h4>
            </div>
            <div className='tutorial-main-footer-content'>
            <h3 className='tutorial-main-footer-content-h2'>Make Money With Us</h3>
              <h4 className='tutorial-main-footer-content-h4'>Affiliate Program</h4>
              <h4 className='tutorial-main-footer-content-h4'>Sell On TomeGrad</h4>
              <h4 className='tutorial-main-footer-content-h4'>Tuition Partnership</h4>
            </div>
            </div>
    )
}

export default Tutorial