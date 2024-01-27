import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const imgUrl = thumbnails["medium"].url;
  const { viewCount } = statistics;
  return (
    <div className="p-2 m-2 w-72 shadow-lg hover:shadow-2xl">
      <div>
        <img src={imgUrl} alt="" className="rounded-lg" />
      </div>
      <div>
        <div className="channel-logo"></div>
        <div className="video-details">
          <h1 className="font-bold py-2">{title}</h1>
          <h2 className="text-[16px] text-gray-700">{channelTitle}</h2>
          <div className="flex gap-2">
            <h1 className="text-sm py-2">Views : {viewCount}</h1>
            <h1 className="text-sm py-2">{publishedAt}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
