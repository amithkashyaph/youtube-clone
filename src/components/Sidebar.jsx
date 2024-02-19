import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const toggleSideNav = useSelector((store) => store.app.isSideNavOpen);
  return (
    toggleSideNav && (
      <div className="w-48 shadow-lg m-2 p-5 cursor-pointer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
