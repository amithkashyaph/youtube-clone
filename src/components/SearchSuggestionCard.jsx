import React from "react";

const SearchSuggestionCard = ({ data }) => {
  const { snippet, id } = data;
  const { title, channelTitle, description, thumbnails } = snippet;
  const { videoId } = id;
  console.log(data);
  return (
    <div className="flex p-2 m-2 justify-end gap-6 w-[100%] ">
      <div className="flex justify-center items-center">
        <img src={thumbnails.medium.url} alt="" className="rounded-xl" />
      </div>
      <div className="w-1/2">
        <h1 className="font-semibold text-lg ">{title}</h1>
        <h3 className="text-sm text-gray-600 mb-3">{channelTitle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SearchSuggestionCard;
