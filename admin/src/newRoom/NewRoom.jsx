import "./newRoom.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { roomInputs } from "../formSource";
import axios from "axios";
import api_key from '../api';

const NewRoom = ({ inputs, title }) => {
  const [info, setInfo] = useState({});
  const [hotelID, setHotelID] = useState(undefined);
  const [rooms, setRooms] = useState([]);
  const api = api_key();


  
  const {data, loading, error} = useFetch(`${api}/hotels`);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room)=> ({number: room}));

    try {
      await axios.post(`${api}/rooms/${hotelID}`, {...info, roomNumbers})
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className="newnewnew">
    <div className="new">
      <div className="sidebarbarbar">
      <Sidebar />
      </div>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleChange}/>
                </div>
              ))}
                <div className="formInput">
                  <label>Rooms</label>
                  <textarea className="textareaarea" onChange={e=> setRooms(e.target.value)} placeholder="Give comma between room numbers"/>
                </div>
                <div className="formInput">
                  <label>Choose a hotel</label>
                  <select className="selectareaarea" id="hotelId" onChange={e=>setHotelID(e.target.value)}>
                    {loading? "loading" : data && data.map((hotel)=>(
                      <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                    ))}
                  </select>
                </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewRoom;
