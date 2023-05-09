import React from "react";

const AddCoffee = () => {
    
    

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
      <form>
        {/* name and quantity row */}
        <div className="md:flex mb-8">
            {/* Coffee Name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Coffee Quantity */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* supplier and test */}
        <div className="md:flex mb-8">
            {/* supplier */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* test */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* category and details */}
        <div className="md:flex mb-8">
            {/* category */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* details */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* img */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Img URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="img"
                placeholder="Img URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* button */}
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
