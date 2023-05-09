import React from 'react'
import './Book.css'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import { BiLeftArrow,BiRightArrow } from "react-icons/bi";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

    const getResultItems = () =>
  Array(5)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Book(){

  // const [items, setItems] = React.useState(getItems);
  // const [selected, setSelected] = React.useState([]);
  // const [position, setPosition] = React.useState(0);

  // const isItemSelected = (id) => !!selected.find((el) => el === id);

  // const handleClick =
  //   (id) =>
  //   ({ getItemById, scrollToItem }) => {
  //     const itemSelected = isItemSelected(id);

  //     setSelected((currentSelected) =>
  //       itemSelected
  //         ? currentSelected.filter((el) => el !== id)
  //         : currentSelected.concat(id)
  //     );
  //   };

  return (
    <div className='book-content'>
        <>
        <Header />
        <h2 className='book-content-heading'>Books</h2>
        <div className='book-main1'>
          <MainFilterColumn />
          <MainBookListColumn />
        </div>
        <div className='book-main2'>
          <h2 className='book-content-heading'>Study Materials</h2>
          <StudyMaterialRow />
        </div>
        <div className='book-main3'>
        <h2 className='book-content-heading'>Tutorials</h2>
        <TutorialRow />
        </div>
        <div className='book-main4'>

        </div>
        {/* <div className='book-footer'> */}
          <Footer />
        {/* </div> */}
        </>
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
<div className='book-header'>
        <div className='book-head-content1'>
            <img src={require('../../assets/book_logo.png')} width="250"height="50"/>
            <form>
              <input className='book-header-search-input'
              placeholder='Search'
              value={''}/>
            </form>
            <a className='book-header-actions' href='#' onClick={handleClick}>
              <h3 className='book-header-actions-h1'>Help</h3>
              </a>
            <a className='book-header-actions' href='#' onClick={handleClick}>
              <h3 className='book-header-actions-h1'>Wishlist</h3>
              </a>
            <a className='book-header-actions' href='#' onClick={handleClick}>
              <h3 className='book-header-actions-h1'>Cart</h3>
              </a>
            <a className='book-header-actions' href='#' onClick={handleClick}>
              <h3 className='book-header-actions-h1'>Account</h3>
              </a>
            <a className='book-header-actions' href='#' onClick={handleClick}>
              <h3 className='book-header-actions-h1'>Sign In</h3>
              </a>
            <button className='home-header-button'>Register</button>
        </div>
        <div className='book-head-content1'>
        <a className='book-header-actions' href='#' onClick={handleClick}>
              <h4 className='book-header-actions2-h1'>Books</h4>
              </a>
            <a className='book-header-actions' href='#' onClick={handleClick}>
              <h4 className='book-header-actions2-h1'>Study Essentials</h4>
              </a>
            <a className='book-header-actions' href='#' onClick={handleClick}>
              <h4 className='book-header-actions2-h1'>Tutorials</h4>
              </a>
            <a className='book-header-actions' href='#' onClick={handleClick}>
              <h4 className='book-header-actions2-h1'>Consultancy</h4>
              </a>
            <a className='book-header-actions' href='#' onClick={handleClick}>
              <h4 className='book-header-actions2-h1'>Career Assistance</h4>
              </a>
        </div>
        </div>
  );
}

///main column1
function MainFilterColumn(){
  return(
<div className='book-main1-column1'>
            <h2>Filter</h2>
            <h2>Programme</h2>
            <label>
              <input type="checkbox" />
              Post Graduate
            </label>
            <label>
              <input type="checkbox" />
              Under Graduate
            </label>

            <h2>University</h2>
            <form>
              <input className='book-header-search-input'
              placeholder='Search'
              value={''}/>
            </form>
            <label>
              <input type="checkbox" />
              Mahatma Gandhi Kottayam
            </label>
            <label>
              <input type="checkbox" />
              Kerala Technical University
            </label>

            <h2>College</h2>
            <form>
              <input className='book-header-search-input'
              placeholder='Search'
              value={''}/>
            </form>
            <label>
              <input type="checkbox" />
              Post Graduate
            </label>
            <label>
              <input type="checkbox" />
              Under Graduate
            </label>

            <h2>Courses</h2>
            <form>
              <input className='book-header-search-input'
              placeholder='Search'
              value={''}/>
            </form>
            <label>
              <input type="checkbox" />
              Post Graduate
            </label>
            <label>
              <input type="checkbox" />
              Under Graduate
            </label>

            <h2>Semester</h2>
            <form>
              <input className='book-header-search-input'
              placeholder='Search'
              value={''}/>
            </form>
            <label>
              <input type="checkbox" />
              Semester 1
            </label>
            <label>
              <input type="checkbox" />
              Semester 2
            </label>
          </div>
  );
}

///main column2
function MainBookListColumn(){
  return(
  <div className='book-main1-column2'>
    <h2>Mahatma Gandhi University</h2>
    <MainBookListRow1 />
    <h2>Kerala Technical University</h2>
    <MainBookListRow2 />
    <h2>Results</h2>
    <MainBookListRow3 />
  </div>
  );
}

///main row1
function MainBookListRow1(){

  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };


  return(
            <div className='book-main1-column2-scrollView1'>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
            {items.map(({ id }) => (
              <Card
                itemId={id} // NOTE: itemId is required for track items
                title={id}
                key={id}
                onClick={handleClick(id)}
                selected={isItemSelected(id)}
              />
            ))}
          </ScrollMenu>
            </div>
  );
}

