import React, { useState } from 'react';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import RestoreIcon from '@material-ui/icons/Restore';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DashboardIcon from '@material-ui/icons/Dashboard';

import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';

import NewOrder from './NewOrder';
import HomePage from './HomePage';

const Cover =() =>{


const[Showpage, setshowPage]= useState(<HomePage></HomePage>);

    let Style1, Style2;
    const[id, setID]=useState("1");

  const SHOWhome =(e) =>{
      setID(e.currentTarget.id);
      setshowPage(<HomePage></HomePage>);
  }

   const SHOWneworder =(e) =>{
    setID(e.currentTarget.id);
    setshowPage(<NewOrder></NewOrder>);
   }
   
   if(id==1){
    Style1={
        color: "blue",
        borderLeft: "4px solid blue",
        backgroundColor: "rgb(183, 183, 218)"
    }
   }
   else if(id==2){
    Style2={
        color: "blue",
        borderLeft: "4px solid blue",
        backgroundColor: "rgb(183, 183, 218)"
    }
   }

    return(
        <div className="cover">
            <div className="pageName">
                <div className="tagdetail">
                  <div className="tagsymbol"><DashboardIcon /></div>
                  <div><a className="vision">Vision</a><a className="threeD">3D</a><br /> <a className="designers">DESIGNERS</a> </div>
                </div>
               <div className="ICONDetails" id="1" style={Style1} onClick={SHOWhome}> <HomeOutlinedIcon className="ICONS" /><a className="ICONName">HOME</a> </div>
               <div className="ICONDetails" id="2" style={Style2} onClick={SHOWneworder}> <RestoreIcon className="ICONS" /> <a className="ICONName">NEW ORDERS</a></div>
               <div className="ICONDetails"> <LocalOfferOutlinedIcon className="ICONS" /> <a className="ICONName">COUPONS</a></div>
               <div className="ICONDetails"> <DateRangeIcon className="ICONS" /> <a className="ICONName">DEADLINE</a></div>
               <div className="ICONDetails"> <AttachMoneyIcon className="ICONS" /> <a className="ICONName">SET RATES</a></div>
            </div>

            <div className="ShowPage">
               <div className="Navbar">
                <a className="Lookingclick">Looking for help ? <a herf="#" target="_blanck" className="clicking"> Click Here</a> </a>
               <div className="Profileicologname">
               <NotificationsOutlinedIcon className="NAVICONS" />
               <LocalGroceryStoreOutlinedIcon className="NAVICONS" />
               <img  className="profilepic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1scuOqqjshuAory56slZRtWse9NR8yXRofQ&usqp=CAU" /> 
               <a className="Profilename">Suryabhan Pandey <br /> <a className="profilelogout">LOGOUT</a> </a> 
                </div>
               </div>
            
            <div className="ShowPagecontent">{Showpage}</div>
            </div>
        </div>
    );
}

export default Cover;