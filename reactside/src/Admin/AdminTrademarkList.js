import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrademarks, updateTrademark } from "../redux/actions/TrademarkActions/TrademarkAction";
import useTable from "../Admin/useTable";
import { Button, TableBody, TableCell, TableRow } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const headCells = [
  { id: "id", label: "id" },
  { id: "Name", label: "Name" },
  { id: "Description", label: "Description" },
  { id: "Image", label: "Image" },
  { id: "Check", label: "Check" },
  { id: "Delete", label: "Delete" },
];

export default function TrademarkList() {
  const dispatch = useDispatch();
  const trademarks = useSelector((state) => state.trademarkListReducer);
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPaggingAndSorting,
  } = useTable(trademarks, headCells);
  useEffect(() => {
    dispatch(getTrademarks(0));
  }, []);


 const checkTrademark = id =>{
    console.log(id);
    dispatch(updateTrademark(id))
  }


  return (
    <div>
      {!trademarks.items ? (
        <div><div className="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
        <span className="sr-only">Loading...</span>
      </div></div>
      ) : (
        <div>
          <h2>Onay Bekleyen Markalar</h2>
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPaggingAndSorting().map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell style={{ height: "10px", width: "500px" }}>
                    {" "}
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="image"
                        height="140"
                        width="10"
                        image={"data:image/png;base64," + item.image}
                        title="image"
                      />
                    </CardActionArea>
                  </TableCell>
                  <TableCell><Button style={{backgroundColor : "green"}} onClick={() => checkTrademark(item.id)}><CheckCircleOutlineIcon/></Button></TableCell>
                  <TableCell><Button style={{backgroundColor : "red"}} onClick={() => checkTrademark(item.id)}><CancelOutlinedIcon/></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
          <TblPagination />
        </div>
      )}
    </div>
  );
}
