import React, { Component } from "react";
import {withStyles, createStyles} from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link as MaterialLink } from "@material-ui/core";
import Menu from "./Menu";
import '../../fonts.css';

const logo = require("./chatbot.png");

const styles = theme => createStyles ({
  appBar: {
	marginTop: 20,
    position: "relative",
    boxShadow: "none",
    borderBottom: `1px solid grey["100"]}`,
    backgroundColor: "white"
  },
  inline: {
    display: "inline"
  },
  flex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center"
    }
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
//   productLogo: {
//     display: "inline-block",
//     borderLeft: `1px solid ${theme.palette.grey["A100"]}`,
//     marginLeft: 32,
//     paddingLeft: 50,
// 	color: "#b7657b",
// 	fontSize:25,
//     [theme.breakpoints.up("md")]: {
//       paddingTop: "2em"
//     }
//   },
  tagline: {
    display: "inline-block",
    // marginLeft: 20,
	fontSize: 45,
	color: "#b7657b",
	fontFamily: "Fascinate",
    [theme.breakpoints.up("md")]: {
      paddingTop: "0.8em",
	  paddingLeft: 10
    }
  },
  iconContainer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  iconButton: {
    float: "right",
  },
  tabContainer: {
    // marginLeft: 700,
	paddingLeft:"10cm",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  },
  tabItem: {
    paddingTop: 50,
    paddingBottom: 20,
    minWidth: "auto",
	paddingLeft: 50,
	paddingRight: 50,
	fontSize:"0.5cm",
  }
});

class Topbar extends Component {
  state = {
    value: 0,
    menuDrawer: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  mobileMenuOpen = event => {
    this.setState({ menuDrawer: true });
  };

  mobileMenuClose = event => {
    this.setState({ menuDrawer: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  current = () => {
    if (this.props.currentPath === "/") {
      return 0;
    }
    if (this.props.currentPath === "/collections") {
      return 1;
    }
    if (this.props.currentPath === "/pronounce") {
      return 2;
    }
    if (this.props.currentPath === "/contact") {
      return 3;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="absolute" color="transparent" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={10} alignItems="baseline">
            <Grid item xs={12} className={classes.flex}>
              <div className={classes.inline}>
                <Typography variant="h6" color="inherit" noWrap>
                  <Link to="/" className={classes.link}>
                    <img width={60} height={60} src={logo} alt="" />
                    <span className={classes.tagline}>Blackfoot</span>
                  </Link>
                </Typography>
              </div>
              {!this.props.noTabs && (
                <React.Fragment>
                  <div className={classes.iconContainer}>
                    <IconButton
                      onClick={this.mobileMenuOpen}
                      className={classes.iconButton}
                      color="inherit"
                      aria-label="Menu"
                    >
                      <MenuIcon />
                    </IconButton>
                  </div>
                  <div className={classes.tabContainer}>
                    <SwipeableDrawer
                      anchor="right"
                      open={this.state.menuDrawer}
                      onClose={this.mobileMenuClose}
                      onOpen={this.mobileMenuOpen}
                    >
                      <AppBar title="Menu" />
                      <List>
                        {Menu.map((item, index) => (
                          <ListItem
                            component={item.external ? MaterialLink : Link}
                            href={item.external ? item.pathname : null}
                            to={
                              item.external
                                ? null
                                : {
                                    pathname: item.pathname,
                                    search: this.props.location.search
                                  }
                            }
                            button
                            key={item.label}
                          >
                            <ListItemText primary={item.label} />
                          </ListItem>
                        ))}
                      </List>
                    </SwipeableDrawer>
                    <Tabs
                      value={this.current() || this.state.value}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={this.handleChange}
                    >
                      {Menu.map((item, index) => (
                        <Tab
                          key={index}
                          component={item.external ? MaterialLink : Link}
                          href={item.external ? item.pathname : null}
                          to={
                            item.external
                              ? null
                              : {
                                  pathname: item.pathname,
                                  search: this.props.location.search
                                }
                          }
                          classes={{ root: classes.tabItem }}
                          label={item.label}
                        />
                      ))}
                    </Tabs>
                  </div>
                </React.Fragment>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Topbar));