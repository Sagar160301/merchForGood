import React from "react";
import "./SearchBox.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export const SearchBox = ({ search }) => {
  return (
    <div className="searchBox-background">
      <div className="searchBox-main">
        <h2>SEARCH</h2>
        <div className="searchBox-searchBar">
          <input type="search" placeholder="Search our Store" />
          <SearchIcon />
        </div>
        <div className="searchBox-searchLink">
          <h4 className="left">WELCOME</h4>
          <div
            onClick={() => {
              search(false);
            }}
          >
            <div className="searchBox-left left">
              <Link to={"/aboutUs"}>ABOUT US</Link>
              <Link to={""}>WORLD CANCER DAY</Link>
              <Link to={""}>SEARCH</Link>
            </div>
            <div className="searchBox-right left">
              <Link to={"/collections"}>BUY T-SHIRTS</Link>
              <Link to={""}>PRESS</Link>
            </div>
          </div>
        </div>
        <CloseIcon
          className="position"
          onClick={() => {
            search(false);
          }}
        />
      </div>
    </div>
  );
};
