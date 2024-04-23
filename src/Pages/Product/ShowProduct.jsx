import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import { deleteProduct } from "./ProductSlice";
import EditProduct from "./EditProduct";

const ShowProduct = () => {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  const [initForm, setInitForm] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container mt-5" >
      <div>
        <h3 className="mb-4 text-center">Add Category</h3>
        <div className="mb-3 text-end ">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => setInitForm(true)}
          >
            Add Product
          </button>
        </div>
        <table class="table " style={{boxShadow:"0px 0px 4px #dddd"}}>
          <thead>
            <tr>
              <th className="border border-2 text-info bg-primary">ID</th>
              <th className="border border-2 text-info bg-primary">Name</th>
              <th className="border border-2 text-info bg-primary">Price</th>
              <th className="border border-2 text-info bg-primary">Color</th>
              <th className="border border-2 text-info bg-primary">Size</th>
              <th className="border border-2 text-info bg-primary">Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => {
                const { id, name, price, color, size } = product;
                return (
                  <tr key={id}>
                    <th className="col-1 border">{id}</th>
                    <td className="col-3 border">{name}</td>
                    <td className="col-2 border">{price}</td>
                    <td className="col-2 border">{color}</td>
                    <td className="col-2 border">{size}</td>
                    <td className="col-2 border">
                      <button
                        type="submit"
                        class="btn btn-primary m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#updateModal"
                        onClick={() => setProduct(product)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <AddProduct initForm={initForm} setInitForm={setInitForm} />
      <EditProduct product={product} />
    </div>
  );
};

export default ShowProduct;
