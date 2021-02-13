import React, { Component } from "react";
import CategoryNavigation from "../Navigation/CategoryNavigation";
import Navigation from "../Navigation/Navigation";
import Trademarks from "./Trademarks";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        
        <div>

          <Trademarks />
        </div>
      </div>
    );
  }
}
