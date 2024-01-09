import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Home() {
  const [data, updateData] = useState([]);
  const [showCardData, setShowCardData] = useState([]);

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
  }, []);


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
          </div>
        </div>
      ))
    ]);
  }, [data]);


  return (
    <>
    <div id="head" className='container mt-5' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'space-between' }}>
      {showCardData}
    </div>
    </>
  )
}

export default Home