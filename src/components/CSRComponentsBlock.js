import React from "react";
import { imagesLinks } from '../assets/imageLinks';
import { Link } from "react-router-dom"

export const CSRComponentsBlock = ({ componentsQty }) => {

  const getComponent = (index) => 
    <div className="item" key={index}>
      <div className="item-image">
        <img src={imagesLinks[index % 10]} alt="Item Name"/>
        <div className="item-actions">
          <button type="button" className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
      <div className="item-details">
        <h3 className="item-title">Item Title: {index + 1}</h3>
        <p className="item-description">This is a brief description of the item, highlighting its key features and benefits.</p>
        <Link to="https://hidden-refuge-97632-934ef58eadcb.herokuapp.com">More info ...</Link>
        <div className="item-meta">
          <span className="item-price">$19.99</span>
          <span className="item-rating">Rating: ★★★★☆</span>
        </div>
      </div>
  </div>;

    const getComponents = () => {
      const arrayWithObjects = Array.from({ length: componentsQty }, (_, index) => (getComponent(index)));
      return arrayWithObjects;
    }

  return (
        <div className="rendering-type">
            <h1 className="rendering-type-title">CSR rendering</h1>
            <div className="components-block">
                <h1 className="font-weight-light components-qty">Components quantity: {componentsQty}</h1>
                    <div id="components" className="components">
                    {getComponents()}
                    </div>
                </div>
        </div>
      );
};
