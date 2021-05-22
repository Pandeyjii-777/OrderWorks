import React from 'react';

import OrderContent from './OrderContent';

const NewOrder = () =>{
         
    return(
        <div className="NEWORDERPAGE">
           <p className="NewOrders">New Orders</p>
           <input type="text" placeholder="Search Here" className="orderSearch"></input>
           <div>
               {OrderContent.map((val, index) =>{
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

                          <div className="INTITIESandVIEW">
                              <a className="INTITIES1">&#10003;</a>
                              <a className="INTITIES2">&#215;</a>
                              <a className="newviewmore">View More</a>
                          </div>

                          </div>)
               }
               )}
           </div>
        </div>
    );

}

export default NewOrder;