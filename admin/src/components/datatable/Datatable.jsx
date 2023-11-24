import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from "react";
import axios from "axios";
import api_key from '../../api';



const Datatable = ({columns}) => {
  const location = useLocation();
  const api = api_key();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const {data, loading, error} = useFetch(`${api}/${path}`);
  const title = path.charAt(0).toUpperCase() + path.slice(1);


  useEffect(()=>{
    setList(data)
  },[data])

  // const restLetter = path.slice(1);
  // const title = (firstLetter + restLetter);

  // const {data:hoteldata} = useFetch("/hotels");
  // console.log(list)
  // console.log(hoteldata)


  // const newdata = (list.map((item) => item._id));
  // console.log(newdata)



  // useEffect(()=>{
  //   const fetch = async ()=>{
  //     try {
  //       const hello = await axios.get(`/hotels/findbyroom/${"64ed88be2e18ef285100f137"}`);
  //       console.log(hello)
  //     } catch (error) {
  //       console.log(error)
  //     }

  //   }
  //   fetch()
  // },[])


  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error)
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datablemain">
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
    </div>
  );
};

export default Datatable;