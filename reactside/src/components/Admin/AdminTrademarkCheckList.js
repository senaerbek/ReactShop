import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminTrademarks } from "../../redux/actions/AdminActions/AdminAction";
import useTable from "../Admin/useTable";
import {  TableBody, TableCell, TableRow } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const headCells = [
  { id: "id", label: "id" },
  { id: "Name", label: "Name" },
  { id: "Description", label: "Description" },
  { id: "Image", label: "Image" },
];

export default function TrademarkList() {
  const dispatch = useDispatch();
  const trademarks = useSelector((state) => state.adminTrademarkReducer);
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPaggingAndSorting,
  } = useTable(trademarks, headCells);
  useEffect(() => {
    dispatch(getAdminTrademarks(1));
  }, []);


  return (
    <div>
      {!trademarks.items ? (
        <div><div className="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
        <span className="sr-only">Loading...</span>
      </div></div>
      ) : (
        <div>
          <h2>Onaylanan Markalar</h2>
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
