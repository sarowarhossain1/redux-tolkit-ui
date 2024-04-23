import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./ProductSlice";

const AddProduct = ({ initForm, setInitForm }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setName("");
    setPrice("");
    setColor("")
    setSize("")
  }, [initForm]);

  const numberOfProduct = useSelector(
    (state) => state.productReducer.products.length
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setInitForm(false);
    const product = { id: numberOfProduct + 1, name, price ,color,size};
    dispatch(addProduct(product));
  };

  return (
    <div>
      <div>
        <div
        style={{marginTop:"255px"}}
          class="modal fade mt-5"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div className=" ">
                <div className="d-flex flex-column justify-content-center  bg-light align-items-center ">
                  <h3 style={{ fontWeight: "600",marginTop:"35px",marginBottom:"30px" }}>Add Product</h3>
                  <div className=" border border-2 shadaw rounded px-5 pt-3 pb-2 d-flex justify-content-center align-items-center" style={{width:"450px",height:"450px",marginBottom:"35px"}}>
                  <form onSubmit={handleSubmit}>
                      <div style={{height:"325px"}}>
                        <div class="mb-3">
                          <label for="exampleInputProduct" class="form-label">
                          ProductName:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            style={{width:"285px"}}
                            id="name"
                            aria-describedby="emailHelp"
                            placeholder="Product Name"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            required
                          />
                          
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPrice" class="form-label">
                          Price:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="price"
                            aria-describedby="emailHelp"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => {
                              setPrice(e.target.value);
                            }}
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputColor" class="form-label">
                          Color:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="color"
                            aria-describedby="emailHelp"
                            placeholder="Color"
                            value={color}
                            onChange={(e) => {
                              setColor(e.target.value);
                            }}
                            required
                          />
                        </div>
                        <div class="">
                          <label for="exampleInputSize" class="form-label">
                          Size:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="size"
                            aria-describedby="emailHelp"
                            placeholder="Size"
                            value={size}
                            onChange={(e) => {
                              setSize(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>
                      <div class="modal-footer mt-4">
                        <button
                          type="submit"
                          class="btn btn-primary m-2"
                          data-bs-dismiss="modal"
                        >
                         Add Product
                        </button>
                        <button
                          type="submit"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        {/* <button
                          class="btn btn-warning"
                          // data-bs-dismiss="modal"
                          onClick={()=>reset()}
                        >
                          Reset
                        </button> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
