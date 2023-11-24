import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Single = () => {
  return (
    <div className="singlenew">
    <div className="single">
      <div className="forsidebar"><Sidebar /></div>
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocI1_5bSYX_-93sPC5Fc3zUPACPpiUkih-SbB8yHCC_O3w=s288-c-no"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Iftekhar Uddin</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">iftekharuddin720@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">01731615141</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    North Basabo, Dhaka-1200
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bangladesh.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Table/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Single;
