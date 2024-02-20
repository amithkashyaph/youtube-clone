import React from "react";
import ButtonList from "./ButtonList";
import VideosContainer from "./VideosContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isSideNavOpen = useSelector((state) => state.app.isSideNavOpen);
  return (
    // <div className={`w-[calc(100vw-${isSideNavOpen ? "192px" : "0px"})]`}>
    <div className="w-full">
      <ButtonList />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
