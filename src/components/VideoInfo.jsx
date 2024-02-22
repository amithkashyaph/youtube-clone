import React from "react";

const VideoInfo = ({ info }) => {
  const { snippet, statistics } = info;

  const { title, channelTitle, description } = snippet;
  return (
    <div>
      <h1 className="my-4 font-bold text-2xl">{title}</h1>
      <div className="flex justify-between mb-10">
        <div className="channel-subscribe flex gap-5 items-center">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/20740993?v=4"
              alt="channel-logo"
              className="w-16 rounded-full"
            />
          </div>
          <div>
            <h1 className="font-semibold">{channelTitle}</h1>
            <h3 className="text-sm text-gray-600">2.4M subscribers</h3>
          </div>
          <div>
            <button className="px-4 py-2 bg-black text-white rounded-3xl">
              Subscribe
            </button>
          </div>
        </div>
        <div className="like-dislike-share-download flex gap-4 items-center">
          <div className="px-5 py-2 bg-slate-200 rounded-3xl text-center text-[16px] font-semibold">
            <button>Like</button>
          </div>
          <div className="px-5 py-2 bg-slate-200 rounded-3xl text-center text-[16px] font-semibold">
            <button>Dislike</button>
          </div>
          <div className="px-5 py-2 bg-slate-200 rounded-3xl text-center text-[16px] font-semibold">
            <button>Share</button>
          </div>
          <div className="px-5 py-2 bg-slate-200 rounded-3xl text-center text-[16px] font-semibold">
            <button>Download</button>
          </div>
          <div className="px-5 py-2 bg-slate-200 rounded-3xl text-center text-[16px] font-semibold">
            <button>Clip</button>
          </div>
          <div className="px-5 py-2 bg-slate-200 rounded-3xl text-center text-[16px] font-semibold">
            <button>Save</button>
          </div>
        </div>
      </div>
      <div className="description p-4 bg-gray-100 rounded-xl text-[14px]">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
