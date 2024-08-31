import React from "react";

function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-[320px] m-2 p-2 xs:m-0 xs:p-0 xs:my-3 xs:w-[320px] sm:w-[375px] sml:w-[500px] md:w-[320px]  ">
      <img className="rounded-lg xs:rounded-none w-full" alt="Thumbnail icon" src={thumbnails.medium.url} />
      <ul className="xs:px-1">
        <li className="font-bold py-2 whitespace-nowrap overflow-hidden text-ellipsis xs:font-semibold xs:py-1 ">{title}</li>
        <li className="xs:text-sm">{channelTitle}</li>
        <li className="xs:text-sm">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
