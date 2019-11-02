import React from "react";
import { render } from "react-dom";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
import "rc-menu/assets/index.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  handleSelect(info) {
    console.log("selected ", info);
  }

  handleClick(info) {
    console.log("click ", info);
  }

  render() {
    let titleRight = <span>sub menu</span>;
    let titleRight1 = <span>sub menu 1</span>;
    const titleRight2 = <span>sub menu 2</span>;
    const titleRight3 = <span>sub menu 3</span>;
    return (
      <div style={{ width: 250, float: "right" }}>
        <Menu onSelect={this.handleSelect} onClick={this.handleClick}>
          <SubMenu title={titleRight} key="1">
            <SubMenu onTitleClick={this.handleClick} title={titleRight3} key="4-2-1">
              <MenuItem key="4-2-2-0">All</MenuItem>
              <MenuItem key="4-2-2-1">inner inner</MenuItem>
              <MenuItem key="4-2-2-2">inner inner2</MenuItem>
            </SubMenu>
            <SubMenu title={titleRight3} key="4-2-2">
              <MenuItem key="4-2-2-3">inner inner</MenuItem>
              <MenuItem key="4-2-2-4">inner inner2</MenuItem>
            </SubMenu>
            <SubMenu title={titleRight3} key="4-2-3">
              <MenuItem key="4-2-2-5">inner inner</MenuItem>
              <MenuItem key="4-2-2-6">inner inner2</MenuItem>
            </SubMenu>
            <SubMenu title={titleRight3} key="4-2-4">
              <MenuItem key="4-2-2-7">inner inner</MenuItem>
              <MenuItem key="4-2-2-8">inner inner2</MenuItem>
            </SubMenu>
            <SubMenu title={titleRight3} key="4-2-5">
              <MenuItem key="4-2-2-9">inner inner</MenuItem>
              <MenuItem key="4-2-2-10">inner inner2</MenuItem>
            </SubMenu>
            <SubMenu title={titleRight3} key="4-2-6">
              <MenuItem key="4-2-2-11">inner inner</MenuItem>
              <MenuItem key="4-2-2-12">inner inner2</MenuItem>
            </SubMenu>
            <SubMenu title={titleRight3} key="4-2-7">
              <MenuItem key="4-2-2-13">inner inner</MenuItem>
              <MenuItem key="4-2-2-14">inner inner2</MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
