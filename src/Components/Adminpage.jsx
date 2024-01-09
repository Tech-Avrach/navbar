import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Adminpage() {

    let [data, updateData] = useState([]);
  let [Product, updateProduct] = useState({ name: '', price: '', cat: '', cmp: '' });
  let [btnAction, updateBtnAction] = useState(true);
  let [updPro, updateUpdPro] = useState({ name: '', price: '', cat: '', cmp: '' });
  let [id, updateId] = useState();
  let [d, updateD] = useState(null);

  useEffect(() => {
    async function show() {
      var t = await axios.get('https://mosega6226.pythonanywhere.com/product/');
      updateData(t.data);
    }
    show();
  }, [data]);

  let change = (e) => {
    updateProduct({ ...Product, [e.target.name]: e.target.value });
  };

  let upchange = (e) => {
    updateUpdPro({ ...updPro, [e.target.name]: e.target.value });
  };


  return (
    <>
    <div>
      <input type="number" className="form-control" onChange={async (e) => {
        try {
          var res = await axios.get(`https://mosega6226.pythonanywhere.com/product/${e.target.value}/`);
          var d = await res.data;
          console.log(d);
          updateD(d);
        } catch (err) {
          console.log('not found');
          updateD(null);
        }
      }}></input>
    </div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Catahory</th>
          <th scope="col">Company</th>
          <th scope="col">Delete</th>
          <th scope="col">Update</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v) => (
          <tr key={v.id} >
            <td className={v.id === d?.id ? "bg-success" : ""}>{v.id}</td>
            <td className={v.id === d?.id ? "bg-success" : ""}>{v.name}</td>
            <td className={v.id === d?.id ? "bg-success" : ""}>{v.price}</td>
            <td className={v.id === d?.id ? "bg-success" : ""}>{v.cat}</td>
            <td className={v.id === d?.id ? "bg-success" : ""}>{v.cmp}</td>
            <td>
              <button className="btn btn-danger" onClick={() => {
                async function delPro() {
                  let res = await axios.delete(`https://mosega6226.pythonanywhere.com/product/${v.id}/`);
                  if (res.status === 204) {
                    alert('deleted Sucessfully !!');
                  }
                }
                delPro();
              }}>Delete</button>
            </td>
            <td>
              <button className="btn btn-success" onClick={() => {
                updateUpdPro({ name: v.name, price: v.price, cat: v.cat, cmp: v.cmp });
                updateBtnAction(false);
                updateId(v.id);
              }}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <form className="form" onSubmit={(e) => {
      e.preventDefault();
      async function addpro() {
        let res = await axios.post(`https://mosega6226.pythonanywhere.com/product/`, Product);
        if (res.status === 201) {
          alert('added');
          updateProduct({ name: '', price: '', cat: '', cmp: '' });
        }
      }
      addpro();
    }}>
      <h4>Name</h4><input className="form-control" type="text" value={Product.name} name='name' onChange={change}></input>
      <h4>Price</h4><input className="form-control" type="number" value={Product.price} name="price" onChange={change}></input>
      <h4>Catagory</h4><input className="form-control" type="text" value={Product.cat} name="cat" onChange={change}></input>
      <h4>Company</h4><input className="form-control" type="text" value={Product.cmp} name="cmp" onChange={change}></input>
      <button className="btn btn-primary">Submit</button>
    </form>
    <hr />
    <hr />
    <form className="form" onSubmit={(e) => {
      e.preventDefault();
      async function updValue() {
        let res = await axios.put(`https://mosega6226.pythonanywhere.com/product/${id}/`, updPro);
        if (res.status === 200) {
          alert('updated');
          updateUpdPro({ name: '', price: '', cat: '', cmp: '' });
          updateBtnAction(true);
        }
      }
      updValue();
    }}>
      <h4>Name</h4><input className="form-control" type="text" value={updPro.name} name="name" onChange={upchange}></input>
      <h4>Price</h4><input className="form-control" type="number" value={updPro.price} name="price" onChange={upchange}></input>
      <h4>Catagory</h4><input className="form-control" type="text" value={updPro.cat} name="cat" onChange={upchange}></input>
      <h4>Company</h4><input className="form-control" type="text" value={updPro.cmp} name="cmp" onChange={upchange}></input>
      <button className="btn btn-success" disabled={btnAction}>Update</button>
    </form>
    {id}
  </>
  )
}

export default Adminpage