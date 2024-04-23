import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateCategory } from './CategorySlice';

const EditCategory = ({category}) => {
  const dispatch = useDispatch()
  const [id, setId] = useState("")
  const [clothing, setClothing] = useState("");
  const [shoes, setShoes] = useState("");
  const [muslim_wear, setMuslim_War] = useState("");
  const [watches, setWatches] = useState("");
  const [jewellery, setJewellery] = useState("");

   const handleUpdateCategorySubmit = (e) =>{
      e.preventDefault()
      const category = {id, clothing,shoes,muslim_wear,watches ,jewellery }
      dispatch(updateCategory(category))
   }

   useEffect(()=>{
       if(category){
        setId(category.id)
        setClothing(category.clothing)
        setShoes(category.shoes)
        setMuslim_War(category.muslim_wear)
        setWatches(category.watches)
        setJewellery(category.jewellery)
       }
   },[category])

   const reset = ()=>{
    setId("")
    setClothing("")
    setShoes("")
    SetMuslim_War("")
    setWatches("")
    setJewellery("")
   }

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
                  Add Category
                </h3>
                <div className=" border border-2 shadaw rounded px-5 pt-3 pb-2 d-flex justify-content-center align-items-center">
                <form onSubmit={handleUpdateCategorySubmit}>
                    <div >
                      <div class="mb-3">
                        <label for="exampleInputProduct" class="form-label fw-semibold">
                          Clothing:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          style={{ width: "385px" }}
                          name="clothing"
                          id="clothing"
                          aria-describedby="emailHelp"
                          placeholder="Clothing"
                          value={clothing}
                          onChange={(e) => {
                            setClothing(e.target.value);
                          }}
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputProduct" class="form-label fw-semibold">
                          Shoes:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          style={{ width: "385px" }}
                          name="shoes"
                          id="shoes"
                          aria-describedby="emailHelp"
                          placeholder="Shoes"
                          value={shoes}
                          onChange={(e) => {
                            setShoes(e.target.value);
                          }}
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputProduct" class="form-label fw-semibold">
                         muslim_wear:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          style={{ width: "385px" }}
                          name="muslim_wear"
                          id="muslim_wear"
                          aria-describedby="emailHelp"
                          placeholder="muslim_wear"
                          value={muslim_wear}
                          onChange={(e) => {
                            setMuslim_War(e.target.value);
                          }}
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputProduct" class="form-label fw-semibold">
                        Watches:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          style={{ width: "385px" }}
                          name="watches"
                          id="watches"
                          aria-describedby="emailHelp"
                          placeholder="Watches"
                          value={watches}
                          onChange={(e) => {
                            setWatches(e.target.value);
                          }}
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputProduct" class="form-label fw-semibold">
                        Jewellery:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          style={{ width: "385px" }}
                          name="jewellery"
                          id="jewellery"
                          aria-describedby="emailHelp"
                          placeholder="Jewellery"
                          value={jewellery}
                          onChange={(e) => {
                            setJewellery(e.target.value);
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
                        onClick={() => setReset(true)}
                      >
                        Add Category
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
  )
}

export default EditCategory