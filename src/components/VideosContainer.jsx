import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  const fetchPopularVideos = async () => {
    const data = await fetch(POPULAR_VIDEOS_URL);

    const jsonData = await data.json();

    setVideos(jsonData.items);
  };
  return (
    <div className="flex flex-wrap justify-evenly">
      {videos.length ? (
        videos.map((v) => (
          <Link to={`/watch?v=${v.id}`} key={v.id}>
            <VideoCard info={v} />
          </Link>
        ))
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default VideosContainer;
