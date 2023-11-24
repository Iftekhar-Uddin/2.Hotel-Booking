import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 2357459,
      product: "Iphone 13 pro",
      img: "https://macstorebd.com/my-assets/image/product/eb6d19c1007f524e4273d45ffe1c74ce.png",
      customer: "Juvayer Ahmed",
      date: "29 November",
      amount: 90700,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2235235,
      product: "Sony Mp3 player",
      img: "https://www.cnet.com/a/img/resize/3350f37a14da72459e3be44ae0310abc55a39c3c/hub/2009/12/24/1ee9884f-cbf2-11e2-9a4a-0291187b029a/orig-b-series.jpg?auto=webp&width=1200",
      customer: "Marina Afrin",
      date: "17 November",
      amount: 12500,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342353,
      product: "Toshiba Q300 SSD",
      img: "https://www.bdstall.com/asset/product-image/giant_50672.jpg",
      customer: "Abu Bakar",
      date: "14 November",
      amount: 2500,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "AOC 21.5 Inch Monitor ",
      img: "https://www.startech.com.bd/image/cache/catalog/monitor/aoc/22v2q/22v2q-1-500x500.jpg",
      customer: "Ziaur Rahman",
      date: "08 November",
      amount: 11500,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Acer aspire-5 A515",
      img: "https://www.startech.com.bd/image/cache/catalog/laptop/acer/acer-aspire-3/acer-aspire-3-01-500x500.webp",
      customer: "Hasan Mahmud",
      date: "02 November",
      amount: 759000,
      method: "Cash on Delivery",
      status: "Approved",
    },
  ];
  
  return (

    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
