import React, { useState } from 'react';

import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import LocalGroceryStoreSharpIcon from '@material-ui/icons/LocalGroceryStoreSharp';
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';

import HomeOngoingOrder from './HomeOngoingOrder';
import HomeOrderCancelled from './HomeOrderCancelled';

const HomePage = ()=>{


let STYLE1, STYLE3;
const[Id, setID]=useState("1");
const[Showhomecontent, setShowHomecontent]=useState(<HomeOngoingOrder></HomeOngoingOrder>);

const ShowOngoingOrders = (e)=>{
    console.log("jai shree ram")
    setID(e.currentTarget.id);
    setShowHomecontent(<HomeOngoingOrder></HomeOngoingOrder>);
}

const ShowCancelled = (e)=>{
    setID(e.currentTarget.id);
    setShowHomecontent(<HomeOrderCancelled></HomeOrderCancelled>);
}

if(Id==1){
    STYLE1={
        color: "rgb(80, 80, 224)",
        borderBottom: "3px solid rgb(80, 80, 224)"
    }
}
else if(Id==3){
    STYLE3={
        color: "rgb(80, 80, 224)",
        borderBottom: "3px solid rgb(80, 80, 224)"
    }
}

      return(<div className="ORDERHomePAGE">

              <div className="Orderscompongngnew">
                 <div className="Ordecomplete"> 
                      <AssignmentTurnedInOutlinedIcon className="OrderscompongngnewsameICON" />
                      <div><a className="Orderscompongngnewsame">Orders Completed</a> <br /> <a className="Orderscompongngnewnumbsame"> 392 </a></div>
                  </div>
                  <div className="Ordecomplete2"> 
                      <LocalGroceryStoreSharpIcon className="OrderscompongngnewsameICON2" />
                      <div><a className="Orderscompongngnewsame">New Orders</a> <br /> <a className="Orderscompongngnewnumbsame"> 11 </a></div>
                  </div>
                  <div className="Ordecomplete3"> 
                      <CalendarTodaySharpIcon  className="OrderscompongngnewsameICON3" />
                      <div><a className="Orderscompongngnewsame">Ongoing Orders</a> <br /> <a className="Orderscompongngnewnumbsame"> 8 </a></div>
                  </div>
              </div>

              <p className="NewOrders">All Orders</p>
              <input type="text" placeholder="Search Here" className="orderSearch"></input>
               
               <div className="DOWNNAV">
                   <div style={STYLE1} id="1"  className="DOWNNAVoption" onClick={ShowOngoingOrders}>Ongoing Orders</div>  <div id="2" className="DOWNNAVoption">Completed</div> 
                   <div style={STYLE3} id="3" className="DOWNNAVoption" onClick={ShowCancelled}>Cancelled</div>       <div id="4" className="DOWNNAVoption">Revision Orders</div>
                </div>

            <div>{Showhomecontent}</div>

      </div>);
}

export default HomePage;