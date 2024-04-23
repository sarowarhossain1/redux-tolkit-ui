import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBrand from "./AddBrand";
import { deleteBrand } from "./brandSlice";
import EditBrand from "./EditBrand";

const ShowBrand = () => {
  const dispatch = useDispatch()
  const brands = useSelector((state) => state.brandReducer.brand);
  console.log(brands);
  const [brand, setBrand] = useState(null)
  const [info, setInfo] = useState(false);

   const handleDelete = (id) =>{
      dispatch(deleteBrand(id))
   }
  

  return (
    <div>
      <div className="container mt-5">
        <div>
          <h3 className="mb-4 text-center">Add Category</h3>
          <div className="mb-3 text-end ">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Brand
            </button>
          </div>
          <table class="table" style={{boxShadow:"0px 0px 4px #dddd"}}>
            <thead>
              <tr>
                <th className="border border-2 text-info bg-primary">ID</th>
                <th className="border border-2 text-info bg-primary">fristName</th>
                <th className="border border-2 text-info bg-primary">lastName</th>
                <th className="border border-2 text-info bg-primary"> Email</th>
                <th className="border border-2 text-info bg-primary"> Number</th>
                <th className="border border-2 text-info bg-primary"> City</th>
                <th className="border border-2 text-info bg-primary"> country</th>
                <th className="border border-2 text-info bg-primary"> zip</th>
                <th className="border border-2 text-info bg-primary">Action</th>
              </tr>
            </thead>
            <tbody>
              {brands &&
                brands.map((brand) => {
                  const {
                    id,
                    fristName,
                    lastName,
                    email,
                    number,
                    city,
                    country,
                    zip,
                  } = brand;
                  return (
                    <tr key={id}>
                      <th className="col-1 border">{id}</th>
                      <td className="col-1 border">{fristName}</td>
                      <td className="col-1 border">{lastName}</td>
                      <td className="col-2 border">{email}</td>
                      <td className="col-2 border">{number}</td>
                      <td className="col-1 border">{city}</td>
                      <td className="col-1 border">{country}</td>
                      <td className="col-1 border">{zip}</td>
                      <td className="col-2 border">
                        <button
                          type="submit"
                          class="btn btn-primary m-2"
                          data-bs-toggle="modal"
                          data-bs-target="#updateModal"
                             onClick={()=>setBrand(brand)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger"
                          onClick={()=> handleDelete(id)}
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
        <AddBrand  info={info} setInfo={setInfo}/>
        <EditBrand brand={brand}/>
      </div>
    </div>
  );
};

export default ShowBrand;
