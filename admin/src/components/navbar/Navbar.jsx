import "./navbar.scss";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import TopSidebar from "../TopSidebar/TopSidebar";


const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fullnavcontainer">
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="iconn"/>
        </div>
        <div className="items">
          <div className="item">
           <Link to={'/'} className="link"><HomeOutlinedIcon className="icon1" /></Link>
          </div>
          <div className="item">
            <LanguageOutlinedIcon className="icon1" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          {/* <div className="item"> */}
            <button className="optionbtn" onClick={()=>setToggle(!toggle)}><ListOutlinedIcon className="icon1" /></button>
          {/* </div> */}
          { toggle && <div className="thistoggle">
            <TopSidebar className="topsidetoggle"/>
          </div>}
          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocI1_5bSYX_-93sPC5Fc3zUPACPpiUkih-SbB8yHCC_O3w=s288-c-no"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
