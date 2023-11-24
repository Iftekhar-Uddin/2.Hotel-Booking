import "./newHotel.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { hotelInputs } from "../formSource";
import useFetch from "./../hooks/useFetch"
import axios from "axios";
import api_key from '../api';

const NewHotel = ({title}) => {
  const api = api_key();
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);


  const {data, loading, error} = useFetch(`${api}/rooms`)

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setRooms(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(Object.values(files).map(async(file)=>{
        const data= new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dpyzwx4t8/image/upload", data);
        const { url } = uploadRes.data;
        return url
      }));

      const newHotel = {
        ...info, rooms, photos:list
      };

      await axios.post(`${api}/hotels`, newHotel)
    } catch (error) {
      console.log(error)
    }
  };
  console.log(files)

  return (
    <div className="amarnewhotel">
    <div className="hnew">
      <div className="sidebarrhnew">
        <Sidebar/>
      </div>
      <div className="hnewContainer">
        <Navbar />
        <div className="htop">
          <h1>{title}</h1>
        </div>
        <div className="hbottom">
          <div className="hleft">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="hright">
            <form>
              <div className="hformInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="hicon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="hformInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
                <div className="hformInput">
                  <label>Featured</label>
                  <select id="featured" onChange={handleChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select>
                </div>
                <div className="hselectRooms">
                  <label>Rooms</label>
                  <select id="rooms" multiple onChange={handleSelect}>
                    {loading? "loading" : data && data.map(room=>(
                      <option key={room._id} value={room._id}>{room.title}</option>
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

export default NewHotel;

