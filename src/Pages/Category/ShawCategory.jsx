import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddCategory from './AddCategory'
import { deleteCategory } from './CategorySlice'
import EditCategory from './EditCategory'

const ShawCategory = () => {
    const dispatch = useDispatch()
    const categorys = useSelector((state)=>state. categoryReducer.category)
    const [reset, setReset ]= useState(false)
    // update
    const [category, setCategory] = useState(null)
    const handleDelete = (id) =>{
        dispatch(deleteCategory(id))
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
            Add Category
          </button>
        </div>
        <table class="table" style={{boxShadow:"0px 0px 4px #dddd"}}>
          <thead>
            <tr>
              <th className="border border-2 text-info bg-primary">ID</th>
              <th className="border border-2 text-info bg-primary">Clothing</th>
              <th className="border border-2 text-info bg-primary">shoes</th>
              <th className="border border-2 text-info bg-primary"> muslim_wear</th>
              <th className="border border-2 text-info bg-primary"> watches</th>
              <th className="border border-2 text-info bg-primary">  jewellery</th>
              <th className="border border-2 text-info bg-primary">Action</th>
            </tr>
          </thead>
          <tbody>
            {categorys &&
              categorys.map((category) => {
                const { id, clothing, shoes,muslim_wear,watches,jewellery } = category;
                return (
                  <tr key={id}>
                    <th className="col-1 border">{id}</th>
                    <td className="col-2 border">{clothing}</td>
                    <td className="col-1 border">{shoes}</td>
                    <td className="col-2 border">{muslim_wear}</td>
                    <td className="col-2 border">{watches}</td>
                    <td className="col-2 border">{jewellery}</td>
                    <td className="col-2 border">
                      <button
                        type="submit"
                        class="btn btn-primary m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#updateModal"
                       onClick={()=>setCategory(category)}
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
     <AddCategory reset={reset} setReset={setReset}/>
     <EditCategory category={category}/>
    </div>
    </div>
  )
}

export default ShawCategory