import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/store/appSlice";
import { json, useSearchParams } from "react-router-dom";
import { fetchVideoByIdUrl } from "../utils/constants";
import VideoInfo from "../components/VideoInfo";
import CommentsContainer from "../components/CommentsContainer";
import LiveChat from "../components/LiveChat";

const Watch = () => {
  const [videoData, setVideoData] = useState(null);
  const dispatch = useDispatch();

  let [searchParam] = useSearchParams();

  const videoId = searchParam.get("v");

  useEffect(() => {
    dispatch(closeMenu());

    fetchSingleVideo();
  }, []);

  const fetchSingleVideo = async () => {
    const url = fetchVideoByIdUrl(videoId);
    const data = await fetch(url);

    const jsonData = await data.json();
    setVideoData(jsonData.items[0]);
  };

  return (
    <div className="p-6 m-4 w-full">
      <div className="flex gap-4 w-full">
        <div>
          <iframe
            width="1200"
            height="600"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <div className="w-[1190px]">
        {videoData && <VideoInfo info={videoData} />}
        <div>
          <CommentsContainer />
        </div>
      </div>
    </div>
  );
};

export default Watch;
