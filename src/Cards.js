import React, {useState,useEffect} from 'react'
import './style.css'

const Cards = () => {

       const [get, setGet] = useState([]);

       const fetchApiData = () => {
         fetch("https://api.seatgeek.com/2/events?client_id=MjQ1OTk2ODB8MTYzNzczNDkzNy45MDAwMjE&page=1&per_page=10")
         .then((res)=> {
           return res.json();
         }).then((info)=>{
           let client = info.events
           setGet(client);
         })
       }
       
       
       
       useEffect ( () => {
       fetchApiData();
       }, [])
       

 return (
      <>
        <div className="Cont">
        <div className='row'>
              {get.map(info => (
                <div className="card" style={{width: "18rem"}} key={info.id}>
                <div className="card-body" >

                  <h5>Type - {info.type}</h5>
                  <p> ID - {info.id}</p>
                  <p className="card-text">DATE - {info.datetime_utc}</p>

                  <p className="card-title"> Title - {info.title}</p>
                  <h6 className="card-subtitle mb-2 text-muted">popularity --{info.popularity}</h6>
                 <button className='btn btn-outline-primary' ><a href={info.url} className="card-link">More info</a></button>
                </div>
              </div>
              ))}
          </div> 
        </div>

      
      </>

  )
}

export default Cards


/*For every event, you just have to store (& show) the following information in indexed DB:
type, id, datetime_utc, title, popularity, url.*/