import React from 'react';

import HomeOngoingOrderContent from './HomeOngoingOrderContent';

const HomeOngoingOrder = ()=>{
         return(
            <div>
            {HomeOngoingOrderContent.map((val, index) =>{
                   return(<div className="newOrderDETAILS">
                       <div className="newOrderIconOffice">
                           <img src={val.IMG} className="OrderIcon" />
                           <div> 
                               <a className="OrderIDDetails">Order ID : <a className="OrderIDValue">{val.ID}</a></a> <br />
                               <a className="OfficeAddress">{val.Office}</a> <br />
                               <a className="Orderdate">{val.dateDMY}</a>
                           </div>
                       </div>

                       <div className="newOrderdetailpart2"> 
                           <a className="newOrderpart2">Sq. ft. : <a>&#160;</a> <a className="AreaDetail"> {val.Area1} <a className="AreaDetailsign">&#215;</a> {val.Area2}</a></a> 
                           <a className="newOrderpart2">Payment Status : <a className="PAYMENTDetail">{val.paystatus}</a></a>
                           <a className="newOrderpart2">Elevation Type : <a>&#160;</a> <a>{val.Type}</a></a>
                       </div>

                       <div className="INTITIESandONGOING">
                          <a className="ongoingOrderpart2">Deadline : <a>&#160;</a> <a className="AreaDetail"> {val.dateDMY}</a></a> 
                           <a className="ongoingOrderpart2 ">Status : &#160;<a className="PAYMENTDetail">Ongoing</a></a>
                           <a className="ongoingviewmore ">View More <a>&or;</a></a>
                       </div>

                       </div>)
            }
            )}
        </div>
         );
}

export default HomeOngoingOrder;