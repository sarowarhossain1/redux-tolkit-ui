import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBrand } from "./brandSlice";

const EditBrand = ({ brand }) => {
  const [id, setId] = useState();
  const [fristName, setFristName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [zip, setZip] = useState();

  useEffect(() => {
    if (brand) {
      setId(brand.id);
      setFristName(brand.fristName);
      setLastName(brand.lastName);
      setEmail(brand.email);
      setNumber(brand.number);
      setCity(brand.city);
      setCountry(brand.country);
      setZip(brand.zip);
    }
  }, [brand]);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    const brand = {
      id,
      fristName,
      lastName,
      email,
      number,
      city,
      country,
      zip,
    };
    dispatch(updateBrand(brand))
  };

  return (
    <div>
      <div
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
                    marginTop: "35px",
                    marginBottom: "30px",
                  }}
                >
                  Edit Employer Brand Management
                </h3>
                <div
                  className=" border border-2 shadaw rounded px-5 pt-3 pb-2 d-flex justify-content-center align-items-center"
                  style={{ marginBottom: "15px" }}
                >
                  <form class="row g-3" onSubmit={handleUpdate}>
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        Frist Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="fristName"
                        name="fristName"
                        value={fristName}
                        placeholder="FristName"
                        onChange={(e) => {
                          setFristName(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        placeholder="LastName"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputEmail4" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="LastName"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress2" class="form-label">
                        Number
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="number"
                        placeholder="Enter Your Number"
                        name="number"
                        value={number}
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        placeholder="City"
                        name="city"
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col-md-4">
                      <label for="inputState" class="form-label">
                        Country
                      </label>
                      <select
                        id="country"
                        class="form-select"
                        name="country"
                        value={country}
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                      >
                        <option selected>Choose...</option>
                        <option>Bangladesh</option>
                        <option>Amerika</option>
                      </select>
                    </div>
                    <div class="col-md-2">
                      <label for="inputZip" class="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="zip"
                        name="zip"
                        placeholder="Zip COde"
                        value={zip}
                        onChange={(e) => {
                          setZip(e.target.value);
                        }}
                      />
                    </div>

                    <div class="col-12 text-end">
                      <button
                        type="submit"
                        class="btn btn-info m-2"
                        data-bs-dismiss="modal"
                        onClick={() => setInfo(true)}
                      >
                        update Brand
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBrand;
