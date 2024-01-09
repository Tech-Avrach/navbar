import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Product() {
  const [data, updateData] = useState([]);
  const [showCardData, setShowCardData] = useState([]);
  let [Product, updateProduct] = useState({ name: '', price: '', cat: '', cmp: '' });
  let [count, setCount] = useState(0);


  useEffect(() => {
    
    async function fetchData() {
      try {
        const response = await axios.get('https://mosega6226.pythonanywhere.com/product/');
        updateData(response.data);
      } catch (error) {

        console.error('Error Config:', error );
      }
    }

    // Call fetchData inside useEffect
    fetchData();
  }, [count]);
 

  useEffect(() => {
    document.getElementById('head').innerHTML=""
    // Use the generated cardData array to set the state
    setShowCardData(prevShowCardData => [
      ...prevShowCardData,
      ...data.map((v) => (
        <div  className="card" style={{ width: '18rem', marginBottom: '16px' }}>
          <img src="https://i.pinimg.com/originals/80/b5/81/80b5813d8ad81a765ca47ebc59a65ac3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{v.id} {v.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price - {v.price}</li>
            <li className="list-group-item">Category - {v.cat}</li>
            <li className="list-group-item">Company - {v.cmp}</li>
          </ul>
          <div className="card-body">
          <button className="btn btn-danger" onClick={() => {
                  async function delPro() {
                    let res = await axios.delete(`https://mosega6226.pythonanywhere.com/product/${v.id}/`);
                    if (res.status === 204) {
                      alert('deleted Sucessfully !!');
                      setCount(count+1);
                    }
                  }
                  delPro();
                }}>Delete</button>
          </div>
        </div>
      ))
    ]);
  }, [data,Product]);

  let change = (e) => {
    updateProduct({ ...Product, [e.target.name]: e.target.value });
  };

  return (
        <>
        <form className="form" onSubmit={(e) => {
        e.preventDefault();
        async function addpro() {
          let res = await axios.post(`https://mosega6226.pythonanywhere.com/product/`, Product);
          if (res.status === 201) {
            alert('added');
            updateProduct({ name: '', price: '', cat: '', cmp: '' });
            setCount(count+1);
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
    <div id="head" className='container mt-5' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'space-between' }}>
      {showCardData}
    </div>
    </>
  );
}

export default Product;
