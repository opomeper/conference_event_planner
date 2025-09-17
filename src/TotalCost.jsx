import React, { useState, useEffect } from 'react';
import "./TotalCost.css";



const TotalCost = ({ totalCosts, ItemsDisplay }) => {
  const total_amount = totalCosts.venue + totalCosts.av + totalCosts.meals;

const handleBookPlan = (e) => {
        alert('Functionality to be added for future reference');
    };

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading"><h3>Total cost for the event</h3></p>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
            ${total_amount}
          </h2>
         
          <div className="render_items">
             <ItemsDisplay />
          </div>
        </div>
        <div className="book_now_btn">
            <button onClick={(e) => handleBookPlan(e)} className="book_now">
                  Book Plan
            </button>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
