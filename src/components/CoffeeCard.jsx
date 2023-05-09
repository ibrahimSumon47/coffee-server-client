import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, img } = coffee;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Coffee" />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical">
            <button className="btn btn-active">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
