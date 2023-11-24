import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = ({columns}) => {
  return (
    <div className="listcontainerfirst">
    <div className="list">
      <div className="blccon">
        <Sidebar className="sideshow1"/>
      </div>
      <div className="listContainer">
        <Navbar/>
        <Datatable columns={columns}/>
      </div>
    </div>
    </div>
  )
}

export default List