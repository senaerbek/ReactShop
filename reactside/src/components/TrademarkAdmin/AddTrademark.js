import {
    Button,
    Container,
    TextField,
  } from "@material-ui/core";
  import React, { useState, useEffect } from "react";
  import { connect } from "react-redux";
  import { addTrademark } from "../../redux/actions/TrademarkActions/TrademarkAction";
  import Navigation from "../Navigation/Navigation";
  import { makeStyles } from "@material-ui/core/styles";
  import { useHistory } from "react-router-dom";
  import { getTrademarks } from "../../redux/actions/TrademarkActions/TrademarkAction";
import TrademarkJoinList from "./TrademarkJoinList";

  
  const useStyles = makeStyles({
    root: {
      maxWidth: 100,
      borderRadius: "50%",
      margin: "10px;",
    },
    media: {
      height: 80,
    },
  });
  
  function TrademarkAdd({
    trademarks, //state
    addTrademark, //actions
    getTrademarks,
    ...props
  }) {
    const [trademark, setTrademark] = useState({ ...props.trademark });
    const history = useHistory();
  
  
    useEffect(() => {
     
    }, [props.trademark]);
  
  
    function handleChange(event) {
      
      const { name, value } = event.target;
      setTrademark((previousPerson) => ({
        ...previousPerson,
        [name]: name === "Image" ? event.target.files[0] : value,
       
      }));
    }
  
    function handleSave(event) {
      event.preventDefault();
      addTrademark(trademark);
      setTimeout(function(){ history.push("/") }, 3000);
     
    }
    const classes = useStyles();
  
    return (
      <div>
        <Navigation />
        <Container>
          <div style={{ marginTop: "20px" }} className="container-fluid">
            <div class="row">
              <div className="col-sm-4">
                <form onSubmit={handleSave}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Name"
                    label="Markanızın Adı"
                    name="Name"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Description"
                    label="Markanızın Açıklaması"
                    name="Description"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                  />
                  <TextField
                    type="file"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Image"
                    name="Image"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                  />
                  <Button
                    style={{ marginTop: "20px" }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Markamı Başvurumu Yap
                  </Button>
                </form>
              </div>
              <div className="col-sm-2 col-md-8">
                <TrademarkJoinList/>
              </div>
              
            </div>
          </div>
        </Container>
      </div>
    );
  }
  function mapStateToProps(state) {
    return {
      trademarks: state.trademarkReducer,
    };
  }
  
  const mapDispatchToProps = {
    addTrademark,
    getTrademarks,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TrademarkAdd);
  