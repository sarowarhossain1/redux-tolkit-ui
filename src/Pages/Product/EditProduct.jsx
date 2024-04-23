import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "./ProductSlice";

const EditProduct = ({ product }) => {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [color, setColor] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    if (product) {
      setId(product.id);
      setName(product.name);
      setPrice(product.price);
      setColor(product.color);
      setSize(product.size);
    }
  }, [product]);

  // const reset = () =>{
  //   setId("");
  //   setName("");
  //   setPrice("");
  //   setColor("");
  //   setSize("");
  // }

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const product = { id, name, price, color, size };
    dispatch(updateProduct(product));
  };

  return (
    <div>
      <div>
        <div
          style={{ marginTop: "145px" }}
          class="modal fade"
          id="updateModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div className=" ">
                <div className="d-flex flex-column justify-content-center  bg-light align-items-center ">
                  <h3
                    style={{
                      fontWeight: "600",
                      marginTop: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    Update Product
                  </h3>
                  <div className=" border  shadaw rounded px-5 pt-3 pb-2 d-flex justify-content-center align-items-center " style={{width:"450px",height:"450px",marginBottom:"35px"}}>
                    <form onSubmit={handleUpdateSubmit}>
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
                          update
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

export default EditProduct;
