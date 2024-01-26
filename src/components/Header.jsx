import React, { useEffect, useState } from "react";
import HamburgerMenu from "../assets/icons/HamburgerMenu";
import YouTubeIcon from "../assets/icons/YouTubeIcon";
import MicrophoneIcon from "../assets/icons/MicrophoneIcon";
import UploadVideoIcon from "../assets/icons/UploadVideoIcon";
import ActivityIcon from "../assets/icons/ActivityIcon";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideNav } from "../utils/store/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults, updateSearchQuery } from "../utils/store/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchStore = useSelector((store) => store.search);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchStore[searchTerm.toLocaleLowerCase()]) {
        console.log("API call avoided");
        setSuggestions(searchStore[searchTerm.toLocaleLowerCase()]);
      } else {
        getSeachSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const getSeachSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchTerm);
    const jsonData = await data.json();

    dispatch(
      cacheResults({
        searchTerm: searchTerm.toLocaleLowerCase(),
        searchResult: jsonData[1],
      })
    );
    setSuggestions(jsonData[1]);
  };

  const handleSideNavToggle = () => {
    dispatch(toggleSideNav());
  };

  const handleSearchSuggestionClick = (searchQuery) => {
    dispatch(updateSearchQuery(searchQuery));
    navigate(`/results?search_query=${searchQuery}`);
    setShowSuggestions(false);
    setSearchTerm(searchQuery);
  };
  return (
    <div className="flex justify-between p-2 m-2 shadow-lg">
      <div className="w-1/4 flex m-4 gap-4 items-center">
        <div className="cursor-pointer" onClick={handleSideNavToggle}>
          <HamburgerMenu />
        </div>
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="youtube-logo"
          className="w-[80px]"
        /> */}
        <div>
          <YouTubeIcon />
        </div>
      </div>
      <div className="w-2/4 flex gap-6 justify-center items-center">
        <div className="">
          <input
            placeholder="Search"
            type="text"
            className="w-[500px] border border-gray-300 px-4 py-2 rounded-l-2xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-4 py-2 border border-gray-300 rounded-r-2xl bg-slate-200">
            Search
          </button>
          <div className="absolute bg-white w-[500px] p-1 rounded-lg ml-1 shadow-xl border border-gray-100">
            {showSuggestions && (
              <ul>
                {suggestions.map((s, i) => (
                  <li
                    key={i}
                    className="py-1 px-2 cursor-pointer hover:bg-slate-100"
                    onClick={() => handleSearchSuggestionClick(s)}
                  >
                    {/* <Link to={`/results?search_query=${s}`}>{s}</Link> */}
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="hover:bg-slate-200 p-2 rounded-full bg-slate-100">
          <MicrophoneIcon />
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-end p-2 gap-8">
        <div className="rounded-full hover:bg-slate-200">
          <UploadVideoIcon />
        </div>
        <div>
          <ActivityIcon />
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/20740993?s=96&v=4"
            alt="user-icon"
            className="w-[32px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