///main row2
function MainBookListRow2(){

  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };


  return(
            <div className='book-main1-column2-scrollView1'>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
            {items.map(({ id }) => (
              <Card
                itemId={id} // NOTE: itemId is required for track items
                title={id}
                key={id}
                onClick={handleClick(id)}
                selected={isItemSelected(id)}
              />
            ))}
          </ScrollMenu>
            </div>
  );
}

///main row3
function MainBookListRow3(){

  const [items, setItems] = React.useState(getResultItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };


  return(
            <div className='book-main1-column2-scrollView3'>
            <ScrollMenu >
            {items.map(({ id }) => (
              <Card
                itemId={id} // NOTE: itemId is required for track items
                title={id}
                key={id}
                onClick={handleClick(id)}
                selected={isItemSelected(id)}
              />
            ))}
          </ScrollMenu>
            </div>
  );
}

///study material row
function StudyMaterialRow(){
  return(
    <div className='book-main2-column'>
      <StudyMaterialCard image={require('../../assets/Notebook.png')} title={'Notebook'} />
      <StudyMaterialCard image={require('../../assets/Calculator.png')} title={'Calculator'} />
      <StudyMaterialCard image={require('../../assets/Project Kit.png')} title={'Project Kit'} />
      <StudyMaterialCard image={require('../../assets/Cables.png')} title={'Solders & Wires'} />
      <StudyMaterialCard image={require('../../assets/Guide.png')} title={'Guides'}/>
      <StudyMaterialCard image={require('../../assets/Stationary.png')} title={'Stationaries'}/>
    </div>
  );
}

///study material card
function StudyMaterialCard({image,title}){
  return(
    <div>
      <div className='book-main2-column-card'>
        <img className='book-main2-column-card-image' src={image} width="100"height="100"/>
      </div>
      <h4 style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      }}>{title}</h4>
    </div>
  );
}

///tutorial row
function TutorialRow(){
  return(
    <div className='book-main3-tutorial-row'>
        <TutorialCard title={'Free Tutorials'} />
        <TutorialCard title={'Certification Courses'} />
        <TutorialCard title={'Curriculum Tutorials'} />
    </div>
  );
}

///tutorial button card
function TutorialCard({title}){
  return(
<div className='book-main3-tutorial-card'> 
  <h4>{title}</h4>  
</div>
  );
}

///footer
function Footer(){
  return(
    <div className='book-footer'>
      <div className='book-main-footer-content'>
          <img src={require('../../assets/book_footer_logo.png')} width="250"height="250"/>
          </div>
          <div className='book-main-footer-content'>
            <h3 className='book-main-footer-content-h2'>Get to Know Us</h3>
            <h4 className='book-main-footer-content-h4'>About</h4>
            <h4 className='book-main-footer-content-h4'>Pricing</h4>
            <h4 className='book-main-footer-content-h4'>Contact</h4>
            <h4 className='book-main-footer-content-h4'>Careers</h4>
            <h4 className='book-main-footer-content-h4'>Partnership Enquiry</h4>
          </div>
          <div className='book-main-footer-content'>
          <h3 className='book-main-footer-content-h2'>Conntect With Us</h3>
            <h4 className='book-main-footer-content-h4'>Instagram</h4>
            <h4 className='book-main-footer-content-h4'>Facebook</h4>
            <h4 className='book-main-footer-content-h4'>Website</h4>
          </div>
          <div className='book-main-footer-content'>
          <h3 className='book-main-footer-content-h2'>Services</h3>
            <h4 className='book-main-footer-content-h4'>Books</h4>
            <h4 className='book-main-footer-content-h4'>Tuition</h4>
            <h4 className='book-main-footer-content-h4'>Hostel</h4>
            <h4 className='book-main-footer-content-h4'>Placement</h4>
          </div>
          <div className='book-main-footer-content'>
          <h3 className='book-main-footer-content-h2'>Make Money With Us</h3>
            <h4 className='book-main-footer-content-h4'>Affiliate Program</h4>
            <h4 className='book-main-footer-content-h4'>Sell On TomeGrad</h4>
            <h4 className='book-main-footer-content-h4'>Tuition Partnership</h4>
          </div>
          </div>
  )
}

///colleage card
function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '10rem',
      }}
      tabIndex={0}>
      <div className="book-main1-column2-scrollView1-card">
      <img className='book-main1-column2-scrollView1-card-image' src={require('../../assets/book.png')} width="80"height="100"/>
      <h6>MBA</h6>
      </div>
      {/* <div
       // style={{
         // height: '200px',
       // }}
      ///> */}
    </div>
  );
}

function Arrow({
  children,
  disabled,
  onClick})
  {
  return (
    <div className='book-main1-column2-scrollView1-arrow-button'>
<button
      disabled={disabled}
      onClick={onClick}
      style={{
        background: "transparent",
        border:"none",
        borderRadius:"1.5rem",
        cursor: "pointer",
        right: "1%",
        width:"2.5rem",
        height:"2.5rem",
        opacity: disabled ? "0" : "1",
        userSelect: "none"
      }}
    >
      {children}
    </button>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems:"center"
    }} disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <BiLeftArrow />
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <BiRightArrow />
    </Arrow>
  );
}

export default Book