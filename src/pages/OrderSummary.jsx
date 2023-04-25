import React from 'react'

import "../styles/order-sum.css";

export const OrderSummary = () => {
  return (
    
   
    <div className="success">
      <div className="flex">
        
        <div className="success-prompt-wrap">
          {/* <p className="success-prompt-heading">Order completed</p> */}
          <div className="success-prompt-prompt">
            <p>
             <h2>Order Placed👍</h2>
              <p  className="success-prompt-prompt">Payment Done </p>
            </p>
          </div>
        
        </div>
      </div>
    </div>

  
  )
}

export default OrderSummary;