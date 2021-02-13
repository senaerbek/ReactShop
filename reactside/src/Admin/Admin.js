import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListIcon from "@material-ui/icons/List";
import AdminTrademarkList from "./AdminTrademarkList";
import AdminTrademarkCheckList from "./AdminTrademarkCheckList";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Admin() {
  const classes = useStyles();
  const [page, setPage] = useState("Ürünler")

  const targetValue = event =>{
    //console.log(event.target.innerText);
    setPage(event.target.innerText)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
     
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
   <div>LOGO EKLENECEK</div>
        <div className={classes.toolbar} />

        <List>
        <div onClick={(event)=>targetValue(event)}>
          {/*['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))*/}

          <ListItem button>
            <ListItemIcon>
              {" "}
              <ListIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Marka İstekleri"} />
          </ListItem>
          <Divider />
          
          <ListItem button>
            <ListItemIcon>
              {" "}
              <ListIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Onaylanan Markalar"} />
          </ListItem>
          <Divider/>

          <ListItem button>
            <ListItemIcon>
              {" "}
              <ListIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Ürünler"} />
          </ListItem>
          <Divider/>
          </div>
        </List>
     
        <List>
          {/*['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))*/}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        {page === "Ürünler" ? <div>
          ürünler
        </div>
        :page === "Marka İstekleri" ? 
        <div>
          <Typography paragraph>
          <AdminTrademarkList />
        </Typography>
        </div>  : 
        <div>
          <Typography paragraph>
         <AdminTrademarkCheckList/>
        </Typography>
        </div>
      }
        
      </main>
    </div>
  );
}
