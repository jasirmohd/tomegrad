import React,{useEffect,useState} from 'react'
import "../Pages/LandingPage.css";
import SearchField from "react-search-field";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmsIcon from '@mui/icons-material/Sms';


function LandingPage() {
  const [mobileview, setMobileview] = useState(false);


  const mobilemenu = () => {
    console.log("cliked");
    setMobileview(true);
  };

  function blankhome() {
    const homelink = document.querySelector(".home-link");
    homelink.classList.add("mobile-menu");
    const ullinks = document.querySelector(".ul-links");
    ullinks.classList.add("mobile-menu");
  }
  function back() {
    setMobileview(false);
  }

  return (
    <div className='App'>
      <main>
      <header>
            <div className="search-icon">
              <nav className="navbar">     
                <ul className="home-link">
         
                  <li className=''>
                    <a href="/">Tome Grad</a>
                    <SearchField
      classNames="searchbox"
      placeholder="Search books"
      onChange={""}
      searchText=""
      onSearchClick={""}
    />               
                  </li>
                </ul>
     
                {mobileview ? (
                  <>
                    {blankhome}
                    <div className="mobilelinks">
                      <div className="menu-btn" onClick={back}>
                        <div className="c-1"></div>
                        <div className="c-2"></div>
                      </div>

                      <ul className="mobileView-list">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/About">About me</a>
                        </li>
                        <li>
                          <a href="">Connect</a>
                        </li>
                      </ul>
                      <ul className="mobilemenu-icons">
                        <li>
                          <a href="mailto:libinluvis10@gmail.com">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDQwIDMwIj4KICA8ZyBpZD0iZ21haWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTY0KSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSA2NCkiIGZpbGw9IiNlY2VmZjEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzQiIGRhdGEtbmFtZT0iUGF0aCA0IiBkPSJNMjU2LDE2MC4yMTJsMTUsMTEuODQ1VjE0OC42NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM2IC03OC4wNTcpIiBmaWxsPSIjY2ZkOGRjIi8+CiAgICA8cGF0aCBpZD0iUGF0aF81IiBkYXRhLW5hbWU9IlBhdGggNSIgZD0iTTM2LjI1LDY0SDM1TDIwLDc1Ljg0NSw1LDY0SDMuNzVBMy43NTEsMy43NTEsMCwwLDAsMCw2Ny43NXYyMi41QTMuNzUxLDMuNzUxLDAsMCwwLDMuNzUsOTRINVY3MC42MTVMMjAsODIuMTUybDE1LTExLjU0Vjk0aDEuMjVBMy43NTEsMy43NTEsMCwwLDAsNDAsOTAuMjVWNjcuNzVBMy43NTEsMy43NTEsMCwwLDAsMzYuMjUsNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjZjQ0MzM2Ii8+CiAgPC9nPgo8L3N2Zz4K"
                              alt=""
                              height="40px"
                              width="40px"
                            ></img>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/libin2020/" target='_blank'>
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBpZD0ibGlua2VkaW4iIGQ9Ik0zNC4xNDEsMEg1Ljg1OUE1Ljg2Niw1Ljg2NiwwLDAsMCwwLDUuODU5VjM0LjE0MUE1Ljg2Niw1Ljg2NiwwLDAsMCw1Ljg1OSw0MEgzNC4xNDFBNS44NjYsNS44NjYsMCwwLDAsNDAsMzQuMTQxVjUuODU5QTUuODY2LDUuODY2LDAsMCwwLDM0LjE0MSwwWm0tMjAsMzEuNzE5SDkuNDUzVjE1LjMxM2g0LjY4OFptMC0xOC43NUg5LjQ1M1Y4LjI4MWg0LjY4OFptMTYuNDA2LDE4Ljc1SDI1Ljg1OVYyMi4zNDRhMi4zNDQsMi4zNDQsMCwwLDAtNC42ODcsMHY5LjM3NUgxNi40ODRWMTUuMzEzaDQuNjg4VjE2LjJhMTAuMTYxLDEwLjE2MSwwLDAsMSwzLjUxNi0uODgzLDYuMTM1LDYuMTM1LDAsMCwxLDUuODU5LDYuMjI2Wm0wLDAiIGZpbGw9IiMwMDdhYjkiLz4KPC9zdmc+Cg=="
                              alt=""
                              height="40px"
                              width="40px"
                            ></img>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/LIBINLUVIS" target="_blank">
                            <i class="fa fa-2x fa-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <ul className="ul-links">
                    <li>
                        <SmsIcon style={{marginRight:"5px"}}/>
                        <a href="/About">Expert Support</a>
                    </li>

                      <li>
                       <FavoriteIcon style={{height:'30px',width:'30px'}}/>
                      </li>

                      <li>                   
                        <ShoppingCartIcon style={{height:'30px',width:'30px'}}/>
                      </li>

                      <li>
                        <AccountCircleIcon style={{height:'30px',width:'30px'}}/>
                      </li>
                      <li>
                        <a href="/About">Login</a>
                    </li>
             

                    </ul>
                    <div className="mobile-bar" onClick={mobilemenu}>
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                    </div>
                  </>
                )}
              </nav>
            </div>
          </header>
      
      </main>
    </div>
  )
}

export default LandingPage